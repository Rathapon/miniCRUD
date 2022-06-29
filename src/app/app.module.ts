import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { InsertMformComponent } from './component/insert-mform/insert-mform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { EditComponent } from './component/edit/edit.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './component/home/home.component';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { BlockUIModule } from 'primeng/blockui';
import { InsertModuleComponent } from './component/insert-module/insert-module.component';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ToastModule } from "primeng/toast";
import { NameFilterPipe } from './component/home/name-filter.pipe';
import { MatPaginatorModule } from '@angular/material/paginator'




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    InsertMformComponent,
    EditComponent,
    HomeComponent,
    InsertModuleComponent,
    NameFilterPipe
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CardModule,
    ButtonModule,
    HttpClientModule,
    ProgressSpinnerModule,
    BlockUIModule,
    ReactiveFormsModule,
    ConfirmPopupModule,
    ToastModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
  ],
  providers: [ConfirmationService , MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
