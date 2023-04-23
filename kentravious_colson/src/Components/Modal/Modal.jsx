
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HashLink as Link } from 'react-router-hash-link';
import { MdClose } from 'react-icons/md';
import './modal.scss';


const MobileItems = ({ onClose }) => {
  const closeModal = () => {
    onClose();
  };

  return (
    <ul>
      <motion.div
        initial={{ opacity: 0.2 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
        >
          <li>
            <div>
              01.
              <Link onClick={closeModal} className="underline" smooth to="#intro">
                home
              </Link>
            </div>
          </li>

          <li onClick={closeModal}>
            <div>
              02.
              <Link smooth to="#about" className="underline">
                about
              </Link>
            </div>
          </li>

          <li onClick={closeModal}>
            <div>
              03.
              <Link to="#projects" className="underline" smooth>
                projects
              </Link>
            </div>
          </li>

          <li>
            <div onClick={closeModal}>
              04.
              <Link smooth to="#contact" className="underline">
                contact
              </Link>
            </div>
          </li>
        </motion.div>

        <motion.div
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 2 }}
        ></motion.div>
      </motion.div>
    </ul>
  );
};

const Modal = ({ isOpen, children, onClose }) => {
  const CLOSE_BTN_STYLES = {
    background: 'transparent',
    color: '#64ffda',
    border: 'none',
  };

  const closeModal = () => {
    onClose();
  };

  return (
    <>
      {isOpen ? (
        <div className="modal">
          <div className="modal_background" onClick={closeModal} />
          <div className="modal_container">
            <div className="modal_controls">
              <button className="modal_close" style={CLOSE_BTN_STYLES} onClick={closeModal}>
                <MdClose />
              </button>
            </div>
            <MobileItems onClose={closeModal} />
            
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
