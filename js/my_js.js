const toggle = document.querySelector('.toggle');
        const menu = document.querySelector('.menu');
        toggle.addEventListener('click', ()=> {
            menu.classList.add('show');
        });
        menu.addEventListener('click', ()=>{
            menu.classList.remove('show');
        })