require("@babel/polyfill");
import Search from './model/Search'; //search.js ee endee duudaj bna 
import{elements, renderLoader, clearLoader} from './view/base';
import * as searchView from './view/searchView';
import Recipe from './model/recipe';
import List from './model/List';
import * as listView from './view/listView'; // * as gej bvgdiig ni abah, uchir ni olon code abna 
import like from './model/like';
import * as likesView from './view/likesView';
import {renderRecipe, clearRecipe, highlightSelectedRecipe} from './view/recipeView'; //joriig delgetsend gargah
import Likes from './model/like';


/*
web app tolob
-hailtiin query, ur dun
-tuhain vzvvlej bga jor
-zahialaj bga joriin nairlaganuud */

const state = {}; //state ee hoson hiine, er ni tom app hiihed react, vuejs geh met frame work ashigladag



/*
 *Hailtiin controller gedeg ni MVC architechture iin model view 2 iig hobohiig helne 
 */
const controlSearch = async () => { //async nemej ogno await iig ashiglahiin tuld zaabal!
    //1) web ees hailtiin tvlhvvr vgiig gargaj abna
    const query = searchView.getInput();
    
    if(query){
        //2)Shineer hailtiin object iig vvsgej ogno
        state.search = new Search(query); //model.search doo shine object uusgene
        //3)Hailt hiihed zohiulaj interface/delgets UI beltegne
        searchView.clearSearchQuery();//searchView.js dotor bichsen clearSearch func goo end duudah, tegeed pizza gej bicheed search heseg deer bichsen ug alga bolno, result garch irne
        searchView.clearSearchResult(); //pizza gej bicheed pasta gebel pizza result alga bolno 
        renderLoader(elements.searchResultDiv);//renderLoader iig elements iin searchResultDiv ruu damjuulaj bna, icon garch bh ergeldeed 
        //4)Hailtiig guitsetgene
        await state.search.doSearch();
        //5)Hailtiin ug dung delgetsend vzvvlne
        clearLoader();//nogoo hailtiin icon haij duusaad alga bolgoh
        if(state.search.result === undefined) alert ('no result...');
        else searchView.renderRecipes(state.search.result);
    }

};
elements.searchForm.addEventListener('submit', e =>{
//.search buyu haih hesegiin submit ruu e gej parameter ogood function hiih
    e.preventDefault(); //ene ni tsaanaasaa browser iin default iig boliuldag
    controlSearch();

});
elements.pageButtons.addEventListener('click', e =>{
        const btn = e.target.closest('.btn-inline');//huudas 2 deer daraj 3 ruu shiljih. gehdee page deer um bicheegui ved yaj herhen inspect hiij huudasaa oloh be? shine arga bagsh: e.target buyu click hiigeed darsan umiig CLOSEST gej shine function ashiglasan, HTML target iin oir bgaa zuiliig songoh
        if(btn){
            const gotoPageNumber = parseInt(btn.dataset.goto, 10); //huudas 1 ees 2, 3 ruu shiljih, huudsaa zob 1 , 2, 3 gej 10 toon dotor buheleer ni gargah
            searchView.clearSearchResult(); //huudas 2 deer daruul huudas 1 iin result alga bolno
            searchView.renderRecipes(state.search.result, gotoPageNumber);
        }
});

/*
*Joriin controller
 */
const controlRecipe = async () => {
    // 1) URL-aas ID salgaj abna
    const id = window.location.hash.replace('#', ''); // zuun taliing tsonhnoos joroo songood darhad ID gaar ni shuuj abna. # temteg alga bolgoson
    

    //URL deer ID bgaa esgiig shalgana (tehgui bol page dongoj open hiigeed icon garch ireed ergeldeed bgaa if dotor bichih)
   if(id) {
        // 2) Joriin model iig uusgej ogno
        state.recipe = new Recipe(id);
        // 3) UI delgetsiig beltegne
        clearRecipe();
        renderLoader(elements.recipeDiv); //joriig vzvvleh tom heseg deer haij bh ved ergelddeg icon garah
        highlightSelectedRecipe(id); //vzesen recipe todotgoj ogno
        // 4) Joroo tataj abchirna
        await state.recipe.getRecipe();
        // 5) Joriig guitsetgeh hugatsaa bolon ortsiig tootsoolno
        clearLoader(); //haij duushaaar ergelddeg icon alga boloh 
        state.recipe.calcTime();
        state.recipe.calcHuniiToo();
        // 6) Joroo delgetsend gargana
        renderRecipe(state.recipe, state.likes.isLiked(id));
        }
};

