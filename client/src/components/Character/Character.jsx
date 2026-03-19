import React from "react";

const Character = ({ character, handleAttack }) => {

    return (
        <div className='character flex-col items-center'>
            <img src={character} className='w-30 md:w-[325px]' />
            <button
                className='mt-2 text-center font-bold bg-red-500 px-4 py-2 rounded hover:bg-red-600 transition'
                onClick={handleAttack}>
                SHOOT
            </button>
        </div>
    )
}

export default Character;