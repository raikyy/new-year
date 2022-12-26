const comp = document.querySelector('#comp');
const text = document.querySelector('#text');
const form = document.querySelector('#form');
const name = document.querySelector('#name');
const congrat = document.querySelector('#congrat');
form.style.display = 'none';
congrat.style.display = 'none';

comp.addEventListener('click', function(event){
    text.style.display = 'none';
    form.style.display = 'flex';
})


let adress;
function select () {
if (form.elements.radio.value == "man") {
    adress = 'Уважаемый';
}
else {
    adress = 'Уважаемая';
}
}
select(adress);

const nameValue = form.elements.name.value
button.addEventListener('click', (event)=> {
    event.preventDefault();
    comp.style.display = 'none';
    form.style.display = 'none';
    congrat.style.display = 'flex'; 
    console.log(adress)
    console.log(nameValue)
})

let art = document.createElement('div')
art.textContent = `${adress} ${form.elements.name.value}, в наступающем году желаю 12 месяцев покоя, 
52 недели здоровья, 365 дней любви, 8760 часов успеха, 525600 минут счастья и 
3123600 секунд радости. С новым годом!`

congrat.appendChild(art); 
