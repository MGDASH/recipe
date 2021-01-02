export default class Likes {
    constructor(){
        this.readDataFromLocalStorage();
        if(!this.likes) this.likes = []; //storage aas um unshihad !this.likes buyu null bish bol, null bolohgui tiimees null bolgoj bolohgui uchiraas [] hooson massive vvsgene, tegeed ene unshsan umaa ogno esbel hooson massive aa ogno 
        
    
    }
    addLike(id, title, publisher, img) {
        const like = {id, title, publisher, img}; //id:id, title:title... gesen ug (es6 deer tobchlood bichej bgaa)
        this.likes.push(like);
        //local storage ruu hadgalna
        this.saveDataToLocalStorage(); //class todor bas function dotor ogogdol ruu handahdaa this. gej bichne
        return like;
    }

    deleteLike(id) {
             //id gedeg ID-tei like iig index iig massive aas haij olno
             const index = this.likes.findIndex(el => el.id === id); //findIndex ni items massive eer dabtalt hiideg, element burd nohtsol shalgad hamgiin ehnii element return hideg
             // ug index deerhi element iig massive aas ustagna
             this.likes.splice(index, 1 );

             //local storage ruu hadgalna
             this.saveDataToLocalStorage();
    }
    isLiked(id) {
        // this.likes.findIndex(el => el.id === id) === -1) return false; //iim id tai um bbal index ruu butsaa, -1 tentsuu bol butsaa
        // else return true;
        return this.likes.findIndex(el => el.id ===id) !== -1; // deerhi moriig tobchoor ingej bichne
    }

    getNumberofLikes() {
        return this.likes.length; //heden likes absanaa butsaana
    }
    saveDataToLocalStorage(){
        localStorage.setItem('likes', JSON.stringify(this.likes));//buh joruud this.likes dotor massive aar bgaa. massive aa string ruu hobruulne json goor (stringify) oor buh massive aar tabtal hiigeed string ee JSON bolgoj hobruulne
    }
    readDataFromLocalStorage(){
        this.likes = JSON.parse(localStorage.getItem('likes')); // local storage oosoo JSON.parse aar butsaagaad object bolgoj hubirgah
    }
}