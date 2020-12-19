import React, { useState, useEffect } from 'react';
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import { Auth, API, graphqlOperation } from 'aws-amplify';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { getDuckyDiceGame as getGame} from './graphql/queries';
import { createDuckyDiceGame as createGame, updateDuckyDiceGame as updateGame} from './graphql/mutations';

const initialGame = { id: uuidv4(), gameName: '', gameState: 'INIT', maxDice: 5, pot: 0, rounds: [], users: [] }

function App() {
  const [game, setGame] = useState(initialGame);
  const [formData, setFormData] = useState([]);

  Auth.currentCredentials().then((info) => {
    const cognitoIdentityId = info;
    console.log(cognitoIdentityId);
  });

  useEffect(() => {
    fetchCurrentGame();
  }, []);

  async function fetchCurrentGame() {
    const apiData = await API.graphql(graphqlOperation(
      getGame, 
      { filter: {
        or: [
          { gameState: "INIT" },
          { gameState: "IN_PROGRESS"}
        ]
      }}));
    console.log("Retrieved Game: ",apiData);
  }

  async function createGame() {
    if (!game.gameName || !game.id) return;
    API.graphql(graphqlOperation(
            createGame,
            { input: game }))
        .then(response => console.log(response))
        .catch(err => console.log(err));
  }

  return (
    <div className="App">
      <h1>Ducky Dice</h1>
      <input
        onChange={e => setGame(
            { ...game, 'gameName': e.target.value }
            )}
        placeholder="Game Name"
        value={game.name}
      />
      <button onClick={createGame}>Create Game</button>
      <div style={{marginBottom: 30}}>
        {
            <div key={game.id || game.name}>
              <h2>{game.name}</h2>
            </div>
        }
      </div>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);
