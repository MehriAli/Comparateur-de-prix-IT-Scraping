import { Component, OnInit } from '@angular/core';
import { ScrapingServiceService } from '../Services/scraping-service.service';

@Component({
  selector: 'app-serveur-tour',
  templateUrl: './serveur-tour.component.html',
  styleUrls: ['./serveur-tour.component.css']
})
export class ServeurTourComponent implements OnInit {

  serveurs:any;
  constructor(private scrap:ScrapingServiceService) { }

  ngOnInit() {
    this.getServeurList();
  }
  getServeurList() {
    //this.PcPortable= this.scrap.findAll()
    this.scrap.findAllServeur().subscribe(
      data => {
        this.serveurs = data;
      }, err => {
        console.log(err)
      }

    )

    }

}
