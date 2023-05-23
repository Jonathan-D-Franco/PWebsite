document.addEventListener("DOMContentLoaded", function() {
    let rings = Array.from(document.getElementsByClassName('skill-ring'));
    let leftArrow = document.querySelector('.arrow-left');
    let rightArrow = document.querySelector('.arrow-right');
    let visibleRingIndex = 0;

    function switchRing(newIndex) {
        // Hide the currently visible ring
        rings[visibleRingIndex].style.opacity = '0';
        rings[visibleRingIndex].style.visibility = 'hidden';
        

        // Show the new ring
        rings[newIndex].style.opacity = '1';
        rings[newIndex].style.visibility = 'visible';
    
        
        // Update the visible ring index
        visibleRingIndex = newIndex;
    }

    leftArrow.addEventListener('click', function() {
        let newIndex = visibleRingIndex - 1;

        // Wrap around to the last ring if necessary
        if (newIndex < 0) {
            newIndex = rings.length - 1;
        }

        switchRing(newIndex);
    });

    rightArrow.addEventListener('click', function() {
        let newIndex = visibleRingIndex + 1;

        // Wrap around to the first ring if necessary
        if (newIndex >= rings.length) {
            newIndex = 0;
        }

        switchRing(newIndex);
    });
});
