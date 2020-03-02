
// function diffGetTime(date1, date2) {
//     return date2.getTime() - date1.getTime();
// }
// diffGetTime(01.01.2022, 01.01.2023);

function fn(a) {
      for (var b = 0; a > -1; b++) {   
        (--a, document.write("*".repeat(b) + "<br>")); 
      }
    }
    fn(5)