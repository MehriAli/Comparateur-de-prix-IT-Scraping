import { Component, OnInit } from '@angular/core';
import { ScrapingServiceService } from '../Services/scraping-service.service';

@Component({
  selector: 'app-disque-externe',
  templateUrl: './disque-externe.component.html',
  styleUrls: ['./disque-externe.component.css']
})
export class DisqueExterneComponent implements OnInit {

  disques:any;
  constructor(private scrap:ScrapingServiceService) { }



  ngOnInit() {
    this.getdisquesList();
  }

  getdisquesList() {

    this.scrap.findAllDisqExt().subscribe(
      data => {
        this.disques = data;
      }, err => {
        console.log(err)
      }

    )

    }

}
