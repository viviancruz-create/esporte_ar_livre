import { Routes } from '@angular/router';

import { HomeComponent } from './component/home-component/home-component';
import { Atletacomponent } from './component/atletacomponent/atletacomponent';
import { CadastroCorridaComponent } from './component/cadastro-corrida-component/cadastro-corrida-component';
import { AtletaListaComponent } from './component/atleta-lista-component/atleta-lista-component';
import { CorridaListaComponent } from './component/corrida-lista-component/corrida-lista-component';
import { InscricaoComponent } from './component/inscricao-component/inscricao-component';
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'  
  },
  {
    path: 'home',
    component: HomeComponent
  },

  // --- ROTAS DE ATLETA ---
  {
    path: 'cadastroatleta', // Rota para NOVO cadastro
    component: Atletacomponent
  },
  {
    path: 'cadastroatleta/:id', // Rota para EDITAR atleta existente
    component: Atletacomponent
  },
  { 
    path: 'listaatleta',
    component: AtletaListaComponent
  },

  // --- ROTAS DE CORRIDA ---
  {
    path: 'cadastrocorrida', // Rota corrigida para NOVO cadastro
    component: CadastroCorridaComponent
  },
  {
    path: 'alteracorrida/:id', // Rota para EDITAR corrida existente
    component: CadastroCorridaComponent
  },
  {
    path: 'listacorrida',
    component: CorridaListaComponent
  },
  { path: 'inscricao', 
<<<<<<< HEAD
  component: InscricaoComponent }
=======
    component: InscricaoComponent 
  }

>>>>>>> 3e9f13831d4632370420c4d3eb58a222663cbe3a
];