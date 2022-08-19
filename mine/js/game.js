import { random_food } from "./food.js";
import { random_snake } from "./snake.js";

export function get_idx($target,$$sib){
    return Array.prototype.indexOf.call($$sib,$target);
}//get_idx

export class Game{
    constructor(){
        this.$$cell = Array.from(document.getElementsByClassName('cell'));
        this.$snakeHead = undefined;
        this.$food = undefined;
        this.snakeLength = 1;
        this.addLength = 3;
    }//constructor

    init(){
        this.random_snake_food();
        window.addEventListener('keyup',this.on_key_up);
    }//init

    random_snake_food(){
        this.$snakeHead = random_snake();
        this.$food = random_food();
    }//random_snake_food

    on_key_up = e =>{
        switch(e.key){
            case "ArrowUp" :
                this.display_snake(-21);
                break;
            case "ArrowDown" :
                this.display_snake(21);
                break;
            case "ArrowLeft" :
                this.display_snake(-1);
                break;
            case "ArrowRight" :
                this.display_snake(1);
                break;
            default:break;
        }//switch
    }//on_key_up

    display_snake(count){
        const nextIdx = this.$snakeHead.idx + count;
        
    }//display_snake
}//class-Game