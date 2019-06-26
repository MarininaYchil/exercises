// exercise 1

const dayList = ['Monday', 'Tuesday', 'Wednesday', 'Thuesday', 'Friday', 'Saturday', 'Sunday'];
const today = new Date();
const day = today.getDay();
const seconds = today.getSeconds();
const minutes = today.getMinutes();
const hours = today.getHours();

function getTimeFormat(hours, minutes, seconds) {
    const hoursInDay = 12;

    var partOfDay = hours >= hoursInDay ? 'pm' : 'am';

    if(hours >= hoursInDay) {
        hours = hours - hoursInDay;
    }

    return `${hours}${partOfDay}:${minutes}:${seconds}`;
}

console.log('Today is: ' + dayList[day - 1]);
console.log('Current time is: ' + getTimeFormat(hours, minutes, seconds));

// exercise 2

function printPage() {
    window.print();
}

// exercise 3


