document.addEventListener("DOMContentLoaded", function() {
    let skills = Array.from(document.getElementsByClassName('skill'));
    let skillRing = document.querySelector('.skill-ring');

    // Calculate the center of the skill ring
    const centerX = skillRing.getBoundingClientRect().left + skillRing.offsetWidth / 2;
    const centerY = skillRing.getBoundingClientRect().top + skillRing.offsetHeight / 2;

    skillRing.addEventListener('mousemove', function(event) {
        // Calculate the angle between the cursor and the horizontal axis
        const angle = Math.atan2(event.clientY - centerY, event.clientX - centerX);

        // Convert the angle into a value between 0 and 1
        const normalizedAngle = angle / (2 * Math.PI) + 0.5;

        // Determine which skill to show
        const skillIndex = Math.floor(normalizedAngle * skills.length);

        // Hide all skills and show the selected one
        skills.forEach((skill, index) => {
            if (index === skillIndex) {
                skill.style.opacity = '1';
            } else {
                skill.style.opacity = '0';
            }
        });
    });

    skillRing.addEventListener('mouseout', function() {
        // Hide all skills when the cursor leaves the ring
        skills.forEach(skill => skill.style.opacity = '0');
    });
});
