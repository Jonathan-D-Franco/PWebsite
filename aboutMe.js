document.addEventListener("DOMContentLoaded", function() {
    let nestedRing = document.getElementById('nestRing');
    let description = document.getElementById('info');
    nestedRing.addEventListener('click', function(event) {
        event.stopPropagation(); // stop event from bubbling up to parent elements
        this.classList.toggle('enlarge');
        if (this.classList.contains('enlarge')) {
        description.innerText = "Hello, hopefully potential future employer! I\'m a newly graduated computer science with a passion for coding and a drive to learn. On this website, you\'ll find information about my skills, projects, and experiences. This is an ongoing project and hopefully will show what I've learned as time goes by";
        description.style.textAlign = "center";
        }
        else
        {
            description.innerText = "About Me";   
        }
        console.log('clicked');
    });
});
