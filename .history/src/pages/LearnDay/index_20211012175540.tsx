import React, { FC } from "react";

import Navbar from "../../components/NavBar";

import "./styles.scss";

const LearnDay: FC = (): JSX.Element => {
    return(
        <main className="LD_page"> 
        <Navbar />

        {/*Title component*/}
        <section className= "LD_title">
            <div>Title</div>
        </section>
        {/*FAQ component*/}
        {/* Schedule component*/}
        {/* render Footer component */}
        </main>
    );
};

export default LearnDay;