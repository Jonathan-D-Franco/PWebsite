let skills = document.getElementsByClassName('skill');

for (let i = 0; i < skills.length; i++) {
  skills[i].style.transform = 'rotate(' + (i * 360 / skills.length) + 'deg)';
  skills[i].style.display = 'block';
}

document.querySelector('.skill-ring').addEventListener('mouseover', function(event) {
  if (event.target.classList.contains('skill')) {
    document.getElementById('skill-display').innerText = 'You are now hovering over ' + event.target.dataset.skill;
  }
});

document.querySelector('.skill-ring').addEventListener('mouseout', function(event) {
  if (event.target.classList.contains('skill')) {
    document.getElementById('skill-display').innerText = '';
  }
});
