import React from 'react'
// import Accordion from "./components/HomePage-Components/Accordion/Accordion.jsx";
import Banner from "../components/HomePage-Components/Banner/banner.jsx";
import Benefits from "../components/HomePage-Components/Benefits/benefits.jsx";
import SupportTabs from "../components/HomePage-Components/Tabs/Tabs.jsx";
import {InfoGrid} from "../components/HomePage-Components/InfoGrid/infoGrid.jsx";
import CustomerReview from '../components/HomePage-Components/CustomerReview/customerReview.jsx';
import Cta from '../components/HomePage-Components/cta/cta.jsx';
import Support from '../components/HomePage-Components/Support/support.jsx';
import Articles from '../components/HomePage-Components/articles/articles.jsx';


const Home = () => {
    return (
        <div className="App">
            <Banner/>
            <Benefits/>
            <InfoGrid/>
            <SupportTabs/>
            <CustomerReview/>
            <Articles/>
            <Cta/>
            <Support/>
        </div>
      );
    }

export default Home