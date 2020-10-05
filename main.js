let eggTypeSelectedElem = document.getElementById('eggTypeSelected');
let eggMinutesRemainingElem = document.getElementById('eggMinutesRemaining');
let minutesToSecondsElem = document.getElementById('minutesToSeconds');

let softEggSelectedElem = 'Soft Boil'
let mediumEggSelectedElem = 'Medium Boil'
let hardEggSelectedElem = 'Hard Boil'
let softBoilEgg = 6;
let mediumBoilEgg = 10;
let hardBoilEgg = 12;
let width = 100;
let widthRemaining = 59;

const softEggBoil = () => {
    eggTypeSelectedElem.innerText = softEggSelectedElem;
    eggTypeSelectedElem.style.color = 'red';
    eggMinutesRemainingElem.innerText = softBoilEgg.toString();
    setInterval(() => {
        eggMinutesRemainingElem.innerText = (softBoilEgg-- - 60000 / 60000).toString();
        if (softBoilEgg >= 6) {
            document.getElementById('progressBar').style.backgroundColor = 'blue';
        } else if (softBoilEgg === 5) {
            document.getElementById('progressBar').style.backgroundColor = 'yellow'
            document.getElementById('progressBar').style.width = width - 20 + '%';
        } else if (softBoilEgg === 4) {
            document.getElementById('progressBar').style.backgroundColor = 'teal'
            document.getElementById('progressBar').style.width = width - 40 + '%';
        } else if (softBoilEgg === 3) {
            document.getElementById('progressBar').style.backgroundColor = 'green'
            document.getElementById('progressBar').style.width = width - 60 + '%';
        } else if (softBoilEgg === 2) {
            document.getElementById('progressBar').style.backgroundColor = 'black'
            document.getElementById('progressBar').style.width = width - 80 + '%';
        } else if (softBoilEgg === 1) {
            document.getElementById('progressBar').style.backgroundColor = 'red'
        } else if (softBoilEgg < 1) {
            minutesToSecondsElem.innerText = 'Seconds Remaining'
            eggMinutesRemainingElem.innerText = widthRemaining.toString();
            document.getElementById('progressBar').style.width = widthRemaining-- + '%';
            if (widthRemaining <= -1) {
                eggMinutesRemainingElem.innerText = "Your eggs are"
                minutesToSecondsElem.innerText = "Done!"
                eggMinutesRemainingElem.style.color = 'red'
                minutesToSecondsElem.style.color = 'red'
            }
        }
    }, 60000)
}

const mediumEggBoil = () => {
    eggTypeSelectedElem.innerText = mediumEggSelectedElem;
    eggTypeSelectedElem.style.color = 'red';
    eggMinutesRemainingElem.innerText = mediumBoilEgg.toString();
    setInterval(() => {
        eggMinutesRemainingElem.innerText = (mediumBoilEgg-- - 60000 / 60000).toString();
        if (mediumBoilEgg >= 10) {
            document.getElementById('progressBar').style.backgroundColor = 'blue';
        } else if (mediumBoilEgg === 9) {
            document.getElementById('progressBar').style.backgroundColor = 'yellow'
            document.getElementById('progressBar').style.width = width - 10 + '%';
        } else if (mediumBoilEgg === 8) {
            document.getElementById('progressBar').style.backgroundColor = 'teal'
            document.getElementById('progressBar').style.width = width - 20 + '%';
        } else if (mediumBoilEgg === 7) {
            document.getElementById('progressBar').style.backgroundColor = 'green'
            document.getElementById('progressBar').style.width = width - 30 + '%';
        } else if (mediumBoilEgg === 6) {
            document.getElementById('progressBar').style.backgroundColor = 'maroon'
            document.getElementById('progressBar').style.width = width - 40 + '%';
        } else if (mediumBoilEgg === 5) {
            document.getElementById('progressBar').style.backgroundColor = 'purple'
            document.getElementById('progressBar').style.width = width - 50 + '%';
        } else if (mediumBoilEgg === 4) {
            document.getElementById('progressBar').style.backgroundColor = 'orange'
            document.getElementById('progressBar').style.width = width - 60 + '%';
        } else if (mediumBoilEgg === 3) {
            document.getElementById('progressBar').style.backgroundColor = 'pink'
            document.getElementById('progressBar').style.width = width - 70 + '%';
        } else if (mediumBoilEgg === 2) {
            document.getElementById('progressBar').style.backgroundColor = 'red'
            document.getElementById('progressBar').style.width = width - 80 + '%';
        } else if (mediumBoilEgg === 1) {
            document.getElementById('progressBar').style.backgroundColor = 'black'
            document.getElementById('progressBar').style.width = width - 90 + '%';
        } else if (mediumBoilEgg < 1) {
            minutesToSecondsElem.innerText = 'Seconds Remaining'
            eggMinutesRemainingElem.innerText = widthRemaining.toString();
            document.getElementById('progressBar').style.width = widthRemaining-- + '%';
            if (widthRemaining <= -1) {
                eggMinutesRemainingElem.innerText = 'Your eggs are'
                minutesToSecondsElem.innerText = 'Done!'
                eggMinutesRemainingElem.style.color = 'red'
                minutesToSecondsElem.style.color = 'red'
            }
        }
    }, 60000)
}

