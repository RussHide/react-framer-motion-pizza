import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'

const Base = ({ addBase, pizza }) => {
  const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];
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
        delay: 0.5
      }
    },
    exit: {
      x: '-100vw',
      transition: {
        ease: 'easeInOut'
      }
    }
  }
  const buttonVariants = {
    /* visible: {
      x: [0, -20, 20, -20, 20, 0],
      transition: { delay: 2 },
    }, */
    hover: {
      scale: 1.1,
      textShadow: "0px 0px 8px rgb(255, 255, 255)",
      boxShadow: "0px 0px 8px rgb(255, 255, 255)",
      transition: {
        duration: 0.3,
        yoyo: Infinity
      }
    },
  }

  const nextVariants = {
    hidden: {
      x: '-100vw'
    },
    visible: {
      x: 0,
    transition:{
        type: 'spring',
        stiffness: 120
      }
    }
  }
  return (
    <motion.div
      initial={'hidden'}
      animate={'visible'}
      exit='exit'
     variants={containerVariant}
      className="base container">

      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map(base => {
          let spanClass = pizza.base === base ? 'active' : '';
          return (
            <motion.li
              whileHover={{
                scale: 1.3,
                color: "#f8e112",
                originX: 0
              }}
              transition={{
                type: 'spring',
                stiffness: 300
              }}
              key={base} onClick={() => addBase(base)}>
              <span className={spanClass}>{base}</span>
            </motion.li>
          )
        })}
      </ul>

      {pizza.base && (
        <motion.div
        variants={nextVariants}
        /* animate='visible'
        initial='hidden' */
          className="next">
          <Link to="/toppings">
            <motion.button
            variants={buttonVariants}
              whileHover='hover'
            >Next</motion.button>
          </Link>
        </motion.div>
      )}

    </motion.div>
  )
}

export default Base;