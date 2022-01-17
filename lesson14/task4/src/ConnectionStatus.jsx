import React, { useState, useEffect } from 'react';

const ConnectionStatus = () => {
  const [status, setStatus] = useState('online');

  const changeStatus = (e) => {
    setStatus(e.target);
  };
  useEffect(() => {
    window.addEventListener('offline', changeStatus);
    window.addEventListener('online', changeStatus);
    return () => {
      window.removeEventListener('offline', changeStatus);
      window.removeEventListener('online', changeStatus);
    };
  }, []);

  let className = '';
  if (status === 'offline') {
    className += 'status_offline';
  }

  return <div className={`status ${className}`}>{status}</div>;
};
export default ConnectionStatus;
