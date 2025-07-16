// script.js

document.addEventListener('DOMContentLoaded', () => {
    const infoForm = document.getElementById('infoForm');

    if (infoForm) { 
        infoForm.addEventListener('submit', function(event) {
            event.preventDefault(); 

            const birthDateInput = document.getElementById('birthDate').value;
            const surpriseMessage = document.getElementById('surpriseMessage'); 

            const today = new Date();
            today.setHours(0, 0, 0, 0);

            const birthDate = new Date(birthDateInput);
            birthDate.setFullYear(today.getFullYear());
            birthDate.setHours(0, 0, 0, 0);

            console.log("BirthDate (normalized for comparison):", birthDate);
            console.log("Today (normalized for comparison):", today);
            console.log("BirthDate getTime():", birthDate.getTime());
            console.log("Today getTime():", today.getTime());

            if (birthDate.getTime() === today.getTime()) {
                surpriseMessage.classList.remove('hidden');
                setTimeout(() => {
                    window.location.href = 'birthday.html';
                }, 2000);
            } else {
                alert('Thanks for sharing your info! You can try again on your actual birthday please..');
                infoForm.reset();
            }
        });
    }

    const giftBox = document.getElementById('giftBox');
    const birthdayCake = document.getElementById('birthdayCake');
    const birthdaySong = document.getElementById('birthdaySong');
   

    
    if (giftBox && birthdayCake) { 
        giftBox.addEventListener('click', () => {
            
            giftBox.classList.add('opened');

            const giftText = giftBox.querySelector('.gift-text');
            if (giftText) {
                giftText.style.opacity = '0';
                giftText.style.pointerEvents = 'none'; 
            }

            
            setTimeout(() => {
                birthdayCake.classList.remove('hidden');
                birthdayCake.classList.add('visible'); 
                if (birthdaySong) {
                    birthdaySong.play().catch(e => console.log("Failed to play audio:", e));
                }
            }, 800);
        });
    }
});