import React from 'react';
import st from './Star.module.css'
export default function Star({ color = 'black' }) {
  return (
  <>
    <div
      className="long-line"
      style={{ '--line-color': color, color }}
    >
      <i className="fa-solid fa-star"></i>
    </div>
  </>
  );
}
