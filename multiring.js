document.addEventListener("DOMContentLoaded", function() {
    let rings = Array.from(document.getElementsByClassName('ring-container'));
    let leftArrow = document.querySelector('.arrow-left');
    let rightArrow = document.querySelector('.arrow-right');
    let visibleRingIndex = 0;

    function switchRing(newIndex, direction) {
        // Direction parameter determines if rotation should be clockwise or counter-clockwise
        let rotateOutDeg = direction === 'left' ? -45 : -45;
        let rotateInDeg = direction === 'left' ? -45 : -45;
        
        // Rotate out the currently visible ring
        rings[visibleRingIndex].style.transform = `translate(-50%, 97%) rotateZ(${rotateOutDeg}deg)`;
        rings[visibleRingIndex].style.zIndex = '0';
        rings[visibleRingIndex].style.scale = '20%';
        //rings[visibleRingIndex].style.opacity = '0';
    
        setTimeout(() => {
            // Hide the ring after the rotation
            //rings[visibleRingIndex].style.visibility = 'hidden';
            
            // Show the new ring rotated
            rings[newIndex].style.transform = `translate(-50%, 97%) rotateZ(${rotateInDeg}deg)`;
            //rings[newIndex].style.visibility = 'visible';
            
            // Rotate in the new ring
            setTimeout(() => {
                rings[visibleRingIndex].style.scale = '100%';
                rings[newIndex].style.transform = 'translate(-50%, 97%) rotateZ(0deg)';
                rings[newIndex].style.zIndex = '1';
                
                //rings[newIndex].style.opacity = '1';
            }, 50);
    
            // Update the visible ring index
            visibleRingIndex = newIndex;
        }, 500);
    }

    leftArrow.addEventListener('click', function() {
        let newIndex = visibleRingIndex - 1;
    
        // Wrap around to the last ring if necessary
        if (newIndex < 0) {
            newIndex = rings.length - 1;
        }
    
        switchRing(newIndex, 'left');
    });

    rightArrow.addEventListener('click', function() {
        let newIndex = visibleRingIndex + 1;
    
        // Wrap around to the first ring if necessary
        if (newIndex >= rings.length) {
            newIndex = 0;
        }
    
        switchRing(newIndex, 'right');
    });
});