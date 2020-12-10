import React from 'react'
import SocialLinks from '../constants/socialLinks'
const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <SocialLinks styleClass="footer-icons" />
      </div>
      <p>&copy;{new Date().getFullYear()} KCBlog. All rights reserved</p>
    </footer>
  )
}
export default Footer
