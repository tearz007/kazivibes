import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import {HomeComponent} from './components/home/home.component'
import { MenuComponent } from './components/menu/menu.component';

const routes: Routes = [
  {path:'' ,component:HomeComponent},
  {path:'home' ,component:HomeComponent},
  {path:'contact' ,component:ContactComponent},
  {path:'menu' ,component:MenuComponent},
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
