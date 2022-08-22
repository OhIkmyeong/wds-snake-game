export class Snake{
    constructor(GAME){
        this.GAME = GAME;
        this.SPEED = 4;
        this.snakeBody = [
            {x:11,y:11},
        ];
        this.newSegments = 0;
    }//constructor

    reset(){
        this.snakeBody = [{x:11,y:11}];
        this.newSegments = 0;
    }

    update(){
        const len = this.snakeBody.length - 2; 
        // console.log('update');
        for(let i=len; i>=0; i--){
            // console.log(this.snakeBody[i+1], this.snakeBody[i]);
            this.snakeBody[i+1] = {...this.snakeBody[i]};
        }//for

        const{x,y} = this.GAME.IPT.direction;
        this.snakeBody[0].x += x;
        this.snakeBody[0].y += y;
    }//update

    draw(){
        this.snakeBody.forEach((segment,idx) => {
            const $snake = this.make_snake(idx);            
            const {x,y} = segment;
            $snake.style.gridRowStart = y;
            $snake.style.gridColumnStart = x;
            this.GAME.$board.appendChild($snake);
        });
        // console.log(this.snakeBody);
    }//draw

    make_snake(idx){
        const $snake = document.createElement('DIV');
        $snake.classList.add('snake');
        if(idx==0) $snake.classList.add('head');
        return $snake;
    }//make_snake

    expand_snake(EXPANSION_RATE){
        this.newSegments += EXPANSION_RATE;
        // console.log('newSegment',this.newSegments, 'expansion',EXPANSION_RATE);
        this.add_snake();
    }//expand_snake

    is_on_snake(foodPos){
        return this.snakeBody.some(seg => is_same_pos(seg,foodPos));
    }//is_on_snake

    add_snake(){
        for(let i=0; i<this.newSegments; i++){
            this.snakeBody.push({...this.snakeBody[this.snakeBody.length - 1]});
        }//for
        console.log('body Length:',this.snakeBody.length);
        this.newSegments = 0;
    }//add_snake

    is_snake_collide(){
        const first = this.snakeBody[0];
        const rest = this.snakeBody.slice(1);
        return rest.some(seg => is_same_pos(seg,first));
    }//is_snake_collide
}//class-Snake

export function is_same_pos(pos1,pos2){
    return (pos1.x == pos2.x && pos1.y == pos2.y);
}//is_same_pos