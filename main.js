let p = document.querySelector('.p')
let p1 = document.querySelector('.p1')
let p2 = document.querySelector('.p2')
let p3 = document.querySelector('.p3')
let p4 = document.querySelector('.p4')
let img = document.querySelector('.img')
let box10 = document.querySelector('.box10')
let extra = document.querySelector('.extra')

let p20 = document.querySelector('.p20');
let path = document.querySelector('.path')


p.addEventListener('mouseover',() => {
    p.style.color = 'red'
})
p.addEventListener('mouseout',() => {
    p.style.color = 'black'
})
p1.addEventListener('mouseover',() => {
    p1.style.color = 'red'
})
p1.addEventListener('mouseout',() => {
    p1.style.color = 'white'
})
p2.addEventListener('mouseover',() => {
    p2.style.color = 'red'
})
p2.addEventListener('mouseout',() => {
    p2.style.color = 'white'
})
p3.addEventListener('mouseover',() => {
    p3.style.color = 'red'
})
p3.addEventListener('mouseout',() => {
    p3.style.color = 'white'
})
p4.addEventListener('mouseover',() => {
    p4.style.color = 'red'
})
p4.addEventListener('mouseout',() => {
    p4.style.color = 'white'
})
let i = 2


img.addEventListener('click', () => {
    if(i % 2 == 0){
        box10.style.display = 'none'
        extra.style.display = 'none'
        i++;
        console.log(i);
    }else if(i % 2 == 1){
        box10.style.display = 'block'
        extra.style.display = 'block'
        i++;
    }
});
p20.addEventListener('click', () => {
    window.scrollTo(0, 3050);
})
path.addEventListener('click', () => {
    window.scrollTo(0, 3050);
})

