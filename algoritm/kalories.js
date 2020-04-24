export function kaloriesCalc(userData) {
    const days =[];

    const age = parseInt(userData.find(e => e.id == 1).answerInput);
    const height = parseInt(userData.find(e => e.id == 2).answerInput);
    const weight = parseInt(userData.find(e => e.id == 3).answerInput);

    const metaLevel = (66 + (13.7 * weight) + (5 * height) - (6.8 * age)) * 1.6 - 500;

    const white = (metaLevel * 0.30)/4;
    const fats = (metaLevel * 0.15)/9;
    let carbohydrates = (metaLevel * 0.45)/4;
    let allKalor = (white + fats + carbohydrates) * 4 + 150;

    let countAll = randomInteger(8,12);
    let countCarb = 2.5;
    

    for(let i = 0;i<35;i++){

        
        const dayKalor = {};
        dayKalor.white = Math.ceil(white);
        dayKalor.fats = Math.ceil(fats);
        dayKalor.carbohydrates = Math.ceil(carbohydrates);
        dayKalor.all = Math.ceil(allKalor);
        
        days.push(dayKalor);

        allKalor-=countAll;
        carbohydrates-=countCarb;
    }


    return days;

}

function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }