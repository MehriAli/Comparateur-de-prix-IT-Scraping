import { Component, OnInit } from '@angular/core';
import { ScrapingServiceService } from '../Services/scraping-service.service';

@Component({
  selector: 'app-photocopieur',
  templateUrl: './photocopieur.component.html',
  styleUrls: ['./photocopieur.component.css']
})
export class PhotocopieurComponent implements OnInit {

  photocopieurs:any;
  constructor(private scrap:ScrapingServiceService) { }

  ngOnInit() {
    this.getPhotocopieurList();
  }

  getPhotocopieurList() {
    //this.PcPortable= this.scrap.findAll()
    this.scrap.findAllPhotocopieur().subscribe(
      data => {
        this.photocopieurs = data;
      }, err => {
        console.log(err)
      }

    )

    }

}
