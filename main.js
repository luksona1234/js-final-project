let p = document.querySelector('.p')
let p1 = document.querySelector('.p1')
let p2 = document.querySelector('.p2')
let p3 = document.querySelector('.p3')
let p4 = document.querySelector('.p4')
let img = document.querySelector('.img')
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
        extra.style.display = 'none'
        i++;
        console.log(i);
    }else if(i % 2 == 1){

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
let box17 = document.querySelector('.box17')
let inputt = document.querySelector('.inputt')
let lad  = inputt.value
let inputt1= document.querySelector('.inputt1')
let errorName = document.querySelector('.errorName')
let errorLastName = document.querySelector('.errorLastName')
let box11 = document.querySelector('.box11');
let box12 = document.querySelector('.box12');
let box13 = document.querySelector('.box13');
let box1 = document.querySelector('.box1');
let missionSucess = document.querySelector('.sucess');
let goBack = document.querySelector('.goBack')
let sucess = document.querySelector('.sucess')

box17.addEventListener('click', () => {
    if(inputt.value.length < 6){
        errorName.style.display = 'block'
    }else if(inputt.value.length >= 6){
        errorName.style.display = 'none'
        if(inputt1.value.length >= 6){
            errorLastName.style.display = 'none' 
            box12.style.display = 'none'
            box13.style.display = 'none'
            missionSucess.style.display = 'block'

        }
    }
    if(inputt1.value.length < 6){
        errorLastName.style.display = 'block'
    }else if(inputt1.value.length >= 6){
        errorLastName.style.display = 'none'
    } 
    
    
})
goBack.addEventListener('click', () => {
    box11.style.display = 'block'
    box12.style.display = 'block'
    box13.style.display = 'block'
    sucess.style.display = 'none'
})

let boxSebastian = document.querySelector('.box-Sebastian');
let boxGraham = document.querySelector('.box-Graham');
let boxMonica = document.querySelector('.box-Monica');
let boxLeon = document.querySelector('.box-Leon');
let theImageInsideOfTheOrangeBox = document.querySelector('.theImageInsideOfTheOrangeBox')
let mover1 = document.querySelector('.mover-1')
let pppp = document.querySelector('.pppp');
let pppp1 = document.querySelector('.pppp1');
let box64 = document.querySelector('.div64');
let div60 = document.querySelector('.div60')

boxSebastian.addEventListener('click', () => {
    div60.style.display = 'none'
    boxSebastian.style.borderRadius = '0%'
    theImageInsideOfTheOrangeBox.style.backgroundImage = 'url(./img6.png)'
    theImageInsideOfTheOrangeBox.style.backgroundposition = 'center'
    theImageInsideOfTheOrangeBox.style.backgroundsize = 'cover'
    theImageInsideOfTheOrangeBox.style.backgroundRepeat = 'no repeat'
    mover1.style.position = 'absolute'
    mover1.style.width = '30%'
    mover1.style.height = '30%'
    mover1.style.marginLeft = '560px'
    mover1.style.marginTop = '160px'
    pppp.style.fontSize = '25px'
    pppp.style.color = 'white'
    pppp1.style.fontSize = '30px'
    pppp1.style.color = 'white'
    box64.style.backgroundColor = 'white'
})





