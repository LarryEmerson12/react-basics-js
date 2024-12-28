"use client";

import { useState } from "react";

export default function Modal({ trigger, children }) {
  const [open, setOpen] = useState(false);

  function handleClose() {
    setOpen(false);
  }

  function handleOpen() {
    setOpen(true);
  }

  return (
    <>
      <h2>Modal</h2>
      <button onClick={handleOpen}>{trigger}</button>
      {open && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div id="modalContent">
            {children}
            <footer>
            <button onClick={handleClose}>Close</button>
            </footer>
          </div>
        </div>
      )}
    </>
  );
}
