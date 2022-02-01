import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const Order = ({ pizza, setModal }) => {
  useEffect(() => {
    setTimeout(() => {
      setModal(true)
    }, 5000);
  }, [setModal]);

  const containerVariant = {
    hidden: {
      opacity: 0,
      x: '100vw'
    },
    visible: {
      opacity: 1,
      x: 0,
    transition:{
        type: 'spring',
        mass: 0.4,
        damping: 8,
         when: 'beforeChildren',
         staggerChildren: 0.4
      }
    },
    exit: {
      x: '-100vw',
      transition: {
        ease: 'easeInOut'
      }
    }
  }
  const childVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    }
  }
  return (
    <motion.div
    variants={containerVariant}
    initial='hidden'
    animate='visible'
    exit='exit'
    className="toppings container"
    className="container order">
        <h2>Thank you for your order :)</h2>
      <motion.p variants={childVariants}>You ordered a {pizza.base} pizza with:</motion.p>
      <motion.div variants={childVariants}>
      {pizza.toppings.map(topping => <div key={topping}>{topping}</div>)}
      </motion.div>
    </motion.div>
  )
}

export default Order;