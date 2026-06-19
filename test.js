document.addEventListener('DOMContentLoaded', () => {


    const questions = [
        // Ενότητα Α
        { text: "I enjoy solving problems that require logical thinking.", type: 'I' },
        { text: "I prefer to express myself through words, either in writing or speaking.", type: 'A' },
        { text: "I feel comfortable taking initiative and guiding others.", type: 'E' },
        { text: "I prefer working with clear instructions and a structured plan.", type: 'C' },
        { text: "I love creating something new or original.", type: 'A' },
        { text: "I feel satisfied when I help someone understand something.", type: 'S' },
        { text: "I love immersing myself in one big project over time.", type: 'I' },
        { text: "I prefer working with abstract concepts and theories rather than practical, tangible objects.", type: 'I' },
        { text: "I see criticism as an opportunity for improvement, not as a personal attack.", type: 'E' },
        // Ενότητα Β
        { text: "I am fascinated by scientific discoveries.", type: 'I' },
        { text: "I would be interested in designing or building something with my hands.", type: 'R' },
        { text: "I enjoy participating in teams and collaborating.", type: 'S' },
        { text: "I would like to have my own business in the future.", type: 'E' },
        { text: "I feel that I have artistic imagination or a sense of aesthetics.", type: 'A' },
        { text: "I am interested in understanding how people work.", type: 'S' },
        { text: "I prefer a stable, organized work environment.", type: 'C' },
        { text: "I enjoy working with numbers, statistics, or data.", type: 'C' },
        { text: "I am fascinated by how the human body works and by biology.", type: 'I' },
        { text: "The idea of writing code or creating software seems interesting to me.", type: 'I' },
        { text: "I enjoy analyzing economic trends, markets, or business strategies.", type: 'E' },
        { text: "I am interested in studying the past (History) and different cultures.", type: 'A' },
        { text: "I would be interested in defending people’s rights or interpreting laws.", type: 'E' },
        // Ενότητα Γ
        { text: "Mathematics feels easy and enjoyable to me.", type: 'I' },
        { text: "I express myself comfortably, both verbally and in writing.", type: 'A' },
        { text: "I am good at noticing details.", type: 'C' },
        { text: "I can explain complex topics in simple terms.", type: 'S' },
        { text: "I have creative ideas for videos, design, or music.", type: 'A' },
        { text: "I am organized and methodical in my work.", type: 'C' },
        { text: "I can easily use technology and computer programs.", type: 'R' },
        { text: "I feel that I can persuade and inspire others.", type: 'E' },
        { text: "I have the ability to visualize three-dimensional objects in my mind and understand designs.", type: 'R' },
        { text: "I can easily put myself in someone else's shoes and understand their feelings (empathy).", type: 'S' },
        { text: "I am good at spotting patterns and connections within large amounts of information.", type: 'I' },
        // Ενότητα Δ
        { text: "I want my job to provide steady income and security.", type: 'C' },
        { text: "I want to contribute to the greater good or help people.", type: 'S' },
        { text: "I prefer work that offers flexibility and independence.", type: 'A' },
        { text: "I care more about creating than making money.", type: 'A' },
        { text: "I want a career that offers growth and recognition.", type: 'E' },
        { text: "I prefer working in an environment with clear rules and hierarchy.", type: 'C' },
        // Ενότητα Ε
        { text: "I would like to participate in a scientific experiment or research.", type: 'I' },
        { text: "I would like to help patients or people in need.", type: 'S' },
        { text: "I would like to work with technological systems, machines, or computers.", type: 'R' },
        { text: "I would be interested in writing articles, creating content, or communicating ideas.", type: 'A' },
        { text: "I would like to design or build something practical (e.g., a robot, building, or piece of furniture).", type: 'R' },
        { text: "I would enjoy leading a team or organizing a project.", type: 'E' },
        { text: "I would be satisfied working on legal, administrative, or accounting matters.", type: 'C' },
        { text: "I have good physical stamina and enjoy activities that involve movement.", type: 'R' }
    ];

    const answerLabels = [
        { text: "Strongly disagree", value: 1 },
        { text: "Disagree", value: 2 },
        { text: "Neither agree nor disagree", value: 3 },
        { text: "Agree", value: 4 },
        { text: "Strongly agree", value: 5 }
    ];

    const personalityTypes = {
        R: {
            title: "Practical / Realistic Type",
            description: "You enjoy working with your hands, machines, tools, and objects. You prefer practical solutions and hands-on activities.",
            tracks: ["Science & Health Studies Group"],
            profession: ["Engineer, Computer Technician, Doctor, Physiotherapist, Pilot, Sailor, Architect, Builder"]
        },
        I: {
            title: "Research-Oriented Type",
            description: "You enjoy observing, analyzing, and solving problems. Logical thinking, research, and science fascinate you.",
            tracks: ["Science & Health Studies Group", "Economics & Computer Science Studies Group (for Computer Science)"],
            profession: ["Physicist, Chemist, Researcher, Pharmacist, Programmer, Economist, Statistician"]
        },
        A: {
            title: "Investigative Type",
            description: "You enjoy observing, analyzing, and solving problems. Logical thinking, research, and science fascinate you.",
            tracks: ["Science & Health Studies Group, Economics & Informatics Studies Group (for Computer Science)"],
            profession: ["Physicist, Chemist, Researcher, Pharmacist, Programmer, Economist, Statistician"]
        },
        S: {
            title: "Social Type",
            description: "You enjoy collaborating, helping, teaching, and caring for others. You have empathy and strong communication skills.",
            tracks: ["Humanities Studies Group, Science & Health Studies Group (for healthcare professions)"],
            profession: ["Teacher, Educator, Nurse, Speech Therapist, Psychologist"]
        },
        E: {
            title: "Enterprising Type",
            description: "You enjoy leading, persuading, organizing, and achieving goals. You are confident and not afraid to take initiative.",
            tracks: ["Economics & IT Studies Group, Humanities Studies Group (for Law, Political Science)"],
            profession: ["Marketing, Public Relations, Manager, Lawyer "]
        },
        C: {
            title: "Conventional / Organized Type",
            description: "You prefer order, organization, and precision. You enjoy working with data, numbers, and following clear instructions.",
            tracks: ["Economics & IT Studies Group"],
            profession: ["Civil Servant, Banker, Secretary, Accountant"]
        }
    };


    let currentQuestionIndex = 0;
    const userAnswers = new Array(questions.length).fill(null);
    const totalQuestions = questions.length;

    const quizEl = document.getElementById('quiz');
    const resultsEl = document.getElementById('results');
    const questionTextEl = document.getElementById('question-text');
    const answerOptionsEl = document.getElementById('answer-options');
    const startBtn = document.getElementById('start-btn');
    const restartBtn = document.getElementById('restart-btn');
    const questionCounterEl = document.getElementById('question-counter');
    const progressBarEl = document.getElementById('progress-bar');
    const progressInfoEl = document.querySelector('.progress-info');
    const resultsContentEl = document.getElementById('results-content');
    
    const nextBtn = document.getElementById('next-btn');
    const prevBtn = document.getElementById('prev-btn');


    startBtn.addEventListener('click', startQuiz);
    restartBtn.addEventListener('click', () => location.reload()); 
    nextBtn.addEventListener('click', nextQuestion);
    prevBtn.addEventListener('click', previousQuestion);


    function startQuiz() {
        startBtn.style.display = 'none';
        progressInfoEl.style.display = 'flex';
        showQuestion();
    }
    
    function showQuestion() {
        answerOptionsEl.innerHTML = '';
        questionTextEl.textContent = questions[currentQuestionIndex].text;
        
        answerLabels.forEach(answer => {
            const button = document.createElement('button');
            button.textContent = answer.text;
            button.classList.add('answer-btn');
            button.dataset.value = answer.value;

            // **ΑΛΛΑΓΗ:** Αν η ερώτηση έχει ήδη απαντηθεί, κάνουμε το κουμπί 'selected'.
            if (userAnswers[currentQuestionIndex] !== null && userAnswers[currentQuestionIndex].value === answer.value) {
                button.classList.add('selected');
            }

            button.addEventListener('click', handleAnswer);
            answerOptionsEl.appendChild(button);
        });
        
        updateProgress();
    }

    function handleAnswer(event) {
        const selectedValue = parseInt(event.target.dataset.value);
        const questionType = questions[currentQuestionIndex].type;
        
        userAnswers[currentQuestionIndex] = { type: questionType, value: selectedValue };
        
        Array.from(answerOptionsEl.children).forEach(btn => btn.classList.remove('selected'));
        event.target.classList.add('selected');

        updateProgress(); 
    }

    function nextQuestion() {
        if (userAnswers[currentQuestionIndex] === null) {
            alert("Please select an answer.");
            return;
        }

        currentQuestionIndex++;
        if (currentQuestionIndex < totalQuestions) {
            showQuestion();
        } else {
            showResults();
        }
    }

    function previousQuestion() {
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            showQuestion();
        }
    }

    function updateProgress() {
        questionCounterEl.textContent = `Question ${currentQuestionIndex + 1} / ${totalQuestions}`;
        const progressPercent = ((currentQuestionIndex) / totalQuestions) * 100;
        progressBarEl.style.width = `${progressPercent}%`;

        prevBtn.style.display = currentQuestionIndex > 0 ? 'inline-block' : 'none';
        
        nextBtn.style.display = 'inline-block';
        
        if (userAnswers[currentQuestionIndex] === null) {
            nextBtn.disabled = true;
        } else {
            nextBtn.disabled = false;
        }
        
        if (currentQuestionIndex === totalQuestions - 1) {
            nextBtn.textContent = "View the Results";
        } else {
            nextBtn.textContent = "Next";
        }
    }

    function showResults() {
        quizEl.style.display = 'none';
        resultsEl.style.display = 'block';

        const scores = { R: 0, I: 0, A: 0, S: 0, E: 0, C: 0 };
        userAnswers.forEach(answer => {
            if (answer) {
                scores[answer.type] += answer.value;
            }
        });

        const sortedScores = Object.entries(scores).sort((a, b) => b[1] - a[1]);
        const topTypeKey = sortedScores[0][0];
        const secondTypeKey = sortedScores[1][0];

        const topType = personalityTypes[topTypeKey];
        const secondType = personalityTypes[secondTypeKey];
        
        resultsContentEl.innerHTML = `
            <div class="result-item">
                <h3>1. Main Type: ${topType.title}</h3>
                <p>${topType.description}</p>
            </div>
            <div class="result-item">
                <h3>2. Secondary Type: ${secondType.title}</h3>
                <p>${secondType.description}</p>
            </div>
            <div class="result-item">
                <h3>Suggested Orientation Groups</h3>
                <p>Based on the combination of your traits, the directions that suit you best are:</p>
                <ul>
                    ${[...new Set([...topType.tracks, ...secondType.tracks])].map(track => `<li>${track}</li>`).join('')}
                </ul>
            </div>
            <div class="result-item">
                <h3>Suggested Job Positions </h3>
                <p>Based on the combination of your traits, the job positions that suit you best are:</p>
                <ul>
                    ${[...new Set([...topType.profession, ...secondType.profession])].map(profession => `<li>${profession}</li>`).join('')}
                </ul>
            </div>
        `;
    }
});