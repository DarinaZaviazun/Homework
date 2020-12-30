const initialState = {list: []};


export default (state = initialState, action) => {

    switch(action.type){
        case "ADD_TO_LIST" : {
            if (action.payload !== "")
                state.list.push(action.payload)

            return {
                ...state
            }
        }
        case "DELETE_FROM_LIST" : {
                const filtered = state.list.filter((value, id) => {
                    if (id !== action.payload)
                        return value})
                state.list = filtered
            return {
                ...state
            }
        }

        default: {
            return state;
        }
    }
}