import { useState, useEffect } from "react";
import { genEnemy } from "../util/enemyGen";

export function useEnemy({ addWeapon }) {
    const [enemy, setEnemy] = useState(genEnemy());
    const [isDying, setIsDying] = useState(false);

    // Handles taking damage
    const attackEnemy = (damage) => {
        setEnemy(prev => ({
            ...prev,
            health: Math.max(prev.health - damage, 0)
        }));
    };

    // Handles respawning enemy
    useEffect(() => {
        if (enemy.health <= 0 && !isDying) {
            setIsDying(true);
        }
    }, [enemy.health]);

    useEffect(() => {
        if (!isDying) return;

        const respawnTimer = setTimeout(() => {
            if (Math.random() * 100 < enemy.dropChance) {
                console.log('LOOT DROPPED!')
                addWeapon()
            } else {
                console.log('Failed Drop');
            }

            setEnemy(genEnemy());
            setIsDying(false);
        }, 1000);

        return () => clearTimeout(respawnTimer);
    }, [isDying]);

    return {
        enemy,
        attackEnemy,
        isDying
    }
}