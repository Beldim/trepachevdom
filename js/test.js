﻿/* Задачи на основы работы с DOM в JavaScript */
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
/* 8 */
/* let date = new Date();
let result = Math.floor(date.getTime()/(1000*60));
console.log(result); */
/* 9 */
/* let date = new Date();
let now = date.getTime();
let time = Date.parse('1988-03-01T00:00:00');
let result = (now - time)/(1000*60*60);
document.write('<br>' + result); */
/* 10 */
/* let date = new Date();
let now = date.getTime();
let time = Date.parse('2020-04-13T00:00:00');
let result = (now - time)/(1000);
document.write('<br>' + result); */
/* 11 */
/* let date = new Date();
let endday = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 24, 59, 59);
let result = Math.floor((endday.getTime()-date.getTime())/1000);
document.write('<br>' + result); */
/* 12 */
/* function happyday(elem){
    let nowDate = new Date();
    let arr = elem.value.split('-');
    let result = '';
    if (arr[1] >= nowDate.getMonth()+1) { //ДР в текущем году еще будет (сравнение месяцев)
    result = Date.parse(String(nowDate.getFullYear()) + '-' + String(arr[1]) + '-' + String(arr[2]) + 'T00:00:00');
    } else { //ДР будет только в след.году
    result = Date.parse(String(nowDate.getFullYear()+1) + '-' + String(arr[1]) + '-' + String(arr[2]) + 'T00:00:00');
    }
elem.value = Math.floor((result - nowDate.getTime())*0.001/86400); //60*60*24
} */
/* Задачи на работу с таймерами в JavaScript */
/* 1 */
/* function start(){
    window.setInterval(timer, 1000);
}
function timer(){
    let elem = document.getElementById('test');
    elem.innerHTML = parseInt(elem.innerHTML)+1;
} */
/* 2 */
/* function start(){
    window.timerID=window.setInterval(timer, 500);
    document.getElementById('stop').disabled = false;
    document.getElementById('start').disabled = true;
}
function timer(){
    let elem = document.getElementById('test');
    elem.innerHTML = parseInt(elem.innerHTML)+1;
}
function stop(){
    window.clearInterval(window.timerID);
    document.getElementById('stop').disabled = true;
    document.getElementById('start').disabled = false;
} */
/* 3 */
/* function start(){
    window.timerID=window.setInterval(timer, 500);
}
function timer(){
let elem=document.getElementById('test');
let date = new Date();
elem.innerHTML=addZero(date.getHours()) + ':' + addZero(date.getMinutes()) + ':' + addZero(date.getSeconds());
}
function addZero(num){
    if (num < 9){
        return '0'+num;
    } else {
        return num;
    }
} */
/* 4 */
/* function go(){
    window.timerID=window.setInterval(timer, 500);
}
function timer(){
    let elem = document.getElementById('test');
    elem.innerHTML = zero(parseInt(elem.innerHTML)-1);
}
function zero(num){
if (num == 0){
    window.clearInterval(window.timerID);
    let click = document.getElementById('click');
    document.getElementById('stop').innerHTML = 'Отсчет закончен';
    click.disabled = true;   
    return num;
} else {
    return num;
}
} */
/* 5 */
/* function go(){
    window.timerID = window.setInterval(timer, 500);
}
function timer(){
    if (window.number == undefined || window.number == 3){
        window.number = 0;  
    } else {
        window.number = window.number+1;
        let img = document.getElementById('img');
        img.src = 'img/smile'+window.number+'.jpg';
    }  
} */
/* 6 */
/* function go(){
    window.timerID = window.setInterval(timer, 500);
}
function timer(){
    let img1 = document.getElementById('img1');
    let img2 = document.getElementById('img2');
    let img3 = document.getElementById('img3');
    let tmp = img1.src;
    img1.src = img2.src;
    img2.src = img3.src;
    img3.src = tmp;
} */
/* 7 */
/* function go(){
    window.timerID = window.setInterval(timer, 500)
}
function timer(){
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');
    let now = new Date(); 
    let minight = new Date(now.getFullYear(), now.getMonth(), (now.getDate()+1), 0, 0, 0);
    let diff = Math.floor((minight-now)/1000);
    let hoursRemain = Math.floor(diff/(60*60));
    let minutesRemain = Math.floor((diff-hoursRemain*60*60)/60);
    let secondsRemain = Math.floor(diff%60);
    hours.innerHTML = hoursRemain;
    minutes.innerHTML = addZero(minutesRemain);
    seconds.innerHTML = addZero(secondsRemain);    
}
function addZero(num){
    if (num <10) {
        return '0'+num;
    } else {
        return num;
    }
} */
/* Задачи на продвинутую работу с событиями в JavaScript */
/* 1 */
/* let elems = document.getElementsByTagName('img');
for (i = 0; i < elems.length; i++){
    elems[i].onclick = func;
}
function func(){
    alert(this.getAttribute('src'));
} */
/* 2 */
/* let elems = document.getElementsByTagName('a');
for (i = 0; i < elems.length; i++){
    elems[i].addEventListener('mouseover', func);
}
function func(){
    this.title = this.innerHTML;
} */
/* 3 */
/* let elems = document.getElementsByTagName('a');
for (i = 0; i < elems.length; i++){
    elems[i].addEventListener('mouseover', func);
}
function func(){
    this.innerHTML = this.innerHTML + '('+ this.href +')';
} */
/* 4 */
/* let elems = document.getElementsByTagName('a');
for (i = 0; i < elems.length; i++){
    elems[i].addEventListener('mouseover', func);
}
function func(){
    this.innerHTML = this.innerHTML + '('+ this.href + ')';
    this.removeEventListener('mouseover', func);
} */
/* 5 */
/* let elems = document.getElementsByTagName('input');
let parag = document.getElementById('test');
for (i = 0; i < elems.length; i++){
    elems[i].addEventListener('mouseout', func);
}
function func(){
    parag.innerHTML = this.value;
} */
/* 6 */
/* let elems = document.getElementsByTagName('input');
for (i = 0; i < elems.length; i++){
    elems[i].addEventListener('click', func);
}
function func(){
    alert(this.value);
    this.removeEventListener('click', func);
} */
/* 7 */
/* let elems = document.getElementsByTagName('p');
for (i = 0; i < elems.length; i++){
    elems[i].addEventListener('click', func);
}
function func(){
    this.innerHTML = Math.pow(this.innerHTML, 2);
    this.removeEventListener('click', func);
}  */
/* 8 */
/* let elems = document.getElementsByTagName('input');
for (i = 0; i < elems.length; i++){
    elems[i].addEventListener('blur', func);
}
function func(){
    let correctLength = this.dataset.length;
    let inputDataLength = this.value.length;
    if (correctLength == inputDataLength) {
        this.style.borderColor = 'Green';
    } else {
        this.style.borderColor = 'Red';
    }
} */
/* 9 */
/* let elems = document.getElementsByTagName('div');
for (i = 0; i < elems.length; i++){
    elems[i].addEventListener('click', setRed);
}
function setRed(){
    this.style.background = 'Red';
    this.removeEventListener('click', setRed);
    this.addEventListener('click', setGreen);
} 
function setGreen(){
    this.style.background = 'Green';
    this.removeEventListener('click', setGreen);
    this.addEventListener('click', setRed);
}  */
/* Задачи на продвинутую работу с DOM на JavaScript */
/* 1 */
/* let elem = document.querySelector('#elem');
elem.classList.add('www'); */
/* 2 */
/* let elem = document.querySelector('#elem');
elem.classList.remove('www'); */
/* 3 */
/* let elem = document.querySelector('#elem');
let contain = elem.classList.contains('www');
console.log(contain); */
/* 4 */
/* let elem = document.querySelector('#elem');
let contain = elem.classList.contains('www');
if (contain){
    elem.classList.remove('www');
} else {
    elem.classList.add('www');
} */
/* 5 */
/* let elem = document.querySelector('#elem');
let length = elem.classList.length;
console.log(length); */
/* 6 */
/* let elem = document.querySelector('#elem');
let classNames = elem.classList;
for (let className of classNames){
    alert (className);
} */
/* 7 */
/* let elem = document.querySelector('#elem');
elem.style.cssText = 'color: Red; font-size: 30px;'; */
/* 8 */
/* function tagInfo(){
    let elem = document.querySelector('#elem');
    alert(elem.tagName);
} */
/* 9 */
/* function tagInfo(){
    let elem = document.querySelector('#elem');
    alert(elem.tagName.toLowerCase());
} */
/* 10 */
/* let elems = document.querySelectorAll('.www');
for (i = 0; i < elems.length; i++){
    elems[i].innerHTML = elems[i].innerHTML + elems[i].tagName.toLowerCase();
} */
/* 11 */
/* let parent = document.querySelector('#parent');
let li = document.createElement('li');
li.innerHTML = 'пункт';
parent.appendChild(li); */
/* 12 */
/* let parent = document.querySelector('#parent');
let array = ['яблоко', 'банан', 'капуста', 'вишня'];
for (i = 0; i < array.length; i++){
    let li = document.createElement('li');
    li.innerHTML = array[i];
    parent.appendChild(li);
} */
/* 13 */
/* let parent = document.querySelector('#parent');
let array = ['яблоко', 'банан', 'капуста', 'вишня'];
for (i = 0; i < array.length; i++){
    let li = document.createElement('li');
    li.innerHTML = array[i];
    li.addEventListener('click', function() {
		alert(this.innerHTML);
	});
    parent.appendChild(li);
} */
/* 14 */
/* let parent = document.querySelector('#parent');
let elem = document.querySelector('#elem');
let li = document.createElement('li');
li.innerHTML = '!!!';
parent.insertBefore(li, elem); */
/* 15 */
/* let elem = document.querySelector('#elem');
elem.insertAdjacentHTML('beforeBegin', '<span>!!!</span>'); */
/* 16 */
/* let elem = document.querySelector('#elem');
elem.insertAdjacentHTML('afterEnd', '<span>!!!</span>'); */
/* 17 */
/* let elem = document.querySelector('#elem');
elem.insertAdjacentHTML('afterBegin', '<span>!!!</span>'); */
/* 18 */
/* let elem = document.querySelector('#elem');
elem.insertAdjacentHTML('beforeEnd', '<span>!!!</span>'); */
/* 19 */
/* let parent = document.querySelector('#parent');
parent.firstElementChild.style.color = 'Red'; */
/* 20 */
/* let parent = document.querySelector('#parent');
parent.lastElementChild.style.color = 'Red'; */
/* 21 */
/* let parent = document.querySelector('#parent');
let elems = parent.children;
for (let elem of elems){
    elem.style.color = 'Red';
} */
/* 22 */
/* let elem = document.querySelector('#elem');
elem.previousElementSibling.innerHTML = elem.previousElementSibling.innerHTML + '!'; */
/* 23 */
/* let elem = document.querySelector('#elem');
elem.nextElementSibling.innerHTML = elem.nextElementSibling.innerHTML + '!'; */
/* 24 */
/* let elem = document.querySelector('#elem');
elem.nextElementSibling.nextElementSibling.innerHTML = elem.nextElementSibling.nextElementSibling.innerHTML + '!'; */
/* 25 */
/* let elem = document.querySelector('#elem');
elem.parentElement.style.color = 'Red'; */
/* 26 */
/* let elem = document.querySelector('#elem');
elem.parentElement.parentElement.style.color = 'Red'; */
/* 27 */
/* function del(){
    let parent = document.querySelector('#parent');
    let child = document.querySelector('#child');
    parent.removeChild(child);
} */
/* 28 */
/* function del(){
    let parent = document.querySelector('#parent');
    parent.removeChild(parent.lastElementChild);
} */
/* 29 */
/* function del(){
    let parent = document.querySelector('#parent');
    let child = document.querySelector('#child');
    parent.removeChild(child);
} */
/* 30 */
/* let parent = document.querySelector('#parent');
let elems = document.getElementsByTagName('li');
for (let elem of elems){
    elem.addEventListener('click', del);
}
function del(){
    parent.removeChild(this);
} */
/* 31 */
/* function go(){
    let parent = document.querySelector('#parent');
    let elem = document.querySelector('#inp');
    let clone = elem.cloneNode(true);
    parent.prepend(clone);
} */
/* 32 */
/* let array = ['яблоко', 'банан', 'капуста', 'вишня'];
let ul = document.createElement('ul');
let parent = document.querySelector('body');
for (i=0; i < array.length; i++){
    let li = document.createElement('li');
    li.innerHTML = array[i];
    ul.appendChild(li);
}
parent.appendChild(ul); */
/* 33 */
/* function clone(){
    let parent = document.querySelector('#parent');
    let clone = inp.cloneNode(true);
    parent.appendChild(clone);
} */
/* 34 */
/* let parent = document.querySelector('#parent');
let inp = document.querySelector('#inp');
inp.addEventListener('blur', go)
function go(){
let arr = inp.value.split();
for (i = 0; i < arr.length; i++){
    let input = document.createElement('input');
    input.value = arr[i];
    input.disabled = true;
    parent.appendChild(input);
}
}  */
/* 35 */
/* let parent = document.querySelector('#parent');
let btn = document.querySelector('#btn');
btn.addEventListener('click', go);
function go(){
    let elem = btn.parentElement;
    elem.hidden = true;
} */
/* Tasks for working with metrics in JavaScript */
/* 1 */
/* let elem = document.getElementById('parent');
let btn = document.getElementById('btn');
btn.addEventListener('click', go);
function go(){
    alert(elem.clientTop);
} */
/* 2 */
/* let elem = document.getElementById('parent');
let btn = document.getElementById('btn');
btn.addEventListener('click', go);
function go(){
    alert(elem.clientLeft);
} */
/* 3 */
/* let elem = document.getElementById('parent');
let btn = document.getElementById('btn');
btn.addEventListener('click', go);
function go(){
    alert(elem.offsetWidth);
} */
/* 4 */
/* let elem = document.getElementById('parent');
let btn = document.getElementById('btn');
btn.addEventListener('click', go);
function go(){
    alert(elem.offsetHeight);
} */
/* 5 */
/* let elem = document.getElementById('parent');
let btn = document.getElementById('btn');
btn.addEventListener('click', go);
function go(){
    alert(elem.clientWidth);
} */
/* 6 */
/* let elem = document.getElementById('parent');
let btn = document.getElementById('btn');
btn.addEventListener('click', go);
function go(){
    alert(elem.clientHeight);
} */
/* 7 */
/* let elem = document.querySelector('#parent');
let btn = document.getElementById('btn');
btn.addEventListener('click', go);
function go(){
    let style = getComputedStyle(elem);
    alert(style.width +' '+ style.height);
} */
/* 8 */
/* let elem = document.getElementById('parent');
let btn = document.getElementById('btn');
btn.addEventListener('click', go);
function go(){
    alert(elem.scrollTop);
} */
/* 9 */
/* let elem = document.getElementById('parent');
let btn = document.getElementById('btn');
btn.addEventListener('click', go);
function go(){
    alert(elem.scrollLeft);
} */
/* 10 */
/* let elem = document.getElementById('parent');
let btn = document.getElementById('btn');
btn.addEventListener('click', go);
function go(){
    elem.scrollTop = 100;
} */
/* 11 */
/* let elem = document.getElementById('parent');
let btn = document.getElementById('btn');
btn.addEventListener('click', go);
    function go(){
        elem.scrollTop += 100;
} */
/* 12 */
/* let elem = document.getElementById('parent');
let btn = document.getElementById('btn');
btn.addEventListener('click', go);
function go(){
    alert(elem.scrollHeight);
} */
/* 13 */
/* let elem = document.getElementById('parent');
let btn = document.getElementById('btn');
btn.addEventListener('click', go);
function go(){
    alert(elem.scrollWidth);
} */
/* 14 */
/* let elem = document.getElementById('parent');
let btn = document.getElementById('btn');
btn.addEventListener('click', go);
function go(){
    let total_height = elem.scrollHeight - 100;
    elem.scrollTop = total_height;
} */
/* 15 */
/* let elem = document.getElementById('parent');
let btn = document.getElementById('btn');
btn.addEventListener('click', go);
function go(){
    alert(pageYOffset);
} */
/* 16 */
/* let elem = document.getElementById('parent');
let btn = document.getElementById('btn');
btn.addEventListener('click', go);
function go(){
    alert(pageXOffset);
} */
/* 17 */
/* let elem = document.getElementById('parent');
let btn = document.getElementById('btn');
btn.addEventListener('click', go);
function go(){
    window.scrollTo(300, 500);
} */
/* 18 */
/* let elem = document.getElementById('parent');
let btn = document.getElementById('btn');
btn.addEventListener('click', go);
function go(){
    window.scrollBy(0, 300);
} */
/* 19 */
/* let elem = document.getElementById('parent');
let btn = document.getElementById('btn');
btn.addEventListener('click', go);
function go(){
    window.scrollTo(0, document.body.clientHeight);
} */
/* 20 */
/* let elem = document.getElementById('parent');
let btn = document.getElementById('btn');
btn.addEventListener('click', go);
function go(){
    window.scrollBy(400, 400);
} */
/* 21 */
/* let elem = document.getElementById('parent');
let btn = document.getElementById('btn');
btn.addEventListener('click', go);
function go(){
    let body = document.documentElement;
    if (body.scrollHeight - body.scrollTop == body.clientHeight){
        window.scrollTo(0, 100); 
    }
} */
/* 22 */
/* let elem = document.getElementById('parent');
elem.addEventListener('click', go)
    function go(){
        let startWidth = this.offsetWidth;
        let startHeight = this.offsetHeight;
        this.style.width = startWidth * 2 + 'px';
        this.style.height = startHeight * 2 + 'px';
    } */
    /* Tasks for working with metrics for windows in JavaScript */
