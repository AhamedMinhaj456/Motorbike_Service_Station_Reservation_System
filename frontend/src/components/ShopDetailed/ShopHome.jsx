import React from 'react';
import './ShopHome.css';
import HeroSection from './HeroSection/HeroSection';
import SearchForm from './SearchForm/SearchForm';
import LastHolidaysSection from './LastHolidaysSection/LastHolidays';
import RecommendedSection from './RecommendedSection/RecommendedSection';
import HolidayPlanSection from './ContactUsSection/ContactUsSection';
import FavouritesSection from './FavouriteSection/FavouriteSection';
import SpecialOffers from './SpecialOffers/SpecialOffers';
import NeedInspirationSection from './NeedSupport/NeedSupport';

function ShopHome() {
    return (
        <div className='home-page'>
            <HeroSection />
            <SearchForm />
            <LastHolidaysSection />
            <div className="my-4 my-sm-5">
                <RecommendedSection itemRecommendedTitle='Recommended for you' />
            </div>
            <HolidayPlanSection itemHolidayPlanTitle='Plan your summer holiday' />
            <FavouritesSection />
            <SpecialOffers />
            <NeedInspirationSection />
        </div>
    )
}

export default ShopHome;