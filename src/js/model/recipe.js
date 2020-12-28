//ene model oor tuhai ni joriig internees tataad vzvvlne
import axios from 'axios';

export default class Recipe {
    constructor(id){
        this.id = id; // class dotor id giin hadgalah

    }

    async getRecipe() { //axios ashiglaj internet ees tatah uchiraas async func hereglene
        const result = await axios('https://forkify-api.herokuapp.com/api/get?rId=' + this.id); //internet ees tsanaas ni ogson ID bagsh ustagsan, tegeeed ooriinhoo bichsen this.id damjuulna 

        this.publisher = result.data.recipe.publisher;
        this.ingredients = result.data.recipe.ingredients;
        this.source_url = result.data.recipe.source_url;
        this.image_url = result.data.recipe.image_url;
        this.publisher_url = result.data.recipe.publisher_url;
        this.title = result.data.recipe.title;
        this.social_rank = result.data.recipe.title;
     
    }
}