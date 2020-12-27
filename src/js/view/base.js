//Eronhii class iin neriig end hadgalah, html, css ner oorchlogdobol aldaa garahgui
//geh met css dotorhi code base dotor bairlana

export const elements = {
    searchForm: document.querySelector('.search'), //ingej css holbootoi ner oorchloh
    searchInput: document.querySelector('.search__field'),
    searchResultDiv: document.querySelector('.results'),//html iinhaa resultDiv dotor unshij bna gesen heseg hiih
    searchResultList: document.querySelector(".results__list") //index.html eesee copydoj absan iisheegee inject hiine 
};
export const elementsStrings = {
    loader: 'loader' //loader gej dood mornuuded css ner hamaagui bichigui ni tuld ene mor bgash bichsen tegeed dood morond .${elementsStrings.loader}...
}
export const clearLoader= () =>{
    const loader = document.querySelector(`.${elementsStrings.loader}`); //loader gej neereer ni shuuj abna
    if(loader) loader.parentElement.removeChild(loader); //parentElement iig olood, ternii Child Element ustagah, ner ni loader.
};
export const renderLoader = parent => {
    const loader = `
    <div class = "${elementsStrings.loader}">
    <svg>
        <use href="img/icons.svg#icon-cw"</use>
    </div>
    `;
    parent.insertAdjacentHTML('afterbegin', loader);//after begin gedeg ni ene div dongoj neegden guud ni loader garna. (herbee beforeend songoson bol buh div dotor umnii hamgiin door ni garna gesen ug)
} //yamar negen DOM ruu buyu div ruu oruulna, teriigee parent gej nerelsen bagsh, parent gedeg 1 argumenttei renderLoader gej function gesen ug
