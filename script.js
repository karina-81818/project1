console.log(1)
const storeName = 'Karina';
const storeDescription = {
    budget: 10000,
    employees: ['Alisa', 'Anna', 'Kate'],
    products: {
        dress: 150,
        bread: 200
    },
    open: true,
}

const answers = [];
answers[0] = prompt('Как ваше имя?', '');
answers[1] = prompt('Как ваше фамилия?', '');
answers[2] = prompt('Как ваше возраст?', ' ');

document.write(answers)
console.log(answers)

for(var i=0; i < 3; i++){
    setTimeout(function() {alert(i)}, 1000 + i)
    }
    
