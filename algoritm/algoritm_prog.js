export function createProgram(userData) {
    const age = userData.find(e => e.id == 1).answerInput;
    const height = userData.find(e => e.id == 2).answerInput;
    const weight = userData.find(e => e.id == 3).answerInput;
    const countReps = userData.find(e => e.id == 4).answerInput;

    let exscesWeight = userData.find(e => e.id == 5).answerInput ;
    exscesWeight = exscesWeight == 'Так' ? exscesWeight = true : exscesWeight = false;
    console.log(exscesWeight);

    if ((parseInt(age) > 40 || parseInt(age) < 14)  && (parseInt(countReps) < 15) && (parseInt(height) - parseInt(weight) > (parseInt(weight) + 25))) {
        return {
            programId: 1,
            exscesWeight: exscesWeight
        }
    }
    else if ((parseInt(age) > 14 || parseInt(age) < 40) && parseInt(countReps) > 30 && parseInt(countReps) < 50 && !(parseInt(height) - parseInt(weight) > (parseInt(weight) + 20))) {
        return {
            programId: 2,
            exscesWeight: exscesWeight
        }
    }

    else if ((parseInt(age) > 16 || parseInt(age) < 35 && (countReps > 50) && !(parseInt(height) - parseInt(weight) > (parseInt(weight) + 20)))){
        return {
            programId:3,
            exscesWeight:exscesWeight
        }
    } else {
        return {
            programId:1,
            exscesWeight:exscesWeight
        }
    }
 


}