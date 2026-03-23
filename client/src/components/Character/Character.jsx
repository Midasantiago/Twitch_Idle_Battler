import React from "react";

const Character = ({ character, handleAttack }) => {

    return (
        <div className='character flex-col items-center flex-1'>
            <img src={character} className='w-24 sm:w-32 md:w-40 lg:w-52' />
            <button
                className='mt-2 text-center font-bold bg-red-500 px-4 py-2 rounded hover:bg-red-600 transition'
                onClick={handleAttack}>
                SHOOT
            </button>
        </div>
    )
}

export default Character;