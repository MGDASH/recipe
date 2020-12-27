require("@babel/polyfill");
import Search from './model/Search'; //search.js ee endee duudaj bna 
import{elements, renderLoader, clearLoader} from './view/base';
import * as searchView from './view/searchView';



/*
web app tolob
-hailtiin query, ur dun
-tuhain vzvvlej bga jor
-zahialaj bga joriin nairlaganuud */

const state = {}; //state ee hoson hiine, er ni tom app hiihed react, vuejs geh met frame work ashigladag

const controlSearch = async () => { //async nemej ogno await iig ashiglahiin tuld zaabal!
    //1) web ees hailtiin tvlhvvr vgiig gargaj abna
    const query = searchView.getInput();
    
    if(query){
        //2)Shineer hailtiin object iig vvsgej ogno
        state.search = new Search(query); //model.search doo shine object uusgene
        //3)Hailt hiihed zohiulaj interface/delgets UI beltegne
        searchView.clearSearchQuery();//searchView.js dotor bichsen clearSearch func goo end duudah, tegeed pizza gej bicheed search heseg deer bichsen ug alga bolno, result garch irne
        searchView.clearSearchResult(); //pizza gej bicheed pasta gebel pizza result alga bolno 
        renderLoader(elements.searchResultDiv);//renderLoader iig elements iin searchResultDiv ruu damjuulaj bna
        //4)Hailtiig guitsetgene
        await state.search.doSearch();
        //5)Hailtiin ug dung delgetsend vzvvlne
        clearLoader();//nogoo hailtiin icon haij duusaad alga bolgoh
        if(state.search.result === undefined) alert ('no result...');
        else searchView.renderRecipes(state.search.result);
    }

};
elements.searchForm.addEventListener('submit', e =>{ //.search buyu haih hesegiin submit ruu e gej parameter ogood function hiih
    e.preventDefault(); //ene ni tsaanaasaa browser iin default iig boliuldag
    controlSearch();

});