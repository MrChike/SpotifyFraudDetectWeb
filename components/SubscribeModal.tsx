"use client";

import React from "react";

import Modal from "./Modal";

const SubscribeModal = () => {
  let content = <div className="text-center">No Products Available.</div>;

  return (
    <Modal
      title="Only for Premium User"
      description="Listen to Music with Spotify Premium."
      isOpen
      onChange={() => {}}
    >
      {content}
    </Modal>
  );
};

export default SubscribeModal;
