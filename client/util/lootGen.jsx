export let testWeapon = {
    weaponName: "Basic Repeater",
    weaponRarity: "Common",
    weaponDamage: 1,
    weaponElement: "Fire",
    fireRate: 1,
    manufacturer: "DAHL"
};

export const genWeapon = function() {

    const names = [ "Repeater", "Rifle", "Revolver", "Machine Gun", "Sniper" ];
    const rarities = [ "Common", "Uncommon", "Rare", "Epic", "Legendary" ];
    const manufacturers = [ "DAHL", "TORGUE", "HYPERION", "VLADOF", "JAKOBS", "MALIWAN" ];
    const elements = [ "None", "Fire", "Shock", "Corrosive" ];

    const weapon = {
        weaponName: names[Math.floor(Math.random() * names.length)],
        weaponRarity: rarities[Math.floor(Math.random() * rarities.length)],
        weaponDamage: Math.floor(Math.random() * 100) + 10,
        fireRate: (Math.random() * 5 + 1).toFixed(2),
        manufacturer: manufacturers[Math.floor(Math.random() * manufacturers.length)],
        element: elements[Math.floor(Math.floor(Math.random() * elements.length))]
    }

    return weapon;
}