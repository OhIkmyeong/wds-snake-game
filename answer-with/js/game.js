import { Food } from "./food.js";
import { KeyInput } from "./keyboardInput.js";
import { Snake } from "./snake.js";

export class Game{
    constructor(){
        this.$board = document.getElementById('game-board');
        this.lastRenderTime = 0;
        this.playable = true;
        this.$modal = document.getElementById('modal');
        this.$score= document.getElementById('score');
        this.SCORE = 0;
        this.GRID_SIZE = 21;
        
        this.IPT = new KeyInput(this);
        this.SNAKE = new Snake(this);
        this.FOOD = new Food(this);
    }//constructor

    init(){
        requestAnimationFrame(this.repeat);
        this.IPT.add_key_event();
    }//init

    repeat = async (currTime) => {
        this.playable && requestAnimationFrame(this.repeat);
        if(!this.playable){
            this.game_over();
            if(await this.is_replay()) this.reset_all();
        }
        const secSinceLastRender = (currTime - this.lastRenderTime) / 1000;
        if(secSinceLastRender < 1 / this.SNAKE.SPEED) return;

        // console.log(secSinceLastRender);
        this.lastRenderTime = currTime;
        this.update();
        this.draw();
    }//repeat

    update(){
        this.SNAKE.update();
        this.playable = this.is_game_over();
        this.FOOD.update();
    }//update

    draw(){
        this.reset_board();
        this.SNAKE.draw();
        this.FOOD.draw();
    }//draw

    reset_board(){
        this.$board.innerHTML = '';
    }//reset_board

    update_score(){
        this.SCORE += (this.SNAKE.snakeBody.length) * 10;
        this.$score.textContent = this.SCORE;
    }//update_score

    is_game_over(){
        const first =  this.SNAKE.snakeBody[0];
        if(first.x <= 0){
            first.x = 1;
            return false;}
        if(first.x > this.GRID_SIZE){
            first.x = this.GRID_SIZE;
            return false;}
        if(first.y <= 0){
            first.y = 1;
            return false;}
        if(first.y > this.GRID_SIZE){
            first.y = this.GRID_SIZE;
            return false;}
        if(this.SNAKE.is_snake_collide()){return false;}
        return true;
    }//is_game_over

    game_over(){
        this.$modal.classList.add('on');
        const $$snake = Array.from(this.$board.getElementsByClassName('snake'));
        $$snake.forEach($snake => $snake.classList.add('gameover'));
    }//game_over

    is_replay(){
        return new Promise(res =>{
            setTimeout(()=>{
                const result = confirm('Replay?');
                res(result)
            },500);
        })
    }//is_replay

    reset_all(){
        this.reset_board();
        this.$modal.classList.remove('on');
        this.lastRenderTime = 0;
        this.SCORE = 0;
        this.$score.textContent = this.SCORE;

        this.IPT.reset();
        this.SNAKE.reset();
        this.FOOD.reset();
        requestAnimationFrame(this.repeat);
    }//reset_all
}//class-Game 