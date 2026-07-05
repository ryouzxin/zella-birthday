document.addEventListener('click',e=>{
 const r=document.createElement('div');
 r.className='ripple';
 r.style.left=e.clientX+'px';
 r.style.top=e.clientY+'px';
 document.body.appendChild(r);
 setTimeout(()=>r.remove(),1000);
});

document.getElementById('openBtn').addEventListener('click', function() {
    alert('Tombol berhasil ditekan!');
});
