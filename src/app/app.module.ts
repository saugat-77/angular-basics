import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsComponent } from './components/cards/cards.component';
import { MatCardModule } from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HeaderComponent } from './components/header/header.component';
import { CardsWrapperComponent } from './forms/cards-wrapper/cards-wrapper.component';
import { PeriodicTableComponent } from './forms/periodic-table/periodic-table.component';

@NgModule({
  declarations: [
    AppComponent,
    // MatFormFieldModule,
    // DataGridComponent,
    CardsComponent,
    HeaderComponent,
    CardsWrapperComponent,
    PeriodicTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    // DataGridComponent,
    MatToolbarModule,
    MatMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }