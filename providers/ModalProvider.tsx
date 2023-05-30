"use client";

import Modal from "@/components/Modal";

import React, { useEffect, useState } from "react";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <Modal title="Test" description="Description" isOpen onChange={() => {}}>
        Text
      </Modal>
    </>
  );
};

export default ModalProvider;
