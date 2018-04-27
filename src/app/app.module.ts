import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

//material
import { MaterialModule } from './material.module';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';




import { ReactiveFormsModule } from '@angular/forms';
import { MercadolibreService } from './services/mercadolibre.service';
import { ListProductsComponent } from './list-products/list-products.component';
 
@NgModule({
  declarations: [
    AppComponent,
    ListProductsComponent,
    
  ],
  imports: [
    MaterialModule,
    BrowserModule,
		FormsModule,
    BrowserAnimationsModule,
    HttpModule
    
  ],
  providers: [MercadolibreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
