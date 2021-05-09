const name = 'Kropka';
console.log('czesc');
console.log('piesek');
console.log(name);
const isAdult = confirm('czy jestes pelnoletni?');
console.log('czy pelnoletni: ', isAdult);
if (isAdult) {
    console.log('jest pelnoletni')
} else {
    document.location.href = 'http://przedszkole.pl'
}