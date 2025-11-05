import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence, scale } from 'framer-motion';
import './App.css'
import WeaponCard from '../components/weaponCard';
import { genWeapon } from '../util/lootGen';
import { genEnemy } from '../util/enemyGen';
import character from '../assets/character/Girl_With_Gun.png';
import enemy_psycho from '../assets/enemy/enemy_psycho.png';

function App() {

  // Contains the player's list of weapon objects in an array
  const [weaponList, setWeaponList] = useState([]);
  // Contains the player's currently active weapon object
  const [currentWeapon, setCurrentWeapon] = useState();
  // Contains the current enemy's data
  const [currentEnemy, setCurrentEnemy] = useState(genEnemy());

  // Button handler that calls the random weapon generation function from the util directory
  const handleAddWeapon = function (event) {
    event.preventDefault();
    // Prepends generated weapon to beginning of weaponList array
    setWeaponList(prevItems => [genWeapon(), ...prevItems]);
  }

  // Handles when the player selects a weapon from their inventory and makes it the 'current weapon'
  const handleWeaponSelect = function (id) {
    const foundWeapon = weaponList.find(obj => obj.id === id);
    console.log("Found Weapon!", foundWeapon);
    setCurrentWeapon(foundWeapon);
  }

  // Handles when the players issues an attack and does damage to the enemy
  // Currently set to push button to attack
  // Later on will make it so that the player attacks on an interval (depending on weapon fire rate)
  const handleAttack = function (e) {
    e.preventDefault();

    if (!currentWeapon || !currentEnemy) {
      return;
    }

    let damage = currentWeapon.weaponDamage;

    setCurrentEnemy(prev => ({
      ...prev,
      health: Math.max(prev.health - damage, 0)
    }));
  };

  {/* Respawns Enemies */ }
  useEffect(() => {
    if (currentEnemy && currentEnemy.health <= 0) {
      console.log("Enemy Defeated");
      setCurrentEnemy(genEnemy());
    }
  })

  // Variables for animation
  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -10, scale: 0.95 }
  };

  return (
    <div className='min-h-screen max-w-[1200px] mx-auto px-4 pt-6'>

      {/*Button to generate weapon for player */}
      {/* Will be changed to generate weapon under different circummstances */}
      <div className='flex justify-between items-center mb-4'>
        <button
          className='text-center px-4 py-2 rounded bg-blue-500 hover:bg-blue-600 transition'
          onClick={handleAddWeapon}>
          Generate Weapon
        </button>
      </div>

      {/* Contains the playable area and its elements (Player Character, their selected weapon, and an enemy) */}
      <div className='play-area flex flex-row justify-between items-center gap-6 h-[60vh] sm:h-[70vh] md:h-[75vh] pb-[6.5rem]'>
        <div className='flex-col items-center'>
          {currentWeapon ? (
            <WeaponCard selectedWeapon={currentWeapon} />
          ) : (
            <div></div>
          )}
        </div>
        <div className='character flex-col items-center'>
          <img src={character} className='w-[150px] sm:w-[200px] md:w-[250px]' />
          <button
            className='mt-2 text-center font-bold bg-red-500 px-4 py-2 rounded hover:bg-red-600 transition'
            onClick={handleAttack}>
            SHOOT
          </button>
        </div>
        <div className='enemy flex-col items-center'>
          <img src={enemy_psycho} className='w-[150px] sm:w-[200px] md:w-[250px]' />
          <h1 className='font-bold text-3xl'>{currentEnemy.name}</h1>
          <p className='font-bold text-xl'>{currentEnemy.health}</p>
        </div>
      </div>
      {/* End of Playable Area */}

      {/* Contains the weapon inventory bar placed at the bottom of the screen */}
      <div className='weapon-list fixed bottom-20 left-0 right-0 flex gap-2  sm:gap-4 overflow-x-auto px-4 sm:px-6 md:px-10 h-75 items-center'>
        <AnimatePresence initial={false}>
          {weaponList.length ? (
            weaponList.map((weapon, index) => {
              const isNewest = index === 0;
              return (
                <motion.div
                  key={weapon.id}
                  layout
                  variants={cardVariants}
                  initial='hidden'
                  animate='visible'
                  exit='exit'
                  transition={{
                    duration: isNewest ? 0.4 : 0.3,
                    delay: isNewest ? 0 : index * 0.05,
                    type: 'spring',
                    stiffness: 300,
                    damping: 20
                  }}
                >
                  <WeaponCard
                    handleWeaponSelect={() => handleWeaponSelect(weapon.id)}
                    selectedWeapon={weapon}
                    className={currentWeapon ? (weapon.id === currentWeapon.id ? "scale-120" : "") : ""}
                  />
                </motion.div>
              )
            })
          ) : (
            <p className='text-center w-full'>No Weapons</p>
          )}
        </AnimatePresence>
      </div>
      {/* End of Weapon Inventory */}

    </div>
  )
}

export default App
