const togglebtns = document.querySelectorAll('.fa-heart');

togglebtns.forEach((btn)=>{
    btn.addEventListener('click', () => {
        btn.classList.toggle('toggle-pressed');
    })
})