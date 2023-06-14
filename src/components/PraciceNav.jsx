import React from 'react'
import  { useState } from 'react';
import {
  MDBContainer,
  MDBCollapse,
  MDBNavbar,
  MDBNavbarToggler,
  MDBIcon,
  MDBBtn,
} from 'mdb-react-ui-kit';
const PraciceNav = () => {
     const [showNavExternal3, setShowNavExternal3] = useState(false);
  return (
    <>
    <MDBNavbar>
      <MDBContainer fluid>
        <MDBNavbarToggler
          className='ms-auto'
          type='button'
          data-target='#navbarToggleExternalContent'
          aria-controls='navbarToggleExternalContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowNavExternal3(!showNavExternal3)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>
      </MDBContainer>
    </MDBNavbar>

    <MDBCollapse show={showNavExternal3}>
  
      <div className='bg-light shadow-3 p-4'
      style={{display:'grid',gridTemplateColumns:'repeat(1,1 fr)'}}
      >
        <MDBBtn block className='border-bottom m-0' color='link'>
          Link 1
        </MDBBtn>
        <MDBBtn block className='border-bottom m-0' color='link'>
          Link 2
        </MDBBtn>
        <MDBBtn block className='border-bottom m-0' color='link'>
          Link 2
        </MDBBtn>
      </div>
    </MDBCollapse>
  </>
  )
}

export default PraciceNav


