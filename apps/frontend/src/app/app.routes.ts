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
import { NouveaurecrutementComponent } from './administration/recrutements/nouveaurecrutement/nouveaurecrutement.component';
import { ManagerrecrutementComponent } from './administration/recrutements/managerrecrutement/managerrecrutement.component';
import { NouveaumotifComponent } from './administration/motifs/nouveaumotif/nouveaumotif.component';
import { EditermotifComponent } from './administration/motifs/editermotif/editermotif.component';
import { NouvelutilisateurComponent } from './administration/utilisateurs/nouvelutilisateur/nouvelutilisateur.component';
import { EditerutilisateurComponent } from './administration/utilisateurs/editerutilisateur/editerutilisateur.component';
import { NouvellevaliditeComponent } from './administration/validites/nouvellevalidite/nouvellevalidite.component';
import { EditervaliditeComponent } from './administration/validites/editervalidite/editervalidite.component';
import { NouvelepreuveComponent } from './administration/epreuves/nouvelepreuve/nouvelepreuve.component';
import { EditerepreuveComponent } from './administration/epreuves/editerepreuve/editerepreuve.component';
import { NouveauroleComponent } from './administration/roles/nouveaurole/nouveaurole.component';
import { EditerroleComponent } from './administration/roles/editerrole/editerrole.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'resultats',component:ResultatComponent},
    {path:'communiques',component:CommuniqueComponent},
    {path:'administration',component:AdministrationComponent,children:[
        {path:'',component:DashboardComponent},
        {path:'recrutements',component:RecrutementsComponent,children:[
            {path:'nouveau',component:NouveaurecrutementComponent},
            {path:'editer',component:ManagerrecrutementComponent}
        ]},
        {path:'motifs',component:MotifsComponent,children:[
            {path:'nouveau',component:NouveaumotifComponent},
            {path:'editer',component:EditermotifComponent}
        ]},
        {path:'utilisateurs',component:UtilisateursComponent,children:[
            {path:'nouveau',component:NouvelutilisateurComponent},
            {path:'editer',component:EditerutilisateurComponent}
        ]},
        {path:'validites',component:ValiditesComponent,children:[
            {path:'nouveau',component:NouvellevaliditeComponent},
            {path:'editer',component:EditervaliditeComponent}
        ]},
        {path:'epreuves',component:EpreuvesComponent,children:[
            {path:'nouveau',component:NouvelepreuveComponent},
            {path:'editer',component:EditerepreuveComponent}
        ]},
        {path:'roles',component:RolesComponent,children:[
            {path:'nouveau',component:NouveauroleComponent},
            {path:'editer',component:EditerroleComponent}
        ]},
        {path:'mon-compte',component:MoncompteComponent},
    ]},
    
    {path:'candidat',component:CandidatComponent},
];
