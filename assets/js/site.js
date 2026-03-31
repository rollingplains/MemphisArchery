const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');

if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    siteNav.classList.toggle('open');
  });
}


const registrationForm = document.querySelector('#registration-form');
const formStatus = document.querySelector('#form-status');

if (registrationForm) {
  registrationForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const submitButton = registrationForm.querySelector('button[type="submit"]');
    if (formStatus) {
      formStatus.className = 'form-status';
      formStatus.textContent = 'Submitting your registration...';
    }
    if (submitButton) submitButton.disabled = true;

    try {
      const response = await fetch(registrationForm.action, {
        method: 'POST',
        body: new FormData(registrationForm),
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        registrationForm.reset();
        if (formStatus) {
          formStatus.className = 'form-status success';
          formStatus.textContent = 'Registration submitted successfully. A copy has been sent to Rolling Plains Archery.';
        }
      } else {
        const data = await response.json().catch(() => ({}));
        const message = data?.errors?.map((item) => item.message).join(' ') || 'Something went wrong. Please try again or call (806) 204-0184.';
        if (formStatus) {
          formStatus.className = 'form-status error';
          formStatus.textContent = message;
        }
      }
    } catch (error) {
      if (formStatus) {
        formStatus.className = 'form-status error';
        formStatus.textContent = 'Unable to send right now. Please try again in a moment or call (806) 204-0184.';
      }
    } finally {
      if (submitButton) submitButton.disabled = false;
    }
  });
}
