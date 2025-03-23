let currentQuestionIndex = 0;
let correctAnswerscount = 0;

function loadQuestion() {
    const questionElement = document.getElementById("question");
    const feedbackElement = document.getElementById("feedback");
    const tipElement = document.getElementById("tip");
    const nextButton = document.getElementById("next-question");
    const answerButtons = document.querySelectorAll(".answer-button");

    questionElement.textContent = questions[currentQuestionIndex].text;
    feedbackElement.textContent = "";
    tipElement.textContent = "";
    nextButton.classList.add("hidden");

    answerButtons.forEach(button => {
        button.disabled = false;
    });
}

function checkAnswer(answer) {
    const feedbackElement = document.getElementById("feedback");
    const tipElement = document.getElementById("tip");
    const nextButton = document.getElementById("next-question");
    const correctAnswer = questions[currentQuestionIndex].correctAnswer;
    const answerButtons = document.querySelectorAll(".answer-button");

    if (answer === correctAnswer) {
        feedbackElement.textContent = "Boa análise!";
        feedbackElement.style.color = "green";
        correctAnswerscount++;
    } else {
        feedbackElement.textContent = "Errado. Tenta estar mais atento.";
        feedbackElement.style.color = "red";
    }

    tipElement.textContent = questions[currentQuestionIndex].tip;

    answerButtons.forEach(button => {
        button.disabled = true;
    });

    nextButton.classList.remove("hidden");
}

function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        const quizContainer = document.getElementById("quiz-container");
        quizContainer.innerHTML = `
            <p>Terminaste o teste.</p>
            <p>Acertaste ${correctAnswerscount}/${questions.length}</p>
        `;

        document.getElementById("feedback").textContent = "";
        document.getElementById("tip").textContent = "";
        document.getElementById("next-question").classList.add("hidden");
    }
}

const questions = [
    {
        text: "Recebeste um email do teu banco a pedir para clicares num link e inserires as tuas credenciais. O email contém alguns erros de gramática e o endereço de envio não vem de um endereço oficial.",
        correctAnswer: "phishing",
        tip: "Os bancos nunca pendem para inserires as credenciais via mail e nunca reencaminham para sites."
    },
    {
        text: "Recebeste um email da Amazon a confirmar uma compra que fizeste recentemente. O email está bem formatado e vem de um endereço oficial da Amazon.",
        correctAnswer: "legitimo",
        tip: "Para confirmares que é um endereço oficial pesquisa no google!"
    },
    {
        text: "Um email da Netflix diz que a tua conta vai ser cancelada se não atualizares o teu método de pagamento. O link envia-o para um domínio chamado como 'netfl1x-pay.com'.",
        correctAnswer: "phishing",
        tip: "A mudança de só um carectere no domínio do site é uma jogada muito usada, é importante estar sempre atento a essa aspeto!"
    },
    {
        text: "Recebeste um telefonema de um número desconhecido a dizer que é da tua operadora, diz que algo está errado com o método de pagamento e tem de ser alterado.",
        correctAnswer: "phishing",
        tip: "Nenhuma operadora liga a partir de um número desconhecido ou privado."
    },
    {
        text: "Recebeste uma mensagem do CTT a dizer que a tua encomenda vai chegar hoje e com um código para o entregador.",
        correctAnswer: "legitimo",
        tip: "Normalmente mensangens vindas de contactos oficias sem nenhum link duvidoso são legítimos."
    },
    {
        text: "Recebeste uma mensagem de um número desconhecido a dizer que a tua encomenda ficou presa na alfândega.",
        correctAnswer: "phishing",
        tip: "Nenhuma empresa utiliza um número desconhecido para esse tipo de mensagem."
    },
    {
        text: "Vês um anúncio online de um produto popular a um preço extremamente baixo. O vendedor pede pagamento por transferência bancária direta e diz que é urgente.",
        correctAnswer: "phishing",
        tip: "Preços demasiado bons muitas vezes são armadilhas. Usa sempre métodos de pagamento seguros, como o PayPal."
    },
    {
        text: "Recebeste uma mensagem da tua companhia aérea a informar que o teu voo foi adiado e que podes verificar os detalhes no site oficial",
        correctAnswer: "legitimo",
        tip: "Companhias aéreas muitas vezes enviam mensagens diretas e incluem instruções para verificar informações."
    },
    {
        text: "Um email de um conhecido pede que transfiras dinheiro com urgência porque está preso no estrangeiro e perdeu o acesso às contas bancárias.",
        correctAnswer: "phishing",
        tip: "Verifica sempre diretamente com a pessoa através de outros meios antes de enviar qualquer dinheiro!"
    },
    {
        text: "Recebeste um aviso da tua universidade com instruções para fazer login no eLearning para consulta de notas. O link redireciona para um domínio associado à instituição.",
        correctAnswer: "legitimo",
        tip: "Mensagens institucionais legítimas sempre usam domínios reconhecidos."
    }
];

window.onload = loadQuestion;