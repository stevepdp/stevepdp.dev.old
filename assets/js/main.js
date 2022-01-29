/**
 * main.js
 * Copyright (C) 2021 Stephen Pearce
 */
let html = document.documentElement;

let stevepdp = {
    toggleMenu: function() {
        html.classList.toggle('menu--toggled');
    },
    registerEventListeners: function() {
        let burgerElm = document.getElementsByClassName('js-burger')[0];
        burgerElm.addEventListener('click', this.toggleMenu);
    },
    ready: function() {
        this.registerEventListeners();
    }
}

window.onload = stevepdp.ready();
