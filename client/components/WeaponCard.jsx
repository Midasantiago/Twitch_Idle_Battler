import React from "react";

const WeaponCard = ({ selectedWeapon }) => {
    return (
        <div className='weapon-card relative flex-shrink-0 w-sm  sm:w-xs h-56 rounded-xl text-center m-3'>
            <h1 className='weapon-card-header font-bold text-3xl tracking-tighter p-1.5'>{selectedWeapon.weaponName}</h1>
            <div className='h-full text-xl p-1'>
                <div className='flex justify-between'>
                    <h2 className='pl-4'>Damage</h2>
                    <h2 className='pr-4'>{selectedWeapon.weaponDamage}</h2>
                </div>
                <div className='flex justify-between'>
                    <h2 className='pl-4'>Fire Rate</h2>
                    <h2 className='pr-4'>{selectedWeapon.fireRate}</h2>
                </div>
                <div className='flex justify-between'>
                    <h2 className='pl-4'>Element</h2>
                    <h2 className='pr-4'>{selectedWeapon.element}</h2>
                </div>
            </div>
            <h1 className='weapon-card-header weapon-card-bottom absolute bottom-0 w-full text-3xl overflow-hidden p-1.5'>{selectedWeapon.manufacturer}</h1>
        </div>
    )
}

export default WeaponCard;