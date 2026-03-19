import { useState, useEffect } from "react";
import { genEnemy } from "../util/enemyGen";

export function useEnemy() {
    const [enemy, setEnemy] = useState(genEnemy());

    // Handles taking damage
    const attackEnemy = (damage) => {
        setEnemy(prev => ({
            ...prev,
            health: Math.max(prev.health - damage, 0)
        }));
    };

    // Handles respawning enemy
    useEffect(() => {
        if (enemy.health <= 0) {
            console.log("Enemy Defeated");
            setEnemy(genEnemy());
        }
    }, [enemy.health]);

    return {
        enemy,
        attackEnemy
    }
}