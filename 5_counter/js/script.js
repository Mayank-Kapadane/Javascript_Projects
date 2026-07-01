


const buttons = document.querySelectorAll(".counterBtn")

let count = 0

// console.log(buttons);

buttons.forEach(function(button){
    button.addEventListener("click", function(e){
        if(button.classList.contains("prevBtn")){
            count--;
        }
        if(button.classList.contains("nextBtn")){
            count++;
        }
        
        const counter = document.getElementById("counter");
        counter.textContent = count;
        // console.log(counter, counter.textContent,count);


        if(count < 0){
            counter.style.color = "red";
        }
        else if(count > 0){
            counter.style.color = "green";
            
        }
        else{
            
            counter.style.color = "black";
        }

    })
})