var first = [")", "Lol", "emanresu", "olleH"];
first.splice(1, 1);
for (var iteration = 0; iteration < first.length; iteration++){
    var stringToEdit = first[iteration];
    var splittedStringToEdit = stringToEdit.split("");
    splittedStringToEdit.reverse();
    first[iteration] = splittedStringToEdit.join("");
}
first.reverse();
console.log (first.join(" "));

var second = [
    {name: 'Tetiana', mark: 4.8, diploma: true},
    {name: 'Andrew', mark: 5.0, diploma: false},
    {name: 'Maria', mark: 3.6, diploma: true},
    {name: 'Margo', mark: 4.8, diploma: false},
    {name: 'Sergey', mark: 4.9, diploma: false},
    {name: 'Alex', mark: 4.9, diploma: false},
    {name: 'Anatoly', mark: 4.9, diploma: true}
]
function compare (a, b) {
    if (a.mark < b.mark) {
        return 1;
    }

    if (a.mark > b.mark) {
        return -1;
    }

    if (a.mark === b.mark) {
        if (a.diploma === true) {
            return -1;
        }

        if (a.diploma === false) {
            return 1;
        }
        
        return 0;
    }
    
    return 0;
}
second.sort(compare);
console.log (second.slice(0,5));

var third = ["el-1", "el-2", "el-3", "el-8", "el-5"];
for (var iteration = 0; iteration < third.length; iteration++) {
    third[iteration] = ((third[iteration] + " " + "(" + [iteration+1] + ")").split("-")).join(":");
    // var stringToEdit = third[iteration];   
    // third[iteration] = stringToEdit + " " + "(" + [iteration+1] + ")";
    // var replaceDashToColon = third[iteration].split("-");
    // third[iteration] = replaceDashToColon.join(":");
}
var thirdAnswer = third.join(", ");
console.log(thirdAnswer);