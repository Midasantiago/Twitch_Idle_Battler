import React, { useState, useEffect } from 'react'
import './App.css'
import WeaponCard from '../components/weaponCard';
import { testWeapon, genWeapon } from '../util/lootGen';
import character from '../assets/character/Girl_With_Gun.png'

function App() {
  const [count, setCount] = useState(0);

  // Contains the player's list of weapon objects in an array
  const [weaponList, setWeaponList] = useState([]);

  // Button handler that calls the random weapon generation function from the util directory
  const handleAddWeapon = function (event) {
    event.preventDefault();
    // Prepends generated weapon to beginning of weaponList array
    setWeaponList(prevItems => [genWeapon(), ...prevItems]);
  }

  return (
    <div className=''>

      <button className='text-center bg-blue-500 m-4 p-3 rounded' onClick={handleAddWeapon}>Generate Weapon</button>

      <div className='play-area relative h-[70vh] flex justify-center'>
        <div className='character absolute left-[25%] bottom-[35%]'>
          <img src={character} />
        </div>
      </div>

      <div className='weapon-list fixed bottom-20 left-0 right-0 flex gap-3 overflow-x-auto px-4 sm:px-6 md:px-10'>
        {weaponList.length ? (
          weaponList.map((weapon, index) => (
            <WeaponCard key={index} selectedWeapon={weapon} />
          ))
        ) : (
          <p className='text-center w-full'>No Weapons</p>
        )}
      </div>
    </div>
  )
}

export default App
