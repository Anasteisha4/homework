var arr = [];
maxRandom = 5;
elements = 3;
function arrRandom(arr) {
    for (var i = 0; i < elements; i++) {
        arr.push([
            Math.floor(Math.random() * maxRandom),
            Math.floor(Math.random() * maxRandom),
            Math.floor(Math.random() * maxRandom)
        ])
    }
}
arrRandom(arr);
console.log(arr);
if (arr[0][1] === arr[1][1] && arr[1][1] === arr[2][1]) {
    console.log('You win')
}

var array = [];
elements = 3;
maxRandom = 5;
var numTimes = +prompt('Enter number of times');
for (var j = 0; j < numTimes; j++) {
    if (Number.isNaN(numTimes)) {
        alert("This is not a number");
    }
    else {
        array = [];
        arrRandom(array);
    }


    console.log(array)

    for (var f = 1; f < array.length; f++) {
        if (array[0][1] !== array[f][1]) {
            break;
        } else {
            console.log('You win');
        }
    }

}

var alf = "abcdefghijklmnopqrstuvwxyz";


function random(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
var numString = +prompt('Enter number of strings')
var max = +prompt('Enter maxwordlength');
var min = +prompt('Enter minwordlength');
var library = {};


for (var i = 0; i < numString; i++) {
    var wordlength = random(min, max);
    var word = '';
    for (var j = 0; j < wordlength; j++) {
        var word = word + alf[random(0, alf.length)];
    }


    if (library[wordlength]) {
        library[wordlength].push(word);
    }
    else {
        library[wordlength] = [word];
    }
}

console.log(library);

for (var key in library) {
    alert('You have' + library[key].length + 'words with length' + key);
}