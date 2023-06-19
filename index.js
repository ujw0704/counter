const increase = document.querySelector("#increse");
const reset = document.querySelector("#reset");
const decrease = document.querySelector("#decrese");
const para = document.querySelector("p")

let count = 0;

increase.addEventListener("click",function(){
    count++
     para.innerHTML= count;
     console.log("ujwal");
    
    });

    reset.addEventListener("click",function(){
        count =0;
        para.innerHTML = count;


    });
    para.innerHTML= count;
    
    decrease.addEventListener("click",function(){

        if(count <0){

            count =0;
        }
        para.innerHTML= count--;



    
        
        
    
    
   
})


    




