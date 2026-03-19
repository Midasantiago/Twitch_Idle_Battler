import React from "react";

const Enemy = ({ enemy_psycho, currentEnemy }) => {

    return (
        <div className='enemy flex-col items-center'>
            <img src={enemy_psycho} className='w-17 md:w-[200px]' />
            <h1 className='font-bold text-xl md:text-3xl'>{currentEnemy?.name}</h1>
            <p className='font-bold text-l md:text-xl'>{currentEnemy?.health}</p>
        </div>
    )
}

export default Enemy;