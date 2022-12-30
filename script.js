const comp = document.querySelector('#comp');
const text = document.querySelector('#text');
const myForm = document.querySelector('#myForm');
const name = document.querySelector('#name');
const congrat = document.querySelector('#congrat');
const radio = document.querySelector('#radio');
let elements = myForm.elements;

myForm.style.display = 'none';
congrat.style.display = 'none';

comp.addEventListener('click', function(event){
    text.style.display = 'none';
    myForm.style.display = 'flex';
})

let adress;
function select () {
if (elements.radio.value == "man") {
    adress = 'Уважаемый';
}
else {
    adress = 'Уважаемая';
}
}
select(adress);

button.addEventListener('click', (event)=> {
    event.preventDefault();
    comp.style.display = 'none';
    myForm.style.display = 'none';
    congrat.style.display = 'flex'; 
    console.log(adress)
    console.log(elements.name.value )
})


let art = document.createElement('div')
art.textContent = `${adress},${elements.name.value} в наступающем году желаю 12 месяцев покоя, 
52 недели здоровья, 365 дней любви, 8760 часов успеха, 525600 минут счастья и 
3123600 секунд радости. С новым годом!` 
congrat.appendChild(art);
