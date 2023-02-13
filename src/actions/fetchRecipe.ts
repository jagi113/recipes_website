import axios from "axios";

export interface Recipe {
    id: number,
    name: string,
    slug: string,
    url: string,
    photo: string,
    createdAt: string,
    updatedAt: string
}

export interface FetchRecipe {
    type: string;
    payload: any
}


const URL = "http://192.168.101.189:2121/recipes/"

export const fetchRecipe = (slug:string) => {
    return async function (dispatch: any, getState: any) {
        const response = await axios.get(URL+slug, {
            params: {
            }
        }
        );

        dispatch({
            type: 'FETCH_RECIPE',
            payload: response.data
        });
    }
}

