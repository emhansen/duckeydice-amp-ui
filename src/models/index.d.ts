import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";



export declare class DuckyDiceGame {
  readonly gameName: string;
  readonly gameState: string;
  readonly id: string;
  readonly maxDice: number;
  readonly pot: number;
  readonly rounds?: (string | null)[];
  readonly users?: (string | null)[];
  constructor(init: ModelInit<DuckyDiceGame>);
}

export declare class DuckyDiceGameConnection {
  readonly items?: (DuckyDiceGame | null)[];
  readonly nextToken?: string;
  constructor(init: ModelInit<DuckyDiceGameConnection>);
}

