import { useState, useEffect } from "react";
import { genWeapon } from "../util/lootGen";

export function useWeapons() {
    const [weaponList, setWeaponList] = useState([]);
    const [equippedWeapons, setEquippedWeapons] = useState({ slot1: null, slot2: null });
    const [activeWeapon, setActiveWeapon] = useState('slot1');
    const currentWeapon = equippedWeapons[activeWeapon];

    // Add new weapon
    const addWeapon = () => {
        const newWeapon = genWeapon();
        setWeaponList(prev => [newWeapon, ...prev]);
    };

    // Select weapon
    const selectWeapon = (id, slot) => {
        const slotIDs = [equippedWeapons.slot1?.id, equippedWeapons.slot2?.id]
        const isAlreadyEquipped = slotIDs.includes(id);

        if (!isAlreadyEquipped) {
            const foundWeapon = weaponList.find(w => w.id === id);
            setEquippedWeapons(prev => ({
                ...prev,
                [slot]: foundWeapon
            }));
        }
    };

    useEffect(() => {
        console.log('Active Weapon Slot: ', currentWeapon);
        console.log("Weapon Slots:", equippedWeapons);
    }, [activeWeapon, equippedWeapons]);

    return {
        weaponList,
        setWeaponList,
        currentWeapon,
        equippedWeapons,
        activeWeapon,
        setActiveWeapon,
        addWeapon,
        selectWeapon
    };
}