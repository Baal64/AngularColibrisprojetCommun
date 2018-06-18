import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EditionModele } from '../modele/edition.modele';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {
  serie: EditionModele;
  listeSeries: Array<object>;
  listeEditeurs: Array<object>;

  constructor(private http:HttpClient) {
    this.serie = 
    {
      "title": "Les Fourberies de Scapin",
      "author": "Molière",
      "publisher": 0,
      "collection": 0,
      "language": "Français",
      "publishedDate": "2016-04-13T12:00:00Z",
      "pages": 144,
      "cover": "https://images-na.ssl-images-amazon.com/images/I/51JW7IBS-YL._SX345_BO1,204,203,200_.jpg",
      "ISBN10": "2013949677",
      "ISBN13": "9782013949675",
      };
      this.listeSeries=[this.serie, this.serie, this.serie];
      this.getEditeurs();
   }

  getSeries(){
     this.http.get<Array<EditionModele>>('assets/modele/series.json').subscribe( //subscribe =asynchrone pour récupérer les données
       data => { //fonction fléchée pour rester dans le contexte asynchrone de la requete
         console.log(data);
         this.listeSeries = data;
       }
    );
  }
 
  getEditeurs(){
    this.http.get<Array<EditionModele>>('assets/modele/editeurs.json').subscribe(
      (data) => {
        console.log(data);
        this.listeEditeurs = data;
        this.getSeries();
      }
    );
  }
}
