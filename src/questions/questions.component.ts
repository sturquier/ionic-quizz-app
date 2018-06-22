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
	@ViewChild(Slides) slides: Slides;
	public score = 0;
	public difficulty = ''

	constructor(public navController: NavController, navParams: NavParams, public questionsServices: QuestionsService) {
		this.question = navParams.get('question');
		this.difficulty = localStorage.getItem('difficulty')
	}

	ngOnInit() {
		this.questionsServices.loadQuestions(this.difficulty);
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
			.loadQuestions(this.difficulty)
			.then(response => {
				event.complete();
			})
			.catch(error =>{
				event.complete();
			})
	}

	changeSlide() {
		this.slides.slideNext()
		this.slides.lockSwipes(true)
	}

	checkAnswer(answer, correct_answer) {
		if (answer == correct_answer) {
			this.score += 10;
			alert('GOOD ANSWER. SCORE = ' + this.score)
		} else {
			this.score -= 10;
			alert('WRONG ANSWER. SCORE = ' + this.score)
		}

		this.slides.lockSwipes(false)
		this.changeSlide()
	}
}