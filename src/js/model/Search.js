require("@babel/polyfill");
import axios from 'axios';//axios heregleh uchiraas ehleed axios oo import hiih
export default class Search{ //1 l code uchiraas default
    constructor(query){ //class damjulah uchiraas constructor ashiglah dahin sanah
        this.query = query; //this dotoroo query zarlaad = query hiih 
    }
    async doSearch() {//dahin sanah, async func nees dandaa promise return hiideg
        try{
            let result = await axios('https://forkify-api.herokuapp.com/api/search?q=' + this.query);
            this.result = result.data.recipes;
          return this.result;
        }catch(error){
            console.log('Asuudal garlaa : ' + error);
    
        }
       
    }

}