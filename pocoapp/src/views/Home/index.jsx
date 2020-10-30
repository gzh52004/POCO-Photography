import React from 'react';
import App1 from '../../componets/Home/Header';
import Banner from '../../componets/Home/Banner';
import SmallNav from '../../componets/Home/SmallNav';
import Recommend from '../../componets/Home/Recommend';
import Photographer from '../../componets/Home/Photographer';
import ExcellentWorks from '../../componets/Home/ExcellentWorks'

class Home extends React.Component {
  
  render() {
    return (
        <div>
            <div>
                <div className="header">
                    <App1/>
                </div>
                <div className="content">
                    <div className="content-con">
                        <Banner />
                        <SmallNav />
                        <Recommend />
                        <Photographer />
                        <ExcellentWorks />
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Home;