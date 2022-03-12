import React from 'react'
import './Footer.css'

export default function Footer() {
    return (
        <div>
        <div className='footer'>
        <div className='space'></div>
        <section className='media'>
            <h3>You can always contact with us by Social Media</h3>
            <div className='social-media'>
                <a href="https://twitter.com" className='real'>
                    <i className="fab fa-twitter fa-2x" />
                </a>
    
                <a href="https://www.facebook.com" className='real'>
                    <i className="fab fa-facebook fa-2x" />
                </a>
    
                <a href="https://www.instagram.com/" className='real'>
                    <i className="fab fa-instagram fa-2x" />
                </a>
    
                <a href="https://www.tiktok.com" className='real'>
                    <i className="fab fa-tiktok fa-2x" />
                </a>
    
                <a href="https://www.youtube.com" className='real'>
                    <i className="fab fa-youtube fa-2x" />
                </a>
            </div>
        </section>
  
          <div className='text-container'>
            <div className='text'>
              <h4>Ways to Contact</h4>
  
              <a href='/#'>Facebook</a>
              <a href='/#'>Instagram</a>
              <a href='/#'>Twitter</a>
              <a href='/#'>WhatsApp</a>
            </div>
  
            <div className='text'>
              <h4>Turistic Places</h4>
  
              <a href='/#'>Berlin</a>
              <a href='/#'>Paris</a>
              <a href='/#'>New York</a>
              <a href='/#'>Amsterdam</a>
              <a href='/#'>Montevideo</a>
              <a href='/#'>Rio de Janeiro</a>
              <a href='/#'>Miami</a>
              <a href='/#'>Barcelona</a>
            </div>
  
            <div className='text'>
              <h4>Hotels</h4>
  
              <a href='/#'>Hotel Hilton</a>
              <a href='/#'>Four Seasons</a>
              <a href='/#'>Sheraton</a>
              <a href='/#'>Hotel NH</a>
              <a href='/#'>Claridge Hotel</a>
              <a href='/#'>Hotel InterContinental</a>
              <a href='/#'>Hotel Faena</a>
            </div>
          </div>
          
          <div className='copy'>
            <h3>Copyright 2022 Vacation App a product of Ideas and Images Group. All rights reserved.</h3>
          </div>
        </div>
      </div>
    )
}