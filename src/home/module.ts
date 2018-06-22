import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { IonicModule } from "ionic-angular";
import { Home } from "./home.component";
import { SharedModule } from '../shared/module';

@NgModule({
   imports: [
       BrowserModule,
       IonicModule,
       SharedModule
   ],
   entryComponents: [Home],
   declarations: [Home],
   exports: [Home]
})

export class HomeModule {}