document.getElementById("hireLink").addEventListener("click", function(event) {
    event.preventDefault(); 
    const width = 600;
    const height = 400;
    const left = (window.innerWidth - width) / 2;
    const top = (window.innerHeight - height) / 2;

    window.open(
        "https://derickowinosportfolio.vercel.app/hire-me", 
        "PopupWindow",
        `width=${width},height=${height},left=${left},top=${top},scrollbars=yes`
    );
});

function toggleMenu() {
    // Toggle the 'active' class to show or hide the menu
    const navList = document.querySelector('.nav_list');
    navList.classList.toggle('active');
}

var typed = new Typed("#name", {
    strings: ["Owino Derick Ochieng"],
    typeSpeed: 100,
    backSpeed: 50,  
    showCursor: false, 
    loop: true,
    loopcount: 0           
});

var typed = new Typed("#roles", {
                strings: ["Web Developer", "Software Engineer", "Full Stack Developer"],
                typeSpeed: 100,
                backSpeed: 50,  
                showCursor: false, 
                loop: true,
                loopcount: 5              
            });

// Function for progress circles
document.addEventListener("DOMContentLoaded", function() {
    // Animate progress bars when they come into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target.querySelector('.progress-bar');
                const progress = progressBar.getAttribute('data-progress');
                progressBar.style.width = progress + '%';
                
                // Make sure the animation only happens once
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 }); // Trigger when 50% of card is visible

    // Observe all cards
    document.querySelectorAll('.card').forEach(card => {
        observer.observe(card);
});
});