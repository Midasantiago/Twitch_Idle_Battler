import React from "react";
import Character from "../Character/Character";
import Enemy from "../Enemy/Enemy";

const PlayArea = ({ character, enemy_psycho, currentEnemy, isDying }) => {

    return (
        <div className='play-area flex justify-center items-center gap-12 max-w-3xl mx-auto'>
            <Character
                character={character}
            />

            <Enemy
                enemy_psycho={enemy_psycho}
                currentEnemy={currentEnemy}
                isDying={isDying}
            />
        </div>
    )
}

export default PlayArea;