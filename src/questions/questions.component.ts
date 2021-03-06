import { Component, ViewChild } from '@angular/core'
import { Question } from '../shared/models'
import { NavController, NavParams } from 'ionic-angular';
import { QuestionsService } from './service'
import { Slides } from 'ionic-angular';
import { Leaderboard } from "../leaderboard/leaderboard.component";

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
		if (this.slides.getActiveIndex() == 19) {
			localStorage.setItem('difficulty', this.difficulty)
			localStorage.setItem('score', this.score.toString())
			localStorage.setItem('playerName', localStorage.getItem('playerName'))
			this.navController.push(Leaderboard)
		} else {
			this.slides.slideNext()
			this.slides.lockSwipes(true)
		}
	}

	checkAnswer(answer, correct_answer) {
		switch (this.difficulty) {
			case "easy":
				if (answer == correct_answer) {
					this.score += 5;
				} else {
					this.score -= 5;
				}
				break;
			case "medium":
				if (answer == correct_answer) {
					this.score += 10;
				} else {
					this.score -= 10;
				}
				break;
			case "hard":
				if (answer == correct_answer) {
					this.score += 20;
				} else {
					this.score -= 20;
				}
				break;
		}

		this.slides.lockSwipes(false)
		this.changeSlide()
	}
}