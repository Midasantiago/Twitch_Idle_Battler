import { useState } from "react";
import { genWeapon } from "../util/lootGen";

export function useWeapons() {
    const [weaponList, setWeaponList] = useState([]);
    const [currentWeapon, setCurrentWeapon] = useState(null);

    // Add new weapon
    const addWeapon = () => {
        const newWeapon = genWeapon();
        setWeaponList(prev => [newWeapon, ...prev]);
    };

    // Select weapon
    const selectWeapon = (id) => {
        const foundWeapon = weaponList.find(w => w.id === id);
        setCurrentWeapon(foundWeapon);
    };

    return {
        weaponList,
        currentWeapon,
        addWeapon,
        selectWeapon
    };
}