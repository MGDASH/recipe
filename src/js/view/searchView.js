import {elements} from './base';

//private function (daldalagdasan, zobhon export hiisen function l gadnas handana)
const renderRecipe = recipe => {
    console.log(recipe);
    const markup = `
    <li>
                    <a class="results__link" href="#${recipe.recipe_id}">
                        <figure class="results__fig">
                            <img src="${recipe.image_url}" alt="Test">
                        </figure>
                        <div class="results__data">
                            <h4 class="results__name">${recipe.title}</h4>
                            <p class="results__author">${recipe.publisher}</p>
                        </div>
                    </a>
                </li>`;
                //ul ruugee nemne
                elements.searchResultList.insertAdjacentHTML('beforeend', markup); //mdn ees harah, note on notebook, inseradjacentHMTL hiigeed beforeend gej parameter songood markup deer ni nemeh
};
export const clearSearchQuery = () => {
    elements.searchInput.value = ""; //tseverlegdeh function, pizza gej bicheed ug alga boloh result garah
}
export const getInput=() => elements.searchInput.value;
export const clearSearchResult =() => {
    elements.searchResultList.innerHTML = ''; //pizza gej bicheed pasta gej bichuul pizza result alga boloh, buh innerHTML ustgah pizza giin 
}
export const renderRecipes = recipes => {
    recipes.forEach( renderRecipe); //for each davtal uchiraas zaabal => esbel (el)gej bichih hereggui haaltan dotor. js shuud oilgono renderRecipe ruu damjuulaj bn gej

}