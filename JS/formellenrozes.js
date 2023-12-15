document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.registration-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

     
        const nev = document.getElementById('name');
        const email = document.getElementById('email');
        const telefon = document.getElementById('phone');
        const edzes = document.getElementById('workout');
        const megjegyzes = document.getElementById('comments');

        
        let hibak = [];

        if (nev.value === '' || email.value === '' || telefon.value === '' || edzes.value === '' || !validateEmail(email.value)) {
            if (nev.value === '') nev.classList.add('hiba');
            else nev.classList.remove('hiba');

            if (email.value === '' || !validateEmail(email.value)) email.classList.add('hiba');
            else email.classList.remove('hiba');

            if (telefon.value === '') telefon.classList.add('hiba');
            else telefon.classList.remove('hiba');

            if (edzes.value === '') edzes.classList.add('hiba');
            else edzes.classList.remove('hiba');

            alert('Kérlek töltsd ki a mezőket megfelelően!');
            return;
        }

        alert('Köszönjük a jelentkezést!');
    });

    function validateEmail(email) {
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return pattern.test(email);
    }
});