import { motion, AnimatePresence } from 'framer-motion';
import WeaponCard from '../WeaponCard/WeaponCard';

const WeaponInventory = ({ weaponList, currentWeapon, selectWeapon, cardVariants }) => {

    const handleSelect = (id) => selectWeapon(id);

    return (
        <div className='grid grid-cols-2 gap-4'>
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
                                className='relative w-full overflow-visible'
                            >
                                <div className='w-full overflow-visible'>
                                    <WeaponCard
                                        handleWeaponSelect={() => handleSelect(weapon)}
                                        selectedWeapon={weapon}
                                        className={isSelected ? 'ring-2 ring-yellow-400' : ''}
                                    />
                                </div>
                            </motion.div>
                        )
                    })
                ) : (
                    <p className='text-center col-span-2'>No Weapons</p>
                )}
            </AnimatePresence>
        </div>
    )
}

export default WeaponInventory;