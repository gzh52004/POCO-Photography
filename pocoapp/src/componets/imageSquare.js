import { Tabs, WhiteSpace } from 'antd-mobile';
import img from '../img/17897476920171115222513092_178974769.jpg'
import imgs from '../img/mv.jpg'
import ii from '../img/login.jpg'
import im from '../img/highlightfeature_1960x1102_PC_01.jpg'
import ls from '../img/G-CLASS-BANNER-PC.jpg'
import gg from '../img/clasbkvpc.jpg'
import '../assets/css/imageSquare.css'

const tabs = [
    { title: '热门' },
    { title: '专辑' },
];

const TabExample = () => (
    <div>
        <WhiteSpace />
        <Tabs tabs={tabs} initialPage={0} animated={false} useOnPan={false}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', backgroundColor: '#fff' }}>
                <div>
                     <div className="ccc">
                            <a href="###">
                                <i>
                                    <img src={img} alt="" />
                                </i>
                            </a>
                            <a href="###">
                                <i>
                                    <img src={ii} alt="" />
                                </i>
                            </a>
                            <a href="###">
                                <i>
                                    <img src={gg} alt="" />
                                </i>
                            </a>
                            <a href="###">
                                <i>
                                    <img src={imgs} alt="" />
                                </i>
                            </a>
                            <a href="###">
                                <i>
                                    <img src={imgs} alt="" />
                                </i>
                            </a>
                            <a href="###">
                                <i>
                                    <img src={gg} alt="" />
                                </i>
                            </a>
                            <a href="###">
                                <i>
                                    <img src={ii} alt="" />
                                </i>
                            </a>
                            <a href="###">
                                <i>
                                    <img src={img} alt="" />
                                </i>
                            </a>
                            <a href="###">
                                <i>
                                    <img src={im} alt="" />
                                </i>
                            </a>
                            <a href="###">
                                <i>
                                    <img src={ls} alt="" />
                                </i>
                            </a>
                            <a href="###">
                                <i>
                                    <img src={imgs} alt="" />
                                </i>
                            </a>
                            <a href="###">
                                <i>
                                    <img src={gg} alt="" />
                                </i>
                            </a>
                            <a href="###">
                                <i>
                                    <img src={ls} alt="" />
                                </i>
                            </a>
                            <a href="###">
                                <i>
                                    <img src={imgs} alt="" />
                                </i>
                            </a>
                            <a href="###">
                                <i>
                                    <img src={im} alt="" />
                                </i>
                            </a>
                            <a href="###">
                                <i>
                                    <img src={imgs} alt="" />
                                </i>
                            </a>
                            <a href="###">
                                <i>
                                    <img src={ii} alt="" />
                                </i>
                            </a>
                            <a href="###">
                                <i>
                                    <img src={ls} alt="" />
                                </i>
                            </a>
                            <a href="###">
                                <i>
                                    <img src={img} alt="" />
                                </i>
                            </a>
                            <a href="###">
                                <i>
                                    <img src={imgs} alt="" />
                                </i>
                            </a>
                            <a href="###">
                                <i>
                                    <img src={im} alt="" />
                                </i>
                            </a>
                            <a href="###">
                                <i>
                                    <img src={imgs} alt="" />
                                </i>
                            </a>
                            <a href="###">
                                <i>
                                    <img src={ls} alt="" />
                                </i>
                            </a>
                            <a href="###">
                                <i>
                                    <img src={gg} alt="" />
                                </i>
                            </a>
                        </div>


                </div>

            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', backgroundColor: '#fff' }}>
            <div className="eee">
                            <ul>
                                <a href="###">
                                    <li>
                                        <img src={ii} alt="" />
                                    <dl>
                                        <dt>壁纸摄影图片精选</dt>
                                        <dd>POCO 摄影社区</dd>
                                    </dl>
                                    </li>
                                </a>
                                <a href="###">
                                    <li>
                                        <img src={im} alt="" />
                                    <dl>
                                        <dt>汽车摄影图片精选</dt>
                                        <dd>POCO 摄影社区</dd>
                                    </dl>
                                    </li>
                                </a>
                                <a href="###">
                                    <li>
                                        <img src={ls} alt="" />
                                    <dl>
                                        <dt>外景拍摄图片推荐</dt>
                                        <dd>POCO 摄影社区</dd>
                                    </dl>
                                    </li>
                                </a>
                                <a href="###">
                                    <li>
                                        <img src={gg} alt="" />
                                    <dl>
                                        <dt>海边摄影图片精选</dt>
                                        <dd>POCO 摄影社区</dd>
                                    </dl>
                                    </li>
                                </a>
                                <a href="###">
                                    <li>
                                        <img src={imgs} alt="" />
                                    <dl>
                                        <dt>一周图片精选专辑</dt>
                                        <dd>POCO 摄影社区</dd>
                                    </dl>
                                    </li>
                                </a>
                                <a href="###">
                                    <li>
                                        <img src={img} alt="" />
                                    <dl>
                                        <dt>手机摄影图片精选</dt>
                                        <dd>POCO 摄影社区</dd>
                                    </dl>
                                    </li>
                                </a>
                            </ul>
            
                        </div>
      </div>
        </Tabs>
        <WhiteSpace />
    </div>
);

export default TabExample;