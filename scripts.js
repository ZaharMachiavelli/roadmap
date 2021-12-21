let buttons = document.querySelectorAll('button');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = (e) => {
        console.log(this);
        e.target.classList.toggle('active');
        document.querySelector(`ol.${e.target.classList[0]}`).classList.toggle('hidden');
    }
}
