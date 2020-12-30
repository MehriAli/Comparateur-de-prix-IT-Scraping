import { Component, OnInit } from '@angular/core';
import {ScrapingServiceService} from '../Services/scraping-service.service';
import {Scrap} from '../model/scrap';

@Component({
  selector: 'app-pc-portable',
  templateUrl: './pc-portable.component.html',
  styleUrls: ['./pc-portable.component.css']
})
export class PcPortableComponent implements OnInit {

  PcPortable : any;

  constructor( private scrap:ScrapingServiceService) { }

    ngOnInit() {
      this.getPcPortableList();
      console.log('portable est ',this.PcPortable)

  }

  getPcPortableList() {
    //this.PcPortable= this.scrap.findAll()
    this.scrap.findAll().subscribe(
      data => {
        this.PcPortable = data;
      }, err => {
        console.log(err)
      }

    )

    }

}
