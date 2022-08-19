export function draw_cells(){
    const $game = document.getElementById('game');
    const $frag = document.createDocumentFragment();
    for(let i=0; i<21*21; i++){
        const $div = document.createElement('DIV');
        $div.classList.add('cell');
        $frag.appendChild($div);
    }//for
    $game.appendChild($frag);
}//draw_cells