import { Component, OnInit } from '@angular/core';
import { ScrapingServiceService } from '../Services/scraping-service.service';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.css']
})
export class ScannerComponent implements OnInit {

  scanners:any;
  constructor(private scrap:ScrapingServiceService) { }

  ngOnInit() {
    this.getScannerList();
  }

  getScannerList() {
    //this.PcPortable= this.scrap.findAll()
    this.scrap.findAllScanner().subscribe(
      data => {
        this.scanners = data;
      }, err => {
        console.log(err)
      }

    )

    }
}
