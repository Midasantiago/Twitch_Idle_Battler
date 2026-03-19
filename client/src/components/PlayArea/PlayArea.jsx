import React from "react";
import Character from "../Character/Character";
import Enemy from "../Enemy/Enemy";

const PlayArea = ({ character, enemy_psycho, handleAttack, currentEnemy }) => {

    return (
        <div className='play-area flex flex-row justify-between items-center gap-6 min-h-[50vh] md:min-h-[60vh] pb-[6.5rem] px-2'>
            <Character
                character={character}
                handleAttack={handleAttack}
            />

            <Enemy
                enemy_psycho={enemy_psycho}
                currentEnemy={currentEnemy}
            />
        </div>
    )
}

export default PlayArea;