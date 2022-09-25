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
let mover2 = document.querySelector('.mover-2');
let mover3 = document.querySelector('.mover-3');
let pppp = document.querySelector('.pppp');
let pppp1 = document.querySelector('.pppp1');
let box64 = document.querySelector('.div64');
let div60 = document.querySelector('.div60')

// boxSebastian.addEventListener('click', () => {
//     div60.style.width = '56%'
//     boxSebastian.style.borderRadius = '0%'
//     theImageInsideOfTheOrangeBox.style.backgroundImage = 'url(./img6.png)'
//     theImageInsideOfTheOrangeBox.style.backgroundposition = 'center'
//     theImageInsideOfTheOrangeBox.style.backgroundsize = 'cover'
//     theImageInsideOfTheOrangeBox.style.backgroundRepeat = 'no repeat'
//     mover1.style.position = 'absolute'
//     mover1.style.width = '30%'
//     mover1.style.height = '30%'
//     mover1.style.marginLeft = '560px'
//     mover1.style.marginTop = '160px'
//     pppp.style.fontSize = '25px'
//     pppp.style.color = 'white'
//     pppp1.style.fontSize = '30px'
//     pppp1.style.color = 'white'
//     box64.style.backgroundColor = 'white'
// })
// let pppp2 = document.querySelector('.pppp2');
// let pppp3 = document.querySelector('.pppp3');
// let GrahamLinks = document.querySelector('.GrahamLinks')
// boxGraham.addEventListener('click', () => {

//     if(theImageInsideOfTheOrangeBox.style.backgroundImage = 'url(./img6.png)'){
//         theImageInsideOfTheOrangeBox.style.backgroundImage = 'url(./img7.png)'
//         div60.style.width = '47%'
//         mover1.style.width = '55%'
//         mover1.style.height = '100%'
//         mover1.style.marginLeft = '110px'
//         mover1.style.marginTop = '0px'
//         pppp.style.fontSize = '13px'
//         pppp.style.fontWeight = 'bold'
//         pppp.style.color = 'black'
//         pppp1.style.fontSize = '10px'
//         pppp1.style.color = 'black'
//         box64.style.width = '10%'
//         box64.style.backgroundColor = 'transparent'
//         theImageInsideOfTheOrangeBox.style.backgroundposition = 'center'
//         theImageInsideOfTheOrangeBox.style.backgroundsize = 'cover'
//         theImageInsideOfTheOrangeBox.style.backgroundRepeat = 'no repeat'
//         mover2.style.position = 'absolute'
//         mover2.style.width = '30%'
//         mover2.style.height = '30%'
//         mover2.style.marginLeft = '326px'
//         mover2.style.marginTop = '179px'
//         pppp2.style.fontSize = '25px'
//         pppp2.style.color = 'white'
//         pppp3.style.fontSize = '30px'
//         pppp3.style.color = 'white'
//         GrahamLinks.style.backgroundColor = 'white'

//     }else if(theImageInsideOfTheOrangeBox.style.backgroundImage = 'url(./img10.png)'){
//         boxMonica.style.width = '47%'
//         mover3.style.width = '55%'
//         mover3.style.height = '100%'
//         mover3.style.marginLeft = '560px'
//         mover3.style.marginTop = '0px'
//     }
//     // boxGraham.style.width = '56%'
//     // theImageInsideOfTheOrangeBox.style.backgroundImage = 'url(./img7.png)'
//     theImageInsideOfTheOrangeBox.style.backgroundposition = 'center'
//     theImageInsideOfTheOrangeBox.style.backgroundsize = 'cover'
//     theImageInsideOfTheOrangeBox.style.backgroundRepeat = 'no repeat'
//     mover2.style.position = 'absolute'
//     mover2.style.width = '30%'
//     mover2.style.height = '30%'
//     mover2.style.marginLeft = '326px'
//     mover2.style.marginTop = '179px'
//     pppp2.style.fontSize = '25px'
//     pppp2.style.color = 'white'
//     pppp3.style.fontSize = '30px'
//     pppp3.style.color = 'white'
//     GrahamLinks.style.backgroundColor = 'white'
// })
// boxMonica.addEventListener('click', () => {
    
// })
window.onscroll = function() {myFunction()}
let box102 = document.querySelector('.box102')

function myFunction() {
    if(document.documentElement.scrollTop < 1600){
        box102.style.display = 'none'
    }
    if(document.documentElement.scrollTop > 1600){
        box102.style.display = 'block'
        box102.style.display = 'flex'
        box102.style.flexDirection = 'row'
    }
}

let js20 = document.querySelector('.js-20');
let js21 = document.querySelector('.js-21');
let js22 = document.querySelector('.js-22');
let js23 = document.querySelector('.js-23');
let js24 = document.querySelector('.js-24');
let altboxluka8 = document.querySelector('.alt-box-luka8')
let altboxluka9 = document.querySelector('.alt-box-luka9')
let altboxluka10 = document.querySelector('.alt-box-luka10')
let altboxluka11 = document.querySelector('.alt-box-luka11')


