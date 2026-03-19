export const genEnemy = function () {

    const enemyData = {
        Psycho: { name: "Psycho", health: 50, weight: 45 },
        Bandit: { name: "Bandit", health: 100, weight: 45 },
        Badass_Psycho: { name: "Badass Psycho", health: 200, weight: 10 }
    }

    const enemies = Object.values(enemyData);
    const total = enemies.reduce((sum, e) => sum += e.weight, 0);
    let roll = Math.random() * total;

    for (const e of enemies) {
        roll -= e.weight;
        if (roll <= 0) {
            return e;
        };
    }
}

