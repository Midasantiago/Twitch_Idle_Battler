import './App.css'
import { useState, useEffect, useRef } from 'react';
import PlayArea from './components/PlayArea/PlayArea';
import WeaponInventory from './components/WeaponInventory/WeaponInventory';
import WeaponSwap from './components/WeaponInventoryV2/WeaponSwap';
import WeaponSlots from './components/WeaponInventoryV2/WeaponSlotsArea';
import { useEnemy } from './hooks/useEnemy';
import { useWeapons } from './hooks/useWeapons';
import { useAutoAttack } from './hooks/useAutoAttack';
import character from '../assets/character/Girl_With_Gun.png';
import enemy_psycho from '../assets/enemy/enemy_psycho.png';

function App() {

  const {
    weaponList,
    setWeaponList,
    currentWeapon,
    equippedWeapons,
    activeWeapon,
    setActiveWeapon,
    addWeapon,
    selectWeapon
  } = useWeapons();

  // Contains the current enemy's data
  const { enemy, attackEnemy, isDying } = useEnemy({ addWeapon });

  // Handles when the players issues an attack and does damage to the enemy

  useAutoAttack({
    currentWeapon: currentWeapon || null,
    attackEnemy,
    isDying: isDying
  });

  // Opens/Closes Player Inventory
  const [showEquipmentModal, setShowEquipmentModal] = useState(false);
  const [modalSlot, setModalSlot] = useState(null);

  const openEquipmentModal = (slot) => {
    setModalSlot(slot);
    setShowEquipmentModal(true)
    console.log('Opened Modal');
  };

  const closeEquipmentModal = () => {
    setModalSlot(null);
    setShowEquipmentModal(false)
    console.log('Closed Modal');
  };

  const handleWeaponSelect = (weapon) => {
    selectWeapon(weapon.id, modalSlot)
    closeEquipmentModal()
  }

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

  // Defines and gives the player their first weapon upon start
  const firstWeapon = {
    id: crypto.randomUUID(),
    weaponName: 'Basic Repeater',
    weaponType: 'Pistol',
    weaponRarity: 'Common',
    weaponDamage: 10,
    fireRate: 3,
    manufacturer: 'DAHL',
    element: 'None'
  }

  const calledOnce = useRef(false);
  useEffect(() => {
    if (!calledOnce.current) {
      setWeaponList(prev => [firstWeapon, ...prev]);
      calledOnce.current = true;
    }
  }, [])

  return (
    <div className='main min-h-screen flex flex-col items-center justify-start max-w-5xl mx-auto px-4 py-4'>

      {/* DPS Counter */}
      <p className='text-white font-bold'>
        DPS: {dps}
      </p>

      {/* Contains the playable area and its elements (Player Character, their selected weapon, and an enemy) */}
      <PlayArea
        character={character}
        enemy_psycho={enemy_psycho}
        currentEnemy={enemy}
        isDying={isDying}
      />
      {/* End of Playable Area */}

      {/* Contains the weapon inventory bar placed at the bottom of the screen */}
      <WeaponSwap
        setActiveWeapon={setActiveWeapon}
        equippedWeapons={equippedWeapons}
      />
      <WeaponSlots
        invToggle={openEquipmentModal}
        equippedWeapons={equippedWeapons}
        activeWeapon={activeWeapon}
      />
      {/* End of Weapon Inventory */}

      {/*Inventory Modal */}
      {showEquipmentModal && (

        <div className='fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm'
          onClick={closeEquipmentModal}>

          <div className='bg-gray-900 rounded-xl py-4 max-w-4xl w-full border max-h-[80vh] border-blue-200 relative flex flex-col'
            onClick={(e) => e.stopPropagation}>

            <button
              onClick={closeEquipmentModal}
              className='absolute top-2 right-2 text-white text-xl hover:text-red-400'
            >
              X
            </button>

            <div className='flex-1 overflow-y-auto weapon-list pb-4 px-1'>
              <WeaponInventory
                weaponList={weaponList}
                selectWeapon={handleWeaponSelect}
                cardVariants={cardVariants}
              />
            </div>
          </div>

        </div>
      )}

    </div>
  )
}

export default App
