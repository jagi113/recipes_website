import React from "react";
import { connect } from 'react-redux';

class RecipeDetail extends React.Component<any>{
    
    renderHeader() {
        if (!this.props.recipe){
            return <div>No recipe has been chosen yet.</div>
        } else {
            let recipe: any = this.props.recipe[0]
            return (
            <div className="item" >
                <img src={recipe.photo} style={{ width: "3600px", height: "360px", objectFit: 'cover' }} alt={recipe.slug} />
                <h1>{recipe.name}</h1>
            </div>
            )
        }
    }

    render() {
        return this.renderHeader()
        }
};

const mapStateToProps = (state: any) => {
    console.log(state.recipeDetail.info)
    return { recipe: state.recipeDetail.info, 
        ingredients: state.recipeDetail.ingredients,
        instructions: state.recipeDetail.instructions,
        tags: state.recipeDetail.tags
    }
}

export default connect(mapStateToProps)(RecipeDetail);