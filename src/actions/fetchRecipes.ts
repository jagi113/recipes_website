import axios from "axios";

export interface Recipe {
    id: number,
    name: string,
    url: string,
    photo: string,
    createdAt: string,
    updatedAt: string
}

export interface Fetch {
    type: string;
    payload: Recipe[]
}


const URL = "http://192.168.101.189:2121/recipes"

export const fetchRecipes = () => {
    return async function (dispatch: any, getState: any) {
        const response = await axios.get(URL, {
            params: {
                _limit: 5
            }
        }
        );

        dispatch({
            type: 'FETCH_RECIPES',
            payload: response.data
        });
    }
}