/* 1 */
/* let btn = document.getElementById('btn');
btn.addEventListener('click', go);
function go(){
    alert( document.documentElement.clientHeight);
} */
/* 2 */
/* let but = document.getElementById('btn');
but.addEventListener('click', go)
function go(){
    let heightWindow = window.innerHeight;
    window.scrollBy(0, heightWindow);
} */
/* 3 */
/* let elem = document.getElementById('parent');
let but = document.getElementById('btn');
but.addEventListener('click', go)
function go(){
    alert('Текущая прокрутка сверху: ' + window.pageYOffset );
} */
/* Tasks on the basics of working with the Event object in JavaScript */
/* 1 */
/* let elem = document.getElementById('elem');
elem.onmousemove = go;
function go(event){
    this.innerHTML = event.clientX + ":" + event.clientY;
} */
/* 2 */
/* let show = document.getElementById('show');
window.addEventListener('click', go);
function go(event){
    show.style.left = event.clientX + 'px';
    show.style.top = event.clientY + 'px';
} */
/* 3 */
/* let show = document.getElementById('show');
window.addEventListener('click', go);
function go(event){
    show.style.left = (event.clientX - parseInt(window.getComputedStyle(show).width)/2) + 'px';
    show.style.top = (event.clientY - parseInt(window.getComputedStyle(show).height)/2) + 'px';
} */
/* 4 */
/* let input = document.getElementById('input');
let result = document.getElementById('result');
input.onkeypress = go;
function go(event){
    let code = event.keyCode;
    result.innerHTML = code;
} */
/* 5 */
/* let input = document.getElementById('input');
let result = document.getElementById('result');
input.onkeypress = go;
function go(event){
    let code = String.fromCharCode(event.keyCode);
    result.innerHTML = code;
} */
/* 6 */
/* let elem = document.getElementById('show');
elem.addEventListener('click', go);
function go(event){
    if (event.ctrlKey){
        elem.style.backgroundColor = 'blue';
    }
} */
/* 7 */
/* let elem = document.getElementById('show');
elem.addEventListener('click', go);
function go(event){
    if (event.ctrlKey){
        this.innerHTML = '1';
    } if (event.altKey){
        this.innerHTML = '2';
    } if (event.shiftKey){
        this.innerHTML = '3';
    }
} */
/* 8 */
/* let input = document.getElementById('input');
let result = document.getElementById('result');
input.onkeypress = go;
function go(event){
    if (event.keyCode == 13){
        result.innerHTML = input.value;
        input.value = '';
    }
} */
/* Tasks for advanced work with the Event object in JavaScript */
/* 1 */
/* let button = document.getElementById('button');
let ul = document.getElementById('elems');
let li = document.querySelectorAll('#elems li');
button.addEventListener('click', add)
function add(event){    
    let li = document.createElement('li');
    li.innerHTML = 'пункт';
    ul.appendChild(li);  
}
for (let i = 0; i < li.length; i++) {
	li[i].addEventListener('click', addSign);
}
function addSign() {
	this.innerHTML = this.innerHTML + '!';
} */
/* 2 */
/* let name = document.getElementById('name');
let surname = document.getElementById('surname');
let button = document.getElementById('button');
let table = document.querySelector('table');
let td = document.querySelectorAll('td');

button.addEventListener('click', add);
function add(event){
    if(name.value!='' && surname.value!=''){
        let tr = document.createElement('tr');
        let td1 = document.createElement('td');
        td1.innerHTML = name.value;
        let td2 = document.createElement('td');
        td2.innerHTML = surname.value;
        table.appendChild(tr);
        tr.appendChild(td1);
        tr.appendChild(td2);    
    }   
    name.value = '';
    surname.value = '';
}
table.addEventListener('click', edit);
function edit(event){
    event.target.innerHTML = prompt();
}; */
/* Tasks on various useful JavaScript topics */
/* 1 */
/* let button = document.getElementById('button');
button.addEventListener('click', go);
function go(){
 let form = document.getElementById('form');
 let result = Number(0);
 for (i = 0; i < form.elements.length; i++){     
     result += Number(form.elements[i].value);     
 }  
 console.log(result); 
} */
/* 2 */
/* let button = document.getElementById('button');
button.addEventListener('click', go);
function go(){
    let result = Number(0);
    let forms = document.forms;
    for (i = 0; i < forms.length; i++){
        for (j = 0; j < forms[i].elements.length; j++){
            result += Number(forms[i].elements[j].value);
        }        
    }
    console.log(result);
} */
/* 3 */
/* let select = document.getElementById('select');
let input = document.getElementById('input');
select.addEventListener('click', go);
function go(){
    input.value = select.value;
} */
/* 4 */
/* let button = document.getElementById('button');
button.addEventListener('click', press);
function press(){
    let select = document.getElementById('select');
    let input = document.getElementById('input');
    select.selectedIndex = input.value;
} */
/* 5 */
 /* let countriesSelect = document.querySelector('#countries');
let citiesSelect = document.querySelector('#cities');
 let byCities = document.querySelector('#by');
let uaCities = document.querySelector('#ua');
let ruCities = document.querySelector('#ru');
countries.addEventListener('change', go);
function go(){
    if (this.value == 'by') {
        byCities.style.display = 'inline-block';
        uaCities.style.display = 'none';
        ruCities.style.display = 'none';
    };
    if (this.value == 'ua') {
        uaCities.style.display = 'inline-block';
        byCities.style.display = 'none';
        ruCities.style.display = 'none';
    };
    if (this.value == 'ru') {
        ruCities.style.display = 'inline-block';
        uaCities.style.display = 'none';
        byCities.style.display = 'none';
    }
} 
 */
