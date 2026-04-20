import { useEffect, useRef } from 'react';

export function useAutoAttack({ currentWeapon, attackEnemy, isDying }) {

    const attackRef = useRef(attackEnemy);

    // Keep latest attack function
    useEffect(() => {
        attackRef.current = attackEnemy;
    }, [attackEnemy]);

    useEffect(() => {

        // No weapon/enemy dying = no attacking
        if (!currentWeapon || isDying) return;

        const interval = setInterval(() => {
            attackRef.current(currentWeapon.weaponDamage);
        }, 1000 / currentWeapon.fireRate);

        // Cleans up interval
        return () => clearInterval(interval);

    }, [currentWeapon, attackEnemy]);
}