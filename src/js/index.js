require("@babel/polyfill");
import Search from './model/Search'; //search.js ee endee duudaj bna 

let search = new Search('pasta');

search.doSearch().then(r=>console.log(r)); //search.js deer async function promise damjuulaj bgaa uchiraas then buyu amlaltan bielsen bol gej then ashiglan
