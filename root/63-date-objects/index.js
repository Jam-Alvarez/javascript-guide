
// The date object is used to work with dates & times

    // to create a date object, let's just call the date constructor
    let date = new Date();
    
    // it's not that much of a readable, but we can change it
    // date = date.toLocaleDateString();
    console.log(date);
    
    // for practice, let's create a label and update the label with the current date and time
    document.getElementById('js-label').innerHTML = date;
    
    // there are additional arguments you can pass to, one of them is this
    // year > month > day > hour > minutes > seconds > milliseconds
        // let date = new Date(8888, 8, 8, 8, 8, 8, 8);
        // you can also pass in string representation of date and time
        // let date = new Date("August 8, 2023 00:00:00");

    // you can even get properties from a current date
    // if you need for example the "year" then you can assign that to a variable
    let year = date.getFullYear();
    let dayOfMonth = date.getDate();
    let dayOfWeek = date.getDay();
    let month = date.getMonth();
    let hour = date.getHours(); // military time
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let ms = date.getMilliseconds();
    // reminder: just make sure that this is above the "date = date.toLocaleDateString()" method if ever you're going to use this
    document.getElementById('js-year-label').innerHTML = year;
    // these are the various get methods

    // you can also set these properties too
    date.setFullYear(2025);
    date.setMonth(8);
    date.setDate(15);
    date.setHours(8);
    date.setMinutes(8);
    date.setMilliseconds(8);
    // these are the various set methods

    // we can even create our own custom functions to format our date and time

    // let's create a function to format the date first
    function formatDate(date) {
        let year = date.getFullYear();
        let month = date.getMonth(); 
        let day = date.getDate();

        return `The date today is ${month} ${day}, ${year}`;
    }

    // when we update this label, we will invoke the "formatDate" function and pass in our "date"
    document.getElementById('js-date-format-label').innerHTML = formatDate(date);

    // let's format the time as well for practice
    function formatTime(date) {
        let hours = getHours();
        let minute = getMinutes();
        let second = getSeconds();
        let sunOrMoon = hours >= 12 ? 'PM' : 'AM';

        // converts hours from military to standard
        hours  = (hours % 12) || 12;

        return `${hours}:${minute}:${second} ${sunOrMoon}`;
    }



// this is the date objects