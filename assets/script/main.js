// let accordionHeads = document.querySelectorAll('.head');

// accordionHeads.forEach(head => {
//     head.addEventListener("click", (e) => {
//         e.currentTarget.closest('.accordion-item').classList.toggle('active');
//     })
// })

// let time = 0;

// let timer = setInterval(() => {
//     time++;
//     if (time === 5) {
//         clearInterval(timer)
//     }
//     console.log('salam');
// }, 1000);

// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);


// console.log(document.body.childNodes);
// console.log(Array.from(document.body.childNodes));
// // node

// console.log(document.getElementById('list').children);

// console.log(document.getElementById('list'));
// console.log(document.getElementsByTagName('ul'));
// console.log(document.getElementsByName('list-name'));
// console.log(document.getElementsByClassName('dummy'));

// document.getElementById("test").closest('nav')

// console.log(document.getElementById("test").closest('nav'))

// document.querySelectorAll('#myDiv')[0].innerText = '<h1>Pizza locale</h1>';
// // document.querySelectorAll('#myDiv')[0].innerHTML = '<h1>Pizza locale</h1>';
// console.log(document.querySelectorAll('#myDiv'))

// console.log(document.getElementById('name').hasAttribute('type'))
// console.log(document.getElementById('name').getAttribute('value'))
// console.log(document.getElementById('name').setAttribute('id', 'surname'))
// console.log(document.getElementById('surname').removeAttribute('type'))

// let myDivs = document.querySelectorAll('.msg');

// // console.log(myDiv.classList.add('from-js'));
// // console.log(myDiv.classList.remove('msg'));

// myDivs.forEach(div => {
//     div.addEventListener("click", (e) => {
//         e.currentTarget.classList.replace('desc', 'replaced')
//     })
// })

let button = document.querySelectorAll('.accordeon');

button.forEach((element, i) => {
    element.addEventListener("click", (e) => {
        deleteActive();
        e.currentTarget.classList.toggle('active')
    })
});

function deleteActive() {
    button.forEach((element, i) => {
        element.classList.remove('active')
    })
}