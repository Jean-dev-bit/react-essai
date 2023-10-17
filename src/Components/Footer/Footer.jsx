import React from 'react'
import './Footer.css'
const Footer = () => {
    const today = new Date();
  return (
    <div className="footer">
        <p>Copyright  &copy; {today.getFullYear()} tout droits réservés</p>
    </div>
  )
}

export default Footer