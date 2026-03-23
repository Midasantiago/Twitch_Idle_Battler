import { motion, AnimatePresence } from 'framer-motion';
import WeaponCard from '../WeaponCard/WeaponCard';

const WeaponInventory = ({ weaponList, currentWeapon, selectWeapon, cardVariants }) => {

    const handleSelect = (id) => selectWeapon(id);

    return (
        <div className='weapon-list flex gap-4 px-4 overflow-x-auto h-full items-center'>
            <AnimatePresence initial={false}>
                {weaponList.length ? (
                    weaponList.map((weapon, index) => {
                        const isNewest = index === 0;
                        const isSelected = currentWeapon?.id === weapon.id;
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
                                    handleWeaponSelect={() => handleSelect(weapon.id)}
                                    selectedWeapon={weapon}
                                    className={isSelected ? 'scale-80' : ''}
                                />
                            </motion.div>
                        )
                    })
                ) : (
                    <p className='text-center w-full'>No Weapons</p>
                )}
            </AnimatePresence>
        </div>
    )
}

export default WeaponInventory;