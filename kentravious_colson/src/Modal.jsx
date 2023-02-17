import React, {Fragment} from 'react'

const Modal = ({isOpen, onClose, children}) => {
  return (
    <>
    {
        isOpen ? (
            {children}
        ) : null
    }
    </>
  )
}

export default Modal