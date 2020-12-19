// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { DuckyDiceGame, DuckyDiceGameConnection } = initSchema(schema);

export {
  DuckyDiceGame,
  DuckyDiceGameConnection
};