const hardEggBoil = () => {
    eggTypeSelectedElem.innerText = hardEggSelectedElem;
    eggTypeSelectedElem.style.color = 'red';
    eggMinutesRemainingElem.innerText = hardBoilEgg.toString();
    setInterval(() => {
        eggMinutesRemainingElem.innerText = (hardBoilEgg-- - 60000 / 60000).toString();
        if (hardBoilEgg >= 12) {
            document.getElementById('progressBar').style.backgroundColor = 'blue';
        } else if (hardBoilEgg === 11) {
            document.getElementById('progressBar').style.backgroundColor = 'yellow'
            document.getElementById('progressBar').style.width = width - 9 + '%';
        } else if (hardBoilEgg === 10) {
            document.getElementById('progressBar').style.backgroundColor = 'teal'
            document.getElementById('progressBar').style.width = width - 18 + '%';
        } else if (hardBoilEgg === 9) {
            document.getElementById('progressBar').style.backgroundColor = 'green'
            document.getElementById('progressBar').style.width = width - 27 + '%';
        } else if (hardBoilEgg === 8) {
            document.getElementById('progressBar').style.backgroundColor = 'maroon'
            document.getElementById('progressBar').style.width = width - 36 + '%';
        } else if (hardBoilEgg === 7) {
            document.getElementById('progressBar').style.backgroundColor = 'orange'
            document.getElementById('progressBar').style.width = width - 45 + '%';
        } else if (hardBoilEgg === 6) {
            document.getElementById('progressBar').style.backgroundColor = 'blue'
            document.getElementById('progressBar').style.width = width - 54 + '%';
        } else if (hardBoilEgg === 5) {
            document.getElementById('progressBar').style.backgroundColor = 'green'
            document.getElementById('progressBar').style.width = width - 63 + '%';
        } else if (hardBoilEgg === 4) {
            document.getElementById('progressBar').style.backgroundColor = 'purple'
            document.getElementById('progressBar').style.width = width - 72 + '%';
        } else if (hardBoilEgg === 3) {
            document.getElementById('progressBar').style.backgroundColor = 'teal'
            document.getElementById('progressBar').style.width = width - 81 + '%';
        } else if (hardBoilEgg === 2) {
            document.getElementById('progressBar').style.backgroundColor = 'red'
            document.getElementById('progressBar').style.width = width - 90 + '%';
        }
        else if (hardBoilEgg === 1) {
            document.getElementById('progressBar').style.backgroundColor = 'black'
        } else if (hardBoilEgg < 1) {
            minutesToSecondsElem.innerText = 'Seconds Remaining'
            eggMinutesRemainingElem.innerText = widthRemaining.toString();
            document.getElementById('progressBar').style.width = widthRemaining-- + '%';
            if (widthRemaining <= -1) {
                eggMinutesRemainingElem.innerText = "Your eggs are"
                minutesToSecondsElem.innerText = "Done!"
                eggMinutesRemainingElem.style.color = 'red'
                minutesToSecondsElem.style.color = 'red'
            }
        }
    }, 60000)
}