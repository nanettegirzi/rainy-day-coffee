import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent }   from './about/about.component';
import { CoffeeComponent }   from './coffee/coffee.component';


const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
      path: 'about',
      component: AboutComponent
    },
    {
        path: 'coffee',
        component: CoffeeComponent
      },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
