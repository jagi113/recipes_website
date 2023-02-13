const recipeDetailReducer = (state = [], action: any) => {
    switch (action.type) {
        case "FETCH_RECIPE":
            return action.payload;
        default:
            return state;
    }
}

export default recipeDetailReducer;