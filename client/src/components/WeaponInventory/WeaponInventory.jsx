import { motion, AnimatePresence } from 'framer-motion';
import WeaponCard from '../WeaponCard/WeaponCard';

const WeaponInventory = ({ weaponList, currentWeapon, selectWeapon, cardVariants }) => {

    const handleSelect = (id) => selectWeapon(id);

    return (
        <div className='weapon-list fixed bottom-20 left-0 right-0 flex gap-1 sm:gap-4 overflow-x-auto px-4 sm:px-6 md:px-10 h-40 md:h-100 items-center'>
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
                                    className={isSelected ? 'scale-120' : ''}
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