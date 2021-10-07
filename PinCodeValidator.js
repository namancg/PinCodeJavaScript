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

 pinCodeRegEx = RegExp('^[0-9]{6}$')
arguments.forEach(pinCode => {
console.log(pinCode+"",pinCodeRegEx.test(pinCode))
 });

pinCodeRegEx = RegExp('^[1-9]{1}[0-9]{2}\\s{0,1}[0-9]{3}$')
arguments.forEach(pinCode => {
console.log(pinCode+"",pinCodeRegEx.test(pinCode))
 });