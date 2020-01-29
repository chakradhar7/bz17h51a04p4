import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  countr = {};
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getCountries().subscribe( d => {
      this.countr = d;
      //this.countr.splice(0,0,this.countr[104])
      //this.countr.splice(105,1)
    });
  }

}
