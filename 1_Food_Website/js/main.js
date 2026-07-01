// active navbar
// when you scroll the navbar should have a white background
let nav = document.querySelector(".navigation-wrap");

// 'onscroll' event on window object(A Global object)
window.onscroll = () => {
    if(document.documentElement.scrollTop > 20){
        // 'documentElement' property get the reference of root node
        // 'scrollTop' will scroll an element more than 20
        nav.classList.add('scroll-on');
    }else{
        nav.classList.remove('scroll-on');

    }

    // So that when you do not scroll only visit navbar looks like it is connected with hero content
    // scroll after that shows line
}

//  Anther solution of this active navbar problem is, This problem you can also solve by adding a class : "bg-light-subtle"



// nav side
/* Problem :
At mobile screen
1.click on burger icon nav-items overlap over the hero content
2.after click on 'about' from navbar the navbar should automatically close

*/

// solution for problem 1 :
// By responsive-style.css iPad section

// Solution for problem 2 :

let navbar = document.querySelectorAll(".nav-link");
// target all navitems


let navCollase = document.querySelector(".navbar-collapse.collapse");
// target 'collapse' class inside a 'navbar' class

navbar.forEach(function (a){
    a.addEventListener("click", function (){

        navCollase.classList.remove("show");

        // when clcik on burger icon bootsrap add "show" class so that it will expand
        // we will remove that when someone click on any nav-item
    })
})




// counter design


document.addEventListener("DOMContentLoaded",  ()=>{
    function counter(id, start, end, duration) {
        let obj = document.getElementById(id),
        current = start,
        range = end - start,
        increment = end > start ? 1 : -1,
        steps = Math.abs(Math.floor( duration / range ));

        // console.log("current =", current);
        // console.log("range =", range);
        // console.log("increment=", increment );
        // console.log("steps =",steps);

        let timer = setInterval( () =>{
            current += increment;
            obj.textContent = current;
            if(current == end){
                clearInterval(timer)

            }
        }, steps )
        // steps will be in miliseconds
        // after that much amount of time function will take pause and again run.
    }


    // duration in milisecond
    counter("count1", 0, 978, 1);
    counter("count2", 10, 100, 4000);
    counter("count3", 0, 478, 3500);
    counter("count4", 0, 1078, 20);

    // By default,  variables are assigned global scope and behave like "var".
})



