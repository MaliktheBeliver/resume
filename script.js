document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const apiUrl = 'https://api.web3forms.com/submit'; 

    form.addEventListener('submit', async (event) => {
        event.preventDefault(); 

        const formData = new FormData(form);
        const formObject = Object.fromEntries(formData.entries());
        formObject.access_key = 'a8d7f70f-cbb1-4d76-a310-ea99e6f82ac6'; 

        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formObject),
            });

            if (response.ok) {
                const result = await response.json();
                alert('Send message successfully!');
                form.reset();
            } else {
                alert('Failed to send message. Please try again.');
            }
        } catch (error) {
            alert('An error occurred. Please try again.');
            console.error('Error:', error);
        }
    });
});

// Typewriting
const texts = [
    "I am a FrontEnd Developer",
    "I am a UI/UX Designer",
    "I love Javascript ❤️"
  ];

  const speed = 100;
  const deleteSpeed = 50;
  const delayBetween = 1500;

  let i = 0; // text index
  let j = 0; // char index
  let isDeleting = false;

  const el = document.getElementById("typewriter");

  function type() {
    const current = texts[i];
    if (isDeleting) {
      el.textContent = current.substring(0, j--);
      if (j < 0) {
        isDeleting = false;
        i = (i + 1) % texts.length;
        setTimeout(type, 500);
      } else {
        setTimeout(type, deleteSpeed);
      }
    } else {
      el.textContent = current.substring(0, j++);
      if (j > current.length) {
        isDeleting = true;
        setTimeout(type, delayBetween);
      } else {
        setTimeout(type, speed);
      }
    }
  }

  type();