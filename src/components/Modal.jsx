import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from 'framer-motion';

const Modal = ({ modal, setModal }) => {
    const modala = {
        hidden: {
            y: '-100vh',
            opacity: 0,
        },
        visible: {
            y: '200px',
            opacity: 1,
            transition: {delay: 0.5}
        }
    }
    const backVariants = {
        visible: {
            opacity: 1
        },
        hidden:{
            opacity: 0
        }
    }
    return (
        <AnimatePresence exitBeforeEnter>
            {modal && (
                <motion.div className="backdrop"
                    variants={backVariants }
                    initial='hidden'
                    animate='visible'
                >
                    <motion.div className='modal' 
                    variants={modala}
                    initial='hidden'
                    animate='visible'
                    exit='hidden'>
                    <p>Want to make another pizza?</p>
                    <Link to="/">
                        <button >Start again</button>
                    </Link>
                    </motion.div>

                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Modal;
