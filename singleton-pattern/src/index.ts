import { GameManager } from "./store.js";
import { startLogger } from "./logger.js";

startLogger();

setInterval(() => {
  GameManager.getInstance().addGame(Math.random().toString());
}, 5000);
