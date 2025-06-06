let light_theme_button = document.querySelector('#light-theme-btn')
let dark_theme_button = document.querySelector('#dark-theme-btn')
let default_btn = document.querySelector('#default-btn')
let cards = document.querySelectorAll('.cards');

light_theme_button.addEventListener('click', () => {
    cards.forEach(card => {
        if(card.classList.contains('dark')){
            card.classList.remove('dark');
        }
        card.classList.toggle('light')
    })
})

dark_theme_button.addEventListener('click', () => {
    cards.forEach(card => {
        if(card.classList.contains('light')){
            card.classList.remove('light');
        }
        card.classList.toggle('dark')
    })
})

default_btn.addEventListener('click', () => {
    cards.forEach(card => {
        if(card.classList.contains('light')){
            card.classList.remove('light');
        }else if(card.classList.contains('dark')){
            card.classList.remove('dark')
        }
    })
})