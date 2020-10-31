import React from 'react';
import Header from '../../componets/Home/Header';
import Banner from '../../componets/Home/Banner';
import SmallNav from '../../componets/Home/SmallNav'
import Recommend from '../../componets/Home/Recommend';
import Photographer from '../../componets/Home/Photographer';
import ExcellentWorks from '../../componets/Home/ExcellentWorks';

function Home(){
    return(
        <div>
            <div>
           <div className="header">
                <Header />
           </div>
            <div className="content">
                <div className="content-con">
                    内容
                    {/* <Banner /> */}
                    {/* <SmallNav /> */}
                    {/* <Recommend /> */}
                    {/* <Photographer /> */}
                    {/* <ExcellentWorks /> */}
                </div>
            </div>
            </div>
        </div>
    )
}

export default Home