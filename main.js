let eggTypeSelectedElem = document.getElementById('eggTypeSelected');
let eggMinutesRemainingElem = document.getElementById('eggMinutesRemaining');

let softEggSelectedElem = 'Soft Boil'
let mediumEggSelectedElem = 'Medium Boil'
let hardEggSelectedElem = 'Hard Boil'
let softBoilEgg = 6;
let mediumBoilEgg = 10;
let hardBoilEgg = 12;

const softEggBoil = () => {
    eggTypeSelectedElem.innerText = softEggSelectedElem;
    eggTypeSelectedElem.style.color = 'red';
    eggMinutesRemainingElem.innerText = softBoilEgg.toString();
    setInterval(() => {
        eggMinutesRemainingElem.innerText = (softBoilEgg-- - 60000 / 60000).toString();
        console.log(softBoilEgg)
    }, 60000)
}

const mediumEggBoil = () => {
    eggTypeSelectedElem.innerText = mediumEggSelectedElem;
    eggTypeSelectedElem.style.color = 'red';
    eggMinutesRemainingElem.innerText = mediumBoilEgg.toString();
    setInterval(() => {
        eggMinutesRemainingElem.innerText = (mediumBoilEgg-- - 60000 / 60000).toString();
        console.log(mediumBoilEgg)
    }, 60000)
}

const hardEggBoil = () => {
    eggTypeSelectedElem.innerText = hardEggSelectedElem;
    eggTypeSelectedElem.style.color = 'red';
    eggMinutesRemainingElem.innerText = hardBoilEgg.toString();
    setInterval(() => {
        eggMinutesRemainingElem.innerText = (hardBoilEgg-- - 60000 / 60000).toString();
        console.log(hardBoilEgg)
    }, 60000)
}