let submitMessage = document.querySelector('.submitMessage');
submitMessage.addEventListener('click', function(event) {
    event.preventDefault(); // منع الإرسال الافتراضي

    // جمع البيانات من الحقول
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const tel = document.getElementById('tel').value;

    // إرسال البيانات (مثال باستخدام fetch)
    fetch('https://api.sheetmonkey.io/form/hAnXb44GinZ93QZAwt8iYy', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message, tel })
    })
    .then(response => {
        if (response.ok) {
            // إذا تم الإرسال بنجاح، فرغ الحقول
            document.getElementById('name').value = '';
            document.getElementById('email').value = '';
            document.getElementById('message').value = '';
            document.getElementById('tel').value = '';
        } else {
            // يمكنك هنا عرض رسالة خطأ للمستخدم
            alert('حدث خطأ أثناء الإرسال');
        }
    })
    .catch(error => {
        alert('تعذر الاتصال بالخادم');
    });
});