import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RecipeComponent } from './recipe/recipe.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginModalComponent } from './authentication/login-modal/login-modal.component';
import {AppRoutingModule} from "./app-routing.module";
import {FormsModule} from "@angular/forms";
import { RegisterComponent } from './authentication/register/register.component';
import { RecipepreviewComponent } from './homepage/recipepreview/recipepreview.component';
import { HomeComponent } from './homepage/home/home.component';
import {UserService} from "./services/user.service";
import {RecipeService} from "./services/recipe.service";
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { FilterComponent } from './homepage/filter/filter.component';




@NgModule({
  declarations: [
    AppComponent,
    RecipeComponent,
    NavbarComponent,
    LoginModalComponent,
    RegisterComponent,
    RecipepreviewComponent,
    HomeComponent,
    AddRecipeComponent,
    FilterComponent


  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,

  ],
  providers: [UserService, RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
