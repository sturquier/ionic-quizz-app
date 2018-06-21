interface Player {
	login: string,
	avatar: string
}

interface Question {
	player: Player,
	category: string,
	type: string,
	difficulty: string,
	content: string,
	id?: number,
	correct_answer: string,
	incorrect_answers: Array<string>
}

export { Question, Player }