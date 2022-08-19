import { get_idx } from "./game.js";

export function random_food(){
    const $$cell = Array.from(document.getElementsByClassName('cell'));
    let $food = $$cell[parseInt(Math.random() * $$cell.length)];
    while($food.classList.contains('snake')){
        $food = $$cell[parseInt(Math.random() * $$cell.length)];
        console.log($food);
    }
    $food.classList.add('food');
    return {dom : $food, idx : get_idx($food,$$cell)};
}//random_food