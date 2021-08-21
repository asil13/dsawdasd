var age = +prompt('Введите ваш возраст,только точное!!!');
if(age <= 0) console.log('Тебя еще в планах нет')
else if(age > 0 && age <= 18) console.log('Ты еще молодой,ты должен учиться учиться и учиться');
else if(age > 18 && age <= 50) console.log('Ты иди работай уже');
else if(age > 50 && age <= 65) console.log('Ура ты скоро на пенсию выйдешь!');
else if(age > 65 && age <=150 ) console.log('все ты на пенсии,скоро ты .....');
else if(isNaN(age)) console.log('Тебе сказали возраст эххх');
else console.log('Что ты такое');