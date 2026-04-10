import React from "react";

const Character = ({ character, handleAttack }) => {

    return (
        <div className='character flex-col justify-center text-center items-center flex-1'>
            <img src={character} className='w-56 sm:w-32 md:w-40 lg:w-52' />
            <h1 className="font-bold text-xl md:text-3xl">Bixey</h1>
        </div>
    )
}

export default Character;