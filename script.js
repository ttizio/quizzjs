/*************************/
/*       Questions       */
/*************************/

const questions = [
  {
    // Texte de la question
    question:
      "Dans la saga culte Star Wars, comment s'appelle le père de Luke Skywalker ?",
    // Réponses possibles
    answers: [
      "Darth Vader",
      "Anakin Skywalker",
      "Les deux réponse",
      "Aucune réponse",
    ],
    // Index de la réponse correcte
    correctAnswerIndex: 2,
  },
  {
    question:
      'En quelle année le groupe "The Beatles" a t\'il sorti le célèbre album "Sgt. Pepper\'s Lonely Hearts Club Band" ?',
    answers: [
      "1967",
      "1974",
      "1962",
      "1980"],
    correctAnswerIndex: 0,
  },
  {
    question:
      'Dans la série de jeux video "Zelda", quel est le nom du personnage principal qu\'incarne le joueur ?',
    answers: [
      "Zelda",
      "Ganon",
      "Tom",
      "Link"],
    correctAnswerIndex: 3,
  },
  {
    question:
      "Quel est le nom de la mission spatiale lunaire, menée par la NASA, dont l'équipage a du annuler son allunissage suite à une explosion pendant le voyage ?",
    answers: [
      "Apollo 9",
      "Mercury 1",
      "Apollo 13",
      "Gemini 2"],
    correctAnswerIndex: 2,
  },
];

/********* NE PAS MODIFIER AU DESSUS DE CETTE LIGNE *********/


const state = {
    score: 0,
    currentQuestionIndex: 0
}

displayQuestion()


/*
FUNCTIONS
*/

function displayNextQuestion() {
    if(state.currentQuestionIndex == questions.length - 1) {
        const questionPElement = document.querySelector("#question")
        questionPElement.innerHTML = "Merci d'avoir participé"

        const answersUlElement = document.querySelector("#answers")
        answersUlElement.innerHTML = ""
    } else {
        state.currentQuestionIndex++
        displayQuestion()
    }
}

function onClickOnAnswer(answerClickedIndex) {
    if(isCorrectAnswer(answerClickedIndex)) {
        state.score++
    }
    displayScore()
    displayNextQuestion()
}

function isCorrectAnswer(answerClickedIndex) {
    return answerClickedIndex == questions[state.currentQuestionIndex].correctAnswerIndex
}

function displayScore() {
    document.querySelector("#score").innerHTML = state.score
}

function displayQuestion() {
    const questionPElement = document.querySelector("#question")
    const answersUlElement = document.querySelector("#answers")

    questionPElement.innerHTML = questions[state.currentQuestionIndex].question

    const answersList = questions[state.currentQuestionIndex].answers

    answersUlElement.innerHTML = ""
    answersList.forEach((oneAnswer, index) => {
        const newHtmlElement = document.createElement("li")
        newHtmlElement.className = "answer"
        newHtmlElement.innerHTML = oneAnswer
        newHtmlElement.id = index

        newHtmlElement.addEventListener("click", (event) => {
            onClickOnAnswer(event.target.id)
        })

        answersUlElement.appendChild(newHtmlElement)
    })
}

