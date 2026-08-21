import { Routes } from '@angular/router';

import { HomeComponent } from './component/home-component/home-component';
import { Atletacomponent } from './component/atletacomponent/atletacomponent';
import { CadastroCorridaComponent } from './component/cadastro-corrida-component/cadastro-corrida-component';
import { Menucomponent } from './component/menucomponent/menucomponent';
import { AtletaListaComponent } from './component/atleta-lista-component/atleta-lista-component';
import { CorridaListaComponent } from './component/corrida-lista-component/corrida-lista-component';

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
        path:"cadastroatleta/:id",
        component:Atletacomponent
    },
    {
        path:"cadastroCorridaCmponent",
        component:CadastroCorridaComponent
    },
    {
        path:"menucomponent",
        component:Menucomponent
    },
    {  path:"listaatleta",
    component:AtletaListaComponent
   },
   {
    path: "alteracorrida/:id",
    component: CadastroCorridaComponent
},
    {
        path: "listacorrida",
        component:CorridaListaComponent
    }
    
];
