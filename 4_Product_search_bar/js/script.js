
// we have set an attribute onkeyup="search()" in put tag in html. 


// onkeypress event will fire when relese a key 
// Example: click on search icon hold ctrl for long and then release and make uncommnet the log stmt at line no. 15 to see output in console.

const search = () => {
    // Target only one element 
    const searchBox = document.getElementById('search-item').value.toUpperCase();  
    const storeItems = document.getElementById('product-list'); 

    const product = document.querySelectorAll('.product');      // return Node list . ALL product div-tag
    const productName = document.getElementsByTagName('h2');    // return HTML list . ALL h2


    // console.log(searchBox, storeItems, product, productName);

    // console.log(product, productName)
    // console.log(product.length === productName.length)



    // user will give some value and that we will match with our product name. we check out user input is matching with product name or not.


    // loop over all products
    for (var i = 0; i < productName.length; i++) {   
        
        // recap, getElementByTagName() returns HTML collection
        // get the value from class='product' div-tag
        let match = product[i].querySelectorAll('h2')[0];  // Onnly one h2. But return Node List that's why use [0]
        
        console.log("match= ",match); // Product name




        // If there is product name then do further operation
        if(match){

            // if match has property value for either textContent or for innerHTML then it is OK, if not have value not go inside nested if.
            let textValue = match.textContent || match.innerHTML;


            // <div> <strong>Lorem Ipsum</strong> </div
            // Target element div : ele
            // ele.textContent = Loren Ipsum
            // ele.innerHTML = <strong>Lorem Ipsum</strong>


            // The typed character(s) are contains by the product_name ?
            if (textValue.toUpperCase().indexOf(searchBox) > -1){    // -1 means not contains
                
                // Show that product.
                product[i].style.display = ""; // display doesn't have any value. (get default value. block or inline)
                
            }
            else {
                // if our user input not matches with the product name. 
                product[i].style.display = "none"; // That product removed from the product list
                
            }
        }
          
    }


}

// After releasing(pressing) each key the event will fire and as per that it will show result means,
// if you want to search, t shirt
// then as you write the , "t" , "t s", "t sh", ....
// the search results continuousy upgrades because after releasing each key the method is calling and compare the user input with product name

