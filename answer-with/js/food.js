export class Food{
    constructor(GAME){
        this.GAME = GAME;
        this.SNAKE = this.GAME.SNAKE;
        this.foodPos = this.randomPos();
        this.EXPANSION_RATE = 5;
    }//constructor

    reset(){
        this.foodPos = this.randomPos();
    }//reset

    randomPos(){
        let foodPos
        while(!foodPos || this.SNAKE.is_on_snake(foodPos)){
            foodPos = {
                x : parseInt(Math.random() * this.GAME.GRID_SIZE + 1), 
                y: parseInt(Math.random() * this.GAME.GRID_SIZE + 1)
            };
        }
        // console.log("foodPos",foodPos);
        return foodPos;
    }//randomPos

    update(){
        if(!this.SNAKE.is_on_snake(this.foodPos)) return;
        this.SNAKE.expand_snake(this.EXPANSION_RATE);
        this.foodPos = this.randomPos();
        this.GAME.update_score();
    }//update

    draw(){
        const $food = document.createElement('DIV');
        $food.classList.add('food');
        $food.style.gridRowStart = this.foodPos.y;
        $food.style.gridColumnStart = this.foodPos.x;
        this.GAME.$board.appendChild($food);
    }//draw

}//class-Food