import { rarityData, elementColors } from "../../util/lootGen";

const WeaponCardMini = ({ selectedWeapon, handleWeaponSelect, className }) => {

    const rarityColor = rarityData[selectedWeapon.weaponRarity].color

    return (
        <div onClick={handleWeaponSelect}
            className="weapon-card w-full h-full flex flex-col justify-between rounded-lg overflow-hidden border-2"
            style={{ boxShadow: `0 0 10px ${rarityColor}` }}
        >

            {/* Top - Weapon Type */}
            <div className="weapon-card-header text-center p-[clamp(4px,1vw,8px)]">
                <p className="text-[clamp(0.6rem,2vw,1rem)] font-bold truncate"
                    style={{ color: rarityColor }}>
                    {selectedWeapon.weaponName}
                </p>
            </div>

            {/* Middle - IconPlaceholder/ Just says weaponType */}
            <div className="flex-1 flex items-center justify-center">
                <div className="w-[60%] h-[60%] bg-black/20 rounded-md flex items-center justify-center">
                    <span className="text-[clamp(0.5rem,1.5vw, 0.9rem)]"
                        style={{ color: rarityColor }}>
                        {selectedWeapon.weaponType}
                    </span>
                </div>
            </div>

            {/* Bottom - Element */}
            <div className="weapon-card-header text-center p-[clamp(4px,1vw,8px)]">
                <p
                    className="text-[clamp(0.5,1.5vw,0.9rem)] truncate"
                    style={{ color: elementColors[selectedWeapon.element] }}
                >
                    {selectedWeapon.element}
                </p>
            </div>

        </div>
    )
}

export default WeaponCardMini;