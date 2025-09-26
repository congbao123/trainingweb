import { useState } from 'react';
import '../styles/ModalToggler.css';

function ModalToggler() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setOpen(true)}>Mở Modal</button>
      {open && (
        <>
          <div className="overlay" />
          <div className="modal">
            <p>Test State modal</p>
            <button onClick={() => setOpen(false)}>Đóng</button>
          </div>
        </>
      )}
    </div>
  );
}

export default ModalToggler;