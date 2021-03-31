class Venus{
    constructor(){
        this.venus=createButton('Venus');
    }

    display(){

this.venus.position(displayWidth/2,550)

        this.venus.mousePressed(()=>{
            playerCount=playerCount+1;
            this.venus.hide();
        })
    }
}