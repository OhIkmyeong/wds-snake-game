export class KeyInput{
    constructor(GAME){
        this.GAME = GAME;
        this.direction = {x:0, y:0};
        this.lastDirection = {x:0, y:0};
        this.DIR = {up:"ArrowUp",down:"ArrowDown",left:"ArrowLeft",right:"ArrowRight"};
    }//constructor

    reset(){
        this.direction = {x:0, y:0};
        this.lastDirection = {x:0, y:0};
    }//reset

    add_key_event(){
        window.addEventListener('keydown',this.on_key_down);
    }//add_key_event

    on_key_down = (e) => {
        if(this.CURR == e.key) return;
        this.CURR = e.key;
        switch(e.key){
            case this.DIR.up : 
                if (this.lastDirection.y !== 0) break;
                this.direction.x = 0;
                this.direction.y = -1;
                break;
            case this.DIR.down : 
            if (this.lastDirection.y !== 0) break;
                this.direction.x = 0;
                this.direction.y = 1;
                break;
            case this.DIR.left : 
                if (this.lastDirection.x !== 0) break;
                this.direction.x = -1;
                this.direction.y = 0;
                break;
            case this.DIR.right : 
                if (this.lastDirection.x !== 0) break;
                this.direction.x = 1;
                this.direction.y = 0;
                break;
            default : break;
        }//switch
        this.lastDirection = this.direction;
    }//on_key_down
}//class-KeyInput