import { elements } from "./base";

export const toggleLikeBtn = isLiked => {
    const iconString = isLiked ? 'icon-heart' : 'icon-heart-outlined'; // 3 balsan operator
    document.querySelector('.recipe__love use').setAttribute('href', `img/icons.svg#${iconString}`); //attribute aar ni songood ${iconString} bolgoh

};
export const toggleLikeMenu = numLikes => {
    elements.likesMenu.style.visibility = numLikes > 0 ? 'visible' : 'hidden';
};

export const renderLike = newLike => {
    const html = `
    <li>
        <a class="likes__link" href="#${newLike.id}">
            <figure class="likes__fig">
                <img src="${newLike.img}" alt="Test">
            </figure>
            <div class="likes__data">
                <h4 class="likes__name">${newLike.title}</h4>
                <p class="likes__author">${newLike.publisher}</p>
            </div>
        </a>
   </li>`;
   elements.likesList.insertAdjacentHTML('beforeend', html);
};

export const deleteLike = id => {
    const li = document.querySelector(`.likes__link[href*='${id}']`).parentElement; //a tag aar hiibel a tag tai buh gazar uilchilne, tiimees .likes__link buyu class aar ni haina, tegeeed const li buyu a tag dotor umiig selector hiisen, dood morond ustaghiin tuld araas ni parentElement geed zalgana, tegeed li & ul bugdiin ustagna 
    if(li) li.parentElement.removeChild(li); //li parentElement buyu ul oloh. herbee shuud li delete geed bichuul ul ustahgui

};