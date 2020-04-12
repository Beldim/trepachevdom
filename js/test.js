/* Задачи на основы работы с DOM в JavaScript */
/* 6 */
/* function buttonClick(){
   let input = document.getElementById("input");
   alert(input.value);
} */
/* 7 */
/* function buttonClick(){
    let img = document.getElementById("img");
    img.src = src="img/2.jpg";
} */
/* 8 */
/* function buttonClick(elem){
    alert(elem.value);
} */
/* 9 */
/* function buttonClick(elem){
    alert(elem.value);
    elem.value="Теперь я поменяла текст";
} */
/* 10 */
/* function on(elem1){
    elem1.value = "Теперь я поменяла текст";
}

function stop(elem2){
    elem2.value = "Ой, еще раз поменяла текст";
} */
/* 11 */
/* function rename(name){
    name.value = 'Я поменяла название'
} */
/* 12 */
/* function stop(elem){
    elem.value = "Теперь я нажата и не активна";
    elem.disabled = "true";
} */
/* 13 */
/* function over(imaging){
    imaging.src = "img/2.jpg";
}
function out(imaging){
    imaging.src = "img/1.jpg";
    } */
/* 14 */
/* function go(){
   let inp = document.getElementById('input');
   inp.style.color = 'red';
   inp.style.width = '400px';
} */
/* 15 */
/* function yes(){
    let inp = document.getElementById('input');
    inp.style.display = 'none';
}
function no(){
    let inp = document.getElementById('input');
    inp.style.display = 'inline-block';
} */
/* 16 */
/* function yes(){
    let inp = document.getElementById('input');
    inp.style.width = '300px';
    inp.style.height = '50px';
    inp.style.color= 'red';
    inp.value = 'Ой, я поменяла текст и CSS';
    inp.style.borderRadius = '50px';
} */
/* 17 */
/* function yes(){
    let inp = document.getElementById('input');
    let inp2 = document.getElementById('input2');
    inp.value = 'О, теперь на меня больше не нажать!';
    inp.disabled = true;
    inp2.style.display = 'inline-block';
}
function no(){
    let inp = document.getElementById('input');
    let inp2 = document.getElementById('input2');
    inp2.style.display = 'none';
    inp.value = 'О, на меня снова можно нажимать';
    inp.disabled = false;
} */
/* 18 */
/* let i = 1;
function yes(){
    let inp = document.getElementById('input'); 
    inp.value = i;
    i++;   
} */
/* 19 */
/* function yes(){
    let inp = document.getElementById('input');
    inp.value = 'Ой, теперь я плаваю справа';
    inp.style.cssFloat = 'right';
} */
/* 20 */
/* function yes(){
    let inp = document.getElementById('input');
    inp.value = 'Мои css классы:' + inp.className;
} */
/* 21 */
/* function yes(){
    let inp = document.getElementById('input');
    let inp2 = document.getElementById('input2');
    let tmp = inp.value;
    inp.value = inp2.value;
    inp2.value = tmp; 
} */
/* 22 */
/* function yes(){
    let inp = document.getElementById('input');
    let inp2 = document.getElementById('input2');
    inp2.value = Math.pow(inp.value, 2);
} */
/* 23 */
/* function yes(){
    let inp = document.getElementById('input');
    let inp2 = document.getElementById('input2');
    if (!isNaN(inp.value)){
        inp2.value = Math.pow(inp.value, 2);    
    } else {
        alert('Введено не число!!!');        
    }
} */
/* 24 */
/* function clickCursor(elem){
    elem.disabled = 'true';
    elem.style.cursor = 'crosshair';
} */
/* 25 */
/* function add(elem){
    let inp = document.getElementById('input');
    inp.value += elem;
} */
/* Задачи на работу с элементами страницы в JavaScript */
/* 1 */
/* function buttonClick(){
    let elem = document.getElementById('elem');
    elem.innerHTML = 'Теперь я <b>Жирный</b>';
} */
/* 2 */
/* function buttonClick(){
    let elem = document.getElementById('elem');
    elem.innerHTML = '<h3>Абзац превратился в h3!</h3>';
} */
/* 3 */
/* function buttonClick(){
    let elem = document.getElementById('elem');
    elem.outerHTML = '<h3>'+elem.innerHTML+'</h3>';
} */
/* 4 */
/* function buttonClick(){
    let inp = document.getElementById('input');
    let inp2 = document.getElementById('input2');
    let sum = document.getElementById('sum');
    sum.innerHTML = Number(inp.value) + Number(inp2.value);
} */
/* 5 */
/* function go(){
    let tags = document.getElementsByTagName('p');
    for (let tag of tags){
        tag.innerHTML = "Ку-ку";
    }
} */
/* 6 */
/* function go(){
    let elems = document.getElementsByClassName('www');
    i = 1;
    for (let elem of elems){
        elem.innerHTML = i;
        i++;
        }
    } */
