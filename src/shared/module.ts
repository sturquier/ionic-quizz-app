import { NgModule } from "@angular/core";
import { HttpQuestionsService } from "./http.questions.service";
import { HttpModule } from "@angular/http";
import { Config } from "./config";

@NgModule({
    providers: [ Config, HttpQuestionsService ],
    imports: [ HttpModule ]
})
export class SharedModule { }
