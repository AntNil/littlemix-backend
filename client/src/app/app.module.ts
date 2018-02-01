import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RecipeComponent } from './recipe/recipe.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginModalComponent } from './authentication/login-modal/login-modal.component';
import {AppRoutingModule} from "./app-routing.module";
import {FormsModule} from "@angular/forms";
import { RegisterComponent } from './authentication/register/register.component';




@NgModule({
  declarations: [
    AppComponent,
    RecipeComponent,
    NavbarComponent,
<<<<<<< HEAD
    LoginModalComponent,
    RegisterComponent
=======
    LoginModalComponent

>>>>>>> 5d36c2191ccf5c8d1e9d98d4602c84770bfc7fe0
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
