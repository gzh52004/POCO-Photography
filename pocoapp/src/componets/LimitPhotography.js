import { Tabs, WhiteSpace } from 'antd-mobile';
import '../assets/css/LimitPhotography.css'
import img from '../img/17897476920171115222513092_178974769.jpg'
import imgs from '../img/mv.jpg'
import ii from '../img/login.jpg'
import im from '../img/highlightfeature_1960x1102_PC_01.jpg'
import ls from '../img/G-CLASS-BANNER-PC.jpg'
import gg from '../img/clasbkvpc.jpg'

const tabs = [
    { title: '全部' },
    { title: '新手入门' },
    { title: '使用技巧' },
    { title: '环球视觉' },
    { title: '摄影大赛' },
    { title: '每周推荐' },
    { title: '全球百人计划' },
    { title: '器材咨询' },

];

const TabExample = () => (
    <div>
        <WhiteSpace>
        <Tabs tabs={tabs} initialPage={0} animated={false} useOnPan={false}>
            <div style={{backgroundColor: '#fff' }}>
                <div>
                    <div className="aaa">
                        <a src="###">
                            <i>
                                <img src={img} />
                            </i>
                            <h3>每周摄影师推荐Vol.23——关顺志A/Ken Kwan</h3>
                            <span>2017-12-19</span>
                        </a>
                        <a src="###">
                            <i>
                                <img src={imgs} />
                            </i>
                            <h3>每周摄影师推荐Vol.22——宋大都督</h3>
                            <span>2017-12-08</span>
                        </a>
                        <a src="###">
                            <i>
                                <img src={im} />
                            </i>
                            <h3>每周摄影师推荐Vol.21——Joe Chang</h3>
                            <span>2017-12-01</span>
                        </a>
                        <a src="###">
                            <i>
                                <img src={ii} />
                            </i>
                            <h3>每周摄影师推荐 Vol.20——Yen-Yi Lee</h3>
                            <span>2017-11-24</span>
                        </a>
                        <a src="###">
                            <i>
                                <img src={ls} />
                            </i>
                            <h3>诗意与梦幻</h3>
                            <span>2018-12-19</span>
                        </a>
                        <a src="###">
                            <i>
                                <img src={gg} />
                            </i>
                            <h3>女摄影师用作品诠释摄影是用光的艺术</h3>
                            <span>2017-12-19</span>
                        </a>
                        <a src="###">
                            <i>
                                <img src={im} />
                            </i>
                            <h3>每周摄影师推荐 Vol.26 </h3>
                            <span>2017-12-19</span>
                        </a>
                        <a src="###">
                            <i>
                                <img src={imgs} />
                            </i>
                            <h3>当自然与艺术相撞　唯美创意水下人像</h3>
                            <span>2017-12-19</span>
                        </a>
                        <a src="###">
                            <i>
                                <img src={gg} />
                            </i>
                            <h3>Seila Malo：人像另类创意 婀娜美人鱼</h3>
                            <span>2017-12-19</span>
                        </a>
                        <a src="###">
                            <i>
                                <img src={img} />
                            </i>
                            <h3>每周摄影师推荐Vol.23——关顺志/Ken Kwan</h3>
                            <span>2017-12-19</span>
                        </a>
                        <a src="###">
                            <i>
                                <img src={imgs} />
                            </i>
                            <h3>每周摄影师推荐Vol.22——宋大都督</h3>
                            <span>2017-12-08</span>
                        </a>
                        <a src="###">
                            <i>
                                <img src={im} />
                            </i>
                            <h3>每周摄影师推荐Vol.21——Joe Chang</h3>
                            <span>2017-12-01</span>
                        </a>
                        <a src="###">
                            <i>
                                <img src={ii} />
                            </i>
                            <h3>每周摄影师推荐 Vol.20——Yen-Yi Lee</h3>
                            <span>2017-11-24</span>
                        </a>
                        <a src="###">
                            <i>
                                <img src={ls} />
                            </i>
                            <h3>诗意与梦幻</h3>
                            <span>2018-12-19</span>
                        </a>
                        <a src="###">
                            <i>
                                <img src={gg} />
                            </i>
                            <h3>女摄影师用作品诠释摄影是用光的艺术</h3>
                            <span>2017-12-19</span>
                        </a>
                        <a src="###">
                            <i>
                                <img src={im} />
                            </i>
                            <h3>每周摄影师推荐 Vol.26 </h3>
                            <span>2017-12-19</span>
                        </a>
                        <a src="###">
                            <i>
                                <img src={imgs} />
                            </i>
                            <h3>当自然与艺术相撞　唯美创意水下人像</h3>
                            <span>2017-12-19</span>
                        </a>
                        <a src="###">
                            <i>
                                <img src={gg} />
                            </i>
                            <h3>Seila Malo：人像另类创意 婀娜美人鱼</h3>
                            <span>2017-12-19</span>
                        </a>
                    </div>
                </div>

            </div>
            <div style={{backgroundColor: '#fff'}}>
                <div className="bbb">
                    <a src="###">
                        <i>
                            <img src={im} />
                        </i>
                        <h3>每周摄影师推荐Vol.23——关顺志/Ken Kwan</h3>
                        <span>2017-12-19</span>
                    </a>
                    <a src="###">
                        <i>
                            <img src={gg} />
                        </i>
                        <h3>每周摄影师推荐Vol.22——宋大都督</h3>
                        <span>2017-12-08</span>
                    </a>
                    <a src="###">
                        <i>
                            <img src={img} />
                        </i>
                        <h3>每周摄影师推荐Vol.21——Joe Chang</h3>
                        <span>2017-12-01</span>
                    </a>
                    <a src="###">
                        <i>
                            <img src={ls} />
                        </i>
                        <h3>每周摄影师推荐 Vol.20——Yen-Yi Lee</h3>
                        <span>2017-11-24</span>
                    </a>
                    <a src="###">
                        <i>
                            <img src={ls} />
                        </i>
                        <h3>诗意与梦幻</h3>
                        <span>2018-12-19</span>
                    </a>
                    <a src="###">
                        <i>
                            <img src={gg} />
                        </i>
                        <h3>女摄影师用作品诠释摄影是用光的艺术</h3>
                        <span>2017-12-19</span>
                    </a>
                    <a src="###">
                        <i>
                            <img src={im} />
                        </i>
                        <h3>每周摄影师推荐 Vol.26 </h3>
                        <span>2017-12-19</span>
                    </a>
                    <a src="###">
                        <i>
                            <img src={imgs} />
                        </i>
                        <h3>当自然与艺术相撞　唯美创意水下人像</h3>
                        <span>2017-12-19</span>
                    </a>
                    <a src="###">
                        <i>
                            <img src={gg} />
                        </i>
                        <h3>Seila Malo：人像另类创意 婀娜美人鱼</h3>
                        <span>2017-12-19</span>
                    </a>
                    <a src="###">
                        <i>
                            <img src={img} />
                        </i>
                        <h3>每周摄影师推荐Vol.23——关顺志/Ken Kwan</h3>
                        <span>2017-12-19</span>
                    </a>
                    <a src="###">
                        <i>
                            <img src={imgs} />
                        </i>
                        <h3>每周摄影师推荐Vol.22——宋大都督</h3>
                        <span>2017-12-08</span>
                    </a>
                    <a src="###">
                        <i>
                            <img src={im} />
                        </i>
                        <h3>每周摄影师推荐Vol.21——Joe Chang</h3>
                        <span>2017-12-01</span>
                    </a>
                    <a src="###">
                        <i>
                            <img src={ii} />
                        </i>
                        <h3>每周摄影师推荐 Vol.20——Yen-Yi Lee</h3>
                        <span>2017-11-24</span>
                    </a>
                    <a src="###">
                        <i>
                            <img src={ls} />
                        </i>
                        <h3>诗意与梦幻</h3>
                        <span>2018-12-19</span>
                    </a>
                    <a src="###">
                        <i>
                            <img src={gg} />
                        </i>
                        <h3>女摄影师用作品诠释摄影是用光的艺术</h3>
                        <span>2017-12-19</span>
                    </a>
                    <a src="###">
                        <i>
                            <img src={im} />
                        </i>
                        <h3>每周摄影师推荐 Vol.26 </h3>
                        <span>2017-12-19</span>
                    </a>
                    <a src="###">
                        <i>
                            <img src={imgs} />
                        </i>
                        <h3>当自然与艺术相撞　唯美创意水下人像</h3>
                        <span>2017-12-19</span>
                    </a>
                    <a src="###">
                        <i>
                            <img src={gg} />
                        </i>
                        <h3>Seila Malo：人像另类创意 婀娜美人鱼</h3>
                        <span>2017-12-19</span>
                    </a>
                </div>
            </div>
            <div style={{backgroundColor: '#fff' }}>
                <div className="ccc">
                    <a src="###">
                        <i>
                            <img src={img} />
                        </i>
                        <h3>每周摄影师推荐Vol.23——关顺志/Ken Kwan</h3>
                        <span>2017-12-19</span>
                    </a>
                    <a src="###">
                        <i>
                            <img src={imgs} />
                        </i>
                        <h3>每周摄影师推荐Vol.22——宋大都督</h3>
                        <span>2017-12-08</span>
                    </a>
                    <a src="###">
                        <i>
                            <img src={im} />
                        </i>
                        <h3>每周摄影师推荐Vol.21——Joe Chang</h3>
                        <span>2017-12-01</span>
                    </a>
                    <a src="###">
                        <i>
                            <img src={ii} />
                        </i>
                        <h3>每周摄影师推荐 Vol.20——Yen-Yi Lee</h3>
                        <span>2017-11-24</span>
                    </a>
                    <a src="###">
                        <i>
                            <img src={ls} />
                        </i>
                        <h3>诗意与梦幻</h3>
                        <span>2018-12-19</span>
                    </a>
                    <a src="###">
                        <i>
                            <img src={gg} />
                        </i>
                        <h3>女摄影师用作品诠释摄影是用光的艺术</h3>
                        <span>2017-12-19</span>
                    </a>
                    <a src="###">
                        <i>
                            <img src={im} />
                        </i>
                        <h3>每周摄影师推荐 Vol.26 </h3>
                        <span>2017-12-19</span>
                    </a>
                    <a src="###">
                        <i>
                            <img src={imgs} />
                        </i>
                        <h3>当自然与艺术相撞　唯美创意水下人像</h3>
                        <span>2017-12-19</span>
                    </a>
                    <a src="###">
                        <i>
                            <img src={gg} />
                        </i>
                        <h3>Seila Malo：人像另类创意 婀娜美人鱼</h3>
                        <span>2017-12-19</span>
                    </a>
                    <a src="###">
                        <i>
                            <img src={img} />
                        </i>
                        <h3>每周摄影师推荐Vol.23——关顺志/Ken Kwan</h3>
                        <span>2017-12-19</span>
                    </a>
                    <a src="###">
                        <i>
                            <img src={imgs} />
                        </i>
                        <h3>每周摄影师推荐Vol.22——宋大都督</h3>
                        <span>2017-12-08</span>
                    </a>
                    <a src="###">
                        <i>
                            <img src={im} />
                        </i>
                        <h3>每周摄影师推荐Vol.21——Joe Chang</h3>
                        <span>2017-12-01</span>
                    </a>
                    <a src="###">
                        <i>
                            <img src={ii} />
                        </i>
                        <h3>每周摄影师推荐 Vol.20——Yen-Yi Lee</h3>
                        <span>2017-11-24</span>
                    </a>
                    <a src="###">
                        <i>
                            <img src={ls} />
                        </i>
                        <h3>诗意与梦幻</h3>
                        <span>2018-12-19</span>
                    </a>
                    <a src="###">
                        <i>
                            <img src={gg} />
                        </i>
                        <h3>女摄影师用作品诠释摄影是用光的艺术</h3>
                        <span>2017-12-19</span>
                    </a>
                    <a src="###">
                        <i>
                            <img src={im} />
                        </i>
                        <h3>每周摄影师推荐 Vol.26 </h3>
                        <span>2017-12-19</span>
                    </a>
                    <a src="###">
                        <i>
                            <img src={imgs} />
                        </i>
                        <h3>当自然与艺术相撞　唯美创意水下人像</h3>
                        <span>2017-12-19</span>
                    </a>
                    <a src="###">
                        <i>
                            <img src={gg} />
                        </i>
                        <h3>Seila Malo：人像另类创意 婀娜美人鱼</h3>
                        <span>2017-12-19</span>
                    </a>
                </div>
            </div>
            <div style={{backgroundColor: '#fff' }}>
                <div className="ddd">
                    <a src="###">
                        <i>
                            <img src={img} />
                        </i>
                        <h3>每周摄影师推荐Vol.23——关顺志/Ken Kwan</h3>
                        <span>2017-12-19</span>
                    </a>
                    <a src="###">
                        <i>
                            <img src={imgs} />
                        </i>
                        <h3>每周摄影师推荐Vol.22——宋大都督</h3>
                        <span>2017-12-08</span>
                    </a>
                    <a src="###">
                        <i>
                            <img src={im} />
                        </i>
                        <h3>每周摄影师推荐Vol.21——Joe Chang</h3>
                        <span>2017-12-01</span>
                    </a>
                    <a src="###">
                        <i>
                            <img src={ii} />
                        </i>
                        <h3>每周摄影师推荐 Vol.20——Yen-Yi Lee</h3>
                        <span>2017-11-24</span>
                    </a>
                    <a src="###">
                        <i>
                            <img src={ls} />
                        </i>
                        <h3>诗意与梦幻</h3>
                        <span>2018-12-19</span>
                    </a>
                    <a src="###">
                        <i>
                            <img src={gg} />
                        </i>
                        <h3>女摄影师用作品诠释摄影是用光的艺术</h3>
                        <span>2017-12-19</span>
                    </a>
                    <a src="###">
                        <i>
                            <img src={im} />
                        </i>
                        <h3>每周摄影师推荐 Vol.26 </h3>
                        <span>2017-12-19</span>
                    </a>
                    <a src="###">
                        <i>
                            <img src={imgs} />
                        </i>
                        <h3>当自然与艺术相撞　唯美创意水下人像</h3>
                        <span>2017-12-19</span>
                    </a>
                    <a src="###">
                        <i>
                            <img src={gg} />
                        </i>
                        <h3>Seila Malo：人像另类创意 婀娜美人鱼</h3>
                        <span>2017-12-19</span>
                    </a>
                    <a src="###">
                        <i>
                            <img src={img} />
                        </i>
                        <h3>每周摄影师推荐Vol.23——关顺志/Ken Kwan</h3>
                        <span>2017-12-19</span>
                    </a>
                    <a src="###">
                        <i>
                            <img src={imgs} />
                        </i>
                        <h3>每周摄影师推荐Vol.22——宋大都督</h3>
                        <span>2017-12-08</span>
                    </a>
                    <a src="###">
                        <i>
                            <img src={im} />
                        </i>
                        <h3>每周摄影师推荐Vol.21——Joe Chang</h3>
                        <span>2017-12-01</span>
                    </a>
                    <a src="###">
                        <i>
                            <img src={ii} />
                        </i>
                        <h3>每周摄影师推荐 Vol.20——Yen-Yi Lee</h3>
                        <span>2017-11-24</span>
                    </a>
                    <a src="###">
                        <i>
                            <img src={ls} />
                        </i>
                        <h3>诗意与梦幻</h3>
                        <span>2018-12-19</span>
                    </a>
                    <a src="###">
                        <i>
                            <img src={gg} />
                        </i>
                        <h3>女摄影师用作品诠释摄影是用光的艺术</h3>
                        <span>2017-12-19</span>
                    </a>
                    <a src="###">
                        <i>
                            <img src={im} />
                        </i>
                        <h3>每周摄影师推荐 Vol.26 </h3>
                        <span>2017-12-19</span>
                    </a>
                    <a src="###">
                        <i>
                            <img src={imgs} />
                        </i>
                        <h3>当自然与艺术相撞　唯美创意水下人像</h3>
                        <span>2017-12-19</span>
                    </a>
                    <a src="###">
                        <i>
                            <img src={gg} />
                        </i>
                        <h3>Seila Malo：人像另类创意 婀娜美人鱼</h3>
                        <span>2017-12-19</span>
                    </a>
                </div>
            </div>
            <div style={{backgroundColor: '#fff' }}>
                <div className="eee">
                    <a src="###">
                        <i>
                            <img src={img} />
                        </i>
                        <h3>每周摄影师推荐Vol.23——关顺志/Ken Kwan</h3>
                        <span>2017-12-19</span>
                    </a>
                    <a src="###">
                        <i>
                            <img src={imgs} />
                        </i>
                        <h3>每周摄影师推荐Vol.22——宋大都督</h3>
                        <span>2017-12-08</span>
                    </a>
                    <a src="###">
                        <i>
                            <img src={im} />
                        </i>
                        <h3>每周摄影师推荐Vol.21——Joe Chang</h3>
                        <span>2017-12-01</span>
                    </a>
                    <a src="###">
                        <i>
                            <img src={ii} />
                        </i>
                        <h3>每周摄影师推荐 Vol.20——Yen-Yi Lee</h3>
                        <span>2017-11-24</span>
                    </a>
                    <a src="###">
                        <i>
                            <img src={ls} />
                        </i>
                        <h3>诗意与梦幻</h3>
                        <span>2018-12-19</span>
                    </a>
                    <a src="###">
                        <i>
                            <img src={gg} />
                        </i>
                        <h3>女摄影师用作品诠释摄影是用光的艺术</h3>
                        <span>2017-12-19</span>
                    </a>
                    <a src="###">
                        <i>
                            <img src={im} />
                        </i>
                        <h3>每周摄影师推荐 Vol.26 </h3>
                        <span>2017-12-19</span>
                    </a>
                    <a src="###">
                        <i>
                            <img src={imgs} />
                        </i>
                        <h3>当自然与艺术相撞　唯美创意水下人像</h3>
                        <span>2017-12-19</span>
                    </a>
                    <a src="###">
                        <i>
                            <img src={gg} />
                        </i>
                        <h3>Seila Malo：人像另类创意 婀娜美人鱼</h3>
                        <span>2017-12-19</span>
                    </a>
                    <a src="###">
                        <i>
                            <img src={img} />
                        </i>
                        <h3>每周摄影师推荐Vol.23——关顺志/Ken Kwan</h3>
                        <span>2017-12-19</span>
                    </a>
                    <a src="###">
                        <i>
                            <img src={imgs} />
                        </i>
                        <h3>每周摄影师推荐Vol.22——宋大都督</h3>
                        <span>2017-12-08</span>
                    </a>
                    <a src="###">
                        <i>
                            <img src={im} />
                        </i>
                        <h3>每周摄影师推荐Vol.21——Joe Chang</h3>
                        <span>2017-12-01</span>
                    </a>
                    <a src="###">
                        <i>
                            <img src={ii} />
                        </i>
                        <h3>每周摄影师推荐 Vol.20——Yen-Yi Lee</h3>
                        <span>2017-11-24</span>
                    </a>
                    <a src="###">
                        <i>
                            <img src={ls} />
                        </i>
                        <h3>诗意与梦幻</h3>
                        <span>2018-12-19</span>
                    </a>
                    <a src="###">
                        <i>
                            <img src={gg} />
                        </i>
                        <h3>女摄影师用作品诠释摄影是用光的艺术</h3>
                        <span>2017-12-19</span>
                    </a>
                    <a src="###">
                        <i>
                            <img src={im} />
                        </i>
                        <h3>每周摄影师推荐 Vol.26 </h3>
                        <span>2017-12-19</span>
                    </a>
                    <a src="###">
                        <i>
                            <img src={imgs} />
                        </i>
                        <h3>当自然与艺术相撞　唯美创意水下人像</h3>
                        <span>2017-12-19</span>
                    </a>
                    <a src="###">
                        <i>
                            <img src={gg} />
                        </i>
                        <h3>Seila Malo：人像另类创意 婀娜美人鱼</h3>
                        <span>2017-12-19</span>
                    </a>
                </div>
            </div>
            <div style={{backgroundColor: '#fff' }}>
                <div className="fff">
                    <a src="###">
                        <i>
                            <img src={img} />
                        </i>
                        <h3>每周摄影师推荐Vol.23——关顺志/Ken Kwan</h3>
                        <span>2017-12-19</span>
                    </a>
                    <a src="###">
                        <i>
                            <img src={imgs} />
                        </i>
                        <h3>每周摄影师推荐Vol.22——宋大都督</h3>
                        <span>2017-12-08</span>
                    </a>
                    <a src="###">
                        <i>
                            <img src={im} />
                        </i>
                        <h3>每周摄影师推荐Vol.21——Joe Chang</h3>
                        <span>2017-12-01</span>
                    </a>
                    <a src="###">
                        <i>
                            <img src={ii} />
                        </i>
                        <h3>每周摄影师推荐 Vol.20——Yen-Yi Lee</h3>
                        <span>2017-11-24</span>
                    </a>
                    <a src="###">
                        <i>
                            <img src={ls} />
                        </i>
                        <h3>诗意与梦幻</h3>
                        <span>2018-12-19</span>
                    </a>
                    <a src="###">
                        <i>
                            <img src={gg} />
                        </i>
                        <h3>女摄影师用作品诠释摄影是用光的艺术</h3>
                        <span>2017-12-19</span>
                    </a>
                    <a src="###">
                        <i>
                            <img src={im} />
                        </i>
                        <h3>每周摄影师推荐 Vol.26 </h3>
                        <span>2017-12-19</span>
                    </a>
                    <a src="###">
                        <i>
                            <img src={imgs} />
                        </i>
                        <h3>当自然与艺术相撞　唯美创意水下人像</h3>
                        <span>2017-12-19</span>
                    </a>
                    <a src="###">
                        <i>
                            <img src={gg} />
                        </i>
                        <h3>Seila Malo：人像另类创意 婀娜美人鱼</h3>
                        <span>2017-12-19</span>
                    </a>
                    <a src="###">
                        <i>
                            <img src={img} />
                        </i>
                        <h3>每周摄影师推荐Vol.23——关顺志/Ken Kwan</h3>
                        <span>2017-12-19</span>
                    </a>
                    <a src="###">
                        <i>
                            <img src={imgs} />
                        </i>
                        <h3>每周摄影师推荐Vol.22——宋大都督</h3>
                        <span>2017-12-08</span>
                    </a>
                    <a src="###">
                        <i>
                            <img src={im} />
                        </i>
                        <h3>每周摄影师推荐Vol.21——Joe Chang</h3>
                        <span>2017-12-01</span>
                    </a>
                    <a src="###">
                        <i>
                            <img src={ii} />
                        </i>
                        <h3>每周摄影师推荐 Vol.20——Yen-Yi Lee</h3>
                        <span>2017-11-24</span>
                    </a>
                    <a src="###">
                        <i>
                            <img src={ls} />
                        </i>
                        <h3>诗意与梦幻</h3>
                        <span>2018-12-19</span>
                    </a>
                    <a src="###">
                        <i>
                            <img src={gg} />
                        </i>
                        <h3>女摄影师用作品诠释摄影是用光的艺术</h3>
                        <span>2017-12-19</span>
                    </a>
                    <a src="###">
                        <i>
                            <img src={im} />
                        </i>
                        <h3>每周摄影师推荐 Vol.26 </h3>
                        <span>2017-12-19</span>
                    </a>
                    <a src="###">
                        <i>
                            <img src={imgs} />
                        </i>
                        <h3>当自然与艺术相撞　唯美创意水下人像</h3>
                        <span>2017-12-19</span>
                    </a>
                    <a src="###">
                        <i>
                            <img src={gg} />
                        </i>
                        <h3>Seila Malo：人像另类创意 婀娜美人鱼</h3>
                        <span>2017-12-19</span>
                    </a>
                </div>
            </div>
            <div style={{backgroundColor: '#fff' }}>
                <div className="ggg">
                    <a src="###">
                        <i>
                            <img src={img} />
                        </i>
                        <h3>每周摄影师推荐Vol.23——关顺志/Ken Kwan</h3>
                        <span>2017-12-19</span>
                    </a>
                    <a src="###">
                        <i>
                            <img src={imgs} />
                        </i>
                        <h3>每周摄影师推荐Vol.22——宋大都督</h3>
                        <span>2017-12-08</span>
                    </a>
                    <a src="###">
                        <i>
                            <img src={im} />
                        </i>
                        <h3>每周摄影师推荐Vol.21——Joe Chang</h3>
                        <span>2017-12-01</span>
                    </a>
                    <a src="###">
                        <i>
                            <img src={ii} />
                        </i>
                        <h3>每周摄影师推荐 Vol.20——Yen-Yi Lee</h3>
                        <span>2017-11-24</span>
                    </a>
                    <a src="###">
                        <i>
                            <img src={ls} />
                        </i>
                        <h3>诗意与梦幻</h3>
                        <span>2018-12-19</span>
                    </a>
                    <a src="###">
                        <i>
                            <img src={gg} />
                        </i>
                        <h3>女摄影师用作品诠释摄影是用光的艺术</h3>
                        <span>2017-12-19</span>
                    </a>
                    <a src="###">
                        <i>
                            <img src={im} />
                        </i>
                        <h3>每周摄影师推荐 Vol.26 </h3>
                        <span>2017-12-19</span>
                    </a>
                    <a src="###">
                        <i>
                            <img src={imgs} />
                        </i>
                        <h3>当自然与艺术相撞　唯美创意水下人像</h3>
                        <span>2017-12-19</span>
                    </a>
                    <a src="###">
                        <i>
                            <img src={gg} />
                        </i>
                        <h3>Seila Malo：人像另类创意 婀娜美人鱼</h3>
                        <span>2017-12-19</span>
                    </a>
                    <a src="###">
                        <i>
                            <img src={img} />
                        </i>
                        <h3>每周摄影师推荐Vol.23——关顺志/Ken Kwan</h3>
                        <span>2017-12-19</span>
                    </a>
                    <a src="###">
                        <i>
                            <img src={imgs} />
                        </i>
                        <h3>每周摄影师推荐Vol.22——宋大都督</h3>
                        <span>2017-12-08</span>
                    </a>
                    <a src="###">
                        <i>
                            <img src={im} />
                        </i>
                        <h3>每周摄影师推荐Vol.21——Joe Chang</h3>
                        <span>2017-12-01</span>
                    </a>
                    <a src="###">
                        <i>
                            <img src={ii} />
                        </i>
                        <h3>每周摄影师推荐 Vol.20——Yen-Yi Lee</h3>
                        <span>2017-11-24</span>
                    </a>
                    <a src="###">
                        <i>
                            <img src={ls} />
                        </i>
                        <h3>诗意与梦幻</h3>
                        <span>2018-12-19</span>
                    </a>
                    <a src="###">
                        <i>
                            <img src={gg} />
                        </i>
                        <h3>女摄影师用作品诠释摄影是用光的艺术</h3>
                        <span>2017-12-19</span>
                    </a>
                    <a src="###">
                        <i>
                            <img src={im} />
                        </i>
                        <h3>每周摄影师推荐 Vol.26 </h3>
                        <span>2017-12-19</span>
                    </a>
                    <a src="###">
                        <i>
                            <img src={imgs} />
                        </i>
                        <h3>当自然与艺术相撞　唯美创意水下人像</h3>
                        <span>2017-12-19</span>
                    </a>
                    <a src="###">
                        <i>
                            <img src={gg} />
                        </i>
                        <h3>Seila Malo：人像另类创意 婀娜美人鱼</h3>
                        <span>2017-12-19</span>
                    </a>
                </div>
            </div>
            <div style={{backgroundColor: '#fff' }}>
                <div className="hhh">
                    <a src="###">
                        <i>
                            <img src={img} />
                        </i>
                        <h3>每周摄影师推荐Vol.23——关顺志/Ken Kwan</h3>
                        <span>2017-12-19</span>
                    </a>
                    <a src="###">
                        <i>
                            <img src={imgs} />
                        </i>
                        <h3>每周摄影师推荐Vol.22——宋大都督</h3>
                        <span>2017-12-08</span>
                    </a>
                    <a src="###">
                        <i>
                            <img src={im} />
                        </i>
                        <h3>每周摄影师推荐Vol.21——Joe Chang</h3>
                        <span>2017-12-01</span>
                    </a>
                    <a src="###">
                        <i>
                            <img src={ii} />
                        </i>
                        <h3>每周摄影师推荐 Vol.20——Yen-Yi Lee</h3>
                        <span>2017-11-24</span>
                    </a>
                    <a src="###">
                        <i>
                            <img src={ls} />
                        </i>
                        <h3>诗意与梦幻</h3>
                        <span>2018-12-19</span>
                    </a>
                    <a src="###">
                        <i>
                            <img src={gg} />
                        </i>
                        <h3>女摄影师用作品诠释摄影是用光的艺术</h3>
                        <span>2017-12-19</span>
                    </a>
                    <a src="###">
                        <i>
                            <img src={im} />
                        </i>
                        <h3>每周摄影师推荐 Vol.26 </h3>
                        <span>2017-12-19</span>
                    </a>
                    <a src="###">
                        <i>
                            <img src={imgs} />
                        </i>
                        <h3>当自然与艺术相撞　唯美创意水下人像</h3>
                        <span>2017-12-19</span>
                    </a>
                    <a src="###">
                        <i>
                            <img src={gg} />
                        </i>
                        <h3>Seila Malo：人像另类创意 婀娜美人鱼</h3>
                        <span>2017-12-19</span>
                    </a>
                    <a src="###">
                        <i>
                            <img src={img} />
                        </i>
                        <h3>每周摄影师推荐Vol.23——关顺志/Ken Kwan</h3>
                        <span>2017-12-19</span>
                    </a>
                    <a src="###">
                        <i>
                            <img src={imgs} />
                        </i>
                        <h3>每周摄影师推荐Vol.22——宋大都督</h3>
                        <span>2017-12-08</span>
                    </a>
                    <a src="###">
                        <i>
                            <img src={im} />
                        </i>
                        <h3>每周摄影师推荐Vol.21——Joe Chang</h3>
                        <span>2017-12-01</span>
                    </a>
                    <a src="###">
                        <i>
                            <img src={ii} />
                        </i>
                        <h3>每周摄影师推荐 Vol.20——Yen-Yi Lee</h3>
                        <span>2017-11-24</span>
                    </a>
                    <a src="###">
                        <i>
                            <img src={ls} />
                        </i>
                        <h3>诗意与梦幻</h3>
                        <span>2018-12-19</span>
                    </a>
                    <a src="###">
                        <i>
                            <img src={gg} />
                        </i>
                        <h3>女摄影师用作品诠释摄影是用光的艺术</h3>
                        <span>2017-12-19</span>
                    </a>
                    <a src="###">
                        <i>
                            <img src={im} />
                        </i>
                        <h3>每周摄影师推荐 Vol.26 </h3>
                        <span>2017-12-19</span>
                    </a>
                    <a src="###">
                        <i>
                            <img src={imgs} />
                        </i>
                        <h3>当自然与艺术相撞　唯美创意水下人像</h3>
                        <span>2017-12-19</span>
                    </a>
                    <a src="###">
                        <i>
                            <img src={gg} />
                        </i>
                        <h3>Seila Malo：人像另类创意 婀娜美人鱼</h3>
                        <span>2017-12-19</span>
                    </a>
                </div>
            </div>
        </Tabs>
        </WhiteSpace>
    </div>
);

export default TabExample;