import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent }   from './about/about.component';
import { CoffeeComponent }   from './coffee/coffee.component';
import { ContactComponent } from './contact/contact.component';
import { CoffeeDetailComponent } from './coffee-detail/coffee-detail.component';
import { AdminComponent }   from './admin/admin.component';

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
  {
    path: 'contact',
    component:ContactComponent
  },
  {
    path: 'coffees/:id',
    component: CoffeeDetailComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
