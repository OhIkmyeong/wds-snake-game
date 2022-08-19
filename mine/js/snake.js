import { get_idx } from "./game.js";

export function random_snake(){
    const $$cell = Array.from(document.getElementsByClassName('cell'));
    let $snake = $$cell[parseInt(Math.random() * $$cell.length)];
    while($snake.classList.contains('food')){
        $snake = $$cell[parseInt(Math.random() * $$cell.length)];
    }
    $snake.classList.add('snake');
    return {dom : $snake, idx : get_idx($snake,$$cell)}
}//random_snake;