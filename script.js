const increase = document.getElementById('Increase')
const decrease = document.getElementById('Decrease');
const reset = document.getElementById('Reset');

const counter = document.getElementById('counter');

let count = 0 ;
counter.innerText = 0;

increase.addEventListener('click',()=>{
   counter.innerText = ++count;
})

decrease.addEventListener('click',()=>{
    if(count > 0){
        counter.innerText = --count;
    }
    else{
        alert("its going negative and thats not possible ")
    }
})
reset.addEventListener('click',()=>{
    count = 0;
   counter.innerText = count;
})


    
    

