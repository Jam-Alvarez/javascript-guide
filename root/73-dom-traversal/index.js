
let element = document.querySelector('#desserts');
let children = Array.from(element.children);
children.forEach(child => child.style.backgroundColor = "lightpink")

children.style.backgroundColor = "lightblue";

// .firstElementChild
// .lastElementChild
// .parentElement
// .nextElementSibling
// .previousElementSibling
// .children[]
// Array.from(.children)



// this is are few DOM traversal techniques, elements are arranged in a family tree
// whatever element you select, that element can have a parent, children or siblings