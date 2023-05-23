document.addEventListener("DOMContentLoaded", function() {
    let nestedRing = document.getElementById('nestRing');
    nestedRing.addEventListener('click', function(event) {
        event.stopPropagation(); // stop event from bubbling up to parent elements
        this.classList.toggle('enlarge');
        console.log('clicked');
    });
});
