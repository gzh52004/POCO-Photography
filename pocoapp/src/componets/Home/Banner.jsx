import React from 'react';
import { Carousel, WingBlank } from 'antd-mobile';
import '../../assets/css/Banner.css';

class Banner extends React.Component{
    state = {
        data: ['73/2019/0122/20/15481585504832281_64925705', '45/2018/0904/10/15360287056698622_64925705', '69/2019/0911/14/15681827915278859_200478990','64/2018/1213/14/15446824782201330_200478990'],
        imgHeight: 176,
      }
      componentDidMount() {
        // simulate img loading
        setTimeout(() => {
          this.setState({
            data: ['73/2019/0122/20/15481585504832281_64925705', '45/2018/0904/10/15360287056698622_64925705', '69/2019/0911/14/15681827915278859_200478990','64/2018/1213/14/15446824782201330_200478990'],
          });
        }, 100);
    }
    render(){
        return (
            <div>
                <WingBlank>
                    <Carousel
                    autoplay={false}
                    infinite
                    beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    afterChange={index => console.log('slide to', index)}
                    >
                    {this.state.data.map(val => (
                        <a
                        key={val}
                        href="http://www.alipay.com"
                        style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                        >
                        <img
                            src={`https://pic3.pocoimg.cn/image/poco/works/${val}.jpg`}
                            alt=""
                            style={{ width: '100%', verticalAlign: 'top' }}
                            onLoad={() => {
                            // fire window resize event to change height
                            window.dispatchEvent(new Event('resize'));
                            this.setState({ imgHeight: 'auto' });
                            }}
                        />
                        </a>
                    ))}
                    </Carousel>
                </WingBlank>
            </div>
        )
    }
}

export default Banner;