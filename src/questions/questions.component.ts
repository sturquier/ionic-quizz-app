import { Component, ViewChild } from '@angular/core'
import { Question } from '../shared/models'
import { NavController, NavParams } from 'ionic-angular';
import { QuestionsService } from './service'
import { Slides } from 'ionic-angular';

@Component({
	selector: 'questions',
	templateUrl: 'template.html'
})

export class Questions {
	public questions: Question[] = [];
	public question: Question;
	page: number = 1;
	@ViewChild(Slides) slides: Slides;

	constructor(public navController: NavController, navParams: NavParams, public questionsServices: QuestionsService) {
		// this.questions = []
		this.question = navParams.get('question');
	}

	ngOnInit() {
		this.questionsServices.loadQuestions();
		this.questionsServices
			.subject
			.asObservable()
			.subscribe(res => {
				this.questions = res['results']
				let groupedAnswers = []
				this.questions.forEach(question => {
					groupedAnswers = question.incorrect_answers
					groupedAnswers.push(question.correct_answer)
					question['answers'] = groupedAnswers.sort()

				})
			}, err => console.error(err));
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