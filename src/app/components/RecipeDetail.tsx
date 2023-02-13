import React from "react";
import { connect } from 'react-redux';
import { fetchRecipe } from '../../actions/fetchRecipe';

class RecipeDetail extends React.Component<any>{
    renderHeader(recipe) {
        return (
                <div className="item" key={this.props.recipe.slug}>
                    <img src={this.props.recipe.photo} style={{ width: "3600px", height: "360px", objectFit: 'cover' }} alt={this.props.recipe.slug} />
                    <h1>{this.props.recipe.name}</h1>
                </div>
            )
    }

    renderTags(tags) {
        return tags.map((tag: any) => {
            return (<span>
                tag
                </span>)
        })
    }

    if (this.props.recipe) {
        renderHeader(this.props.recipe) 
        renderTags(this.props.tags)

    else {
        return ( <h1> No recipe has been chosen</h1>
            )
    }




    render() {
        return <div className='ui relaxed divided '>{this.renderHeader()}</div>
        }

    };
}

const mapStateToProps = (state: any) => {
    return { recipe: state.recipeDetail.info[0], 
        ingredients: state.recipeDetail.ingredients,
        instructions: state.recipeDetail.instructions,
        tags: state.recipeDetail.tags
    }
}

export default connect(mapStateToProps, { fetchRecipe })(RecipeDetail);