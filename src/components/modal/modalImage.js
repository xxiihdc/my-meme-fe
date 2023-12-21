import React from 'react';
import { Dialog, DialogContent, DialogTitle, IconButton } from '@mui/material';
import "./modal.css"

const Modal = ({ isOpen, onClose, children, title }) => {
  return (
    <Dialog open={isOpen} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>
        {title}
        <IconButton edge="end" color="inherit" onClick={onClose} aria-label="close">
          {/* Use any icon you prefer for the close button */}
          X 
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <div className="modal-image">
          {children}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
