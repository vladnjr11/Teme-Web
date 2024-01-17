
  const questions = [
    {
      question: "În ce an s-a născut Neymar JR?",
      options: ["2000", "1885", "1998", "1992"],
      correctAnswer: "1992"
    },
    {
      question: "La ce echipă joacă în acest moment Neymar JR?",
      options: ["Al-Hilal", "Real Madrid", "Barcelona", "PSG"],
      correctAnswer: "Al-Hilal"
    },
    {
      question: "Câți frați are Neymar JR?",
      options: ["1", "2", "3", "niciunul"],
      correctAnswer: "niciunul"
    },
    {
      question: "Câte milioane de euro a costat transferul lui Neymar JR de la Barcelona la PSG?",
      options: ["200M", "222M", "180M", "50M"],
      correctAnswer: "222M"
    },
    {
      question: "Care este numele fiului lui Neymar JR?",
      options: ["Matteo", "Eriko", "Thiago", "Davi Lucca"],
      correctAnswer: "Davi Lucca"
    }
  ];

  let currentQuestion = 0;
  let userScore = 0;

  function showQuestion() {
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
    const scoreElement = document.getElementById('score');

    if (currentQuestion < questions.length) {
      const currentQ = questions[currentQuestion];
      questionElement.textContent = currentQ.question;

      optionsElement.innerHTML = '';
      currentQ.options.forEach((option, index) => {
        const radioBtn = document.createElement('input');
        radioBtn.type = 'radio';
        radioBtn.name = 'answer';
        radioBtn.value = option;
        optionsElement.appendChild(radioBtn);
        
        const optionLabel = document.createElement('label');
        optionLabel.textContent = option;
        optionsElement.appendChild(optionLabel);

        optionsElement.appendChild(document.createElement('br'));
      });

      scoreElement.textContent = 'Scor: ' + userScore;
    } else {
      questionElement.textContent = 'Jocul s-a încheiat!';
      optionsElement.innerHTML = '';
      scoreElement.textContent = 'Scor final: ' + userScore + ' din ' + questions.length;
    }
  }

  function checkAnswer() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');

    if (selectedAnswer) {
      const currentQ = questions[currentQuestion];
      const userAnswer = selectedAnswer.value;

      if (userAnswer === currentQ.correctAnswer) {
        userScore++;
      }

      currentQuestion++;
      showQuestion();
    } else {
      alert('Vă rugăm să alegeți un răspuns înainte de a verifica.');
    }
  }
  showQuestion();
