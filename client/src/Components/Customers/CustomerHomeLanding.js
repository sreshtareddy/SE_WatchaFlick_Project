import React from 'react'
import CustomerMainSection from './CustomerMainSection';
import NavCustomerMainBar from './NavCustomerMainBar';
function CustomerHomeLanding({ userName }) {
 
  return (
    <div>
        <NavCustomerMainBar userName={userName} />
        <CustomerMainSection/>
    </div>
  )
}

export default CustomerHomeLanding