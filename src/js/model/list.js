import uniqid from 'uniqid';
export default class List {
    constructor() {
        this.items = []; // items class dotor uusgeeed hooson massive uusgej bna
    }

    deleteItem(id) {
        //id gedeg ID-tei ortsiin index iig massive aas haij olno
        const index = this.items.findIndex(el => el.id === id); //findIndex ni items massive eer dabtalt hiideg, element burd nohtsol shalgad hamgiin ehnii element return hideg
       // ug index deerhi element iig massive aas ustagna
       this.items.splice(index, 1 );

    }
    addItem(item) { //addItem func ruu gadnas item damjuulaad teren dotrooo item push hiine
        let newItem = {
            id: uniqid(),
            item //ES6 deer item gej bichne = item:item gesen ug
        };
        
        this.items.push(newItem);

        return newItem;
        
    }
};