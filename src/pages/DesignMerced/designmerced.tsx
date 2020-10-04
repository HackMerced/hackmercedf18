import React, { FC } from 'react';

import Navbar from '../../components/NavBar/navbar';
import Footer from '../../components/Footer/footer';
import Schedule from '../../components/Schedule Design/schedule-design';
import AboutUsDesign from '../../components/About Us Design/aboutus-design'

const DesignMerced: FC = (): JSX.Element => {
    return (
        <main className="DESIGNMERCED">
            <Navbar backgroundColor="#EEEBF5" textColor="#B486CE" breakLineColor="#C4BDDC" showBanner={false} />
            <Schedule />
            <AboutUsDesign />
            <Footer backgroundColor="#EEEBF5" textColor="#B486CE" fontColor="#B486CE" />
        </main>
    );
};

export default DesignMerced;