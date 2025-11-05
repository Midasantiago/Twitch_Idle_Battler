export const rarityData = {
    Common: { name: "Common", color: "#cec4be", weight: 50, multiplier: 1.00 },
    Uncommon: { name: "Uncommon", color: "#47b12d", weight: 25, multiplier: 1.20 },
    Rare: { name: "Rare", color: "#3473b4", weight: 15, multiplier: 1.40 },
    Epic: { name: "Epic", color: "#8640b2", weight: 7, multiplier: 1.60 },
    Legendary: { name: "Legendary", color: "#b98c15", weight: 3, multiplier: 2.00 }
}

const genRarity = function(rarityData) {
    const rarities = Object.values(rarityData);
    const total = rarities.reduce((sum, r) => sum += r.weight, 0);
    let roll = Math.random() * total;

    for (const r of rarities) {
        roll -= r.weight;
        if (roll <= 0) {
            return r;
        };
    }
}

export const elementColors = {
    None: "#808080",
    Fire: "#f05b11",
    Shock: "#0937b5",
    Corrosive: "#3cd927"
}

export const genWeapon = function() {

    const names = [ "Repeater", "Rifle", "Revolver", "Machine Gun", "Sniper" ];
    const weaponTypes = [ "Pistol", "Shotgun", "AR", "SMG", "Sniper" ];
    const manufacturers = [ "DAHL", "TORGUE", "HYPERION", "VLADOF", "JAKOBS", "MALIWAN" ];
    const elements = [ "None", "Fire", "Shock", "Corrosive" ];

    const generatedRarity = genRarity(rarityData);

    const weapon = {
        id: crypto.randomUUID(),
        weaponName: names[Math.floor(Math.random() * names.length)],
        weaponType: weaponTypes[Math.floor(Math.random() * weaponTypes.length)],
        weaponRarity: generatedRarity.name,
        weaponDamage: Math.floor((Math.floor(Math.random() * 100) + 10) * generatedRarity.multiplier),
        fireRate: (Math.random() * 5 + 1).toFixed(2),
        manufacturer: manufacturers[Math.floor(Math.random() * manufacturers.length)],
        element: elements[Math.floor(Math.random() * elements.length)]
    }

    return weapon;
}