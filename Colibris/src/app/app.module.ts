
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { DateValueAccessorModule } from 'angular-date-value-accessor';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RecherchesComponent } from './recherches/recherches.component';
import { RequetesComponent } from './requetes/requetes.component';
import { SeriesComponent } from './series/series.component';
import { ParametresComponent } from './parametres/parametres.component';
import { UtilisateursComponent } from './utilisateurs/utilisateurs.component';
import { StatistiquesComponent } from './statistiques/statistiques.component';
import { Erreur404Component } from './erreur404/erreur404.component';

import { SeriesService } from './services/series.service';
import { UtilisateursService } from './services/utilisateurs.service';
import { AuthentificationService } from './services/authentification.service';
import { CreationSerieComponent } from './creationSerie/creationSerie.component';
import { ModifSerieComponent } from './modifSerie/modifSerie.component';
import { FiltreSelectPipe } from './modifSerie/filtreSelect.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RecherchesComponent,
    RequetesComponent,
    SeriesComponent,
    ParametresComponent,
    UtilisateursComponent,
    StatistiquesComponent,
    Erreur404Component,
    CreationSerieComponent,
    ModifSerieComponent,
    FiltreSelectPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    DateValueAccessorModule
  ],
  providers: [
    SeriesService,
    UtilisateursService,
    AuthentificationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
