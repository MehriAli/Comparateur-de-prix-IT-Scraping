import { Component, OnInit } from '@angular/core';
import {ScrapingServiceService} from '../Services/scraping-service.service';
@Component({
  selector: 'app-pc-bureau',
  templateUrl: './pc-bureau.component.html',
  styleUrls: ['./pc-bureau.component.css']
})
export class PcBureauComponent implements OnInit {

  PcDesktop : any;

  constructor( private scrap:ScrapingServiceService) { }

    ngOnInit() {
      this.getPcList();
      console.log('portable est ',this.PcDesktop)

  }

  getPcList() {

    this.scrap.findAllDesktop().subscribe(
      data => {
        this.PcDesktop = data;
      }, err => {
        console.log(err)
      }

    )

    }

}
