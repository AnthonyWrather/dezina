import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http'
import "rxjs/add/operator/map"

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private http: Http, public navCtrl: NavController) {

  }

  ionViewDidLoad() {
    
    this.http.get('/assets/data.json')
    .map(res => res.json())
    .subscribe(data => console.log(data));
    
    //this.http.get('people.json')
      // Call map on the response observable to get the parsed people object
    //.pipe(map(res => res.json()))
      // Subscribe to the observable to get the parsed people object and attach it to the
      // component
    //.subscribe(people => this.people = people);

  }
  
}
