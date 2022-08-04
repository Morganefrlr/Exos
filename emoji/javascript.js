const emoji = '&#128585';

let emojiBase = document.querySelector('h1');

emojiBase.addEventListener('click', function(){
    this.classList.toggle('active');
    if (this.classList.contains('active')) {
        this.innerHTML = emoji;
    } else {
        this.innerHTML = '&#128584'
    }
})
