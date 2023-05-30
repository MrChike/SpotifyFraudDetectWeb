"use client";

import React from "react";
import Modal from "./Modal";

const AuthModal = () => {
  return (
    <Modal
      title="Welcome Back"
      description="Log In to Your Account"
      isOpen
      onChange={() => {}}
    >
      AuthModalChildren
    </Modal>
  );
};

export default AuthModal;
