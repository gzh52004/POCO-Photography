import React from 'react';
import Header from '../../componets/Home/Header';
import Banner from '../../componets/Home/Banner';

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
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Home;