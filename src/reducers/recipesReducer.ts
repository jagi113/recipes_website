const recipesReducer = (state = [], action: any) => {
    switch (action.type) {
        case "FETCH_RECIPES":
            return action.payload;
        default:
            return state;
    }
}

export default recipesReducer;