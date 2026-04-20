import React from "react";

const Enemy = ({ enemy_psycho, currentEnemy, isDying }) => {

    return (
        <div className='enemy flex-col items-center text-center justify-center flex-1'>
            <img src={enemy_psycho} className={`w-20 sm:w-28 md:w-36 lg:w-44 ${isDying ? 'flicker' : ''}`} />
            <h1 className='font-bold text-xl md:text-3xl whitespace-nowrap text-ellipsis text-center w-full text-[clamp(1.2rem,2vw,1.2rem)]'>{currentEnemy?.name}</h1>
            <p className='font-bold text-l md:text-xl'>{currentEnemy?.health}</p>
        </div>
    )
}

export default Enemy;