import { Component } from '@angular/core';
import { Etudes } from './Etudes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
})
export class AccueilComponent {
  public etudes: Etudes[] = [{
    Etablissement: "Lycée Pierre et Marie Curie" ,
    Lieu: "Neufchâteau",
    Diplome: "Baccalauréat général",
    Spécialités: "spécialités SES et HGGSP",
    Date: "2018-2021",
    Resultat: "Mention assez Bien",
    Photo: "../../assets/Lycee.jpg"
  }, {
    Etablissement: "Université de Lorraine",
    Date: "Septembre 2021",
    Diplome: "Licence",
    Lieu: "Nancy",
    Photo: "../../assets/Fac.jpg"
  }]

  public nb:number = 0

  constructor(private router:Router) {}

  public moveTo(str:string) {
    this.router.navigate(['/' + str])
  }

  public DownloadCV(): void {
      const filePath = '../../assets/pdf/CV.pdf';
      const link = document.createElement('a');
      link.href = filePath;
      link.download = 'CV.pdf';
      link.click();
  }
}
