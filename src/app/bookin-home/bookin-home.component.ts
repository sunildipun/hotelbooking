import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookin-home',
  templateUrl: './bookin-home.component.html',
  styleUrls: ['./bookin-home.component.css']
})

export class BookinHomeComponent implements OnInit {

  adults: any[] = [
    {value: '1', viewValue: '1 Adult'},
    {value: '2', viewValue: '2 Adults'},
    {value: '3', viewValue: '3 Adults'},
    {value: '4', viewValue: '4 Adults'},
    {value: '5', viewValue: '5 Adults'},
    {value: '6', viewValue: '6 Adults'},
    {value: '7', viewValue: '7 Adults'},
    {value: '8', viewValue: '8 Adults'}
  ];

  childrens: any[] = [
    {value: '1', viewValue: '1 Child'},
    {value: '2', viewValue: '2 Childrens'},
    {value: '3', viewValue: '3 Childrens'},
    {value: '4', viewValue: '4 Childrens'},
    {value: '5', viewValue: '5 Childrens'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
