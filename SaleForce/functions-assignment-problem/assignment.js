/*function sayHello(name) {
  console.log('Hi ' + name);
}
*/
const sayHello = (name) => {
  console.log('Hi ' + name);
};

sayHello('kofi');

const sayHello1 = (name,greet = 'Hello') => {
  console.log(greet + name);
};
sayHello1('Obed', 'Hi ');

const sayHello2 = () => {
  console.log('Hi Obed');
};
sayHello2 ();

const sayHello3 = name => {
 return name;
};
console.log (sayHello3 ('Obed'));

function checkInput(cb, ...strings) {
  let hasEmptyText = false;
  for (const text of strings) {
    if (!text) {
      hasEmptyText = true;
      break;
    }
  }
  if (!hasEmptyText) {
    cb();
  }
}

checkInput(
  () => {
    console.log('All not empty!');
  },
  'Hello',
  '12',
  'adsfa',
  'Not empty'
);