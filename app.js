let text = "my name is hasnain"
console.log(text);

let convert = text.split(" ");
console.log(convert);
let New = [];
for (let i = 0; i < convert.length; i++) {
    New.push(convert[i][0].toUpperCase() + convert[i].slice(1))
}
New = New.join(" ")
console.log(New);











  