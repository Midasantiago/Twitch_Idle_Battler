import WeaponCard from "../WeaponCard/WeaponCard";
import WeaponCardMini from "../WeaponCard/weaponCardMini";

const WeaponSlots = ({ invToggle, currentWeapon }) => {

    return (
        <div className="grid grid-cols-2 gap-3 mt-3 h-[189px]">

            <button className="cursor-pointer w-full aspect-[3/2] flex items-center justify-center"
                onClick={invToggle}>
                {currentWeapon ? (
                        <WeaponCardMini
                            selectedWeapon={currentWeapon}
                        />
                ) : (
                    <div className="w-full aspect-[3/2] flex items-center justify-center border-2 rounded-lg">Empty</div>
                )}
            </button>

            <div className="w-full aspect-[3/2] flex border-2 text-center items-center rounded-lg">
                <p>Weapon Slot 2</p>
            </div>

            <div className="w-full aspect-[3/2] flex border-2 text-center items-center rounded-lg">
                <p>Weapon Slot 3</p>
            </div>

            <div className="w-full aspect-[3/2] flex border-2 text-center items-center rounded-lg">
                <p>Weapon Slot 4</p>
            </div>

        </div>
    )
}

export default WeaponSlots;