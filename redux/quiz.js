
const initionalState = {
    active: 0,
    quiz: [
        {
            id: 1,
            question: 'Скільки вам років?',
            answerInput: ''

        },
        {
            id: 2,
            question: 'Який ваш зріст(в см)?',
            answerInput: ''
        },
        {
            id: 3,
            question: 'Яка ваша вага(в кг)?',
            answerInput: ''
        },
        {
            id:4,
            question:'Скільки зможете зробити стандартних скручувань в одному підході?',
            answerInput:''
        },
        {
            id:5,
            question:'Позбутись зайвої ваги на животі?(Так/Ні)',
            answerInput:''
        },
        {
            id:6,
            message:'Програма тренувань готова!',
            btn:'Пройти тест заново'
        }
    ]
}

export function quizes(state = initionalState, action) {

    switch (action.type) {
        case 'answer':
            state.quiz[state.active].answerInput = action.value.text;
            return state;
        case 'next':
            return {
                ...state,
                active: state.active + 1
            }
        case 'complete':
            return {
                active:0,
                quiz:[...state.quiz]
            }

       
    }

    return state;
}