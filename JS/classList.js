const testEl = document.querySelector('.cat');
console.log(testEl);
console.log(testEl.classList.contains('popka'));

testEl.classList.add('popka')
testEl.classList.remove('cat');
// testEl.classList.replace('popka', 'durak');
testEl.classList.toggle('qwe');