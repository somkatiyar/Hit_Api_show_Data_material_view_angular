import { Component } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router ,ActivatedRoute } from '@angular/router';
import { HttpService } from '../../service/http.service';







//component declaration
@Component({
  selector: 'app-demopage',
  templateUrl: './demopage.html',
  styleUrls: ['./demopage.css']
})


//class declaration
export class DemoPage{
[x: string]: any;
user =[];

constructor(private myservice : HttpService,private router: Router){}

// method invoke when the component lode
  ngOnInit(){


//function invoke service
    this.myservice.getdata().subscribe((data) => {

      this.user=data;
      console.log(this.user);

    });

  }

  // navigateDisplayData(x){
  //
  //   this.router.navigate(['/displaydata',x.id]);
  //
  // }


}
