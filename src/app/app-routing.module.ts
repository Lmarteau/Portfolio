import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { CrocComponent } from './croc/croc.component';
import { BDComponent } from './bd/bd.component';
import { PAOComponent } from './pao/pao.component';
import { PhotoComponent } from './photo/photo.component';

const routes: Routes = [
  { path: 'crocs', component: CrocComponent},
  { path: 'bd', component: BDComponent},
  { path: 'pao', component: PAOComponent},
  { path: 'photo', component: PhotoComponent},
  { path: 'accueil', component: AccueilComponent },
  { path: '', redirectTo: 'accueil', pathMatch: 'full'},
  { path: '**', redirectTo: 'accueil'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
