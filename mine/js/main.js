import { Game } from "./game.js";
import { draw_cells } from "./grid.js";

draw_cells();

const GAME = new Game();
GAME.init();