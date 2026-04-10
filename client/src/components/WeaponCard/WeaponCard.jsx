import { rarityData, elementColors } from "../../util/lootGen";

const WeaponCard = ({ selectedWeapon, handleWeaponSelect, className }) => {

    const rarityColor = rarityData[selectedWeapon.weaponRarity].color

    return (
        <div onClick={handleWeaponSelect}
            className={`weapon-card cursor-pointer w-full h-full flex flex-col flex-shrink-0 justify-between rounded-xl transition-transform duration-300 hover:scale-105 ${className}`}
            style={{ boxShadow: `0 0 10px ${rarityColor}` }}>

            {/* Header */}
            <div className="weapon-card-header flex-[1] flex items-center justify-center p-[clamp(4px,1vw,10px)]">
                <h2 className={`font-bold text-outline text-[clamp(0.7rem,2vw,1.2rem)] text-center truncate`}
                    style={{ color: rarityColor }}>
                    {selectedWeapon.weaponName}
                </h2>
            </div>

            {/* Stats */}
            <div className='flex-[2] flex flex-col justify-center gap-[clamp(2px,0.8vw,6px)] px-[clamp(4px,1vw,10px)] text-[clamp(0.6rem,1.8vw,1rem)]'>

                <div className='flex justify-between text-outline'>
                    <span>Damage</span>
                    <span className="whitespace-nowrap">{selectedWeapon.weaponDamage}</span>
                </div>

                <div className='flex justify-between text-outline'>
                    <span>Fire Rate</span>
                    <span className="whitespace-nowrap">{selectedWeapon.fireRate}</span>
                </div>

                <div className='flex justify-between text-outline'>
                    <span>Element</span>
                    <span className="truncate text-right" style={{ color: elementColors[selectedWeapon.element] }}>{selectedWeapon.element}</span>
                </div>

            </div>

            {/* Footer */}
            <div className='weapon-card-header weapon-card-bottom flex-[1] flex justify-between items-center p-[clamp(4px,1vw,10px)] text-[clamp(0.6rem,1.8vw,1rem)]'>
                <span className="font-bold text-outline truncate" style={{ color: rarityColor }}>{selectedWeapon.manufacturer}</span>
                <span className='font-bold text-outline truncate' style={{ color: rarityColor }}>{selectedWeapon.weaponType}</span>
            </div>

        </div>
    )
}

export default WeaponCard;