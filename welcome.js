class Welcome{
    constructor(){
        this.reset= createButton('Reset');
        this.title= createElement('h2')
        this.button= createButton('Play')
    }

    hide(){
        this.greeting.hide();
        this.title.hide();
        this.button.hide();
    }

    display(){
        //this.title.fontColor("white");
        this.title.html("Surviviors of the Cosmos");
        this.title.position(displayWidth/2-50,0);
        this.reset.position(displayWidth-100,20);
        this.button.position(displayWidth-100,50);

        this.button.mousePressed(()=>{
            this.button.hide();
            this.title.hide();
        });
    }
}