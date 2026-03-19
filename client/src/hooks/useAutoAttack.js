import { useEffect, useRef } from 'react';

export function useAutoAttack({ currentWeapon, attackEnemy }) {

    const attackRef = useRef(attackEnemy);

    // Keep latest attack function
    useEffect(() => {
        attackRef.current = attackEnemy;
    }, [attackEnemy]);

    useEffect(() => {

        // No weapon = no attacking
        if (!currentWeapon) return;

        const interval = setInterval(() => {
            attackRef.current(currentWeapon.weaponDamage);
        }, 1000 / currentWeapon.fireRate);

        // Cleans up interval
        return () => clearInterval(interval);

    }, [currentWeapon, attackEnemy]);
}