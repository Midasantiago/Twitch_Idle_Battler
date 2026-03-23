import './App.css'
import PlayArea from './components/PlayArea/PlayArea';
import WeaponInventory from './components/WeaponInventory/WeaponInventory';
import { useEnemy } from './hooks/useEnemy';
import { useWeapons } from './hooks/useWeapons';
import { useAutoAttack } from './hooks/useAutoAttack';
import character from '../assets/character/Girl_With_Gun.png';
import enemy_psycho from '../assets/enemy/enemy_psycho.png';

function App() {

  const {
    weaponList,
    currentWeapon,
    addWeapon,
    selectWeapon
  } = useWeapons();

  // Contains the current enemy's data
  const { enemy, attackEnemy } = useEnemy();

  // Handles when the players issues an attack and does damage to the enemy
  // Currently set to push button to attack
  // Later on will make it so that the player attacks on an interval (depending on weapon fire rate)
  const handleAttack = (e) => {

    if (!currentWeapon) return;

    attackEnemy(currentWeapon?.weaponDamage);
  }

  useAutoAttack({
    currentWeapon: currentWeapon || null,
    attackEnemy
  });

  // DPS Counter Test
  const dps = currentWeapon
    ? (currentWeapon.weaponDamage * currentWeapon.fireRate).toFixed(2)
    : 0;

  // Variables for animation
  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -10, scale: 0.95 }
  };

  return (
    <div className='main min-h-screen flex flex-col max-w-5xl mx-auto px-4 py-4'>

      {/*Button to generate weapon for player */}
      {/* Will be changed to generate weapon under different circummstances, not the button */}
      <div className='flex justify-between items-center mb-4'>
        <button
          className='text-center px-4 py-2 rounded bg-blue-500 hover:bg-blue-600 transition'
          onClick={addWeapon}>
          Generate Weapon
        </button>
      </div>

      {/* DPS Counter */}
      <p className='text-white font-bold'>
        DPS: {dps}
      </p>

      {/* Contains the playable area and its elements (Player Character, their selected weapon, and an enemy) */}
      <PlayArea
        character={character}
        enemy_psycho={enemy_psycho}
        handleAttack={handleAttack}
        currentEnemy={enemy}
      />
      {/* End of Playable Area */}

      {/* Contains the weapon inventory bar placed at the bottom of the screen */}
      <WeaponInventory
        weaponList={weaponList}
        currentWeapon={currentWeapon}
        selectWeapon={selectWeapon}
      />
      {/* End of Weapon Inventory */}

    </div>
  )
}

export default App
