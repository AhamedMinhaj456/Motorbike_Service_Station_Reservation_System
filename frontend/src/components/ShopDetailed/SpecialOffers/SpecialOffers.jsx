import React from 'react';
import './SpecialOffers.css';
import Container from 'react-bootstrap/Container';
import SpecialOfferItems from './SpecialOffersItems';
import SpecialOffersCard from './SpecialOffersCard';

function SpecialOffers() {
  return (
    <div className='recent-holidays my-4 my-sm-5'>
        <Container>
            <h2 className='text-uppercase fw-semibold mb-4 mb-sm-5'>Recent holidays</h2>
            <div className='row g-4'>
                {
                    SpecialOfferItems.map((item) => <SpecialOffersCard key={item.id} itemImage={item.itemImage} itemTitle={item.itemTitle} itemDescription={item.itemDescription} itemNights={item.itemNights} itemPrice={item.itemPrice} />)
                }
            </div>
        </Container>
    </div>
  )
}

export default SpecialOffers;