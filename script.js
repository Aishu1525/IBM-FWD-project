// Animate skill bars when scrolling
const skillsSection = document.querySelector('#skills');
const skillFills = document.querySelectorAll('.skill-fill');

window.addEventListener('scroll', () => {
  const sectionPos = skillsSection.getBoundingClientRect().top;
  const screenPos = window.innerHeight / 1.2;

  if(sectionPos < screenPos){
    skillFills.forEach(skill => {
      skill.style.width = skill.style.width; // Trigger CSS transition
    });
  }
});