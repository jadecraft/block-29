import { useState } from "react";
import "./App.css";
import PlayerList from "./playerlist";
import { useEffect } from "react";
import Details from "./details";
import SearchBar from "./search";

function App() {
  const [players, setPlayers] = useState([]);
  const [selectedPlayer, setSelectedPlayer] = useState(null)
  const [filteredPlayers, setFilteredPlayers] = useState([]);

  useEffect(() => {
    async function getPlayers() {
      const response = await fetch(
        "https://fsa-puppy-bowl.herokuapp.com/api/2411-FTB-ET-WEB-PT/players"
      );
      const json = await response.json();
setPlayers(json.data.players)
    }
    getPlayers()
  }, []);

  const handleSearch = (searchTerm) => {
    const filtered = players.filter((player) =>
      player.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPlayers(filtered);
  };

  const handleDelete = (playerId) => {
    const updatedPlayers = players.filter(player => player.id !== playerId);
    setPlayers(updatedPlayers);
    setFilteredPlayers(updatedPlayers);
  };

  return (
    <>
      <div>
        <h1>puppy bowl</h1>
      </div>

      <SearchBar onSearch={handleSearch} />

      {selectedPlayer ? <Details player={selectedPlayer}/> :
      <PlayerList players={players} setSelectedPlayer={setSelectedPlayer}/>
      }
       <PlayerList players={filteredPlayers} setSelectedPlayer={setSelectedPlayer} handleDelete={{handleDelete}}/>
    </>
  );
}

export default App;
