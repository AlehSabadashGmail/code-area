import React, { ReactNode } from 'react'
import './Modal.scss'

interface ModalProps {
  title: string
  isOpen: boolean
  onClose: () => void
  children: ReactNode
}

export const Modal = ({ title, isOpen, children }: ModalProps) => {
  return isOpen ? (
    <div className="modal">
      <div className="modal_wrapper" />
      <div className="modal_box">
        <div className="modal_title">{title}</div>
        <div>{children}</div>
      </div>
    </div>
  ) : null
}
