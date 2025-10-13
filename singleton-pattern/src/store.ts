interface Game {
  id: string;
  whitePlayerName: string;
  blackPlayerName: string;
  moves: string[];
}

export class GameManager {
  private static instance: GameManager;
  games: Game[] = [];

  static getInstance() {
    if (GameManager.instance) {
      return GameManager.instance;
    }

    GameManager.instance = new GameManager();
    return GameManager.instance;
  }

  private constructor() {
    this.games = [];
  }

  addMove(gameId: string, move: string) {
    const game = this.games.find((game) => game.id === gameId);
    game?.moves.push(move);
  }

  addGame(gameId: string) {
    const game = {
      id: gameId,
      whitePlayerName: "Tony",
      blackPlayerName: "Steve",
      moves: [],
    };
    this.games.push(game);
  }

  log() {
    console.log(this.games);
  }
}
