import React, { Component, Fragment } from 'react'
// import './SocialNetworkContainer.scss';

class SocialNetworkContainer extends Component {

  render () {
    const { repos } = this.props
    return (
      <Fragment>     
        <div className="cnts-box">
          <div className="inner">
            <h3>소셜&amp;블로그</h3>
            <div className="sns-ch">
              <ul>
                <li><a href="#" className="sns facebook"><span>페이스북</span></a></li>
                <li><a href="#" className="sns twitter"><span>트위터</span></a></li>
                <li><a href="#" className="sns insta"><span>인스타그램</span></a></li>
                <li><a href="#" className="sns kakao"><span>카카오톡</span></a></li>
                <li><a href="#" className="sns youtube"><span>유튜브</span></a></li>
                <li><a href="#" className="sns blog"><span>블로그</span></a></li>
              </ul>
            </div>
            <div className="sns-list">
              <ul>
                <li>
                  <div className="cnts">
                    <div className="sns facebook"><span>페이스북</span></div>
                    <div className="info">
                      <span>20.02.28</span>
                      <p>#대통령 과 #여야4당_정당대표 가 #코로나19 관련, 국회와 정부가 초당적으로 국가적 역량을 모아 총력 대응하기로 #합의 했습니다. …</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="cnts">
                    <div className="sns twitter"><span>트위터</span></div>
                    <div className="info">
                      <span>20.02.28</span>
                      <p>#대통령 과 #여야4당_정당대표 가 #코로나19 관련, 국회와 정부가 초당적으로 국가적 역량을 모아 총력 대응하기로 #합의 했습니다. …</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="cnts">
                    <div className="sns kakao"><span>카카오톡</span></div>
                    <div className="info">
                      <span>20.02.28</span>
                      <p>지금은 의료진과 방역당국을 응원해야 할 때입니다. 우리는 함께 이겨낼 수 있습니다. #고마워요_질병관리본부 #힘내자_대한민국 …</p>
                    </div>
                  </div>
                  <div className="img">
                    <img src="images/@thumb.jpg" alt="" />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }

}

export default SocialNetworkContainer;