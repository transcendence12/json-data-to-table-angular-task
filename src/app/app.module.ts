import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { OrdersService } from './orders.service';
import { FilterByDescriptionPipe } from './filter-by-description.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FilterByDescriptionPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [OrdersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
