
import Details from './details'
import Form from './form'

function PlayerList({ players, setSelectedPlayer, handleDelete }) {
  console.log(players)

  return (
    <>
      <div>
        <h1>Player List</h1>
      </div>

      <Form />

      {players.map(player => (
        <div key={player.id} style={{border: '1px solid gray', margin: '10px', padding: '10px'}}>
          <p><strong>Name:</strong> {player.name}</p>
          <p><strong>Breed:</strong> {player.breed}</p>
          <p><strong>Status:</strong> {player.status}</p>
          <img src={player.imageUrl} alt={player.name} style={{width: '200px'}} />

          <div style={{marginTop: '10px'}}>
            <button onClick={() => setSelectedPlayer(player)}>
              See details
            </button>

            <button 
              onClick={() => handleDelete(player.id)} 
              style={{marginLeft: '10px', backgroundColor: 'red', color: 'white'}}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </>
  )
}

export default PlayerList
