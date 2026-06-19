const teachers = [
    // --- Academic Pathways ---
    {
        id: 1,
        name: "Dr. Elena Papadopoulou",
        title: "Professor of Ancient Greek",
        university: "Horizon University, Department of Humanities",
        image: "Images/Teacher-Faces/teacher-papadopoulou.jpg",
        contact: { email: "papadopoulou@university.edu", phone: "(555) 123-4567", office: "Humanities Building, Room 201" },
        skills: ["Classical Greek", "Homeric Epics", "Platonic Philosophy", "Manuscript Analysis", "Etymology", "Classical Greek Language", "Ancient Rhetoric"],
        about: `Greetings! I’m Dr. Elena Papadopoulou, a devoted scholar of Ancient Greek language and culture with over 20 years of experience in classical studies. My fascination with the ancient world began as a young student, captivated by the timeless narratives of Homer’s Iliad and Odyssey and the profound philosophical inquiries of Plato and Aristotle. At Horizon University, I lead students on an intellectual journey through the rich tapestry of Ancient Greek literature, philosophy, and history. My research focuses on the interplay between language and thought in classical texts, and I’ve published extensively on Homeric poetry and the evolution of Greek philosophical discourse. My mission is to make the ancient world vibrant and relevant, connecting its wisdom to modern questions of ethics, identity, and human experience. Outside the classroom, I enjoy exploring archaeological sites and mentoring students in their own research projects.`,
        philosophy: `I believe that studying Ancient Greek is not just about mastering a language but about unlocking the intellectual and cultural foundations of Western civilization. My teaching philosophy centers on fostering a deep, personal connection to the texts we study. In my classroom, students don’t just memorize grammar—they engage with ancient authors as if they were contemporaries, debating their ideas and analyzing their words. I emphasize active learning through translation workshops, Socratic discussions, and creative projects that bring texts like Sophocles’ tragedies or Sappho’s poetry to life. My goal is to empower students to read with confidence, think critically, and appreciate the enduring relevance of classical wisdom. By creating an inclusive and collaborative environment, I aim to inspire curiosity and a lifelong passion for learning.`,
        testimonials: [{ text: "Dr. Papadopoulou transformed my view of Ancient Greek. Her classes are like stepping into a time machine—she makes Homer and Plato feel alive and relevant. Her patience and enthusiasm make even the toughest texts approachable", author: "- Alex Johnson, Class of '24" }, { text: "Elena’s passion for Greek literature is unmatched. She guided me through translating my first Homeric passage, and her encouragement made it one of the most rewarding experiences of my academic career.", author: "- Maria Garcia, PhD Candidate" }, {
            text: "Her classes are a perfect blend of rigor and inspiration. Dr. Papadopoulou’s discussions on Greek philosophy opened my eyes to ideas that still shape how we think today.", author: "- Nikos Stavros, Undergraduate"
        }]
    },
    {
        id: 2,
        name: "Nikos Georgiou",
        title: "Professor of Physics",
        university: "Starlight University, Department of Science",
        image: "Images/Teacher-Faces/teacher-georgiou.jpg",
        contact: { email: "georgiou@university.edu", phone: "(555) 987-6543", office: "Physics Building, Room 105" },
        skills: ["Quantum Mechanics", "Thermodynamics", "Astrophysics", "Experimental Design", "Data Analysis", "Experimental Physics"],
        about: `Hello! I’m Nikos Georgiou, a physicist with a lifelong passion for uncovering the mysteries of the universe. My journey in physics began with a childhood fascination with the stars, leading me to a career exploring everything from quantum particles to cosmic phenomena. At Horizon University, I teach and conduct research in the Department of Physics, where I’ve published over 30 papers on quantum field theory and astrophysical modeling. My classes are designed to spark wonder, making complex concepts like relativity and quantum mechanics accessible through hands-on experiments and real-world applications. Beyond academia, I’m an advocate for science outreach, often speaking at public lectures and mentoring students in research projects. When I’m not in the lab, you’ll find me stargazing or tinkering with computational simulations..`,
        philosophy: `Physics is the key to understanding the universe, and I believe every student can grasp its beauty with the right approach. My teaching philosophy emphasizes active learning, blending rigorous theory with practical experiments to make abstract concepts tangible. I encourage students to ask bold questions, test hypotheses, and embrace the iterative nature of scientific discovery. My classroom is a collaborative space where we explore phenomena like black holes or quantum entanglement through simulations, labs, and discussions. My goal is to equip students with critical thinking and problem-solving skills, empowering them to apply physics to real-world challenges and pursue their own scientific curiosities.`,
        testimonials: [{ text: "Professor Georgiou makes physics so engaging! His labs are the highlight of the course, and he explains complex topics in a way that’s easy to grasp.", author: "- Author: James Lee, Undergraduate" }]
    },

    {
        id: 3,
        name: "Katerina Vlachou",
        title: "Professor of Chemistry",
        university: "Horizon University, Department of Science",
        image: "Images/Teacher-Faces/teacher-vlachou.jpg",
        contact: { email: "vlachou@university.edu", phone: "(555) 111-2222", office: "Chemistry Wing, Room 303" },
        skills: ["Organic Chemistry", "Lab Techniques", "Pharmaceutical Science", "Spectroscopy", "Biochemistry"],
        about: `Hi, I’m Katerina Vlachou, a chemist driven by a passion for understanding the molecular world. My fascination with chemistry began with experiments in my high school lab, sparking a career dedicated to exploring the intricacies of chemical reactions and their applications. At Horizon University, I teach and lead research in the Department of Chemistry, focusing on sustainable synthesis and biochemical processes. With over 15 years of experience and numerous publications in organic chemistry, I strive to make chemistry accessible and exciting for my students. My classes blend theory with hands-on lab work, showing how chemistry shapes everything from medicine to environmental solutions. Outside the lab, I enjoy mentoring aspiring scientists and participating in community science workshops`,
        philosophy: `Chemistry is the science of transformation, and I believe learning it should be a transformative experience. My teaching philosophy centers on fostering curiosity and critical thinking through interactive labs, collaborative projects, and real-world applications. I create a supportive environment where students feel safe to experiment, make mistakes, and learn from them. Whether we’re synthesizing new compounds or analyzing molecular structures, my goal is to help students see chemistry as a creative and impactful field. I aim to equip them with the skills to solve complex problems, from developing new drugs to addressing environmental challenges, while inspiring a lifelong love for discovery.`,
        testimonials: [{ text: "Professor Vlachou’s classes are a perfect mix of theory and hands-on experiments. She makes chemistry fun and relevant!.", author: "- Emily Chen, Class of '25" },

        { text: "Katerina’s enthusiasm for chemistry is inspiring. She helped me understand complex concepts and boosted my confidence in the lab.", author: "- Michael Patel, MSc Student" }],
    },
    {
        id: 4,
        name: "Alexandros Papas",
        title: "Professor of Mathematics",
        university: "Luminary College, Department of Mathematics",
        image: "Images/Teacher-Faces/teacher-papas.jpg",
        contact: { email: "papas@university.edu", phone: "(555) 333-4444", office: "Math Tower, Room 501" },
        skills: ["Calculus", "Linear Algebra", "Abstract Mathematics", "Mathematical Modeling", "Number Theory"],
        about: `Greetings! I’m Alexandros Papas, a mathematician captivated by the elegance and logic of numbers. My academic career has been dedicated to exploring the beauty of mathematics and sharing it with students at Starlight University. From calculus to abstract algebra, I strive to make math not only understandable but also enjoyable, showing students how it underpins so many aspects of our world.`,
        philosophy: `Mathematics is a universal language that unlocks problem-solving potential. My teaching philosophy centers on clarity, patience, and engagement, helping students build confidence in tackling complex problems. I use real-world applications and interactive methods to make abstract concepts concrete. My classroom is a space where students feel empowered to explore, question, and discover the power of mathematics.`,
        testimonials: [{ text: "Professor Papas makes math so approachable. His step-by-step explanations turned calculus from a nightmare into something I love!", author: "- Liam Brown, Class of '24" }, {
            text: "Alexandros is incredibly patient and makes even the toughest math topics clear. His classes are challenging but rewarding.", author: "- L Sophia Nguyen, Undergraduate"
        }]
    },

    {
        id: 5,
        name: "Foteini Markou",
        title: "Professor of History",
        university: "Celestial Institute, Department of Humanities",
        image: "Images/Teacher-Faces/teacher-markou.jpg",
        contact: { email: "markou@university.edu", phone: "(555) 555-6666", office: "Humanities Building, Room 205" },
        skills: ["European History", "Byzantine Studies", "Medieval Studies", "Primary Source Analysis", "Archival Research", "Historical Analysis"],
        about: `Hello, I’m Foteini Markou, a historian committed to illuminating the past to better understand the present. My passion for history was ignited by stories of ancient civilizations and pivotal events that shaped societies, leading me to a career exploring European and global narratives. At Horizon University, I teach in the Department of History, where my research delves into medieval cultural exchanges, social movements, and the impact of historical events on modern identities. With over 18 years of experience and publications in journals on topics like the Renaissance and colonial histories, I aim to make history vivid and relatable. My classes encourage students to connect past events to contemporary issues, fostering empathy and critical insight. Beyond teaching, I curate museum exhibits, participate in historical documentaries, and mentor students in archival research projects.`,
        philosophy: `History is a bridge between eras, and I believe studying it cultivates empathy, critical thinking, and informed citizenship. My teaching philosophy revolves around immersive storytelling, primary source analysis, and inclusive discussions that challenge students to question dominant narratives. In my classroom, we don’t just memorize facts—we reconstruct events through debates, role-playing, and digital tools to visualize historical timelines. I create a welcoming environment where diverse perspectives are valued, and students learn to evaluate evidence rigorously. My goal is to inspire students to see history as a dynamic force, equipping them with skills to analyze current events and contribute to a more just society.`,
        testimonials: [{ text: "Professor Markou’s passion for history is infectious. Her classes make you feel like you’re living in the past!", author: "- Olivia Smith, Class of '23" }, { text: "Foteini’s emphasis on primary sources and debates made me a better thinker. Her passion for cultural history is truly inspiring.", author: "- Daniel Kim, PhD Candidate" }, {
            text: "Her courses are engaging and thought-provoking. Professor Markou helped me connect historical events to modern issues, changing how I view the world", author: "- Andreas Petrou, Undergraduate"
        }]
    },
    {
        id: 6,
        name: "Dr. Maria Angeli",
        title: "Professor of Latin",
        university: "Pinnacle University, Department of Humanities",
        image: "Images/Teacher-Faces/teacher-angeli.jpg",
        contact: { email: "angeli@university.edu", phone: "(555) 777-8888", office: "Humanities Building, Room 208" },
        skills: ["Classical Latin", "Roman Literature", "Etymology", "Roman Philosoph", "Textual Criticism", "Classical Philology"],
        about: `Salvete! I’m Dr. Maria Angeli, a classicist with a deep love for the Latin language and Roman culture. My academic journey has been shaped by exploring the works of Virgil, Cicero, and Seneca, and I’m thrilled to share this passion with students at Starlight University. My classes aim to make Latin accessible, showing how its literature and ideas continue to influence modern thought and language.`,
        philosophy: `Learning Latin is like unlocking a treasure chest of history, philosophy, and literature. My teaching philosophy focuses on immersion and engagement, encouraging students to read and analyze Latin texts with confidence. I create a collaborative environment where students explore the nuances of the language and its cultural context. My goal is to make Latin a vibrant, living language for my students.`,
        testimonials: [{ text: "Dr. Angeli makes Latin feel alive. Her classes are engaging, and she’s always patient with our translations.", author: "- SEmma Davis, Class of '24" }, {
            text: "Maria’s enthusiasm for Latin literature is unmatched. She helped me appreciate the beauty of Roman texts.", author: "- Lucas Martinez, Undergraduate"
        }]
    },
    {
        id: 7,
        name: "Dimitris Ioannou",
        title: "Professor of Mathematics",
        university: "Paragon University, Department of Mathematics",
        image: "Images/Teacher-Faces/teacher-ioannou.jpg",
        contact: { email: "ioannou@university.edu", phone: "(555) 999-0000", office: "Math Tower, Room 502" },
        skills: ["Geometry", "Statistics", "Problem Solving", "Applied Mathematics", "Statistics", "Probability Theory"],
        about: `Hello, I’m Dimitris Ioannou, a mathematician passionate about the logic and beauty of numbers. At Starlight University, I teach students to appreciate mathematics as both an art and a science. From algebra to statistics, I aim to demystify complex concepts and show how math applies to everyday life. My classes are designed to spark curiosity and build problem-solving skills that last a lifetime..`,
        philosophy: `I believe mathematics is a tool for critical thinking and creativity. My teaching approach focuses on fostering a deep understanding of concepts through clear explanations and practical applications. I encourage students to embrace challenges and learn from mistakes, creating a supportive environment where everyone can succeed. My goal is to help students see the relevance and excitement of mathematics in their world.`,
        testimonials: [{ text: "Professor Ioannou breaks down math in a way that makes sense. His classes are engaging and make you want to learn more.", author: "- Student Review" }, { text: "Dimitris is an amazing teacher who makes math fun and approachable. His real-world examples really helped me understand the material.", author: "-  Noah Lee, MSc Student" }]
    },

    // --- Panhellenic Preparation (New IDs) ---
    {
        id: 8,
        name: "Sofia Zografou",
        title: "Modern Greek Language & Literature",
        university: "Panhellenic Exam Specialist",
        image: "Images/Teacher-Faces/teacher-zografou.jpg",
        contact: { email: "zografou@university.edu", phone: "(555) 121-2121", office: "Exam Prep Center" },
        skills: ["Essay Writing", "Literary Analysis", "Panhellenic Methodologies", "Poetry Analysis", "Literary Theory", "Creative Writing", "Prose and Essay Writing", "Panhellenic Exam Preparation"],
        about: `Hello, I’m Sofia Zografou, a dedicated scholar of Modern Greek Language and Literature with a passion for storytelling and linguistic artistry. For over 15 years, I’ve explored the rich tradition of Greek literature, from the works of Cavafy to contemporary novelists, and published extensively on narrative techniques and cultural identity. At Horizon University, I specialize in preparing students for the Panhellenic Examinations, guiding them to excel in Modern Greek through rigorous analysis and expressive writing. My classes blend literary exploration with exam-focused strategies, ensuring students master both content and technique. Beyond teaching, I organize literary workshops and contribute to cultural journals, fostering a love for Greek literature in the community.`,
        philosophy: `I believe Modern Greek is a vibrant bridge to cultural heritage and critical thinking. My teaching philosophy focuses on empowering students to excel in the Panhellenic Examinations by combining deep literary understanding with practical exam skills. Through close reading, essay-writing workshops, and timed practice tests, I create a dynamic classroom where students hone their analytical and creative abilities. I foster an inclusive environment where every voice is heard, encouraging students to connect literature to personal and societal themes. My goal is to prepare students not only for exams but also for a lifelong appreciation of Greek language and culture.`,
        testimonials: [{ text: "Professor Zografou’s classes made Modern Greek come alive. Her exam strategies helped me ace the Panhellenic literature section.", author: "- Katerina Papadakis, Class of '24" },
        { text: "Sofia’s passion for Greek literature is inspiring. She taught me how to write compelling essays under pressure, which was crucial for the exams", author: "- Nikos Arvanitis, Undergraduate" },
        { text: "Her workshops on poetry analysis were transformative. Professor Zografou’s guidance gave me the confidence to excel in the Panhellenic exams..", author: "- Maria Stavrou, Class of '25" }]
    },
    {
        id: 9,
        name: "George Anastasiou",
        title: "Mathematics",
        university: "Panhellenic Exam Specialist",
        image: "Images/Teacher-Faces/teacher-anastasiou.jpg",
        contact: { email: "anastasiou@university.edu", phone: "(555) 343-4343", office: "Exam Prep Center" },
        skills: ["Advanced Calculus", "Problem Solving", "Exam Strategies", "Algebra", "Geometry", "Mathematical Modeling", "Trigonometry"],
        about: `Greetings! I’m George Anastasiou, a mathematician devoted to unraveling the elegance of numbers and their applications. With 20 years of teaching experience, I specialize in preparing students for the Panhellenic Examinations in Mathematics at Horizon University. My research focuses on applied mathematics and educational methodologies, with publications in mathematical pedagogy. My classes combine rigorous problem-solving with tailored exam strategies, helping students tackle complex problems with confidence. Outside the classroom, I mentor math Olympiad teams and develop online resources to make mathematics accessible to all. My mission is to inspire a love for math and empower students to achieve top scores in their exams..`,
        philosophy: `Mathematics is a universal language that builds logical thinking and resilience. My teaching philosophy centers on clarity, practice, and strategic preparation for the Panhellenic Examinations. I use real-world applications, interactive problem-solving sessions, and mock exams to help students master key concepts and time management. My classroom is a supportive space where mistakes are learning opportunities, and I encourage students to approach challenges with curiosity. My goal is to ensure students not only excel in exams but also develop a deep appreciation for mathematics as a tool for life.`,
        testimonials: [{ text: "His mock exams prepared me perfectly for the Panhellenic tests. Professor Anastasiou’s encouragement made all the difference.", author: "- Yannis Kostas, Class of '25" },
        { text: "Professor Anastasiou’s classes are intense but so effective. His exam tips and practice problems helped me score high in the Panhellenic math exam.", author: "- Dimitris Georgiou, Class of '24" },
        { text: "George makes math clear and engaging. His step-by-step approach to calculus problems was a game-changer for my exam prep", author: "- Eleni Papadopoulos, Undergraduate" }]
    },
    {
        id: 10,
        name: "Eleni Constantinou",
        title: "Physics",
        university: "Panhellenic Exam Specialist",
        image: "Images/Teacher-Faces/teacher-constantinou.jpg",
        contact: { email: "costantinou@university.edu", phone: "(555) 343-4343", office: "Exam Prep Center" },
        skills: ["Electromagnetism", "Problem Solving", "Exam Strategies", "Panhellenic Exam Preparation", "Wave Optics", "Experimental Physics", "Mechanics"],
        about: `Hello! I’m Eleni Constantinou, a physicist specializing in health sciences applications and Panhellenic Examination preparation. My fascination with physics began with understanding how physical principles underpin medical technologies like MRI and ultrasound. At Horizon University, I teach physics tailored for health sciences students, focusing on exam readiness and practical applications. With 17 years of experience and research in medical physics, I’ve published on imaging technologies and biomechanics. My classes blend theory, lab experiments, and exam strategies to ensure students excel in the Panhellenic Exams and understand physics’ role in healthcare. I also collaborate with hospitals to bring real-world insights to my teaching.`,
        philosophy: `Physics is the foundation of health sciences, and I believe it should be engaging and relevant for aspiring medical professionals. My teaching philosophy emphasizes hands-on learning, exam-focused preparation, and connecting physics to healthcare applications. Through targeted practice tests, interactive labs, and discussions on topics like biomechanics, I prepare students for the Panhellenic Examinations while fostering critical thinking. My classroom is a collaborative space where students are encouraged to experiment and ask questions. My goal is to help students achieve top exam scores and inspire confidence in applying physics to their future careers.`,
        testimonials: [{ text: "Professor Constantinou’s physics classes were perfect for Panhellenic prep. Her labs and exam tips made complex topics manageable.", author: "- Sofia Dimitriou, Class of '24" }, { text: "Her enthusiasm and clear explanations made physics my favorite subject. Professor Constantinou’s guidance was crucial for my Panhellenic results..", author: "- Maria Antoniou, Class of '25" }]
    },
    {
        id: 11,
        name: "Christos Nikolaou",
        title: "Computer Science & Economics",
        university: "Panhellenic Exam Specialist",
        image: "Images/Teacher-Faces/teacher-nikolaou.jpg",
        contact: { email: "nikolaou@university.edu", phone: "(555) 343-4343", office: "Exam Prep Center" },
        skills: ["Programming (Python, Java)", "Problem Solving", "Data Analysis", "Game Theory", "Machine Learning", "Economic Modeling", "Algorithm Design"],
        about: `Hi, I’m Christos Nikolaou, a scholar bridging computer science and economics to prepare students for the Panhellenic Examinations and beyond. My career spans 20 years of teaching and research in algorithmic economics, data science, and computational modeling. At Horizon University, I guide students through the complexities of both disciplines, focusing on exam strategies and practical skills like coding and economic analysis. My publications explore game theory and AI-driven economic forecasting. I aim to make my classes engaging, blending coding labs with economic case studies to prepare students for competitive exams and future careers in tech and finance.`,
        philosophy: `Computer science and economics are powerful tools for understanding and shaping the modern world. My teaching philosophy focuses on integrating rigorous exam preparation with hands-on learning to excel in the Panhellenic Examinations. I use real-world projects, coding challenges, and economic simulations to teach concepts like algorithms and market dynamics. My classroom is a dynamic space where students collaborate, experiment, and develop critical thinking. My goal is to ensure students achieve high exam scores while gaining skills for careers in tech-driven economics..`,
        testimonials: [{ text: "Professor Nikolaou’s classes are perfect for Panhellenic prep. His coding labs and economics tips helped me excel in both subjects.", author: "- Andreas Papadopoulos, Class of '24" },
        { text: "Christos makes complex topics like game theory fun. His exam strategies were key to my success in the Panhellenic exams.", author: "- Eleni Georgiou, Undergraduate" },
        { text: "His teaching is dynamic and practical. Professor Nikolaou’s focus on coding and economics gave me a strong foundation for my future career.", author: "- Nikos Vlahos, Class of '25" }]
    },
    {
        id: 12,
        name: "Anna Petridou",
        title: "History",
        university: "Panhellenic Exam Specialist",
        image: "Images/Teacher-Faces/teacher-petridou.png",
        contact: { email: "petridou@university.edu", phone: "(555) 343-4343", office: "Exam Prep Center" },
        skills: ["Greek History", "World History", "Exam Strategies", "Panhellenic Exam Preparation", "Historiography", "Cultural History", "Historical Methodology", "Digital Humanities"],
        about: `Hello, I’m Anna Petridou, a historian passionate about uncovering the stories that shape our world. With 16 years of teaching experience, I specialize in Greek and world history, preparing students for the Panhellenic Examinations at Horizon University. My research focuses on 20th-century Greek history and global cultural exchanges, with publications in historical journals. My classes combine rigorous exam preparation with immersive storytelling, using primary sources and digital tools to bring history to life. I also lead community history projects and mentor students in research, aiming to make history a tool for understanding today’s world.`,
        philosophy: `History is a living narrative that informs our present and future. My teaching philosophy emphasizes critical analysis, exam readiness, and engagement for the Panhellenic Examinations. Through source-based discussions, essay practice, and interactive timelines, I help students master historical content and exam techniques. My classroom is an inclusive space where students explore diverse perspectives and connect history to contemporary issues. My goal is to prepare students for top exam performance while fostering a deep appreciation for history’s relevance.`,
        testimonials: [{ text: "Anna’s passion for Greek history is inspiring. Her practice essays were crucial for my Panhellenic preparation.", author: "- Maria Kallas, Class of '24" }, { text: "Her teaching makes history relevant and engaging. Professor Petridou’s guidance gave me confidence for the exams and beyond.", author: "- Sofia Papadakis, Class of '25" }]
    },
    {
        id: 13,
        name: "Vasilis Theodorou",
        title: "Latin",
        university: "Panhellenic Exam Specialist",
        image: "Images/Teacher-Faces/teacher-theodorou.jpg",
        contact: { email: "theodorou@university.edu", phone: "(555) 343-4343", office: "Exam Prep Center" },
        skills: ["Latin Language", "Roman Literature", "Exam Strategies", "Panhellenic Exam Preparation", "Classical Philology", "Textual Criticism", "Latin Pedagogy", "Ancient Rhetoric"],
        about: `I’m Vasilis Theodorou, a classicist with a deep passion for Latin and its enduring legacy. For over 18 years, I’ve taught Latin at Horizon University, specializing in preparing students for the Panhellenic Examinations. My research explores Roman literature and its influence on modern thought, with publications on Virgil and Cicero. My classes focus on mastering Latin grammar and texts while honing exam strategies, making the language accessible and relevant. I also lead workshops on classical rhetoric and mentor students in translation projects, aiming to connect the ancient world to today’s challenges.`,
        philosophy: `Latin is a gateway to understanding culture, law, and philosophy. My teaching philosophy blends rigorous exam preparation with immersive engagement for the Panhellenic Examinations. Through translation workshops, timed practice, and discussions on Roman texts, I help students build confidence and precision. My classroom is a collaborative space where students tackle complex passages and explore their historical context. My goal is to ensure students excel in exams while appreciating Latin’s timeless wisdom and its impact on modern languages.`,
        testimonials: [{ text: "Professor Theodorou’s Latin classes are amazing. His exam strategies and translation tips helped me succeed in the Panhellenic exams", author: "- Nikos Stavrou, Class of '24" }]
    },
    {
        id: 14,
        name: "Marina Sotiropoulou",
        title: "Chemistry",
        university: "Panhellenic Exam Specialist",
        image: "Images/Teacher-Faces/teacher-sotiropoulou.jpg",
        contact: { email: "sotiropoulou@university.edu", phone: "(555) 343-4343", office: "Exam Prep Center" },
        skills: ["Organic Chemistry", "Problem Solving", "Exam Strategies", "Biochemistry", "Panhellenic Exam Preparation", "Medicinal Chemistry", "Spectroscopy"],
        about: `Hi, I’m Marina Sotiropoulou, a chemist dedicated to advancing health sciences through education and research. With 15 years of experience, I teach chemistry at Horizon University, focusing on preparing students for the Panhellenic Examinations in the health sciences track. My research in medicinal chemistry explores drug synthesis and biochemical pathways, with publications in peer-reviewed journals. My classes combine rigorous exam preparation with practical labs, showing how chemistry drives medical innovation. I also mentor students in research and collaborate with healthcare institutions to bring real-world insights to the classroom, inspiring the next generation of health professionals.`,
        philosophy: `Chemistry is the foundation of health sciences, and I believe it should be both rigorous and inspiring. My teaching philosophy focuses on preparing students for the Panhellenic Examinations while connecting chemistry to medical applications. Through targeted practice tests, hands-on experiments, and discussions on topics like biochemistry, I help students master exam content and develop critical skills. My classroom is a supportive environment where students experiment, learn from mistakes, and gain confidence. My goal is to ensure top exam performance and prepare students for careers in medicine and science.`,
        testimonials: [{ text: "Professor Sotiropoulou’s chemistry classes were key to my Panhellenic success. Her labs and exam tips made complex topics clear", author: "- Dimitris Papadakis, Class of '24" },
        { text: "Her teaching is engaging and practical. Professor Sotiropoulou’s guidance helped me excel in chemistry and aim for medical school..", author: "- Nikos Antoniou, Class of '25" }]
    },
    {
        id: 15,
        name: "Yiannis Kallis",
        title: "Ancient Greek",
        university: "Panhellenic Exam Specialist",
        image: "Images/Teacher-Faces/teacher-kallis.jpg",
        contact: { email: "kallis@university.edu", phone: "(555) 343-4343", office: "Exam Prep Center" },
        skills: ["Classical Greek Language", "Homeric Epics", "Exam Strategies", "Panhellenic Exam Preparation", "Greek Philosophy", "Ancient Greek Drama", "Historical Linguistics", "Classical Pedagogy"],
        about: `Greetings! I’m Yiannis Kallis, a classicist with a passion for Ancient Greek and its profound influence on Western thought. With 22 years of teaching experience, I specialize in preparing students for the Panhellenic Examinations at Horizon University. My research focuses on Greek tragedy and philosophical texts, with publications on Aeschylus and Plato. My classes combine rigorous translation practice with exam strategies, making ancient texts accessible and relevant. I also lead seminars on classical culture and mentor students in research, aiming to inspire a deep connection to the ancient world and its timeless wisdom.`,
        philosophy: `Ancient Greek is a key to unlocking humanity’s intellectual heritage. My teaching philosophy blends exam-focused preparation for the Panhellenic Examinations with immersive engagement in texts like Homer and Sophocles. Through translation workshops, timed practice, and Socratic discussions, I help students master grammar and excel in exams. My classroom is a collaborative space where students analyze texts critically and connect them to modern ideas. My goal is to ensure students achieve high exam scores while developing a lifelong appreciation for classical studies.`,
        testimonials: [{ text: "Professor Kallis’s Ancient Greek classes were fantastic. His exam strategies and translation tips helped me excel in the Panhellenic exams.", author: "- Eleni Stavrou, Class of '24" },
        { text: "Yiannis makes ancient texts come alive. His practice tests and discussions on Greek drama were key to my exam success", author: "- Nikos Papadopoulos, Class of '21" },
        { text: "His passion for Ancient Greek is inspiring. Professor Kallis’s guidance gave me the skills and confidence to ace the exams.", author: "- Maria Kosta, Class of '25" },]
    },
    {
        id: 16,
        name: "Stefanos Michaelides",
        title: "Biology",
        university: "Panhellenic Exam Specialist",
        image:"Images/Teacher-Faces/teacher-michaelides.png",
        contact: { email: "michaelides@university.edu", phone: "(555) 343-4343", office: "Exam Prep Center" },
        skills: ["Molecular Biology", "Problem Solving", "Cell Biology", "Panhellenic Exam Preparation", "Evolutionary Biology", "Bioinformatics"],
        about: `Hello, I’m Stefanos Michaelides, a biologist with a deep passion for unraveling the mysteries of life at the molecular level. With over 25 years of teaching and research experience, I specialize in preparing students for the Panhellenic Examinations in Biology at Horizon University, focusing on the health sciences track. My research in genetics and biotechnology has led to numerous publications, including studies on gene expression and medical applications. My classes integrate rigorous exam preparation with hands-on labs, exploring topics like DNA replication, cellular processes, and evolutionary biology. I collaborate with medical research institutes to bring cutting-edge insights to my teaching, ensuring students are ready for both exams and future careers in healthcare. Beyond the classroom, I lead science outreach programs and mentor students in research, fostering a love for biology and its impact on medicine.`,
        philosophy: `Biology is the science of life, and I believe it should inspire curiosity and prepare students for the challenges of the Panhellenic Examinations. My teaching philosophy combines comprehensive content mastery with strategic exam preparation tailored for health sciences students. Through interactive labs, practice exams, and case studies on topics like genetics and microbiology, I help students build a deep understanding and exam-ready skills. My classroom is a dynamic, inclusive space where students engage in experiments, analyze data, and connect biology to real-world medical challenges. My goal is to ensure students excel in the Panhellenic Exams while developing the critical thinking and scientific skills needed for medical and research careers.`,
        testimonials: [{ text: "Stefanos’s passion for biology is infectious. His practice tests and focus on medical applications helped me achieve top scores in the exams..", author: "- Sofia Papadopoulos, Class of '25" },
        { text: "The way Professor Michaelides connects biology to real-world medicine is inspiring. His mock exams prepared me perfectly for the Panhellenic challenges.", author: "- Nikos Georgiou, Class of '25" },]
    },
    // ... Add placeholders for the rest of the Panhellenic teachers with unique IDs (10, 11, etc.)
];      