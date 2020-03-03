var a = new Date(prompt('Введите дату: год, месяц, день', ''));
    b = new Date();
function diffGetHours(date1, date2) {
   return Math.ceil((date2.getTime() - date1.getTime()) / (1000 * 3600));
}
console.log(diffGetHours(a, b));




function clock() {
    var date = new Date(),
        hours = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours(),
        minutes = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes(),
        seconds = (date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds();
    console.log(hours + ':' + minutes + ':' + seconds);  
    }
clock();
// setInterval(clock,1000);
