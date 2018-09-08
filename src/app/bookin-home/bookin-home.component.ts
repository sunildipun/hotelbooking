import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

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

  public hotel_area_array = []
  public hotels: AngularFireList<any>;
    constructor(db: AngularFireDatabase) {
        db.list('/hotels').valueChanges().subscribe(val=>{
          console.log('HOTELS',val);
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
              let new_val =  Utils.filterArrayByString(val,'Manali')
              console.log('Searchlist',new_val)
              console.log('areas',this.hotel_area_array)
              console.log('hotel_search_area dropdown',Utils.filterArrayByString(this.hotel_area_array,'Manali'))
        });
        
}

  ngOnInit() {
  }

}





export class Utils
{
    public static filterArrayByString(mainArr, searchText)
    {
        if ( searchText === '' )
        {
            return mainArr;
        }

        searchText = searchText.toLowerCase();

        return mainArr.filter(itemObj => {
            return this.searchInObj(itemObj, searchText);
        });
    }

    public static searchInObj(itemObj, searchText)
    {
        for ( const prop in itemObj )
        {
            if ( !itemObj.hasOwnProperty(prop) )
            {
                continue;
            }

            const value = itemObj[prop];

            if ( typeof value === 'string' )
            {
                if ( this.searchInString(value, searchText) )
                {
                    return true;
                }
            }

            else if ( Array.isArray(value) )
            {
                if ( this.searchInArray(value, searchText) )
                {
                    return true;
                }
            }

            if ( typeof value === 'object' )
            {
                if ( this.searchInObj(value, searchText) )
                {
                    return true;
                }
            }
        }
    }

    public static searchInArray(arr, searchText)
    {
        for ( const value of arr )
        {
            if ( typeof value === 'string' )
            {
                if ( this.searchInString(value, searchText) )
                {
                    return true;
                }
            }

            if ( typeof value === 'object' )
            {
                if ( this.searchInObj(value, searchText) )
                {
                    return true;
                }
            }
        }
    }

    public static searchInString(value, searchText)
    {
        return value.toLowerCase().includes(searchText);
    }

    public static generateGUID()
    {
        function S4()
        {
            return Math.floor((1 + Math.random()) * 0x10000)
                       .toString(16)
                       .substring(1);
        }

        return S4() + S4();
    }

    public static toggleInArray(item, array)
    {
        if ( array.indexOf(item) === -1 )
        {
            array.push(item);
        }
        else
        {
            array.splice(array.indexOf(item), 1);
        }
    }

    public static handleize(text)
    {
        return text.toString().toLowerCase()
                   .replace(/\s+/g, '-')           // Replace spaces with -
                   .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
                   .replace(/\-\-+/g, '-')         // Replace multiple - with single -
                   .replace(/^-+/, '')             // Trim - from start of text
                   .replace(/-+$/, '');            // Trim - from end of text
    }
}
