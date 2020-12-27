require("@babel/polyfill");
import Search from './model/Search'; //search.js ee endee duudaj bna 

/*
web app tolob
-hailtiin query, ur dun
-tuhain vzvvlej bga jor
-zahialaj bga joriin nairlaganuud */

const state = {}; //state ee hoson hiine, er ni tom app hiihed react, vuejs geh met frame work ashigladag

const controlSearch = async () => { //async nemej ogno await iig ashiglahiin tuld zaabal!
    //1) web ees hailtiin tvlhvvr vgiig gargaj abna
    const query = 'pizza';
    
    if(query){
        //2)Shineer hailtiin object iig vvsgej ogno
        state.search = new Search(query); //model.search doo shine object uusgene
        //3)Hailt hiihed zohiulaj interface/delgets UI beltegne

        //4)Hailtiig guitsetgene
        await state.search.doSearch();
        //5)Hailtiin ug dung delgetsend vzvvlne
        console.log(state.search.result);
    }

};
document.querySelector('.search').addEventListener('submit', e =>{ //.search buyu haih hesegiin submit ruu e gej parameter ogood function hiih
    e.preventDefault(); //ene ni tsaanaasaa browser iin default iig boliuldag
    controlSearch();

});