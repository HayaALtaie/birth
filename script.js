// script.js

document.addEventListener('DOMContentLoaded', () => {
    // ---- Logic for the initial form (index.html) ----
    const infoForm = document.getElementById('infoForm');

    if (infoForm) { // Check if the form exists (meaning we are on index.html)
        infoForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission to handle it with JS

            const birthDateInput = document.getElementById('birthDate').value;
            const surpriseMessage = document.getElementById('surpriseMessage'); // تأكد من الحصول على هذا العنصر هنا

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
                alert('Thanks for sharing your info! You can try again on your actual birthday for a surprise!');
                infoForm.reset();
            }
        });
    }

    // ---- Logic for the birthday surprise page (birthday.html) ----
    // هذا الجزء يجب أن يكون خارج نطاق الـ if (infoForm)
    const giftBox = document.getElementById('giftBox');
    const birthdayCake = document.getElementById('birthdayCake');
    const birthdaySong = document.getElementById('birthdaySong');
    // const boxTop = document.getElementById('boxTop'); // هذا العنصر ليس ضرورياً هنا في JS، لأنه يتحكم به الـ CSS

    // تأكد أننا على صفحة birthday.html قبل محاولة إضافة event listener لعناصرها
    if (giftBox && birthdayCake) { // تحقق مما إذا كانت هذه العناصر موجودة في DOM الحالي
        giftBox.addEventListener('click', () => {
            // إضافة فئة 'opened' لـ giftBox لتحريك الغطاء
            giftBox.classList.add('opened');

            // إخفاء نص "Click to open your gift!" بمجرد النقر على الصندوق
            const giftText = giftBox.querySelector('.gift-text');
            if (giftText) {
                giftText.style.opacity = '0';
                giftText.style.pointerEvents = 'none'; // تعطيل التفاعل مع النص بعد اختفائه
            }

            // تأخير بسيط قبل إظهار الكيكة لجعل الحركة تبدو طبيعية
            setTimeout(() => {
                birthdayCake.classList.remove('hidden');
                birthdayCake.classList.add('visible'); // إضافة فئة 'visible' للكيكة

                // تشغيل الأغنية بعد ظهور الكيكة
                if (birthdaySong) {
                    birthdaySong.play().catch(e => console.log("Failed to play audio:", e));
                }
            }, 800); // هذا التأخير يجب أن يكون أقل قليلاً من مدة انتقال غطاء البوكس أو مساوياً لها
        });
    }
});