'use strict';
const click = document.querySelectorAll('.click');
click.forEach(el => el.addEventListener('click',(event)=>console.log(event.target.id)));
