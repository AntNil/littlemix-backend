import {Favorite} from "./favorite.modal";
export class User{


   id: number;
   firstname: string;
   lastname: string;
   email: string;
   password: string;
   image: string;
   favorite: Favorite;



  constructor(){
  }
}
