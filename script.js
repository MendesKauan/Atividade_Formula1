const car1 = document.querySelector('.carRed');
const car2 = document.querySelector('.carBlue');
const car3 = document.querySelector('.carYellow');
const car4 = document.querySelector('.carGreen');
const car5 = document.querySelector('.carViolet');

const carButton = document.querySelector('.carButton');
const valueBet = document.querySelector('.bet');
const colorCar = document.querySelector('.selected-car');
const btnStart = document.querySelector('.start');
const coin = document.querySelector('.coin');
const bet = document.querySelector('.bet');

let cars = ['car1', 'car2', 'car3', 'car4', 'car5'];
let chooseCar = Math.floor(Math.random() * 5);


console.log(chooseCar);

let winnerCar;
let secondCar;
let thirdCar;
let fourCar;
let fiveCar;

let coinValue;
let betValue;
let selectedCar;


function moveCarWinner(carId, distance) {
    const carWinner = document.getElementById(carId);
    const car2 = document.getElementById(secondCar); 
    const car3 = document.getElementById(thirdCar);   
    const car4 = document.getElementById(fourCar);
    const car5 = document.getElementById(fiveCar);

    const carWinnerPosition = parseInt(carWinner.style.left) || 0;
    const secondCarPosition = parseInt(car2.style.left) || 0;
    const thirdCarPosition = parseInt(car3.style.left) || 0;
    const fourCarPosition = parseInt(car4.style.left) || 0;
    const fiveCarPosition = parseInt(car5.style.left) || 0;



    carWinner.style.left = `${carWinnerPosition + distance}px`; 
    car2.style.left = `${secondCarPosition + 50}px`;
    car3.style.left = `${thirdCarPosition + 47}px`;
    car4.style.left = `${fourCarPosition + 42}px`;
    car5.style.left = `${fiveCarPosition + 39}px`;



    if (carWinnerPosition >= 800) {
        if (selectedCar === winnerCar) {
            let ValueWinner = coinValue + (betValue * 2);
            alert(`Você ganhou, seu saldo é ${ValueWinner}`);
            console.log();
            coin.innerHTML = ValueWinner;

        }
        else {
            alert(`Você perdeu :((`);
            coin.innerHTML = coinValue - betValue;
        }

        resetPositionCar();
        return;
    }

    setTimeout(()=> moveCarWinner(carId, distance), 50);
}


function setCar(cars) {
    winnerCar = cars[chooseCar];

    switch(chooseCar) {
        case 0: secondCar = cars[1]; thirdCar = cars[2]; fourCar = cars[3]; fiveCar = cars[4]; break;
        case 1: secondCar = cars[2]; thirdCar = cars[0]; fourCar = cars[3]; fiveCar = cars[4]; break;
        case 2: secondCar = cars[1]; thirdCar = cars[0]; fourCar = cars[3]; fiveCar = cars[4]; break;
        case 3: secondCar = cars[1]; thirdCar = cars[0]; fourCar = cars[2]; fiveCar = cars[4]; break;
        case 4: secondCar = cars[1]; thirdCar = cars[0]; fourCar = cars[2]; fiveCar = cars[3]; break;

    }

}

function selectCar() {
    carButton.addEventListener('click', () => {
        valueBet.textContent = document.querySelector('input').value;

        if (valueBet.textContent < 5) {
            alert('Não pode valor menor que 5 reais')
        }
    });

    car1.addEventListener('click', () => {
        selectedCar = cars[0];
        console.log(selectedCar);
        colorCar.textContent = 'RED';
    });

    car2.addEventListener('click', () => {
        selectedCar = cars[1];
        console.log(selectedCar);
        colorCar.textContent = 'BLUE';
    });

    car3.addEventListener('click', () => {
        selectedCar = cars[2];
        console.log(selectedCar);
        colorCar.textContent = 'YELLOW';
    });

    car4.addEventListener('click', () => {
        selectedCar = cars[3];
        console.log(selectedCar);
        colorCar.textContent = 'GREEN';
    });

    car5.addEventListener('click', () => {
        selectedCar = cars[4];
        console.log(selectedCar);
        colorCar.textContent = 'VIOLET';
    });

}

function resetPositionCar() {
   for(let i=0; i < cars.length; i++) {
    let car = document.getElementById(cars[i]);
    car.style.left = "0px"; 
   }

   chooseCar = Math.floor(Math.random() * 5);
    setCar(cars);
    console.log(chooseCar);
    bet.innerHTML = 0;
    colorCar.innerHTML = " ";

}

selectCar();
setCar(cars);

btnStart.addEventListener('click', () => {

    moveCarWinner(winnerCar, 70);
    betValue = Number(bet.textContent);
    coinValue = Number(coin.textContent);
    
});







