
const initialState = { path: '' };

const TypeReducer = (state = initialState, action) => {


    switch (action.type) {
        case "MOVIES":

            return { path: `&type=movie` };
           

        case "SERIES":

            return { path: `&type=series` }

        case "ALL":

            return { path: `` }

        default:
            return state;
    }

}

export default TypeReducer;