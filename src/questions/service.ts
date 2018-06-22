import { Injectable } from '@angular/core'
import { Question } from '../shared/models'
import { HttpQuestionsService } from '../shared/http.questions.service'
import { Subject } from 'rxjs/Subject'

@Injectable()
export class QuestionsService {

	private questions: Question[]
	subject: Subject<Array<Question>> = new Subject()

	constructor(public httpQuestionsService: HttpQuestionsService) {

	}

	loadQuestions(difficulty) {
		return new Promise((resolve, reject) => {
			this
				.httpQuestionsService
				.get(difficulty)
				.subscribe(response => {
					this.subject.next(response.json())
					resolve(response.json())
				}),
				error => {
					this.subject.error(error.json())
					reject(error)
				}
		})
	}
}