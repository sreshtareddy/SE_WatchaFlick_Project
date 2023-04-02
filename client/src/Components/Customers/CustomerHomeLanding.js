import React from 'react'
import CustomerMainSection from './CustomerMainSection';
import NavCustomerMainBar from './NavCustomerMainBar';
function CustomerHomeLanding(props) {
  return (
    <div>
        <NavCustomerMainBar />
        <CustomerMainSection/>
    </div>
  )
}

export default CustomerHomeLanding