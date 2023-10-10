var surname = prompt('Enter your surname')
var name = prompt("Enter your name");
var age = Number(prompt('Enter your age'))

if (age <= 18) {
    alert('Hi' + "" + name)
} else if (age > 18 && age <= 60 ) {
    alert("hello"+ "" + surname + "" + name)
} else if (age > 60 && age <= 80) {
    alert('Welcome'+ "" + surname + "" + name)
} else {
    alert('Произошла  ошибка')
}

