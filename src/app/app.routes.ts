import { Routes } from '@angular/router';

import { Menucomponent } from './component/menucomponent/menucomponent';

export const routes: Routes = [
    {
        path:'',
        redirectTo:"/home",
        pathMatch: 'full'  
    },
    
];
