document.addEventListener('DOMContentLoaded', () => {
    
    const allQuizzesData = {
    french: [
        // A1 - Beginner
        { question: "How do you say 'Good morning' in French?", answers: ["Bonsoir", "Salut", "Bonjour", "Merci"], correct: "Bonjour" },
        { question: "Translate: 'I am a student.'", answers: ["Je suis un livre", "Je suis un professeur", "Je suis une maison", "Je suis un étudiant"], correct: "Je suis un étudiant" },
        { question: "Which word means 'apple'?", answers: ["Orange", "Banane", "Pomme", "Poire"], correct: "Pomme" },
        { question: "How do you say 'Thank you' in French?", answers: ["Merci", "S'il vous plaît", "Bonjour", "Salut"], correct: "Merci" },
        { question: "Translate: 'Goodbye.'", answers: ["Au revoir", "Salut", "Bonjour", "Merci"], correct: "Au revoir" },

        // A2 – Functional
        { question: "Complete the sentence: 'Nous ___ au parc.' (We go to the park.)", answers: ["vais", "allez", "va", "allons"], correct: "allons" },
        { question: "Plural of 'le chat' (the cat)?", answers: ["les chats", "le chats", "les chat", "les chatte"], correct: "les chats" },
        { question: "Complete: 'Tu ___ français?' (Do you speak French?)", answers: ["parle", "parles", "parlez", "parlent"], correct: "parles" },
        { question: "Which sentence is correct?", answers: ["Ils est contents", "Il sont contents", "Ils sont contents", "Ils sont content"], correct: "Ils sont contents" },
        { question: "Translate: 'They have two books.'", answers: ["Ils ont deux livres", "Ils avez deux livres", "Ils ont deux livre", "Ils ont deux livreses"], correct: "Ils ont deux livres" },

        // B1+ - Advanced
        { question: "Quand Paul est arrivé, j'________ déjà le film qu'il m'avait conseillé.", answers: ["ai regardé", "regardais", "avais regardé", "eus regardé"], correct: "avais regardé" },
        { question: "Si j'avais eu assez d'argent l'année dernière, je ________ faire le tour du monde.", answers: ["serais parti", "partirais", "suis parti", "partais"], correct: "serais parti" },
        { question: "Quel synonyme exprime un sentiment de satisfaction intense et durable ?", answers: ["épanoui", "amusé", "occupé", "étonné"], correct: "épanoui" },
        { question: "Je ne pense pas qu'elle ________ parler couramment trois langues étrangères.", answers: ["puisse", "peut", "pouvait", "pourra"], correct: "puisse" },
        { question: "Demain, dès que nous ________ au parc, nous pourrons commencer le pique-nique.", answers: ["serons arrivés", "allons arriver", "sommes arrivés", "arrivions"], correct: "serons arrivés" }
    ],

    italian: [
        // A1 – Basic
        { question: "How do you say 'Good morning' in Italian?", answers: ["Grazie", "Ciao", "Buonasera", "Buongiorno"], correct: "Buongiorno" },
        { question: "Translate: 'I am a student.'", answers: ["Io sono uno studente", "Io sono un insegnante", "Io sono una casa", "Io sono un libro"], correct: "Io sono uno studente" },
        { question: "Which word means 'apple'?", answers: ["Arancia", "Banana", "Mela", "Pera"], correct: "Mela" },
        { question: "How do you say 'Thank you' in Italian?", answers: ["Grazie", "Per favore", "Ciao", "Buongiorno"], correct: "Grazie" },
        { question: "Translate: 'Goodbye.'", answers: ["Buongiorno", "Ciao", "Arrivederci", "Grazie"], correct: "Arrivederci" },

        // A2 – Functional
        { question: "Complete the sentence: 'Noi ___ al parco.' (We go to the park.)", answers: ["andate", "andiamo", "va", "vado"], correct: "andiamo" },
        { question: "Plural of 'il gatto' (the cat)?", answers: ["i gatti", "il gatti", "le gatti", "gli gatti"], correct: "i gatti" },
        { question: "Complete: 'Tu ___ italiano?' (Do you speak Italian?)", answers: ["parli", "parla", "parlate", "parlano"], correct: "parli" },
        { question: "Which sentence is correct?", answers: ["Loro sono felice", "Loro è felici", "Loro sono felici", "Loro sono felicità"], correct: "Loro sono felici" },
        { question: "Translate: 'They have two books.'", answers: ["Loro ha due libri", "Loro hai due libri", "Loro hanno due libro", "Loro hanno due libri"], correct: "Loro hanno due libri" },

        // B1+ - Advanced
        { question: "Quando mi hai telefonato, io ________ già le film di cui mi parlavi.", answers: ["avevo visto", "ho visto", "ebbi visto", "vedessi"], correct: "avevo visto" },
        { question: "Se ________ più soldi a disposizione l'anno scorso, avrei fatto il giro del mondo.", answers: ["avessi avuto", "avrei avuto", "abbia avuto", "avessi"], correct: "avessi avuto" },
        { question: "Trova il sinonimo più ricercato per descrivere una persona estremamente felice e soddisfatta:", answers: ["al settimo cielo", "disorientata", "stravolta", "incuriosita"], correct: "al settimo cielo" },
        { question: "Benché sia giovane, credo che lei ________ parlare fluentemente tre lingue straniere.", answers: ["sappia", "sa", "saprebbe", "seppe"], correct: "sappia" },
        { question: "Sbrighiamoci! Il treno ________ partire e non possiamo permetterci di perderlo.", answers: ["sta per", "stia per", "starà per", "è per"], correct: "sta per" }
    ],

    spanish: [
        // A1 – Basic
        { question: "How do you say 'Good morning' in Spanish?", answers: ["Buenos días", "Buenas noches", "Hola", "Gracias"], correct: "Buenos días" },
        { question: "Translate: 'I am a student.'", answers: ["Soy un estudiante", "Soy un profesor", "Soy una casa", "Soy un libro"], correct: "Soy un estudiante" },
        { question: "Which word means 'apple'?", answers: ["Manzana", "Plátano", "Naranja", "Pera"], correct: "Manzana" },
        { question: "How do you say 'Thank you' in Spanish?", answers: ["Adiós", "Por favor", "Hola", "Gracias"], correct: "Gracias" },
        { question: "How do you ask 'What is your name?'", answers: ["¿Cómo te llamas?", "¿Cómo está?", "¿Qué tal?", "¿Dónde vives?"], correct: "¿Cómo te llamas?" },

        // A2 – Functional
        { question: "Complete: 'Nosotros ___ al cine.'", answers: ["va", "vamos", "vais", "van"], correct: "vamos" },
        { question: "Plural of 'el gato'?", answers: ["las gatos", "el gatos", "los gato", "los gatos"], correct: "los gatos" },
        { question: "Complete: '¿Tú ___ español?'", answers: ["habla", "hablas", "hablamos", "hablan"], correct: "hablas" },
        { question: "Which sentence is correct?", answers: ["Ellos están felices", "Ellos está felices", "Ellos son feliz", "Ellas es felices"], correct: "Ellos están felices" },
        { question: "Translate: 'They have two books.'", answers: ["Ellos tienen dos libro", "Ellos tiene dos libros", "Ellos tienen dos libros", "Ellos tienes dos libros"], correct: "Ellos tienen dos libros" },

        // B1+ - Advanced
        { question: "Cuando mis amigos llegaron al cine, yo ya ________ la película.", answers: ["había visto", "hube visto", "veía", "vi"], correct: "había visto" },
        { question: "Si ________ más dinero el año pasado, habría viajado por todo el mundo.", answers: ["tuviera", "había tenido", "hubiera tenido", "tendría"], correct: "hubiera tenido" },
        { question: "Busca un sinónimo más preciso para 'muy feliz' en un contexto de gran satisfacción:", answers: ["eufórico", "animado", "entretenido", "asombrado"], correct: "eufórico" },
        { question: "Es probable que ella ________ tres idiomas con fluidez para el final del curso.", answers: ["hable", "habla", "hablará", "hablara"], correct: "hable" },
        { question: "¿Dónde está Juan? - No lo sé, ________ en el parque con sus amigos ahora mismo.", answers: ["estará", "esté", "estaría", "estaba"], correct: "estará" }
    ],

    german: [
        // A1 – Basic
        { question: "How do you say 'Good morning' in German?", answers: ["Guten Morgen", "Guten Abend", "Hallo", "Danke"], correct: "Guten Morgen" },
        { question: "Translate: 'I am a student.'", answers: ["Ich bin ein Buch", "Ich bin ein Lehrer", "Ich bin ein Haus", "Ich bin ein Student"], correct: "Ich bin ein Student" },
        { question: "Which word means 'apple'?", answers: ["Banane", "Apfel", "Orange", "Birne"], correct: "Apfel" },
        { question: "How do you say 'Thank you' in German?", answers: ["Danke", "Bitte", "Hallo", "Tschüss"], correct: "Danke" },
        { question: "How do you ask 'What is your name?'", answers: ["Wie heißt du?", "Wie geht es?", "Wo wohnst du?", "Was machst du?"], correct: "Wie heißt du?" },

        // A2 – Functional
        { question: "Complete: 'Wir ___ ins Kino.'", answers: ["gehen", "geht", "gehe", "gehst"], correct: "gehen" },
        { question: "Plural of 'die Katze'?", answers: ["die Katzen", "die Katze", "der Katzen", "die Katzes"], correct: "die Katzen" },
        { question: "Complete: 'Du ___ Deutsch?'", answers: ["sprichst", "spricht", "sprechen", "sprecht"], correct: "sprichst" },
        { question: "Which sentence is correct?", answers: ["Sie sind glücklich", "Sie ist glücklich", "Sie sind glücklichs", "Sie sind Glücklich"], correct: "Sie sind glücklich" },
        { question: "Translate: 'They have two books.'", answers: ["Sie haben zwei Bücher", "Sie hat zwei Bücher", "Sie haben zwei Buch", "Sie habt zwei Bücher"], correct: "Sie haben zwei Bücher" },

        // B1+ - Advanced
        { question: "Nachdem ich den Film ________, reflektierte ich über die tiefere Bedeutung Handlung.", answers: ["gesehen habe", "gesehen hatte", "sehen würde", "sah"], correct: "gesehen hatte" },
        { question: "Hätte ich damals mehr Geld zur Verfügung gehabt, ________ ich zweifellos eine Weltreise unternommen.", answers: ["werde", "würde", "hätte", "hätte würde"], correct: "hätte" },
        { question: "Welches Wort beschreibt einen Zustand von tiefer Zufriedenheit und innerer Ausgeglichenheit?", answers: ["glückselig", "amüsiert", "belustigt", "aufgeregt"], correct: "glückselig" },
        { question: "In diesem internationalen Unternehmen ________ fließende Kenntnisse in drei Sprachen vorausgesetzt.", answers: ["werden", "können", "müssen", "sollen"], correct: "werden" },
        { question: "Es ist bewölkt. Ob wir morgen tatsächlich in den Park gehen können? Wir ________ wohl abwarten müssen.", answers: ["werden", "würden", "gingen", "haben"], correct: "werden" }
    ]
};


    // 2. Η ΚΕΝΤΡΙΚΗ ΛΟΓΙΚΗ ΤΟΥ ΚΟΥΙΖ (ΜΟΝΟ ΜΙΑ ΦΟΡΑ)
    function initializeQuiz(quizContainerId, quizData, language) {
        const quizContainer = document.getElementById(quizContainerId);
        if (!quizContainer) return; // Αν δεν βρεθεί το container, σταματάει

        // --- Στοιχεία του quiz ---
        const quizEl = quizContainer.querySelector('#quiz');
        const resultsEl = quizContainer.querySelector('#results');
        const questionTextEl = quizContainer.querySelector('#question-text');
        const headerParagraphEl = quizContainer.querySelector('.quiz-header p');
        const answerOptionsEl = quizContainer.querySelector('#answer-options');
        const startBtn = quizContainer.querySelector('#start-btn');
        const nextBtn = quizContainer.querySelector('#next-btn');
        const prevBtn = quizContainer.querySelector('#prev-btn');
        const restartBtn = quizContainer.querySelector('#restart-btn');
        const progressInfoEl = quizContainer.querySelector('.progress-info');
        const questionCounterEl = quizContainer.querySelector('#question-counter');
        const progressBarEl = quizContainer.querySelector('#progress-bar');
        const resultsContentEl = quizContainer.querySelector('#results-content');

        let currentQuestionIndex;
        let userAnswers;

        // --- Event Listeners ---
        startBtn.addEventListener('click', startQuiz);
        nextBtn.addEventListener('click', nextQuestion);
        prevBtn.addEventListener('click', previousQuestion);
        restartBtn.addEventListener('click', restartQuiz);

        // --- Ξεκίνα quiz ---
        function startQuiz() {
            startBtn.style.display = 'none';
            headerParagraphEl.style.display = 'none';
            progressInfoEl.style.display = 'flex';
            currentQuestionIndex = 0;
            userAnswers = new Array(quizData.length).fill(null);
            showQuestion();
        }

        // --- Εμφάνιση ερώτησης ---
        function showQuestion() {
            resetState();
            const currentQuestion = quizData[currentQuestionIndex];
            questionTextEl.textContent = currentQuestion.question;

            currentQuestion.answers.forEach(answerText => {
                const button = document.createElement('button');
                button.className = 'answer-btn';
                button.textContent = answerText;
                button.addEventListener('click', selectAnswer);
                answerOptionsEl.appendChild(button);
            });

            updateProgressAndButtons();
            restoreAnswerState();
        }

        // --- Επιλογή απάντησης ---
        function selectAnswer(e) {
            const selectedBtn = e.target;
            Array.from(answerOptionsEl.children).forEach(btn => btn.classList.remove('selected'));
            selectedBtn.classList.add('selected');
            userAnswers[currentQuestionIndex] = selectedBtn.textContent;
            nextBtn.style.display = 'block';
        }

        // --- Επαναφορά κατάστασης επιλεγμένης απάντησης ---
        function restoreAnswerState() {
            const userAnswer = userAnswers[currentQuestionIndex];
            if (userAnswer !== null) {
                const selectedBtn = Array.from(answerOptionsEl.children).find(btn => btn.textContent === userAnswer);
                if (selectedBtn) selectedBtn.classList.add('selected');
                nextBtn.style.display = 'block';
            }
        }

        // --- Επόμενη ερώτηση ---
        function nextQuestion() {
            if (userAnswers[currentQuestionIndex] === null) { alert("Please select an answer."); return; }
            currentQuestionIndex++;
            if (currentQuestionIndex < quizData.length) showQuestion();
            else showResults();
        }

        // --- Προηγούμενη ερώτηση ---
        function previousQuestion() {
            if (currentQuestionIndex > 0) { currentQuestionIndex--; showQuestion(); }
        }

        // --- Εμφάνιση αποτελεσμάτων ---
        function showResults() {
            quizEl.style.display = 'none';
            resultsEl.style.display = 'block';
            let finalScore = 0;
            let detailsHtml = '';

            quizData.forEach((question, index) => {
                const userAnswer = userAnswers[index];
                const isCorrect = userAnswer === question.correct;
                if (isCorrect) finalScore++;
                detailsHtml += `<li>
                    <p class="question-title">${index + 1}. ${question.question}</p>
                    <p class="user-answer ${isCorrect ? 'correct' : 'incorrect'}">Your answer: ${userAnswer || 'Not answered'}</p>
                    ${!isCorrect ? `<p class="correct-answer-text">Correct answer: ${question.correct}</p>` : ''}
                </li>`;
            });

            const percentage = Math.round((finalScore / quizData.length) * 100);
            let feedbackText = '';
            if (language === 'french','german','italian','spanish') {
                feedbackText = percentage < 40 ? 'You are just beginning your journey in French (Level A1). Keep trying!' :
                               percentage < 70 ? 'You are doing quite well! You have the basic knowledge (Level A2).' :
                               'Great job! Your level is quite advanced (Level B1+).';
            }

            // … αντίστοιχα για italian, spanish, german

            resultsContentEl.innerHTML = `<div class="result-item">
                <h3>Total Score: ${finalScore} / ${quizData.length} (${percentage}%)</h3>
                <p>${feedbackText}</p>
            </div>
            <ul class="result-details">${detailsHtml}</ul>`;
        }

        // --- Καθαρισμός κατάστασης για νέα εμφάνιση ερώτησης ---
        function resetState() { nextBtn.style.display = 'none'; answerOptionsEl.innerHTML = ''; }

        // --- Ενημέρωση progress bar και κουμπιών ---
        function updateProgressAndButtons() {
            questionCounterEl.textContent = `Question ${currentQuestionIndex + 1} / ${quizData.length}`;
            progressBarEl.style.width = `${((currentQuestionIndex + 1) / quizData.length) * 100}%`;
            prevBtn.style.display = currentQuestionIndex > 0 ? 'block' : 'none';
        }

        // --- Επανεκκίνηση quiz ---
        function restartQuiz() {
            resultsEl.style.display = 'none';
            quizEl.style.display = 'block';
            startBtn.style.display = 'block';
            headerParagraphEl.style.display = 'block';
            progressInfoEl.style.display = 'none';
            questionTextEl.textContent = `Welcome to the ${language.charAt(0).toUpperCase() + language.slice(1)} Language Level Test!`;
            resetState();
        }
    }

    // 3. ΕΛΕΓΧΟΣ ΓΙΑ ΤΟ ΠΟΙΟ ΚΟΥΙΖ ΘΑ ΤΡΕΞΕΙ
    initializeQuiz('french-quiz', allQuizzesData.french, 'french');
    initializeQuiz('italian-quiz', allQuizzesData.italian, 'italian');
    initializeQuiz('spanish-quiz', allQuizzesData.spanish, 'spanish');
    initializeQuiz('german-quiz', allQuizzesData.german, 'german');
    // πρόσθεσε spanish και german με τον ίδιο τρόπο
});
