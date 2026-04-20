import WeaponCardMini from "../WeaponCard/WeaponCardMini";

const WeaponSlots = ({ invToggle, equippedWeapons, activeWeapon }) => {

    const openSlot = (id) => invToggle(id);

    return (
        <div className="grid grid-cols-2 gap-3 mt-3 h-[189px]">

            <button className={`cursor-pointer w-full aspect-[3/2] flex items-center justify-center ${activeWeapon == 'slot1' ? 'ring-4' : ''}`}
                onClick={() => openSlot('slot1')}>
                {equippedWeapons.slot1 ? (
                    <WeaponCardMini
                        selectedWeapon={equippedWeapons.slot1}
                    />
                ) : (
                    <div className="w-full aspect-[3/2] flex items-center justify-center border-2 rounded-lg">Empty</div>
                )}
            </button>

            <button className={`cursor-pointer w-full aspect-[3/2] flex items-center justify-center ${activeWeapon == 'slot2' ? 'ring-4' : ''}`}
                onClick={() => openSlot('slot2')}>
                {equippedWeapons.slot2 ? (
                    <WeaponCardMini
                        selectedWeapon={equippedWeapons.slot2}
                    />
                ) : (
                    <div className="w-full aspect-[3/2] flex items-center justify-center border-2 rounded-lg">Empty</div>
                )}
            </button>

        </div>
    )
}

export default WeaponSlots;
