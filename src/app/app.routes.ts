import { Routes } from '@angular/router';
import { RulesComponent } from './rules/rules.component';
import { HomeComponent } from './home/home.component';
import { MatDialogModule } from '@angular/material/dialog';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        
    },
    { 
        path: 'rules', component: RulesComponent 
            
    }
];


