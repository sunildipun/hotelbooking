import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Component({
  selector: 'app-bookin-home',
  templateUrl: './bookin-home.component.html',
  styleUrls: ['./bookin-home.component.css']
})
export class BookinHomeComponent implements OnInit {

  public hotels: AngularFireList<any>;
    constructor(db: AngularFireDatabase) {
        db.list('/hotels').valueChanges().subscribe(val=>{
          console.log('HOTELS',val);
        });
        
}

  ngOnInit() {
  }

}
