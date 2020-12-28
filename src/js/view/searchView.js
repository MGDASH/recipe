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
    elements.pageButtons.innerHTML = '';// hudas 1 ees 2 ruu daraad hudas 3 luu orhod huudas 2 iig alga bolgoh, tehgui bol huudas 1, 2, 3 buged tsug garch ireed bna
}
export const renderRecipes = (recipes, currentPage = 1, resPerPage = 10) => { //page=1, gej default hiisen, bas perPage 10 recipe gej hiisen
        //hailtiin vr dvng hudaslaj vzvvleh
        //page = 2, start = 10, end =20
    const start = (currentPage-1)* resPerPage; //page ehleh too, ex: 3 hudas bol 3-1=2*10 buyu 3 huudas 20 oos ehelne
    const end = currentPage * resPerPage;

    recipes.slice(start, end).forEach( renderRecipe); //for each davtal uchiraas zaabal => esbel (el)gej bichih hereggui haaltan dotor. js shuud oilgono renderRecipe ruu damjuulaj bn gej
    //bagsh slice nemsen, start aas end hurtel slice hiine 10, 10 aar ni 
    

    //Huudaslaltiin tobchuudiig gargaj ireh
    const totalPages = Math.ceil(recipes.length / resPerPage); //math.ceil buyu deeshee buheldeh 4.2= 5, (floor gebel 4.2=4)
    renderButtons(currentPage, totalPages);

};

// type ===> 'prev', 'next'
const createButton = (page, type, direction) => `<button class="btn-inline results__btn--${type}" data-goto=${page}> 
<svg class="search__icon">
    <use href="img/icons.svg#icon-triangle-${direction}"></use>
</svg>
<span>Page ${page}</span>
</button>` //`` tabichuul shuud return hiideg dahin sanah deerhi 3 if nohtsol shalgahiin tuld HTML code 3, 4 dahin dabtah hereg garch bgaa, tiimees bagsh createButton gej function bichsen, dabtahgui ni tuld


const renderButtons = (currentPage, totalPages) => {
    let buttonHtml;
    if(currentPage === 1 && totalPages>1) {
        //1-r huudsan deer baina, 2-r huudas gedeg tobchiig garga
        buttonHtml = createButton(2, 'next', 'right');//button ruugaa hmtl hiisen 
    } else if(currentPage < totalPages){
        //omnoh bolon daraachiin huudas ruu shiljih tobchuudiig vzvvl
        buttonHtml = createButton(currentPage-1, 'prev', 'left');
        buttonHtml += createButton(currentPage+1, 'next', 'right');//+= buyu omnoh html iin araas zalgana 
    }
     else if(currentPage === totalPages) {
        //Hamgiin suuliin huudas deer baina, omnoh ruu shiljuuleh tobchiig l vzuulne
        buttonHtml = createButton(currentPage-1, 'prev', 'left');
    }

    elements.pageButtons.insertAdjacentHTML('afterbegin', buttonHtml);
};
