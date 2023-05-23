document.addEventListener("DOMContentLoaded", function() {
    let nestedRing = document.getElementById('nestRing');
    let description = document.getElementById('info');
    nestedRing.addEventListener('click', function(event) {
        event.stopPropagation(); // stop event from bubbling up to parent elements
        this.classList.toggle('enlarge');
        if (this.classList.contains('enlarge')) {
        description.innerText = "Hello! I\'m a Computer Science student with a passion for coding. On this website, you\'ll find information about my skills, projects, and experiences.";
        description.style.textAlign = "center";
        }
        else
        {
            description.innerText = "About Me";   
        }
        console.log('clicked');
    });
});
