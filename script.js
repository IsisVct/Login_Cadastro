const mod = document.getElementById('mod_icon');

mod.addEventListener('click', () => {
    const form = document.getElementById('login_form');
    if(mod.classList.contains('fa-moon') ){
        mod.classList.remove('fa-moon');
        mod.classList.add('fa-sun');

        form.classList.add('dark');
        return;
    }
    mod.classList.add('fa-moon');
    mod.classList.remove('fa-sun');
    form.classList.remove('dark');

    

})