const initialState = {
    id: '',
    firstName: '',
    secondName: '',
    email: ''
}

const user = (state = initialState, action) => {
    switch (action.type) {
        case "SET_USER": {
            return {
                ...state,
                id: action.payload.id,
                firstName: action.payload.firstName,
                secondName: action.payload.secondName,
                email: action.payload.email
            }
        }
        default:
            return state;
    }
}

export default user;