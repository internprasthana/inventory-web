import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// routing module
import { AppRoutingModule } from './app-routing.module';
// module
import { AdminRoutingModule } from './admin/admin-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //user defined modules
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
