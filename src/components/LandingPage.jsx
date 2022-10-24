import React from 'react'
import {Link} from 'react-router-dom'
function LandingPage() {
  return (
    <div className='landingPage'>
          <div class="centered">
            <img src="https://1000marcas.net/wp-content/uploads/2020/03/logo-Avon.png" alt="Avon Logo" />
            <Link class="button" to='/promo'><span>Participar </span></Link>
          </div>
    </div>
  )
}

export default LandingPage