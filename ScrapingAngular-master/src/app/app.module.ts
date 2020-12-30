import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PcPortableComponent } from './pc-portable/pc-portable.component';
import { PcBureauComponent } from './pc-bureau/pc-bureau.component';
import { DisqueInterneComponent } from './disque-interne/disque-interne.component';
import { DisqueExterneComponent } from './disque-externe/disque-externe.component';
import { ImprimanteComponent } from './imprimante/imprimante.component';
import { PhotocopieurComponent } from './photocopieur/photocopieur.component';
import { ScannerComponent } from './scanner/scanner.component';
import { NoneComponent } from './none/none.component';
import { ContactComponent } from './contact/contact.component';
import { ServeurTourComponent } from './serveur-tour/serveur-tour.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PcPortableComponent,
    PcBureauComponent,
    DisqueInterneComponent,
    DisqueExterneComponent,
    ImprimanteComponent,
    PhotocopieurComponent,
    ScannerComponent,
    NoneComponent,
    ContactComponent,
    ServeurTourComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
