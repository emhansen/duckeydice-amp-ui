/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateDuckyDiceGame = /* GraphQL */ `
  subscription OnCreateDuckyDiceGame(
    $gameName: String
    $id: ID
    $pot: Int
    $rounds: [AWSJSON]
    $users: [AWSJSON]
  ) {
    onCreateDuckyDiceGame(
      gameName: $gameName
      id: $id
      pot: $pot
      rounds: $rounds
      users: $users
    ) {
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
export const onDeleteDuckyDiceGame = /* GraphQL */ `
  subscription OnDeleteDuckyDiceGame(
    $gameName: String
    $id: ID
    $pot: Int
    $rounds: [AWSJSON]
    $users: [AWSJSON]
  ) {
    onDeleteDuckyDiceGame(
      gameName: $gameName
      id: $id
      pot: $pot
      rounds: $rounds
      users: $users
    ) {
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
export const onUpdateDuckyDiceGame = /* GraphQL */ `
  subscription OnUpdateDuckyDiceGame(
    $gameName: String
    $id: ID
    $pot: Int
    $rounds: [AWSJSON]
    $users: [AWSJSON]
  ) {
    onUpdateDuckyDiceGame(
      gameName: $gameName
      id: $id
      pot: $pot
      rounds: $rounds
      users: $users
    ) {
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
