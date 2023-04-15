import React from 'react'
import CustomerMainSection from './CustomerMainSection';
import NavCustomerMainBar from './NavCustomerMainBar';
import SupportEngine from '../SupportEngine'
function CustomerHomeLanding({ userName }) {
 
  return (
    <div>
        <NavCustomerMainBar userName={userName} />
        <CustomerMainSection/>
        <SupportEngine/>
    </div>
  )
}

export default CustomerHomeLanding