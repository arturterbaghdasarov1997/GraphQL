import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { IGame } from '../interfaces/game.interface';
import { GET_GAME } from '../graphql/queries/get-game';
import '../scss/GamePage.scss';
interface GamePageParams {
    id: string;
    [key: string]: string | undefined;
}

const GamePage: React.FC = () => {
    const { id } = useParams<GamePageParams>();

    if (!id) {
        return <h3>Error: No game ID provided.</h3>;
    }

    const { data, loading, error } = useQuery<{ game: IGame }>(GET_GAME, {
        variables: { gameId: id },
    });

    if (loading) return <h1>Loading...</h1>;
    if (error) return <h3>{error.message}</h3>;

    const game = data?.game;

    return (
        <div className="game-page">
            {game ? (
                <>
                    <h1>{game.title}</h1>
                    <h3>Platforms</h3>
                    <ul>
                        {game.platform.map((p, index) => (
                            <li key={index}>{p}</li>
                        ))}
                    </ul>
                    <h3>Reviews</h3>
                    <ul>
                        {game.reviews.map((r, index) => (
                            <li key={index}>
                                {r.content} by {r.author.name} (Rating: {r.rating})
                            </li>
                        ))}
                    </ul>
                </>
            ) : (
                <p>No game found.</p>
            )}
        </div>
    );
};

export default GamePage;