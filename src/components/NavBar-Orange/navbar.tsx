import React from 'react';
import { Link } from 'react-router-dom';
// import HMLOGO from '../../assets/images/hackmerced-logo.png';
import MLHBANNER from '../../assets/images/mlh-badge.svg';

import './navbar.scss';

const styles = {
    width: '100px',
    height: '175px',
};

// const styles1 = {
//     width: '100px',
//     height: '90px',
// };

const Navbar: React.FC = () => {
    return (
        <nav className="NAVBAR sticky flex">
            <div className="MLH-banner">
                <img className="MLH" src={MLHBANNER} style={styles} alt="MLH BANNER" />
            </div>
            <div className="NAVTEXT block flex-auto ">
                <ul className="flex float-right">
                    <li className="mr-3 active">
                        <Link
                            className="active inline-block rounded font-bold hover:text-black hover:bg-white text-gray-100 py-2 px-3"
                            to="/"
                        >
                            HOME
                        </Link>
                    </li>
                    {/* <li className="mr-3">
                        <a
                            className="inline-block rounded font-bold hover:text-black hover:bg-white  py-2 px-3"
                            href="http://localhost:3000/"
                        >
                            EVENTS
                        </a>
                    </li> */}
                    <li className="mr-3">
                        <Link
                            className="inline-block rounded font-bold hover:text-black hover:bg-white py-2 px-3 text-gray-100 "
                            to="past-hackathons"
                        >
                            PAST HACKATHONS
                        </Link>
                    </li>
                    <li className="mr-3">
                        <Link
                            className="inline-block rounded font-bold hover:text-black hover:bg-white py-2 px-3 text-gray-100 "
                            to="sponsors"
                        >
                            SPONSOR US
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="inline-block rounded font-bold hover:text-black hover:bg-white py-2 px-3 text-gray-100 "
                            to="contact-us"
                        >
                            CONTACT US
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;