js21.addEventListener('click', () => {
    altboxluka9.style.display = 'none'
    altboxluka10.style.display = 'none'
    altboxluka11.style.display = 'none'
    if(altboxluka8.style.display = 'none'){
        altboxluka8.style.display = 'block'
        altboxluka8.style.width = '500px'
        altboxluka8.style.height = '656px'
    }
    js21.style.backgroundColor = 'blue'
    if(js20.style.backgroundColor = 'blue'){
        js20.style.backgroundColor = 'transparent'
    }
    if(js22.style.backgroundColor = 'blue'){
        js22.style.backgroundColor = 'transparent'
    }
    if(js23.style.backgroundColor = 'blue'){
        js23.style.backgroundColor = 'transparent'
    }
    if(js24.style.backgroundColor = 'blue'){
        js24.style.backgroundColor = 'transparent'
    }
})
js22.addEventListener('click', () => {
    altboxluka9.style.display = 'none'
    altboxluka11.style.display = 'none'
    altboxluka8.style.display = 'none'
    if(altboxluka10.style.display = 'none'){
        altboxluka10.style.display = 'block'
        altboxluka10.style.width = '500px'
        altboxluka10.style.height = '656px'
        altboxluka10.style.marginTop = '0px'
    }
    js22.style.backgroundColor = 'blue'
    if(js20.style.backgroundColor = 'blue'){
        js20.style.backgroundColor = 'transparent'
    }
    if(js21.style.backgroundColor = 'blue'){
        js21.style.backgroundColor = 'transparent'
    }
    if(js23.style.backgroundColor = 'blue'){
        js23.style.backgroundColor = 'transparent'
    }
    if(js24.style.backgroundColor = 'blue'){
        js24.style.backgroundColor = 'transparent'
    }

})
js23.addEventListener('click', () => {
    altboxluka8.style.display = 'none'
    altboxluka10.style.display = 'none'
    altboxluka11.style.display = 'none'
    if(altboxluka9.style.display = 'none'){
        altboxluka9.style.display = 'block'
        altboxluka9.style.width = '500px'
        altboxluka9.style.height = '656px'
    }
    js23.style.backgroundColor = 'blue'
    if(js20.style.backgroundColor = 'blue'){
        js20.style.backgroundColor = 'transparent'
    }
    if(js22.style.backgroundColor = 'blue'){
        js22.style.backgroundColor = 'transparent'
    }
    if(js21.style.backgroundColor = 'blue'){
        js21.style.backgroundColor = 'transparent'
    }
    if(js24.style.backgroundColor = 'blue'){
        js24.style.backgroundColor = 'transparent'
    }
})
js24.addEventListener('click', () => {
    altboxluka8.style.display = 'none'
    altboxluka10.style.display = 'none'
    altboxluka9.style.display = 'none'
    if(altboxluka11.style.display = 'none'){
        altboxluka11.style.display = 'block'
        altboxluka11.style.marginTop = '0px'
        altboxluka11.style.width = '50%'
        altboxluka11.style.height = '656px'
    }
    js24.style.backgroundColor = 'blue'
    if(js20.style.backgroundColor = 'blue'){
        js20.style.backgroundColor = 'transparent'
    }
    if(js22.style.backgroundColor = 'blue'){
        js22.style.backgroundColor = 'transparent'
    }
    if(js23.style.backgroundColor = 'blue'){
        js23.style.backgroundColor = 'transparent'
    }
    if(js21.style.backgroundColor = 'blue'){
        js21.style.backgroundColor = 'transparent'
    }
})
js20.addEventListener('click', () => {
    if(altboxluka8.style.display = 'none'){
        altboxluka8.style.display = 'block'
        altboxluka8.style.width = '360px'
        altboxluka8.style.height = '600px'
    } 
    if(altboxluka10.style.display = 'none'){
        altboxluka10.style.display = 'block'
        altboxluka10.style.width = '360px'
        altboxluka10.style.height = '600px'
        altboxluka10.style.marginTop = '42px'
    }
    if(altboxluka9.style.display = 'none'){
        altboxluka9.style.display = 'block'
        altboxluka9.style.width = '360px'
        altboxluka9.style.height = '600px'
    }
    if(altboxluka11.style.display = 'none'){
        altboxluka11.style.display = 'block'
        altboxluka11.style.width = '360px'
        altboxluka11.style.height = '600px'
        altboxluka11.style.marginTop = '42px'  
    }
    js20.style.backgroundColor = 'blue'
    if(js24.style.backgroundColor = 'blue'){
        js24.style.backgroundColor = 'transparent'
    }
    if(js22.style.backgroundColor = 'blue'){
        js22.style.backgroundColor = 'transparent'
    }
    if(js23.style.backgroundColor = 'blue'){
        js23.style.backgroundColor = 'transparent'
    }
    if(js21.style.backgroundColor = 'blue'){
        js21.style.backgroundColor = 'transparent'
    }
})
let threeBoxesInboxUnderThePlan = document.querySelector('.threeBoxesInboxUnderThePlan');
let lotsOfPTags = document.querySelector('.lotsOfPTags');

let alta1 = document.querySelector('.alta-1');
let alta2 = document.querySelector('.alta-2');
let altar1 = document.querySelector('.altar-1');
let altar2 = document.querySelector('.altar-2');
if(lotsOfPTags.style.display = 'none'){
    threeBoxesInboxUnderThePlan.style.height = '100px'
}
if(alta1.style.display = 'none'){
    altar1.style.height = '100px'
}
if(alta2.style.display = 'none'){
    altar2.style.height = '100px'
}
let scrolldown = document.querySelector('.scrollDown');
let altarn1 = document.querySelector('.altarn-1');
let altarn2 = document.querySelector('.altarn-2');

scrolldown.addEventListener('click', () => {
    if(lotsOfPTags.style.display = 'none'){
        threeBoxesInboxUnderThePlan.style.height = '560px'
        lotsOfPTags.style.display = 'block'
    }
})
altarn1.addEventListener('click', () => {
    if(alta1.style.display = 'none'){
        altar1.style.height = '560px'
        alta1.style.display = 'block'
    }
})
altarn2.addEventListener('click', () => {
    if(alta2.style.display = 'none'){
        altar2.style.height = '560px'
        alta2.style.display = 'block'
    }
})
















