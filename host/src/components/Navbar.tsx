// host-app/src/components/Navbar.tsx
import React from 'react';

export default function Navbar() {
  return (
    <nav style={{ padding: 12, borderBottom: '1px solid #ddd' }}>
      <span style={{ marginRight: 12 }}>BookMyShow POC</span>
      <a style={{ marginRight: 8 }} href="#">Home</a>
      <a style={{ marginRight: 8 }} href="#">Movies</a>
      <a href="#">Booking</a>
    </nav>
  );
}
