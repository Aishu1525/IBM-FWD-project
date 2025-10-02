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
// EmailJS Init
(function () {
    emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your EmailJS Public Key
})();

// Contact form submit handler
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", this)
            .then(() => {
                alert("✅ Message sent successfully!");
                form.reset();
            }, (error) => {
                alert("❌ Failed to send message: " + JSON.stringify(error));
            });
    });
});
