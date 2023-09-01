
// cookie = a small text file stored on your computer 
// used to remember information about the user
// saved in name=value pairs

// document.cookie = "firstName=Kita; expires=Sun, 1 January 2040 12:00 UTC; path=/";
// document.cookie = "lastName=Ikuyo; expires=Sun, 1 January 2040 12:00 UTC; path=/";
// console.log(document.cookie);

const username = document.querySelector("#js-username");
const nickname = document.querySelector("#js-nickname");

const submitBtn = document.querySelector("#js-submit-btn")
    .addEventListener("click", () => {
        setCookie("username", username.value, 1000);
        setCookie("nickname", nickname.value, 1000);
    });
const cookieBtn = document.querySelector("#js-cookies-btn")
    .addEventListener("click", () => {
        username.value = getCookie("username");
        nickname.value = getCookie("nickname");
    })

// remember to refresh the page after you submit and before you get the cookies!

function setCookie(name, value, expiry) {
    const date = new Date();
    date.setTime(date.getTime() + expiry * 24 * 60 * 60 * 1000);
    let expiryDate = "expires=" + date.toUTCString();
    document.cookie = `${name}=${value}; ${expiryDate}; path=/`;
    
}
function getCookie(name) {
    const cDecoded = decodeURIComponent(document.cookie);
    const cArray = cDecoded.split("; ");
    let result = null;

    cArray.forEach(element => {
        if(element.indexOf(name) == 0) {
            result = element.substring(name.length + 1);
        }
    })
    return result;
}

function deleteCookie(name) {
    setCookie(name, null, null);
}




// this is the introduction to cookies