// window.addEventListener('hashchange', controlRecipe); // hashchange hiih event eer barij abna
// window.addEventListener('load', controlRecipe); // page refresh hiihed buh um alga bolohgui 1 jor delgetsend haragdaj bh
//deerhi 2 mor code short oor dood mor shig bichne
['hashchange', 'load'].forEach(e => window.addEventListener(e, controlRecipe));

window.addEventListener('load', e=> {
    //Shineer like modeliig appiig dongoj achaalagdahad uusgene
    if(!state.likes) state.likes = new Likes(); //hailt hiij bhad, state.likes hooson bbal joriin like iig uusge

//like tsesiig gargah eshiig shiideh Like tsesiig haah (program ehlehed like geed heart baruun deed buland haragdahgui)
likesView.toggleLikeMenu(state.likes.getNumberofLikes()); 

//Like uud bbal tedgeeriig tsesend nemej haruulna
state.likes.likes.forEach(like => likesView.renderLike(like)); //state.likes ni class iih, .likes gedeg ni this.like (render like gedeg ni yamar 1 ni like darhad like tses ruu oruuldag)
});
/*  
*Nairlaganii controllor
*/
const controlList = () => {
    //Nairlaganii modeliig uusgene
    state.list = new List(); //state dotor list gedeg model uusgeed dotor ni shineer list uusgeh
    //Ug model ruu (state.list) odoo haragdaj bgaa joriin bvh nairlagiig abch hiine
    //Tuhain nairlagiig model ruu hiine //yagaad model dotor hiij bga gebel songoson joroo ustagh uildel daraa bas hiine 
  

    //omno haragdaj bsan nairlagiig delgetsees zailuulna
    listView.clearItems();
    state.recipe.ingredients.forEach(n => { const item = state.list.addItem(n);
     // Tuhain nairlagiig delgetsend gargana
    listView.renderItem(item);}); // n=nairlaga, PS: controller ni model bolon view tei hamtarch ajildag ene mor bolon deerhi mor hamtdaa
  
    
};

/*
* Like controlller
 */

 const controlLike = () => {
    //1) like iin model iig uusgene
    if(!state.likes) state.likes = new Likes(); //herbee state.likes hooson bbal uusge 
    //2) Odoo haragdaj bgaa joriin ID -iig olj abah
    const currentRecipeId = state.recipe.id;
    //3) ene joriig like lasan esehiig shalgah
    if(state.likes.isLiked(currentRecipeId)){
    //like lasan bol like iig ni boliulna
    state.likes.deleteLike(currentRecipeId);
    //like iin tsesnees ustagna
    likesView.deleteLike(currentRecipeId);

    //like tobchnii like hiisen bdliig boliulah
    likesView.toggleLikeBtn(false);
    
    } else {
    //like laagui bol like hiine
    
    const newLike = state.likes.addLike(currentRecipeId, state.recipe.title, state.recipe.publisher, state.recipe.image_url);
    
    //Like tsesend ene like iig oruulah
    likesView.renderLike(newLike);
    //like tobchnii likelasan bdliig likelasan bolgoh
    likesView.toggleLikeBtn(true); // like hiisen gej toggle button hiine 
    }
    likesView.toggleLikeMenu(state.likes.getNumberofLikes()); //baruun deed bulandah heart haraddahgui bolgoh like daraagui bol
 };
elements.recipeDiv.addEventListener('click', e => {
    if(e.target.matches('.recipe__btn, .recipe__btn *')){ //add to cart button hesegiig event barij abhiin tuld tom div eer ni barina (recipeDiv), tegeed click event ee button goor ni barina, .recipe__btn gebel zobhon button hvreen deer daruul ajilna, getel nemeed .recipe__btn * gebel dotorhi bvh umand deer daruul ajilna. uchir ni ene button cart picture SVG image tei bas span tai add to cart geeed.
       controlList();
    } else if (e.target.matches('.recipe__love, .recipe__love *')) {
        controlLike();
    }
});

elements.shoppingList.addEventListener('click', e => { // my cart hesegt haana ch darsan click ajilna 
    //click hiisen li elementiin data-itemid attribute iig shuuj gargaj abah
    const id = e.target.closest('.shopping__item').dataset.itemid; //uniqid gaar ni shuuj abna
    // oldoson ID -tei ortsiig model oos ustagna
    state.list.deleteItem(id);

    //Delgetsees iim ID-tei ortsiig oloj bas ustagna
listView.deleteItem(id);
});