function ListofPlayers() {

    const players = [
        { name: "Virat", score: 95 },
        { name: "Rohit", score: 88 },
        { name: "Gill", score: 62 },
        { name: "Rahul", score: 76 },
        { name: "Pant", score: 55 },
        { name: "Hardik", score: 82 },
        { name: "Jadeja", score: 68 },
        { name: "Ashwin", score: 72 },
        { name: "Bumrah", score: 44 },
        { name: "Shami", score: 71 },
        { name: "Siraj", score: 66 }
    ];

    const lowScore = players.filter(player => player.score < 70);

    return (

        <div>

            <h2>List of Players</h2>

            {

                players.map((player, index) => (

                    <p key={index}>
                        {player.name} - {player.score}
                    </p>

                ))

            }

            <h2>Players with Score below 70</h2>

            {

                lowScore.map((player, index) => (

                    <p key={index}>
                        {player.name} - {player.score}
                    </p>

                ))

            }

        </div>

    );

}

export default ListofPlayers;