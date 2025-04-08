




function Details({player}) {
    return(
        <div>
            <h2>Details</h2>
          <div>
            <p>{player.name}</p>
            <p>{player.teamId}</p>
            <p>{player.status}</p>
            <img src={player.imageUrl}></img>
          </div>      
        </div>
    )

}




export default Details