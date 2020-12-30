import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { DisqueExterneComponent } from './disque-externe/disque-externe.component';
import { DisqueInterneComponent } from './disque-interne/disque-interne.component';
import { HomeComponent } from './home/home.component';
import { ImprimanteComponent } from './imprimante/imprimante.component';
import { NoneComponent } from './none/none.component';
import { PcBureauComponent } from './pc-bureau/pc-bureau.component';
import { PcPortableComponent } from './pc-portable/pc-portable.component';
import { PhotocopieurComponent } from './photocopieur/photocopieur.component';
import { ScannerComponent } from './scanner/scanner.component';
import { ServeurTourComponent } from './serveur-tour/serveur-tour.component';


const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "Contact",
    component: ContactComponent,
  },
  {
    path: "DisqueExterne",
    component: DisqueExterneComponent,
  },
  {
    path: "DisqueInterne",
    component: DisqueInterneComponent,
  },
  {
    path: "Imprimante",
    component: ImprimanteComponent,
  },
  {
    path: "PcBureau",
    component: PcBureauComponent,
  },
  {
    path: "PcPortable",
    component: PcPortableComponent,
  },
  {
    path: "Photocopieur",
    component: PhotocopieurComponent,
  },
  {
    path: "Scanner",
    component: ScannerComponent,
  },
  {
    path: "ServeurTour",
    component: ServeurTourComponent,
  },
  {
    path: "**",
    component: NoneComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
