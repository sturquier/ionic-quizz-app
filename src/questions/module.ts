import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { IonicModule } from "ionic-angular";
import { Questions } from "./questions.component";
import { QuestionsService } from "./service";
import { SharedModule } from '../shared/module'

@NgModule({
   imports: [
       BrowserModule,
       IonicModule,
       SharedModule
   ],
   entryComponents: [ Questions ],
   declarations: [ Questions ],
   providers: [ QuestionsService ],
   exports: [ Questions ]
})

export class QuestionsModule {}