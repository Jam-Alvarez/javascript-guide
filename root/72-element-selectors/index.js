
let titleElement = document.getElementById('js-title');
titleElement.style.backgroundColor = "lightblue";

// this method returns a node list, similar to an array
let fruits = document.getElementsByName('fruit');
fruits.forEach(fruit  => {
    if(fruit.checked) {
        console.log(fruit.value);
    } 
})

// find tags that you want to select, and then just pass that as an argument to this method
let vegetables = document.getElementsByTagName('li');
vegetables[1].style.backgroundColor = "lightblue";

// desserts is technically an array like object, but it behave similarly to a array 
let desserts = document.getElementsByClassName('desserts');
desserts[1].style.backgroundColor = "lightblue";

// now we have query selector, this is one of the popular
// we can select an element either by an id, class, tag or an attribute
let elementForTitle = document.querySelector('#js-title');
elementForTitle.style.backgroundColor = "lightpink";
// querySelector dot = class
// querySelector hashtag = id
// querySelector attribute = [for, checked, name etc...]

let elementForAll = document.querySelectorAll('.desserts');
elementForAll.forEach(element => 
    element.style.backgroundColor = "lightpink"
)



// this is are the few different ways in which we can select HTML elements