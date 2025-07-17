// script.js

document.addEventListener('DOMContentLoaded', () => {
    const infoForm = document.getElementById('infoForm');

   if (infoForm) {
    infoForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const birthDateInput = document.getElementById('birthDate').value;
        const surpriseMessage = document.getElementById('surpriseMessage');

        if (birthDateInput === '1991-07-15') {
            surpriseMessage.classList.remove('hidden');
            setTimeout(() => {
                window.location.href = 'birthday.html';
            }, 2000);
        } else {
            alert('موعد الميلاد ما يطابق المطلوب.. حاول مرة ثانية 😊');
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