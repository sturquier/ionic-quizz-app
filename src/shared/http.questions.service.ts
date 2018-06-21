import { Injectable } from "@angular/core";
import { Http } from '@angular/http';
import { Config } from "./config";

@Injectable()
export class HttpQuestionsService {
	
    constructor(public http: Http, public config: Config) {
    }

    get(resource) {
        return this.http.get(this.config.QUESTIONS_API_URL + resource);
    }
}