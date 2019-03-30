import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';
import {
  ActivatedRoute
} from "@angular/router";
import {
  RestFulService
} from "../shared/services/restFul.service";
import {
  Subscription
} from 'rxjs';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit, OnDestroy {

  public streamer = null;
  public loading = true;
  public id= null;
  public subscription: Subscription;
  constructor(
    public activatedRoute: ActivatedRoute,
    public restFulService: RestFulService
  ) {}

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  ngOnInit() {
    this.subscription = this.activatedRoute.params.subscribe(async data => {
      this.id = data.id;
      this.loading = true;
      await this.restFulService.getStreamerById(this.id).subscribe(data => {

        if (data.success) {
          this.streamer = data.data;
        }
        this.loading = false;
      });
    });

  }

}
