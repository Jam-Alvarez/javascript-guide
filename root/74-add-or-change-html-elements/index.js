
// add/change HTML elements
// .innerHTML (vulnerable to xxs attacks)
// .textContent (more secure)

const nameTag = document.createElement("h1");
nameTag.textContent = window.prompt("Enter your name");
document.body.append(nameTag);

const jsList = document.querySelector('#fruit');
const listItem = document.createElement('li');
const listItemTwo = document.createElement('li');
listItem.textContent = "Kiwi";
listItemTwo.textContent = "Orange";
jsList.append(listItem); // puts element to the end
jsList.prepend(listItemTwo); // puts element to the beginning
jsList.insertBefore(listItem,jsList.getElementsByTagName("li")[2]); // puts element somewhere in the middle



// so this is one of the beginners way to add & change HTML elements