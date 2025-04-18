import React from 'react'
import Form from './Form'
import Modal from './Modal'
import { useState } from 'react';
import { useModal } from '../hooks/modaContext';
export default function Bordered_button({link,children,classNames}) {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <>
    <a href={"#"}   onClick={() => openModal()}  className={`border-y-2 border-primary-color px-8 z-[1] py-3 call_now_btn tracking-[2px] inline-flex text-[#C7C7C7] ${classNames}`}>
      {children}
    </a>
        <Modal isOpen={isOpen} onClose={() => closeModal()}>
             <Form/>
          </Modal>
        </>

  )
}
