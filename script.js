let mam = document.querySelector(".div1");

class Options{
    constructor(height, width, bg, fontSize, textAlign){
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }

    buld(){

        
        let div = document.createElement('div');

        mam.appendChild(div);
        div.style.height =  this.height;
        div.style.width = this.width;
        div.style.backgroundColor = this.bg;
        div.style.fontSize = this.fontSize;
        div.style.textAlign = this.textAlign;


        
        div.textContent = 'Hello User. Welcome to my page)';
        
        
    }
};

 new Options("200px", "800px", "blue", "50px", "center").buld();

