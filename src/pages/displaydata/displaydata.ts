//import statement
import { Component } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router ,ActivatedRoute } from '@angular/router';

//component declaration
@Component({
  selector: 'app-displaydata',
  templateUrl: './displaydata.html',
  styleUrls: ['./displaydata.css']
})

//class declaration
export class DisplayData {
  title = 'app';
  user = [];
  details = {};
  detailInfo : String ='';


//constructor of the class
  constructor(private router: Router,private activatedRoute: ActivatedRoute,private http: Http){

  //id data hold by local var ,(id data come from other page)
    this.detailInfo = this.activatedRoute.snapshot.params['id'];
    console.log("https://jsonplaceholder.typicode.com/photos/"+this.detailInfo);
    //hit url with the id
    this.http.get("https://jsonplaceholder.typicode.com/photos/"+this.detailInfo).toPromise().then(
      res =>{
            this.user = res.json();

      }

    ).catch(error => console.log(error));
  }

    ngOnInit(){

    }
}
