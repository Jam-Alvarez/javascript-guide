
// let's create a practice program!

const displayLabel = document.getElementById('js-time-display');

standardTime();
setInterval(standardTime, 1000);

function standardTime() {
    let date = new Date();
    displayLabel.innerHTML = formatTime(date);
    
    function formatTime(date) {
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let timeOfDay = hours >= 12 ? 'PM' : 'AM';
        hours = (hours % 12) || 12;

        hours = toAddZero(hours);
        minutes = toAddZero(minutes);
        seconds = toAddZero(seconds);

        return `${hours}:${minutes}:${seconds} ${timeOfDay}`;
    }

    function toAddZero(time) {
        time = time.toString();
        return time.length < 2 ? '0' + time : time;
    }
}



// done!