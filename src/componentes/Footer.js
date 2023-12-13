import React from 'react';

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px',
    position: 'fixed',
    bottom: '0',
    width: '100%',
  };

  return (
    <div style={footerStyle}>
      <p>Derechos Reservados © 2023 Randy-Electronicos</p>
    </div>
  );
};

export default Footer;
