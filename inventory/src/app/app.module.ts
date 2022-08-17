import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// routing module
import { AppRoutingModule } from './app-routing.module';
// module
import { AdminRoutingModule } from './admin/admin-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //user defined modules
    AdminRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
