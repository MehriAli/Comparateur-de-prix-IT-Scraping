import { Component, OnInit } from '@angular/core';
import { ScrapingServiceService } from '../Services/scraping-service.service';

@Component({
  selector: 'app-disque-interne',
  templateUrl: './disque-interne.component.html',
  styleUrls: ['./disque-interne.component.css']
})
export class DisqueInterneComponent implements OnInit {

  disques:any;
  constructor(private scrap:ScrapingServiceService) { }



  ngOnInit() {
    this.getdisquesList();
  }

  getdisquesList() {

    this.scrap.findAllDisqInt().subscribe(
      data => {
        this.disques = data;
      }, err => {
        console.log(err)
      }

    )

    }

}
