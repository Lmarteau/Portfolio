import {CUSTOM_ELEMENTS_SCHEMA ,NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CarouselModule } from 'primeng/carousel';
import { CardModule } from 'primeng/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { register } from 'swiper/element/bundle';
import { CrocComponent } from './croc/croc.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { PhotoComponent } from './photo/photo.component';
import { PAOComponent } from './pao/pao.component';
import { BDComponent } from './bd/bd.component';
import { ButtonModule } from 'primeng/button';

register();
@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    CrocComponent,
    PhotoComponent,
    PAOComponent,
    BDComponent,
  ],
  imports: [
    BrowserModule,
    CarouselModule,
    CardModule,
    AppRoutingModule,
    NgxExtendedPdfViewerModule,
    ButtonModule

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
