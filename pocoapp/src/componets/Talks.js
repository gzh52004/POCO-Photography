import { Tabs, WhiteSpace } from 'antd-mobile';
import img from '../img/17897476920171115222513092_178974769.jpg'
import imgs from '../img/mv.jpg'
import ii from '../img/login.jpg'
import im from '../img/highlightfeature_1960x1102_PC_01.jpg'
import ls from '../img/G-CLASS-BANNER-PC.jpg'
import gg from '../img/clasbkvpc.jpg'
import '../assets/css/Talks.css'

const tabs = [
    { title: '全部' },
    { title: '印象人物' },
    { title: '摄影红人' },
    { title: '潜力达人' },
    { title: '手机摄影人' },
    // { title: '摄影器材' },
    // { title: '摄影咨询' },
    // { title: '专栏专题' },

];

const TabExamplf = () => (
    <div>
        <Tabs tabs={tabs} initialPage={0} animated={false} useOnPan={false}>
            <div style={{ backgroundColor: '#fff' }}>
                <div className="aaa">
                    <a src="" href="" className="aa">
                        <p>
                            <img src={img} alt="" />
                        </p>
                        <h3>1每周摄影师推荐Vol.23——关顺志/Ken Kwan</h3>
                        <span>2017-12-19</span>
                    </a>
                    <a src="" href="" className="aa">
                        <p>
                            <img src={imgs} alt="" />
                        </p>
                        <h3>每周摄影师推荐Vol.22——宋大都督</h3>
                        <span>2017-12-08</span>
                    </a>
                    <a src="" href="" className="aa">
                        <p>
                            <img src={im} alt="" />
                        </p>
                        <h3>每周摄影师推荐Vol.21——Joe Chang</h3>
                        <span>2017-12-01</span>
                    </a>
                    <a src="" href="" className="aa">
                        <p>
                            <img src={ii} alt="" />
                        </p>
                        <h3>每周摄影师推荐 Vol.20——Yen-Yi Lee</h3>
                        <span>2017-11-24</span>
                    </a>
                    <a src="" href="" className="aa">
                        <p>
                            <img src={ls} alt="" />
                        </p>
                        <h3>诗意与梦幻</h3>
                        <span>2018-12-19</span>
                    </a>
                    <a src="" href="" className="aa">
                        <p>
                            <img src={gg} alt="" />
                        </p>
                        <h3>女摄影师用作品诠释摄影是用光的艺术</h3>
                        <span>2017-12-19</span>
                    </a>
                    <a src="" href="" className="aa">
                        <p>
                            <img src={im} alt="" />
                        </p>
                        <h3>每周摄影师推荐 Vol.26 </h3>
                        <span>2017-12-19</span>
                    </a>
                    <a src="" href="" className="aa">
                        <p>
                            <img src={imgs} alt="" />
                        </p>
                        <h3>当自然与艺术相撞　唯美创意水下人像</h3>
                        <span>2017-12-19</span>
                    </a>
                    <a src="" href="" className="aa">
                        <p>
                            <img src={gg} alt="" />
                        </p>
                        <h3>Seila Malo：人像另类创意 婀娜美人鱼</h3>
                        <span>2017-12-19</span>
                    </a>
                    <a src="" href="" className="aa">
                        <p>
                            <img src={img} alt="" />
                        </p>
                        <h3>每周摄影师推荐Vol.23——关顺志/Ken Kwan</h3>
                        <span>2017-12-19</span>
                    </a>
                    <a src="" href="" className="aa">
                        <p>
                            <img src={imgs} alt="" />
                        </p>
                        <h3>每周摄影师推荐Vol.22——宋大都督</h3>
                        <span>2017-12-08</span>
                    </a>
                    <a src="" href="" className="aa">
                        <p>
                            <img src={im} alt="" />
                        </p>
                        <h3>每周摄影师推荐Vol.21——Joe Chang</h3>
                        <span>2017-12-01</span>
                    </a>
                    <a src="" href="" className="aa">
                        <p>
                            <img src={ii} alt="" />
                        </p>
                        <h3>每周摄影师推荐 Vol.20——Yen-Yi Lee</h3>
                        <span>2017-11-24</span>
                    </a>
                    <a src="" href="" className="aa">
                        <p>
                            <img src={ls} alt="" />
                        </p>
                        <h3>诗意与梦幻</h3>
                        <span>2018-12-19</span>
                    </a>
                    <a src="" href="" className="aa">
                        <p>
                            <img src={gg} alt="" />
                        </p>
                        <h3>女摄影师用作品诠释摄影是用光的艺术</h3>
                        <span>2017-12-19</span>
                    </a>
                    <a src="" href="" className="aa">
                        <p>
                            <img src={im} alt="" />
                        </p>
                        <h3>每周摄影师推荐 Vol.26 </h3>
                        <span>2017-12-19</span>
                    </a>
                    <a src="" href="" className="aa">
                        <p>
                            <img src={imgs} alt="" />
                        </p>
                        <h3>当自然与艺术相撞　唯美创意水下人像</h3>
                        <span>2017-12-19</span>
                    </a>
                    <a src="" href="" className="aa">
                        <p>
                            <img src={gg} alt="" />
                        </p>
                        <h3>Seila Malo：人像另类创意 婀娜美人鱼</h3>
                        <span>2017-12-19</span>
                    </a>
                </div>
            </div>
            <div style={{ backgroundColor: '#fff' }}>
                <div className="bbb">
                    <a src="" href="">
                        <p>
                            <img alt="" src={im} />
                        </p>
                        <h3>2每周摄影师推荐Vol.23——关顺志/Ken Kwan</h3>
                        <span>2017-12-19</span>
                    </a>
                    <a src="" href="">
                        <p>
                            <img alt="" src={gg} />
                        </p>
                        <h3>每周摄影师推荐Vol.22——宋大都督</h3>
                        <span>2017-12-08</span>
                    </a>
                    <a src="" href="">
                        <p>
                            <img alt="" src={img} />
                        </p>
                        <h3>每周摄影师推荐Vol.21——Joe Chang</h3>
                        <span>2017-12-01</span>
                    </a>
                    <a src="" href="">
                        <p>
                            <img alt="" src={ls} />
                        </p>
                        <h3>每周摄影师推荐 Vol.20——Yen-Yi Lee</h3>
                        <span>2017-11-24</span>
                    </a>
                    <a src="" href="">
                        <p>
                            <img alt="" src={ls} />
                        </p>
                        <h3>诗意与梦幻</h3>
                        <span>2018-12-19</span>
                    </a>
                    <a src="" href="">
                        <p>
                            <img alt="" src={gg} />
                        </p>
                        <h3>女摄影师用作品诠释摄影是用光的艺术</h3>
                        <span>2017-12-19</span>
                    </a>
                    <a src="" href="">
                        <p>
                            <img alt="" src={im} />
                        </p>
                        <h3>每周摄影师推荐 Vol.26 </h3>
                        <span>2017-12-19</span>
                    </a>
                    <a src="" href="">
                        <p>
                            <img alt="" src={imgs} />
                        </p>
                        <h3>当自然与艺术相撞　唯美创意水下人像</h3>
                        <span>2017-12-19</span>
                    </a>
                    <a src="" href="">
                        <p>
                            <img alt="" src={gg} />
                        </p>
                        <h3>Seila Malo：人像另类创意 婀娜美人鱼</h3>
                        <span>2017-12-19</span>
                    </a>
                    <a src="" href="">
                        <p>
                            <img alt="" src={img} />
                        </p>
                        <h3>每周摄影师推荐Vol.23——关顺志/Ken Kwan</h3>
                        <span>2017-12-19</span>
                    </a>
                    <a src="" href="">
                        <p>
                            <img alt="" src={imgs} />
                        </p>
                        <h3>每周摄影师推荐Vol.22——宋大都督</h3>
                        <span>2017-12-08</span>
                    </a>
                    <a src="" href="">
                        <p>
                            <img alt="" src={im} />
                        </p>
                        <h3>每周摄影师推荐Vol.21——Joe Chang</h3>
                        <span>2017-12-01</span>
                    </a>
                    <a src="" href="">
                        <p>
                            <img alt="" src={ii} />
                        </p>
                        <h3>每周摄影师推荐 Vol.20——Yen-Yi Lee</h3>
                        <span>2017-11-24</span>
                    </a>
                    <a src="" href="">
                        <p>
                            <img alt="" src={ls} />
                        </p>
                        <h3>诗意与梦幻</h3>
                        <span>2018-12-19</span>
                    </a>
                    <a src="" href="">
                        <p>
                            <img alt="" src={gg} />
                        </p>
                        <h3>女摄影师用作品诠释摄影是用光的艺术</h3>
                        <span>2017-12-19</span>
                    </a>
                    <a src="" href="">
                        <p>
                            <img alt="" src={im} />
                        </p>
                        <h3>每周摄影师推荐 Vol.26 </h3>
                        <span>2017-12-19</span>
                    </a>
                    <a src="" href="">
                        <p>
                            <img alt="" src={imgs} />
                        </p>
                        <h3>当自然与艺术相撞　唯美创意水下人像</h3>
                        <span>2017-12-19</span>
                    </a>
                    <a src="" href="">
                        <p>
                            <img alt="" src={gg} />
                        </p>
                        <h3>Seila Malo：人像另类创意 婀娜美人鱼</h3>
                        <span>2017-12-19</span>
                    </a>
                </div>
            </div>
            <div style={{ backgroundColor: '#fff' }}>
                <div className="ccc">
                    <a src="###" className="aa" href="">
                        <p>
                            <img src={img} alt=""/>
                        </p>
                        <h3>3每周摄影师推荐Vol.23——关顺志/Ken Kwan</h3>
                        <span>2017-12-19</span>
                    </a>
                    <a src="###" className="aa" href="">
                        <p>
                            <img src={imgs} alt=""/>
                        </p>
                        <h3>每周摄影师推荐Vol.22——宋大都督</h3>
                        <span>2017-12-08</span>
                    </a>
                    <a src="###" className="aa" href="">
                        <p>
                            <img src={im} alt=""/>
                        </p>
                        <h3>每周摄影师推荐Vol.21——Joe Chang</h3>
                        <span>2017-12-01</span>
                    </a>
                    <a src="###" className="aa" href="">
                        <p>
                            <img src={ii} alt=""/>
                        </p>
                        <h3>每周摄影师推荐 Vol.20——Yen-Yi Lee</h3>
                        <span>2017-11-24</span>
                    </a>
                    <a src="###" className="aa" href="">
                        <p>
                            <img src={ls} alt=""/>
                        </p>
                        <h3>诗意与梦幻</h3>
                        <span>2018-12-19</span>
                    </a>
                    <a src="###" className="aa" href="">
                        <p>
                            <img src={gg} alt=""/>
                        </p>
                        <h3>女摄影师用作品诠释摄影是用光的艺术</h3>
                        <span>2017-12-19</span>
                    </a>
                    <a src="###" className="aa" href="">
                        <p>
                            <img src={im} alt=""/>
                        </p>
                        <h3>每周摄影师推荐 Vol.26 </h3>
                        <span>2017-12-19</span>
                    </a>
                    <a src="###" className="aa" href="">
                        <p>
                            <img src={imgs} alt=""/>
                        </p>
                        <h3>当自然与艺术相撞　唯美创意水下人像</h3>
                        <span>2017-12-19</span>
                    </a>
                    <a src="###" className="aa" href="">
                        <p>
                            <img src={gg} alt=""/>
                        </p>
                        <h3>Seila Malo：人像另类创意 婀娜美人鱼</h3>
                        <span>2017-12-19</span>
                    </a>
                    <a src="###" className="aa" href="">
                        <p>
                            <img src={img} alt=""/>
                        </p>
                        <h3>每周摄影师推荐Vol.23——关顺志/Ken Kwan</h3>
                        <span>2017-12-19</span>
                    </a>
                    <a src="###" className="aa" href="">
                        <p>
                            <img src={imgs} alt=""/>
                        </p>
                        <h3>每周摄影师推荐Vol.22——宋大都督</h3>
                        <span>2017-12-08</span>
                    </a>
                    <a src="###" className="aa" href="">
                        <p>
                            <img src={im} alt=""/>
                        </p>
                        <h3>每周摄影师推荐Vol.21——Joe Chang</h3>
                        <span>2017-12-01</span>
                    </a>
                    <a src="###" className="aa" href="">
                        <p>
                            <img src={ii} alt=""/>
                        </p>
                        <h3>每周摄影师推荐 Vol.20——Yen-Yi Lee</h3>
                        <span>2017-11-24</span>
                    </a>
                    <a src="###" className="aa" href="">
                        <p>
                            <img src={ls} alt=""/>
                        </p>
                        <h3>诗意与梦幻</h3>
                        <span>2018-12-19</span>
                    </a>
                    <a src="###" className="aa" href="">
                        <p>
                            <img src={gg} alt=""/>
                        </p>
                        <h3>女摄影师用作品诠释摄影是用光的艺术</h3>
                        <span>2017-12-19</span>
                    </a>
                    <a src="###" className="aa" href="">
                        <p>
                            <img src={im} alt=""/>
                        </p>
                        <h3>每周摄影师推荐 Vol.26 </h3>
                        <span>2017-12-19</span>
                    </a>
                    <a src="###" className="aa" href="">
                        <p>
                            <img src={imgs} alt=""/>
                        </p>
                        <h3>当自然与艺术相撞　唯美创意水下人像</h3>
                        <span>2017-12-19</span>
                    </a>
                    <a src="###" className="aa" href="">
                        <p>
                            <img src={gg} alt=""/>
                        </p>
                        <h3>Seila Malo：人像另类创意 婀娜美人鱼</h3>
                        <span>2017-12-19</span>
                    </a>
                </div>
            </div>
            <div style={{ backgroundColor: '#fff' }}>
                <div className="ddd">
                    <a src="###" className="aa">
                        <p>
                            <img src={img} />
                        </p>
                        <h3>4每周摄影师推荐Vol.23——关顺志/Ken Kwan</h3>
                        <span>2017-12-19</span>
                    </a>
                    <a src="###" className="aa">
                        <p>
                            <img src={imgs} />
                        </p>
                        <h3>每周摄影师推荐Vol.22——宋大都督</h3>
                        <span>2017-12-08</span>
                    </a>
                    <a src="###" className="aa">
                        <p>
                            <img src={im} />
                        </p>
                        <h3>每周摄影师推荐Vol.21——Joe Chang</h3>
                        <span>2017-12-01</span>
                    </a>
                    <a src="###" className="aa">
                        <p>
                            <img src={ii} />
                        </p>
                        <h3>每周摄影师推荐 Vol.20——Yen-Yi Lee</h3>
                        <span>2017-11-24</span>
                    </a>
                    <a src="###" className="aa">
                        <p>
                            <img src={ls} />
                        </p>
                        <h3>诗意与梦幻</h3>
                        <span>2018-12-19</span>
                    </a>
                    <a src="###" className="aa">
                        <p>
                            <img src={gg} />
                        </p>
                        <h3>女摄影师用作品诠释摄影是用光的艺术</h3>
                        <span>2017-12-19</span>
                    </a>
                    <a src="###" className="aa">
                        <p>
                            <img src={im} />
                        </p>
                        <h3>每周摄影师推荐 Vol.26 </h3>
                        <span>2017-12-19</span>
                    </a>
                    <a src="###" className="aa">
                        <p>
                            <img src={imgs} />
                        </p>
                        <h3>当自然与艺术相撞　唯美创意水下人像</h3>
                        <span>2017-12-19</span>
                    </a>
                    <a src="###" className="aa">
                        <p>
                            <img src={gg} />
                        </p>
                        <h3>Seila Malo：人像另类创意 婀娜美人鱼</h3>
                        <span>2017-12-19</span>
                    </a>
                    <a src="###" className="aa">
                        <p>
                            <img src={img} />
                        </p>
                        <h3>每周摄影师推荐Vol.23——关顺志/Ken Kwan</h3>
                        <span>2017-12-19</span>
                    </a>
                    <a src="###" className="aa">
                        <p>
                            <img src={imgs} />
                        </p>
                        <h3>每周摄影师推荐Vol.22——宋大都督</h3>
                        <span>2017-12-08</span>
                    </a>
                    <a src="###" className="aa">
                        <p>
                            <img src={im} />
                        </p>
                        <h3>每周摄影师推荐Vol.21——Joe Chang</h3>
                        <span>2017-12-01</span>
                    </a>
                    <a src="###" className="aa">
                        <p>
                            <img src={ii} />
                        </p>
                        <h3>每周摄影师推荐 Vol.20——Yen-Yi Lee</h3>
                        <span>2017-11-24</span>
                    </a>
                    <a src="###" className="aa">
                        <p>
                            <img src={ls} />
                        </p>
                        <h3>诗意与梦幻</h3>
                        <span>2018-12-19</span>
                    </a>
                    <a src="###" className="aa">
                        <p>
                            <img src={gg} />
                        </p>
                        <h3>女摄影师用作品诠释摄影是用光的艺术</h3>
                        <span>2017-12-19</span>
                    </a>
                    <a src="###" className="aa">
                        <p>
                            <img src={im} />
                        </p>
                        <h3>每周摄影师推荐 Vol.26 </h3>
                        <span>2017-12-19</span>
                    </a>
                    <a src="###" className="aa">
                        <p>
                            <img src={imgs} />
                        </p>
                        <h3>当自然与艺术相撞　唯美创意水下人像</h3>
                        <span>2017-12-19</span>
                    </a>
                    <a src="###" className="aa">
                        <p>
                            <img src={gg} />
                        </p>
                        <h3>Seila Malo：人像另类创意 婀娜美人鱼</h3>
                        <span>2017-12-19</span>
                    </a>
                </div>
            </div>
            <div style={{ backgroundColor: '#fff' }}>
                <div className="eee">
                    <a src="###" className="aa">
                        <p>
                            <img src={img} />
                        </p>
                        <h3>5每周摄影师推荐Vol.23——关顺志/Ken Kwan</h3>
                        <span>2017-12-19</span>
                    </a>
                    <a src="###" className="aa">
                        <p>
                            <img src={imgs} />
                        </p>
                        <h3>每周摄影师推荐Vol.22——宋大都督</h3>
                        <span>2017-12-08</span>
                    </a>
                    <a src="###" className="aa">
                        <p>
                            <img src={im} />
                        </p>
                        <h3>每周摄影师推荐Vol.21——Joe Chang</h3>
                        <span>2017-12-01</span>
                    </a>
                    <a src="###" className="aa">
                        <p>
                            <img src={ii} />
                        </p>
                        <h3>每周摄影师推荐 Vol.20——Yen-Yi Lee</h3>
                        <span>2017-11-24</span>
                    </a>
                    <a src="###" className="aa">
                        <p>
                            <img src={ls} />
                        </p>
                        <h3>诗意与梦幻</h3>
                        <span>2018-12-19</span>
                    </a>
                    <a src="###" className="aa">
                        <p>
                            <img src={gg} />
                        </p>
                        <h3>女摄影师用作品诠释摄影是用光的艺术</h3>
                        <span>2017-12-19</span>
                    </a>
                    <a src="###" className="aa">
                        <p>
                            <img src={im} />
                        </p>
                        <h3>每周摄影师推荐 Vol.26 </h3>
                        <span>2017-12-19</span>
                    </a>
                    <a src="###" className="aa">
                        <p>
                            <img src={imgs} />
                        </p>
                        <h3>当自然与艺术相撞　唯美创意水下人像</h3>
                        <span>2017-12-19</span>
                    </a>
                    <a src="###" className="aa">
                        <p>
                            <img src={gg} />
                        </p>
                        <h3>Seila Malo：人像另类创意 婀娜美人鱼</h3>
                        <span>2017-12-19</span>
                    </a>
                    <a src="###" className="aa">
                        <p>
                            <img src={img} />
                        </p>
                        <h3>每周摄影师推荐Vol.23——关顺志/Ken Kwan</h3>
                        <span>2017-12-19</span>
                    </a>
                    <a src="###" className="aa">
                        <p>
                            <img src={imgs} />
                        </p>
                        <h3>每周摄影师推荐Vol.22——宋大都督</h3>
                        <span>2017-12-08</span>
                    </a>
                    <a src="###" className="aa">
                        <p>
                            <img src={im} />
                        </p>
                        <h3>每周摄影师推荐Vol.21——Joe Chang</h3>
                        <span>2017-12-01</span>
                    </a>
                    <a src="###" className="aa">
                        <p>
                            <img src={ii} />
                        </p>
                        <h3>每周摄影师推荐 Vol.20——Yen-Yi Lee</h3>
                        <span>2017-11-24</span>
                    </a>
                    <a src="###" className="aa">
                        <p>
                            <img src={ls} />
                        </p>
                        <h3>诗意与梦幻</h3>
                        <span>2018-12-19</span>
                    </a>
                    <a src="###" className="aa">
                        <p>
                            <img src={gg} />
                        </p>
                        <h3>女摄影师用作品诠释摄影是用光的艺术</h3>
                        <span>2017-12-19</span>
                    </a>
                    <a src="###" className="aa">
                        <p>
                            <img src={im} />
                        </p>
                        <h3>每周摄影师推荐 Vol.26 </h3>
                        <span>2017-12-19</span>
                    </a>
                    <a src="###" className="aa">
                        <p>
                            <img src={imgs} />
                        </p>
                        <h3>当自然与艺术相撞　唯美创意水下人像</h3>
                        <span>2017-12-19</span>
                    </a>
                    <a src="###" className="aa">
                        <p>
                            <img src={gg} />
                        </p>
                        <h3>Seila Malo：人像另类创意 婀娜美人鱼</h3>
                        <span>2017-12-19</span>
                    </a>
                </div>
            </div>
            {/* <div style={{ backgroundColor: '#fff' }}>
                <div className="fff">
                    <a src="###" className="aa">
                        <p>
                            <img src={img} />
                        </p>
                        <h3>6每周摄影师推荐Vol.23——关顺志/Ken Kwan</h3>
                        <span>2017-12-19</span>
                    </a>
                    <a src="###" className="aa">
                        <p>
                            <img src={imgs} />
                        </p>
                        <h3>每周摄影师推荐Vol.22——宋大都督</h3>
                        <span>2017-12-08</span>
                    </a>
                    <a src="###" className="aa">
                        <p>
                            <img src={im} />
                        </p>
                        <h3>每周摄影师推荐Vol.21——Joe Chang</h3>
                        <span>2017-12-01</span>
                    </a>
                    <a src="###" className="aa">
                        <p>
                            <img src={ii} />
                        </p>
                        <h3>每周摄影师推荐 Vol.20——Yen-Yi Lee</h3>
                        <span>2017-11-24</span>
                    </a>
                    <a src="###" className="aa">
                        <p>
                            <img src={ls} />
                        </p>
                        <h3>诗意与梦幻</h3>
                        <span>2018-12-19</span>
                    </a>
                    <a src="###" className="aa">
                        <p>
                            <img src={gg} />
                        </p>
                        <h3>女摄影师用作品诠释摄影是用光的艺术</h3>
                        <span>2017-12-19</span>
                    </a>
                    <a src="###" className="aa">
                        <p>
                            <img src={im} />
                        </p>
                        <h3>每周摄影师推荐 Vol.26 </h3>
                        <span>2017-12-19</span>
                    </a>
                    <a src="###" className="aa">
                        <p>
                            <img src={imgs} />
                        </p>
                        <h3>当自然与艺术相撞　唯美创意水下人像</h3>
                        <span>2017-12-19</span>
                    </a>
                    <a src="###" className="aa">
                        <p>
                            <img src={gg} />
                        </p>
                        <h3>Seila Malo：人像另类创意 婀娜美人鱼</h3>
                        <span>2017-12-19</span>
                    </a>
                    <a src="###" className="aa">
                        <p>
                            <img src={img} />
                        </p>
                        <h3>每周摄影师推荐Vol.23——关顺志/Ken Kwan</h3>
                        <span>2017-12-19</span>
                    </a>
                    <a src="###" className="aa">
                        <p>
                            <img src={imgs} />
                        </p>
                        <h3>每周摄影师推荐Vol.22——宋大都督</h3>
                        <span>2017-12-08</span>
                    </a>
                    <a src="###" className="aa">
                        <p>
                            <img src={im} />
                        </p>
                        <h3>每周摄影师推荐Vol.21——Joe Chang</h3>
                        <span>2017-12-01</span>
                    </a>
                    <a src="###" className="aa">
                        <p>
                            <img src={ii} />
                        </p>
                        <h3>每周摄影师推荐 Vol.20——Yen-Yi Lee</h3>
                        <span>2017-11-24</span>
                    </a>
                    <a src="###" className="aa">
                        <p>
                            <img src={ls} />
                        </p>
                        <h3>诗意与梦幻</h3>
                        <span>2018-12-19</span>
                    </a>
                    <a src="###" className="aa">
                        <p>
                            <img src={gg} />
                        </p>
                        <h3>女摄影师用作品诠释摄影是用光的艺术</h3>
                        <span>2017-12-19</span>
                    </a>
                    <a src="###" className="aa">
                        <p>
                            <img src={im} />
                        </p>
                        <h3>每周摄影师推荐 Vol.26 </h3>
                        <span>2017-12-19</span>
                    </a>
                    <a src="###" className="aa">
                        <p>
                            <img src={imgs} />
                        </p>
                        <h3>当自然与艺术相撞　唯美创意水下人像</h3>
                        <span>2017-12-19</span>
                    </a>
                    <a src="###" className="aa">
                        <p>
                            <img src={gg} />
                        </p>
                        <h3>Seila Malo：人像另类创意 婀娜美人鱼</h3>
                        <span>2017-12-19</span>
                    </a>
                </div>
            </div>
            <div style={{ backgroundColor: '#fff' }}>
                <div className="ggg">
                    <a src="###" className="aa">
                        <p>
                            <img src={img} />
                        </p>
                        <h3>7每周摄影师推荐Vol.23——关顺志/Ken Kwan</h3>
                        <span>2017-12-19</span>
                    </a>
                    <a src="###" className="aa">
                        <p>
                            <img src={imgs} />
                        </p>
                        <h3>每周摄影师推荐Vol.22——宋大都督</h3>
                        <span>2017-12-08</span>
                    </a>
                    <a src="###" className="aa">
                        <p>
                            <img src={im} />
                        </p>
                        <h3>每周摄影师推荐Vol.21——Joe Chang</h3>
                        <span>2017-12-01</span>
                    </a>
                    <a src="###" className="aa">
                        <p>
                            <img src={ii} />
                        </p>
                        <h3>每周摄影师推荐 Vol.20——Yen-Yi Lee</h3>
                        <span>2017-11-24</span>
                    </a>
                    <a src="###" className="aa">
                        <p>
                            <img src={ls} />
                        </p>
                        <h3>诗意与梦幻</h3>
                        <span>2018-12-19</span>
                    </a>
                    <a src="###" className="aa">
                        <p>
                            <img src={gg} />
                        </p>
                        <h3>女摄影师用作品诠释摄影是用光的艺术</h3>
                        <span>2017-12-19</span>
                    </a>
                    <a src="###" className="aa">
                        <p>
                            <img src={im} />
                        </p>
                        <h3>每周摄影师推荐 Vol.26 </h3>
                        <span>2017-12-19</span>
                    </a>
                    <a src="###" className="aa">
                        <p>
                            <img src={imgs} />
                        </p>
                        <h3>当自然与艺术相撞　唯美创意水下人像</h3>
                        <span>2017-12-19</span>
                    </a>
                    <a src="###" className="aa">
                        <p>
                            <img src={gg} />
                        </p>
                        <h3>Seila Malo：人像另类创意 婀娜美人鱼</h3>
                        <span>2017-12-19</span>
                    </a>
                    <a src="###" className="aa">
                        <p>
                            <img src={img} />
                        </p>
                        <h3>每周摄影师推荐Vol.23——关顺志/Ken Kwan</h3>
                        <span>2017-12-19</span>
                    </a>
                    <a src="###" className="aa">
                        <p>
                            <img src={imgs} />
                        </p>
                        <h3>每周摄影师推荐Vol.22——宋大都督</h3>
                        <span>2017-12-08</span>
                    </a>
                    <a src="###" className="aa">
                        <p>
                            <img src={im} />
                        </p>
                        <h3>每周摄影师推荐Vol.21——Joe Chang</h3>
                        <span>2017-12-01</span>
                    </a>
                    <a src="###" className="aa">
                        <p>
                            <img src={ii} />
                        </p>
                        <h3>每周摄影师推荐 Vol.20——Yen-Yi Lee</h3>
                        <span>2017-11-24</span>
                    </a>
                    <a src="###" className="aa">
                        <p>
                            <img src={ls} />
                        </p>
                        <h3>诗意与梦幻</h3>
                        <span>2018-12-19</span>
                    </a>
                    <a src="###" className="aa">
                        <p>
                            <img src={gg} />
                        </p>
                        <h3>女摄影师用作品诠释摄影是用光的艺术</h3>
                        <span>2017-12-19</span>
                    </a>
                    <a src="###" className="aa">
                        <p>
                            <img src={im} />
                        </p>
                        <h3>每周摄影师推荐 Vol.26 </h3>
                        <span>2017-12-19</span>
                    </a>
                    <a src="###" className="aa">
                        <p>
                            <img src={imgs} />
                        </p>
                        <h3>当自然与艺术相撞　唯美创意水下人像</h3>
                        <span>2017-12-19</span>
                    </a>
                    <a src="###" className="aa">
                        <p>
                            <img src={gg} />
                        </p>
                        <h3>Seila Malo：人像另类创意 婀娜美人鱼</h3>
                        <span>2017-12-19</span>
                    </a>
                </div>
            </div>
            <div style={{ backgroundColor: '#fff' }}>
                <div className="hhh">
                    <a src="###" className="aa">
                        <p>
                            <img src={img} />
                        </p>
                        <h3>8每周摄影师推荐Vol.23——关顺志/Ken Kwan</h3>
                        <span>2017-12-19</span>
                    </a>
                    <a src="###" className="aa">
                        <p>
                            <img src={imgs} />
                        </p>
                        <h3>每周摄影师推荐Vol.22——宋大都督</h3>
                        <span>2017-12-08</span>
                    </a>
                    <a src="###" className="aa">
                        <p>
                            <img src={im} />
                        </p>
                        <h3>每周摄影师推荐Vol.21——Joe Chang</h3>
                        <span>2017-12-01</span>
                    </a>
                    <a src="###" className="aa">
                        <p>
                            <img src={ii} />
                        </p>
                        <h3>每周摄影师推荐 Vol.20——Yen-Yi Lee</h3>
                        <span>2017-11-24</span>
                    </a>
                    <a src="###" className="aa">
                        <p>
                            <img src={ls} />
                        </p>
                        <h3>诗意与梦幻</h3>
                        <span>2018-12-19</span>
                    </a>
                    <a src="###" className="aa">
                        <p>
                            <img src={gg} />
                        </p>
                        <h3>女摄影师用作品诠释摄影是用光的艺术</h3>
                        <span>2017-12-19</span>
                    </a>
                    <a src="###" className="aa">
                        <p>
                            <img src={im} />
                        </p>
                        <h3>每周摄影师推荐 Vol.26 </h3>
                        <span>2017-12-19</span>
                    </a>
                    <a src="###" className="aa">
                        <p>
                            <img src={imgs} />
                        </p>
                        <h3>当自然与艺术相撞　唯美创意水下人像</h3>
                        <span>2017-12-19</span>
                    </a>
                    <a src="###" className="aa">
                        <p>
                            <img src={gg} />
                        </p>
                        <h3>Seila Malo：人像另类创意 婀娜美人鱼</h3>
                        <span>2017-12-19</span>
                    </a>
                    <a src="###" className="aa">
                        <p>
                            <img src={img} />
                        </p>
                        <h3>每周摄影师推荐Vol.23——关顺志/Ken Kwan</h3>
                        <span>2017-12-19</span>
                    </a>
                    <a src="###" className="aa">
                        <p>
                            <img src={imgs} />
                        </p>
                        <h3>每周摄影师推荐Vol.22——宋大都督</h3>
                        <span>2017-12-08</span>
                    </a>
                    <a src="###" className="aa">
                        <p>
                            <img src={im} />
                        </p>
                        <h3>每周摄影师推荐Vol.21——Joe Chang</h3>
                        <span>2017-12-01</span>
                    </a>
                    <a src="###" className="aa">
                        <p>
                            <img src={ii} />
                        </p>
                        <h3>每周摄影师推荐 Vol.20——Yen-Yi Lee</h3>
                        <span>2017-11-24</span>
                    </a>
                    <a src="###" className="aa">
                        <p>
                            <img src={ls} />
                        </p>
                        <h3>诗意与梦幻</h3>
                        <span>2018-12-19</span>
                    </a>
                    <a src="###" className="aa">
                        <p>
                            <img src={gg} />
                        </p>
                        <h3>女摄影师用作品诠释摄影是用光的艺术</h3>
                        <span>2017-12-19</span>
                    </a>
                    <a src="###" className="aa">
                        <p>
                            <img src={im} />
                        </p>
                        <h3>每周摄影师推荐 Vol.26 </h3>
                        <span>2017-12-19</span>
                    </a>
                    <a src="###" className="aa">
                        <p>
                            <img src={imgs} />
                        </p>
                        <h3>当自然与艺术相撞　唯美创意水下人像</h3>
                        <span>2017-12-19</span>
                    </a>
                    <a src="###" className="aa">
                        <p>
                            <img src={gg} />
                        </p>
                        <h3>Seila Malo：人像另类创意 婀娜美人鱼</h3>
                        <span>2017-12-19</span>
                    </a>
                </div>
            </div> */}
        </Tabs>
        <WhiteSpace />
    </div>
);

export default TabExamplf;