/* 7 */
/* function go(){
    let elems = document.querySelectorAll('.www');
    i = 1;
    for (let elem of elems){
        elem.innerHTML = i;
        i++;
    }
} */
/* 8 */
/* function go(){
    let elem = document.querySelector('.www-r');
    let info = elem.getAttribute('class');
    alert(info);
} */
/* 9 */
/* function info(){
    let elem = document.getElementById('test');
    let info = elem.getAttribute('class');
    alert(info);
}
function del(){
    let elem = document.getElementById('test');
    let del = elem.removeAttribute('class');
    alert('Удален атрибут класс');
} */
/* 10 */
/* function info(){
    let elem = document.getElementById('test');
    let info = elem.getAttribute('class');
    alert(info);
}
function del(){
    let elem = document.getElementById('test');
    elem.setAttribute('class', 'new-class');
} */
/* 11 */
/* function go(elem){
    let text = document.getElementById('result');
    text.innerHTML = elem.value;
} */
/* 12 */
/* function info(){
    let elems = document.querySelectorAll('a');
    for (i = 0; i < elems.length; i++){
        elems[i].innerHTML = elems[i].innerHTML + '('+elems[i].getAttribute('href')+')';
    }
} */
/* 13 */
/* function start(){
    elem.disabled = 'true';
    elem.value = 'О на меня нельзя больше нажать';
    let text = document.getElementById('text');
    text.style.color = 'red';
    text.innerHTML = 'Привет, мир!';
} */
/* 14 */
/* function start(){
elems = document.querySelectorAll('.my-class');
let i = 0;
for (let elem of elems){
elem.innerHTML = i;
i++;
} 
} */
/* 15 */
/* function start(){
    elems = document.querySelectorAll('.my-class');
    let i = 0;
    for (let elem of elems){
        elem.innerHTML = i + '.' + elem.innerHTML;
        i++;
    }
} */
/* Задачи на даты в JavaScript */
/* 1 */
/* let date = new Date();
document.write(date.getDay() +'<br>'); */
/* 2 */
/* let date = new Date();
document.write(date.getMonth() + '<br>'); */
/* 3 */
/* let date = new Date();
document.write(date.getFullYear()); */
/* 4 */
/* let date = new Date();
function zero(num){    
    if (num >= 0 && num < 10){
        return '0' + num;
    } else {
        return num;
    }
}
document.write(date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() +' ' + zero(date.getDate()) + '.' + zero(date.getMonth()+1) + '.' + date.getFullYear()); */
/* 5 */
/* let date = new Date();
document.write(date.getDay()); */
/* 6 */
/* let date = new Date();
function showDay(num){
    let days = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
    return days[num];
}
document.write(showDay(date.getDay())); */
/* 7 */
/* let date = new Date(07, 01, 2015)
function showDay(num){
    let days = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
    return days[num];
}
document.write(showDay(date.getDay())); */