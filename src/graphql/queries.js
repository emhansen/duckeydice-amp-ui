/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getDuckyDiceGame = /* GraphQL */ `
  query GetDuckyDiceGame($id: ID!) {
    getDuckyDiceGame(id: $id) {
      gameName
      gameState
      id
      maxDice
      pot
      rounds
      users
    }
  }
`;
export const listDuckyDiceGames = /* GraphQL */ `
  query ListDuckyDiceGames(
    $filter: TableDuckyDiceGameFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDuckyDiceGames(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        gameName
        gameState
        id
        maxDice
        pot
        rounds
        users
      }
      nextToken
    }
  }
`;
