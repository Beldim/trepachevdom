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
