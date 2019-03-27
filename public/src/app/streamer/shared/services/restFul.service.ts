import {Injectable} from "@angular/core";

@Injectable()
export class RestFulService{
    constructor(){
    }

    list(username?:string,email?:string){
        let data =` [
            {
                "id": 2,
                "username": "Alden Barrows",
                "email": "nova78@example.net",
                "created_at": "2019-03-20 07:53:35",
                "updated_at": "2019-03-27 12:17:43"
            },
            {
                "id": 3,
                "username": "Miss Eunice Haley Sr.",
                "email": "stuart.lockman@example.net",
                "created_at": "2019-03-20 07:53:35",
                "updated_at": "2019-03-20 07:53:35"
            },
            {
                "id": 4,
                "username": "Trystan Batz",
                "email": "sleffler@example.com",
                "created_at": "2019-03-20 07:53:35",
                "updated_at": "2019-03-20 07:53:35"
            },
            {
                "id": 5,
                "username": "Josh Halvorson",
                "email": "jesse.nader@example.net",
                "created_at": "2019-03-20 07:53:35",
                "updated_at": "2019-03-20 07:53:35"
            },
            {
                "id": 6,
                "username": "Gabrielle Aufderhar",
                "email": "mitchell.cheyanne@example.com",
                "created_at": "2019-03-20 07:53:35",
                "updated_at": "2019-03-20 07:53:35"
            },
            {
                "id": 7,
                "username": "Joyce Lehner",
                "email": "ceasar07@example.com",
                "created_at": "2019-03-20 07:53:35",
                "updated_at": "2019-03-20 07:53:35"
            },
            {
                "id": 8,
                "username": "Caden Hickle",
                "email": "jakubowski.maybell@example.com",
                "created_at": "2019-03-20 07:53:35",
                "updated_at": "2019-03-20 07:53:35"
            },
            {
                "id": 9,
                "username": "General Bogan",
                "email": "parisian.jensen@example.com",
                "created_at": "2019-03-20 07:53:35",
                "updated_at": "2019-03-20 07:53:35"
            },
            {
                "id": 10,
                "username": "Miss Margarett Bartell",
                "email": "kamron.graham@example.org",
                "created_at": "2019-03-20 07:53:35",
                "updated_at": "2019-03-20 07:53:35"
            },
            {
                "id": 11,
                "username": "Orin Wisozk DDS",
                "email": "ova.carter@example.net",
                "created_at": "2019-03-21 16:00:15",
                "updated_at": "2019-03-21 16:00:15"
            },
            {
                "id": 12,
                "username": "Prof. Demetrius Cormier PhD",
                "email": "kirlin.rowena@example.org",
                "created_at": "2019-03-21 16:00:15",
                "updated_at": "2019-03-21 16:00:15"
            },
            {
                "id": 13,
                "username": "Mrs. Layla Schaefer",
                "email": "brigitte.herman@example.net",
                "created_at": "2019-03-21 16:00:15",
                "updated_at": "2019-03-21 16:00:15"
            },
            {
                "id": 14,
                "username": "Ashleigh Conn",
                "email": "bernard67@example.com",
                "created_at": "2019-03-21 16:00:15",
                "updated_at": "2019-03-21 16:00:15"
            }
        ]`;
        console.log(username);
        return JSON.parse(data);
    }

    getStreamerById(id:number){
        //rest api
        let data = `{
            "id": 14,
            "username": "Ashleigh Conn",
            "email": "bernard67@example.com",
            "created_at": "2019-03-21 16:00:15",
            "updated_at": "2019-03-21 16:00:15"
        }`;
        return  JSON.parse(data);
    }
}