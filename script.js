// Get the values inputed by the user and assign them to a variable
function calculate() {
    const day = document.getElementById('day').value;
    const month = document.getElementById('month').value;
    const year = document.getElementById('year').value;

// use the number method to convert the variables to a number
    Number(day);
    Number(month);
    Number(year);

// The if/else statements verify if the block of code or conditions are met
    if (day > 31 || day < 1)
        alert('Must be a valid day');
    else if (month > 12)
        alert('Must be a valid month');
    else if (year > new Date().getFullYear())
        alert('Year must be in the past');
    else {
        const dateOfBirth = new Date(year, month - 1, day);
        const currentDate = new Date();

        const timeDiff = currentDate.getTime() - dateOfBirth.getTime();
        
        const dayDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

        const yearDiff = Math.floor(dayDiff / 365);

        const monthDiff = Math.floor((dayDiff % 365) / 30.44);

        const remainingDays = Math.floor(dayDiff - yearDiff * 365 - monthDiff * 30.44);

        document.querySelector('.year').innerHTML = yearDiff;
        document.querySelector('.month').innerHTML = monthDiff;
        document.querySelector('.day').innerHTML = dayDiff;
    }

}
