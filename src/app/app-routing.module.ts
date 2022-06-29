import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsertMformComponent } from './component/insert-mform/insert-mform.component';
import { HomeComponent } from './component/home/home.component';
import { EditComponent } from './component/edit/edit.component';
import { InsertModuleComponent } from './component/insert-module/insert-module.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'add-form', component: InsertMformComponent},
  {path: 'edit-form/:id', component: EditComponent},
  {path: 'add-module', component: InsertModuleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
