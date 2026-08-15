import { Routes } from '@angular/router';

import { HomeComponent } from './component/home-component/home-component';
import { Atletacomponent } from './component/atletacomponent/atletacomponent';
import { CadastroCorridaComponent } from './component/cadastro-corrida-component/cadastro-corrida-component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:"/home",
        pathMatch: 'full'  
    },
    {
        path:"home",
        component:HomeComponent
    },
    {
        path:"cadastroatleta",
        component:Atletacomponent
    },
    {
        path:"cadastro-corrida-component",
        component:CadastroCorridaComponent
    }
    
];
