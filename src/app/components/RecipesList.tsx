import React from "react";
import { connect } from 'react-redux';
import { fetchRecipes } from '../../actions/fetchRecipes';

class RecipesList extends React.Component<any>{
    componentDidMount(): void {
        this.props.fetchRecipes();
    }

    renderList() {
        return this.props.recipes.map((recipe: any) => {
            return (
                <div className="item" key={recipe.id}>
                    <img src={recipe.photo} style={{ width: "120px", height: "120px" }} alt="recipe_img" />
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

export default connect(mapStateToProps, { fetchRecipes })(RecipesList);