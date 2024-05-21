import React from 'react'
import ShopOwnerFlow from "./shopOwnerFlow";
import ShopOwnerFlowHorizontalbar from "./shopOwnerFlowHorizontalbar";
import DetailsSection from "./detailsSection";
import DetailsSection2 from "./detailsSection2";
import Navbar from './navbar';

const ShopHome = ({val}) => {
  return (
    <div>
        
        <ShopOwnerFlow/>
        <ShopOwnerFlowHorizontalbar/>
        <DetailsSection/>
        <DetailsSection2/>
    </div>
  )
}

export default ShopHome
