import { Component, OnInit } from '@angular/core';
import { ScrapingServiceService } from '../Services/scraping-service.service';

@Component({
  selector: 'app-imprimante',
  templateUrl: './imprimante.component.html',
  styleUrls: ['./imprimante.component.css']
})
export class ImprimanteComponent implements OnInit {

  constructor(private scrap:ScrapingServiceService) { }
imprimantes:any;
  ngOnInit() {
    this.getImprimanteList();
  }

  getImprimanteList() {

    this.scrap.findAllImprimante().subscribe(
      data => {
        this.imprimantes = data;
      }, err => {
        console.log(err)
      }

    )

    }

}
