import React from 'react';
import Header from '../../componets/Home/Header';
import Banner from '../../componets/Home/Banner';
import SmallNav from '../../componets/Home/SmallNav';
import Recommend from '../../componets/Home/Recommend';

class Home extends React.Component {
  
  render() {
    return (
        <div>
            <div>
                <div className="header">
                    <Header></Header>
                </div>
                <div className="content">
                    <div className="content-con">
                        <Banner />
                        <SmallNav />
                        <Recommend />
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Home;