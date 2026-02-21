document.addEventListener('DOMContentLoaded', typingText);

function typingText(){
    const typedTextSpan = document.getElementById('typedText');

    const words = ["Anthony!", "A Software Engineer!", "A coding enthusiast!"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 150;
    let deletingSpeed = 75;
    let pauseBeforeDelete = 1500;
    let pauseBeforeType = 500;

    function typeEffect() {
        const currentWord = words[wordIndex];
        let dynamicSpeed = typingSpeed;

        if (isDeleting) {
            // Deleting text
            typedTextSpan.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
            dynamicSpeed = deletingSpeed;
        } else {
            // Typing text
            typedTextSpan.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
            dynamicSpeed = typingSpeed;
        }

        // Check if the current word is fully typed
        if (!isDeleting && charIndex === currentWord.length) {
            dynamicSpeed = pauseBeforeDelete;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            dynamicSpeed = pauseBeforeType;
        }

        setTimeout(typeEffect, dynamicSpeed);
    }
    typeEffect();
}

document.addEventListener("DOMContentLoaded", function () {
    const toggles = document.querySelectorAll('.meBtn');
  
    toggles.forEach((toggle) => {
      toggle.addEventListener('click', function () {
        const content = this.nextElementSibling;
        content.style.display = content.style.display === "block" ? "none" : "block";
      });
    });
});