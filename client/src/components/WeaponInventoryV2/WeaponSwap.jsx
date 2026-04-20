

const WeaponSwap = ({ setActiveWeapon, equippedWeapons }) => {

    const toggle = () => {
        setActiveWeapon(prev => {
            if (prev === 'slot1' && !equippedWeapons.slot2) {
                return 'slot1';
            }
            return prev === 'slot1' ? 'slot2' : 'slot1';
        });
    };

    const swapButton = '<-- Swap -->';

    return (
        <div className="cursor-pointer items-center justify-center text-center"
        onClick={toggle}>
            <p className="hover:text-red-500">
                {swapButton}
            </p>
        </div>
    )
}

export default WeaponSwap;