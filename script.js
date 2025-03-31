function toggleDarkMode() {
    document.getElementById('dark-mode-toggle').addEventListener('click', () =>{
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    darkModeToggle.textContent = isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode';});
}

function checkDarkModePreference() {
    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark-mode');
        document.getElementById('dark-mode-toggle').textContent = '☀️ Light Mode';
    }
}

function handleScrollToTop() {
    const scrollToTopBtn = document.getElementById('scroll-to-top');
    
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.add('show');
        } else {
            scrollToTopBtn.classList.remove('show');
        }
    });
    
    
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

function setGreeting() {
    const greetingElement = document.getElementById('greeting');
    const hour = new Date().getHours();
    let greeting;
    let emoji = '';
    
    if (hour >= 5 && hour < 12) {
        greeting = "Good Morning!";
        emoji = '☀️';
    } else if (hour >= 12 && hour < 17) {
        greeting = "Good Afternoon!";
        emoji = '🌤️';
    } else if (hour >= 17 && hour < 22) {
        greeting = "Good Evening!";
        emoji = '🌙';
    } else {
        greeting = "Hello, Night Owl!";
        emoji = '✨';
    }
    
    
    const personalMessages = {
        morning: "Rise and shine! Thanks for visiting my portfolio today.",
        afternoon: "Hope your day is going well. Thanks for stopping by!",
        evening: "Winding down? Take your time exploring my work.",
        night: "Burning the midnight oil? Me too! Welcome to my portfolio."
    };
    
    let timeOfDay = 'morning';
    if (hour >= 12 && hour < 17) timeOfDay = 'afternoon';
    else if (hour >= 17 && hour < 22) timeOfDay = 'evening';
    else if (hour >= 22 || hour < 5) timeOfDay = 'night';
    
    const messageContainer = document.querySelector('.greeting-message');
    if (messageContainer) {
        messageContainer.textContent = `"${personalMessages[timeOfDay]} I'm excited you're here!"`;
    }
    
    greetingElement.textContent = greeting;
}

function setupProjectFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projects = document.querySelectorAll('.project');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            
            
            projects.forEach(project => {
                if (filter === 'all') {
                    project.style.display = 'block';
                } else {
                    const categories = project.getAttribute('data-category').split(' ');
                    if (categories.includes(filter)) {
                        project.style.display = 'block';
                    } else {
                        project.style.display = 'none';
                    }
                }
            });
        });
    });
}

function setupTestimonialForm() {
    const form = document.getElementById('testimonial-form');
    const testimonialsList = document.getElementById('testimonials-list');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('testimonial-name').value;
        const text = document.getElementById('testimonial-text').value;
        
        if (name && text) {
            
            const testimonial = document.createElement('div');
            testimonial.className = 'testimonial';
            
            testimonial.innerHTML = `
                <blockquote>${text}</blockquote>
                <cite>— ${name}</cite>
            `;
            
            
            testimonialsList.appendChild(testimonial);
            
            
            form.reset();
        }
    });
}

function setupFormValidation() {
    const mainForm = document.getElementById('contact-form');
    
    mainForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        
        if (name && email && message) {
            
            const successMessage = document.createElement('div');
            successMessage.className = 'success-message';
            successMessage.textContent = 'Form submitted successfully!';
            
            
            mainForm.appendChild(successMessage);
            
            
            setTimeout(() => {
                successMessage.remove();
            }, 3000);
            
            
            console.log('Form submitted:', { name, email, message });
            
            
            mainForm.reset();
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    toggleDarkMode();
    checkDarkModePreference();
    handleScrollToTop();
    setGreeting();
    setupProjectFilters();
    setupTestimonialForm();
    setupFormValidation();
    
}); 
