import { Component } from '@angular/core'
import { Question } from './models'
import { NavController, NavParams } from 'ionic-angular';
import { QuestionsService } from './service'

@Component({
	selector: 'questions',
	templateUrl: 'template.html'
})

export class Questions {
	public questions: Question[];
	public question: Question;
	page: number = 1;

	constructor(public navController: NavController, navParams: NavParams, public questionsServices: QuestionsService) {
		this.questions = []
		this.question = navParams.get('question');
	}

	ionViewWillEnter() {
		this.questionsServices.loadQuestions();
		this.questionsServices
			.subject
			.asObservable()
			.subscribe(questions => this.questions = questions)
		console.log(this.questions)
	}

	refresh(event) {
		this
			.questionsServices
			.loadQuestions()
			.then(response => {
				event.complete();
			})
			.catch(error =>{
				event.complete();
			})
	}
}