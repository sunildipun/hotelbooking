import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

import { Utils } from "../bookin-home/bookin-home.component";
import { AppService } from '../app.service';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {startWith} from 'rxjs/operators/startWith';
import {map} from 'rxjs/operators/map';



@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  types: any[] = [
    {value: '1', viewValue: 'Entire place'},
    {value: '2', viewValue: 'Private Rooms'},
  ];

  guests: any[] = [
    {value: '1', viewValue: '1 Adult'},
    {value: '2', viewValue: '2 Adults'},
    {value: '3', viewValue: '3 Adults'},
    {value: '4', viewValue: '4 Adults'},
    {value: '5', viewValue: '5 Adults'},
    {value: '6', viewValue: '6 Adults'},
    {value: '7', viewValue: '7 Adults'},
    {value: '8', viewValue: '8 Adults'}
  ];

  options = [
    'banglore','delhi','manali'
  ];
  searchControl :FormControl  = new FormControl();
  filteredOptions: Observable<any[]>;

  booking = JSON.parse(localStorage.getItem('booking'));
  public searchText:any;
  public hotel_area_array = [];
  start:any;
  end:any;
  final_array = [];
  all_hotels = [];
  guest:any;
  public hotels: AngularFireList<any>;

  constructor(db: AngularFireDatabase,private appService:AppService) { 

    db.list('/hotels').valueChanges().subscribe(val=>{
      console.log('HOTELS',val);
       this.all_hotels = val;
        val.forEach(val=>{
           let obj = new Object()
           obj['area'] = val['area']
           obj['city'] = val['city']
           obj['country'] = val['country']
           obj['address'] = val['address']
           obj['locality'] = val['locality']
           obj['state'] = val['state']
           obj['property_name'] = val['property_name']
           obj['property_type'] = val['property_type']
           obj['province'] = val['province']
           this.hotel_area_array.push(obj);
        })
         this.start = appService.bookinObj['start'];
         this.end = appService.bookinObj['end'];
         this.guest = appService.bookinObj['adult']
          console.log('homeObj',appService.bookinObj)
          let new_val =  Utils.filterArrayByString(val,appService.bookinObj['searchText'])
          console.log('Searchlist',new_val)
          this.final_array = new_val;
          console.log('areas',this.hotel_area_array)
          
    });
  }

  ngOnInit() {
    console.log('searchControl',this.searchControl)
    this.filteredOptions = this.searchControl.valueChanges
      .pipe(
        startWith(''),
        map(val => 
            Utils.filterArrayByString(this.hotel_area_array,val)
        )
      );

    if(this.appService.bookinObj == null)
    {
      this.appService.bookinObj = this.booking;
    }
  }
  
  searchHotels(){
    this.searchText = this.searchControl.value;
     console.log(this.searchText);
     this.final_array = Utils.filterArrayByString(this.all_hotels,this.searchText)
     console.log('searchList',this.final_array);
    }

  areaSearch(){
    console.log('hotel_search_area dropdown',Utils.filterArrayByString(this.hotel_area_array,this.searchText))
  }
}
