import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RulesComponent } from './rules/rules.component';

export const routes: Routes = [
    {path:'',
        component: AppComponent,
        title:'Home Page'
    },
    {
        path:'rules',
        component:RulesComponent,
        title:'Rules Page'

    }
];
