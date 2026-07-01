// IIFE(Immediate Invoke Function Expression)
// (function () {
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.button'); // return nodelist

    // let buttons = document.querySelectorAll('.buttons'); 
    // If you target parent container. "buttons" [i.e. div.container] then it will querySelectorAll will target it. Event listener will apply on that container not on all button-tag. That will create a bug. we also resolve that bug below. But this the root cause.





    // There are two similar class in html "buttons" and "button" so make what you use.

    // console.log(screen, buttons);


    let clear = document.querySelector('.clear');
    let equal = document.querySelector('.equal');
    // console.log(buttons);

    // buttons.forEach(function(button){console.log(button);
    // })

    buttons.forEach(function (button) {
        button.addEventListener('click', function (e) {
            // This function is only work when we click on the button
            // console.log('Hi');



            // BUG FIX:
            // When we click on area inside two buttons it shows "undefined" screen
            // Reason, Insdie html every button is packed inside a div-container. So when you click on button it has data-num attribute so, e.target.dataset.num works. But when you click on container it does not have data-num attribute so, it shows 'undefined'
            if (e.target.tagName !== "BUTTON") return;
            // Even if click nothing happens


            let value = e.target.dataset.num;
            // store clicked button's value in variable
            // e.target refers to element on which we have clicked. 
            // we can access all "data-" attributes by dataset. All "data-" values are in dataset object.

            // let value2 = e.target;
            // console.log(value2)


            // put the values to the screen
            screen.value += value;
        })
    });


    // equal(=) button
    // Note: make sure you have data-num attribute with blank value. if you not have it in html code then it shows undefined. (∵ e.target.dataset.num)
    equal.addEventListener('click', (e) => {
        // fist we check the screen having some value or not
        if (screen.value === '') {
            alert("Please do some computation / Perform some operation");
        }

        // else we perform computation and then we change those value with our result
        else {
            let answer = eval(screen.value);
            screen.value = answer;

            // "eval" is function used to evaluate a expression present as string
            // alert(eval("12+2"));
        }


    });


    // clear screen
    // Note: make sure you have data-num attribute 
    clear.addEventListener('click',function (e) {
        screen.value ="";
    })


// })();
