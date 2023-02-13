import React from "react";
import { connect } from 'react-redux';
import { fetchRecipes } from '../../actions/fetchRecipes';
import { fetchRecipe } from '../../actions/fetchRecipe';

class RecipesList extends React.Component<any>{
    componentDidMount(): void {
        this.props.fetchRecipes();
    }

    getRecipeDetail=(slug:string):void => {
        this.props.fetchRecipe(slug)
    }

    renderList() {
        return this.props.recipes.map((recipe: any) => {
            return (
                <div className="item" key={recipe.slug} onClick={() => {this.getRecipeDetail(recipe.slug)}} >
                    <img src={recipe.photo} style={{ width: "120px", height: "120px", objectFit: 'cover' }} alt={recipe.slug} />
                    <h4>{recipe.name}</h4>
                </div>
            )
        });
    };


    render() {
        return <div className='ui relaxed divided list'>{this.renderList()}</div>
    }
}

const mapStateToProps = (state: any) => {
    return { recipes: state.recipes }
}

export default connect(mapStateToProps, { fetchRecipes , fetchRecipe })(RecipesList);