class Mercury{
    constructor(){
        this.mercury= createButton('Mercury')
}

display(){

    this.mercury.position(diaplayWidth/2,500)

this.mercury.mousePressed(()=>{
    playerCount=playerCount+1;
    this.mercury.hide();
})
}
}