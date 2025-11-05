import React from "react";
import { rarityData, elementColors } from "../util/lootGen";

const WeaponCard = ({ selectedWeapon, handleWeaponSelect, className }) => {

    const rarityColor = rarityData[selectedWeapon.weaponRarity].color

    return (
        <div onClick={handleWeaponSelect} className={`weapon-card relative flex-shrink-0 w-[220px] sm:w-[250px] md:w-[280px] h-56 rounded-xl text-center m-3 transition-transform duration-300 ${className}`}
            style={{ boxShadow: `0 0 15px ${rarityColor}`}}>
            <h1 className={`weapon-card-header font-bold text-3xl tracking-tighter p-1.5`}
                style={{ color: rarityColor }}>
                {selectedWeapon.weaponName}
            </h1>
            <div className='h-full text-xl p-1'>
                <div className='flex justify-between text-outline'>
                    <h2 className='pl-4'>Damage</h2>
                    <h2 className='pr-4'>{selectedWeapon.weaponDamage}</h2>
                </div>
                <div className='flex justify-between text-outline'>
                    <h2 className='pl-4'>Fire Rate</h2>
                    <h2 className='pr-4'>{selectedWeapon.fireRate}</h2>
                </div>
                <div className='flex justify-between text-outline'>
                    <h2 className='pl-4'>Element</h2>
                    <h2 className='pr-4 font-bold' style={{ color: elementColors[selectedWeapon.element] }}>{selectedWeapon.element}</h2>
                </div>
            </div>
            <div className='weapon-card-header weapon-card-bottom flex justify-between absolute bottom-0 w-full text-3xl overflow-hidden p-1.5'>
                <h1 className='pl-3' style={{ color: rarityColor }}>{selectedWeapon.manufacturer}</h1>
                <h2 className='pr-3 font-bold' style={{ color: rarityColor }}>{selectedWeapon.weaponType}</h2>
            </div>
        </div>
    )
}

export default WeaponCard;