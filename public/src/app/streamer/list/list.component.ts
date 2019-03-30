import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';
import {
  RestFulService
} from "../shared/services/restFul.service";

import {
  Router,
  ActivatedRoute
} from "@angular/router";
import {
  HttpClient,
  HttpHeaders
} from "@angular/common/http";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public search: string;
  public loading:boolean=true;
  public streamers: any;
  public pages:any;
  private current_streamer:any;
  public subscription:Subscription;
  public current_page:number = 1;
  public last_page:number = 0;
  constructor(
    public restFulService: RestFulService,
    public routerService: Router,
    public activatedRoute: ActivatedRoute,
    private http: HttpClient,
    
  ) {

  }

  ngOnInit() {

    this.subscription = this.activatedRoute.queryParams.subscribe(async data => {
      let search = data.search ? data.search : '';
      this.search = search;
      this.current_page= data.page?data.page:1;
  
      this.loading=true;
      await this.restFulService.list(search,this.current_page).subscribe(data=>{
         this.streamers=data.data.data;
        this.last_page=data.data.last_page;
        this.pages=new Array(this.last_page);
         this.loading=false;
      });
     
    })
  }

  ngOnDestroy(){
     this.subscription.unsubscribe();
  }
  doSearch() {
    this.current_page=1;
    this.routerService.navigate(['/streamers/list'], {
      queryParams: {
        search: this.search ? this.search : '',
        page:this.current_page?this.current_page:1
      }
    });
  }
  changePage(page) {
    this.current_page=page;
    this.routerService.navigate(['/streamers/list'], {
      queryParams: {
        search: this.search ? this.search : '',
        page:this.current_page?this.current_page:1
      }
    });
  }
  prePage(){
    this.current_page--;
    if(this.current_page==0){
      this.current_page=1;
    }
    this.routerService.navigate(['/streamers/list'], {
      queryParams: {
        search: this.search ? this.search : '',
        page:this.current_page?this.current_page:1
      }
    });
  }
  nextPage(){
    this.current_page++;
    if(this.current_page>this.last_page){
      this.current_page=this.last_page;
    }
    this.routerService.navigate(['/streamers/list'], {
      queryParams: {
        search: this.search ? this.search : '',
        page:this.current_page?this.current_page:1
      }
    });
  }
}
