import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { IonicModule } from "ionic-angular";
import { Leaderboard } from "./leaderboard.component";
import { SharedModule } from '../shared/module'

@NgModule({
   imports: [
       BrowserModule,
       IonicModule,
       SharedModule
   ],
   entryComponents: [ Leaderboard ],
   declarations: [ Leaderboard ],
   exports: [ Leaderboard ]
})

export class LeaderboardModule {}