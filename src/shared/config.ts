import { Injectable } from "@angular/core";

@Injectable()
export class Config {
    QUESTIONS_API_URL: string = 'https://opentdb.com/api.php?amount=20&category=15&difficulty=hard'
}