import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ResultatComponent } from './resultat/resultat.component';
import { CommuniqueComponent } from './communique/communique.component';
import { AdministrationComponent } from './administration/administration.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './administration/dashboard/dashboard.component';
import { RecrutementsComponent } from './administration/recrutements/recrutements.component';
import { MotifsComponent } from './administration/motifs/motifs.component';
import { UtilisateursComponent } from './administration/utilisateurs/utilisateurs.component';
import { ValiditesComponent } from './administration/validites/validites.component';
import { EpreuvesComponent } from './administration/epreuves/epreuves.component';
import { RolesComponent } from './administration/roles/roles.component';
import { MoncompteComponent } from './administration/moncompte/moncompte.component';
import { CandidatComponent } from './candidat/candidat.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'resultats',component:ResultatComponent},
    {path:'communiques',component:CommuniqueComponent},
    {path:'administration',component:AdministrationComponent,children:[
        {path:'',component:DashboardComponent},
        {path:'recrutements',component:RecrutementsComponent},
        {path:'motifs',component:MotifsComponent},
        {path:'utilisateurs',component:UtilisateursComponent},
        {path:'validites',component:ValiditesComponent},
        {path:'epreuves',component:EpreuvesComponent},
        {path:'roles',component:RolesComponent},
        {path:'mon-compte',component:MoncompteComponent},
    ]},
    {path:'candidat',component:CandidatComponent},
];
