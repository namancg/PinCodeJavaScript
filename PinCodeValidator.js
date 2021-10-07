let arguments= process.argv;
arguments.splice(0,2);

let pinCodeRegEx = RegExp('[0-9]{6}')
arguments.forEach(pinCode => {
console.log(pinCode+"",pinCodeRegEx.test(pinCode))
 });

pinCodeRegEx = RegExp('^[0-9]{6}$')
arguments.forEach(pinCode => {
console.log(pinCode+"",pinCodeRegEx.test(pinCode))
 });