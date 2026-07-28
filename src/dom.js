// TASK 1: ACCESSING AND STYLING THE BODY
/*
    The 'document' keyword opens up the entire tree. We can reach the body instantly.
    Note the camelCase spelling differences on the Style Object (eg: backgroundColor vs background-color)
*/
document.body.style.backgroundColor = "lightyellow";


let username = prompt("Give me your name,please");
// TASK 2: SELECTING AND STYLING BY ID
username=username.toLocaleUpperCase();
// getElementById strictly targets a unique ID string (No hashtag required!)

//selected the elemnt with id :main heading
const heading= document.getElementById("main-heading");

//changed the innertext of that  Element
heading.innerText = `Welcome ${username}`;

// Modifying Content
heading.style.fontFamily = "Times New Roman";

// Modifying Style via ID Selectors



// TASK 3: SELECTING AND STYLING WITH QUERYSELECTOR
const badge = document.querySelector(".badge");
badge.style.backgroundColor = "lightGreen"
badge.style.color = "white"
/*
    querySelector uses standard CSS selectors (. for class, # for ID)
    It only selects the FIRST matching element it finds.
*/

// Styling a class using querySelector


// Altering text of an ID using querySelector
const status = document.querySelector("#status-text")
status.innerText = `SUCCESS : Connection established by ${username}`;
status.style.fontWeight = "semi-bold";


// TASK 4: TARGETING MULTIPLE ELEMENTS (OPTIONAL)
// These methods return a collection (Array-like list). To style one, we must use an index.





// TASK 5: .INNERHTML VS .INNERTEXT
/*
    .innerText only treats text as a literal string. 
    .innerHTML lets you inject raw HTML formatting tags right through your JavaScript.
*/
const description = document.querySelector(".description")
description.innerHTML = "Account Status: <b><u> Suspended </u></b>";


// TASK 6: MANIPULATING CLASSES WITH .CLASSLIST
/*
    .classList allows us to add, remove, or toggle CSS classes on an element.
    This is a cleaner way to apply styles than directly modifying the .style property.
    Direct inline styling using .style can make your files messy. 
    A better way is to write the styling rule in CSS, and use .classList.add() to apply it.
    Note: For this to work, ensure you add '.alert-mode { border: 3px solid red; }' to your style.css file!
*/
const cardContainer = document.querySelector(".card-container");
cardContainer.classList.add("alert-mode");


// TASK 7: DOM NODE TRAVERSAL (.PARENTELEMENT)
/*
    You don't always need an ID to find a box. If you have targeted a child element, 
    you can climb up the visual tree to grab its parent using .parentElement.
*/
