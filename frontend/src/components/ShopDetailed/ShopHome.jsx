import React from 'react';
import './ShopHome.css';
import HeroSection from './HeroSection/HeroSection';
import SearchForm from './SearchForm/SearchForm';
import LastHolidaysSection from './LastHolidaysSection/LastHolidays';
import ShopMission from './ShopMission/ShopMission';
import HolidayPlanSection from './ContactUsSection/ContactUsSection';
import FavouritesSection from './FavouriteSection/FavouriteSection';
import SpecialOffers from './SpecialOffers/SpecialOffers';
import NeedInspirationSection from './NeedSupport/NeedSupport';
import ShopDetails from './ShopDetails/ShopDetails';

function ShopHome() {
    return (
        <div className='home-page'>
            <ShopDetails/>
            {/* <HeroSection /> */}
            {/* <SearchForm /> */}
            <LastHolidaysSection />
            <div className="my-4 my-sm-5">
                <ShopMission itemRecommendedTitle='Recommended for you' />
            </div>
            <HolidayPlanSection itemHolidayPlanTitle='Plan your summer holiday' />
            <FavouritesSection />
            <SpecialOffers />
            <NeedInspirationSection />
            
        </div>
    )
}

export default ShopHome;