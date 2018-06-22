import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { IonicModule } from "ionic-angular";
import { Login } from "./login/login.component";
import { SharedModule } from '../shared/module';

@NgModule({
   imports: [
       BrowserModule,
       IonicModule,
       SharedModule
   ],
   entryComponents: [Login],
   declarations: [Login],
   exports: [Login]
})

export class PlayerModule {}