/* let data = {
    Беларусь: ['Минск','Брест','Гомель'],
    Украина: ['Киев','Херсон','Одесса'],
    Россия: ['Москва','Воронеж','Салихар'],
};
countriesSelect.addEventListener('change', go);
function go(){    
    let cities = data[this.value];
    citiesSelect.length = 0;
    for(i = 0; i < cities.length; i++){        
        citiesSelect.add(new Option(cities[i]));
    }
} */  
/* 6 */
/* let yearSelect = document.querySelector('#year-select');
let monthSelect = document.querySelector('#month-select');
let daySelect = document.querySelector('#day-select');
let date = new Date();
let currentYear = date.getFullYear();
fillSelect(yearSelect, range(currentYear-10, currentYear+10));
fillSelect(monthSelect, range(1, 12));
fillSelect(daySelect, range(1, 31));
yearSelect.addEventListener('focus', selectFocusHandle);
monthSelect.addEventListener('focus', selectFocusHandle);
daySelect.addEventListener('focus', selectFocusHandle);
yearSelect.addEventListener('change', selectChangeHandle);
monthSelect.addEventListener('change', selectChangeHandle);
daySelect.addEventListener('change', selectChangeHandle);

let yearSelectDefault = yearSelect.value;
let monthSelectDefault = monthSelect.value;
let daySelectDefault = daySelect.value;

function selectChangeHandle(){
  if (checkDate(yearSelect.value, monthSelect.value, daySelect.value)) {
        console.log('yes');
        } else {
            console.log('no');
            yearSelect.value = yearSelectDefault;
            monthSelect.value = monthSelectDefault;
            daySelect.value = daySelectDefault;
        }
}
function selectFocusHandle(){
    yearSelectDefault = yearSelect.value;
    monthSelectDefault = monthSelect.value;
    daySelectDefault = daySelect.value;
}

function fillSelect(select, arr){
    arr.forEach(function(elem){
        select.add(new Option(elem));
    });
}
function range(from, to){
    let result = [];
    for(let i = from; i <= to; i++){
        result.push(i);
    }
    return result;
}
function checkDate(year, month, day){
    let date = new Date(year, month-1, day);
    return date.getFullYear() == year && date.getMonth() == month-1 && date.getDate() == day;
} */
/* Working with nodes */
/* 1 */
/* let elem = document.getElementById('elem');
console.log(elem.firstChild);
console.log(elem.firstElementChild); */
/* 2 */
/* let elem = document.getElementById('elem');
console.log(elem.firstChild.data);
console.log(elem.firstChild.nodeValue);
console.log(elem.firstChild.textContent); */
/* 3 */
/* let elem = document.getElementById('elem');
elem.firstChild.data = '!'; */
/* 4 */
/* let elem = document.getElementById('elem');
elem.lastChild.data = ' !'; */
/* 5 */
/* let elem = document.getElementById('elem');
console.log(elem.firstChild.data); */
/* 6 */
/* let elem = document.getElementById('elem');
elem.firstChild.data = '!';
console.log(elem.firstChild.data); */
/* 7 */
/* let elem = document.getElementById('elem');
for (let i = 0; i < elem.childNodes.length; i++){
    console.log(elem.childNodes[i]);
}
for (let i = 0; i < elem.children.length; i++){
    console.log(elem.children[i]);
} */
/* 8 */
/* let elem = document.getElementById('elem');
console.log(elem.firstChild.nextSibling.innerHTML); */
/* 9 */
/* let elem = document.getElementById('elem');
console.log(elem.firstElementChild.nextElementSibling.innerHTML); */
/* 10 */
/* let elem = document.getElementById('elem');
res = elem.firstElementChild.nextElementSibling;
console.log(res.nextSibling.textContent);
console.log(res.previousSibling.textContent); */
/* 11 */
/* let elem = document.getElementById('elem');
console.log(elem.firstElementChild.nextElementSibling.nextSibling.textContent); */
/* 12 */
/* let elem = document.getElementById('elem');
console.log(elem.firstElementChild.nextElementSibling.nextSibling.textContent); */
/* 13 */
/* let elem = document.getElementById('elem');
for (let i = 0; i < elem.children.length; i++){
    console.log(elem.children[i].textContent+' '+elem.children[i].tagName);
} */
/* 14 */
/* let p = document.querySelectorAll('p');
console.log(p); */
/* 15 */
/* let p = document.getElementsByTagName('p');
console.log(p); */
/* 16 */
/* let p = document.querySelectorAll('p');
p.forEach(element => {
    console.log(element);
}); */
/* 17 */
/* let p = document.getElementsByTagName('p');
let arr = Array.from(p);
arr.forEach(function(child){
    console.log(child);
}) */
/* 18 */
/* let node = document.createTextNode('!!!');
let elem = document.getElementById('elem');
elem.insertBefore(node, elem.childNodes[0]);
console.log(elem); */
/* 19 */
/* let node = document.createTextNode('!!!');
let elem = document.getElementById('elem');
elem.insertBefore(node, elem.childNodes[1]);
console.log(elem); */
/* 20 */
/* let elem = document.getElementById('elem');
elem.removeChild(elem.childNodes[0]); */
/* 21 */
/* let elem = document.getElementById('elem');
elem.childNodes.forEach(function(child){
    if (child.nodeType == 8 || child.nodeType == 3) {
        console.log(child)
    } if (child.nodeType == 1) {
        console.log(child.innerHTML)
    }
}) */