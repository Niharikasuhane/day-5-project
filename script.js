 // const f=document.querySelector('#five')
// f.addEventListener("click",(event)=>{
//     console.log(event.target);
    

// })
// let random=Math.random()*10
// let num=Math.floor(random)
// console.log(num);


const main=document.querySelector('main')
const box=document.createElement("div")
box.classList.add("box")
const btn=document.querySelector('button')
const timer=document.querySelector('#timer')
const scorea=document.querySelector('#score')

const overlay=document.querySelector('#overlay')


let time=0;
let interval;
let score=0;

const randomcolor=()=>{
    let r= Math.floor(Math.random()*256);
    let g= Math.floor(Math.random()*256);

    let b= Math.floor(Math.random()*256);
    
    
    return`rgb(${r},${g},${b})`
}

const randombox=()=>{
    box.style.backgroundColor=randomcolor();
    main.append(box)
  let mainh=main.clientHeight-box.offsetHeight;
  let mainw= main.clientWidth-box.offsetWidth;
 const ry=Math.random()*mainh ;
    const rx=Math.random()*mainw;

    box.style.top=`${ry}px`
    box.style.left=`${rx}px`
}




btn.addEventListener('click',()=>{
   clearInterval(interval);
randombox()


   interval=setInterval(()=>{
randombox()
  time+=1;
timer.textContent=time;
},1000)


setTimeout(()=>{
    overlay.style.display="flex"
clearInterval(interval);
},10000)

})


box.addEventListener("click", () => {
    console.log("clicked");
    score += 10;
    scorea.textContent = score;
});