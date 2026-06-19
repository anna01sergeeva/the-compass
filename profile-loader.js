document.addEventListener('DOMContentLoaded', () => {
    // Get the teacher's ID from the URL query parameter
    const params = new URLSearchParams(window.location.search);
    const teacherId = parseInt(params.get('id'));

    // Find the teacher's data in the 'teachers' array
    const teacher = teachers.find(t => t.id === teacherId);

    // If no teacher is found, display an error message
    if (!teacher) {
        document.querySelector('.profile-page-container').innerHTML = '<h1>Teacher not found.</h1>';
        return;
    }

    // --- Populate the Page with Teacher Data ---

    // Set the page title
    document.title = `Profile - ${teacher.name}`;

    // Update the main profile card
    document.querySelector('.profile-image').src = teacher.image;
    document.querySelector('.profile-image').alt = `Profile picture of ${teacher.name}`;
    document.querySelector('.profile-name').textContent = teacher.name;
    document.querySelector('.profile-title').textContent = teacher.title;
    document.querySelector('.profile-university').textContent = teacher.university;

    // Update the contact information card
    const contactList = document.querySelector('.profile-contact-list');
    contactList.innerHTML = `
        <li class="profile-contact-list-item">
            <i class="fas fa-envelope profile-contact-icon"></i>
            <p>${teacher.contact.email}</p>
        </li>
        <li class="profile-contact-list-item">
            <i class="fas fa-phone profile-contact-icon"></i>
            <span>${teacher.contact.phone}</span>
        </li>
        <li class="profile-contact-list-item">
            <i class="fas fa-map-marker-alt profile-contact-icon"></i>
            <span>${teacher.contact.office}</span>
        </li>
    `;

    // Update the skills and expertise card
    const skillsContainer = document.querySelector('.profile-skills-container');
    skillsContainer.innerHTML = ''; // Clear existing skills
    teacher.skills.forEach(skill => {
        const skillTag = document.createElement('span');
        skillTag.className = 'profile-skill-tag';
        skillTag.textContent = skill;
        skillsContainer.appendChild(skillTag);
    });

    // --- CORRECTED MAIN CONTENT SECTION ---

    // Update the "About Me" and "Philosophy" sections using their new IDs
    document.getElementById('about-content').textContent = teacher.about;
    document.getElementById('philosophy-content').textContent = teacher.philosophy;

    // Update the student testimonials
    const testimonialsContainer = document.querySelector('.profile-testimonials-container');
    testimonialsContainer.innerHTML = ''; // Clear existing testimonials
    teacher.testimonials.forEach(testimonial => {
        const testimonialDiv = document.createElement('div');
        testimonialDiv.className = 'profile-testimonial';
        testimonialDiv.innerHTML = `
            <p class="profile-testimonial-text">"${testimonial.text}"</p>
            <p class="profile-testimonial-author">${testimonial.author}</p>
        `;
        testimonialsContainer.appendChild(testimonialDiv);
    });

    // Update the modal header
    document.querySelector('.modal-header').textContent = `Schedule a Meeting with ${teacher.name}`;
});