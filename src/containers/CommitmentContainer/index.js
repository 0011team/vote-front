import React, { Component, Fragment } from 'react'
import './CommitmentContainer.module.scss';

class CommitmentContainer extends Component {

  render () {
    const { repos } = this.props
    return (
      <Fragment>     
          <div className="commitment-box">
            <div className="inner">
              <ul className="pledge-list">
                <li>
                  < a href="/about">

                  
                    <div className="logo">
                      <img src='/static/images/vote-200410.png' alt="모다정"  />
                    </div>
                    <div className="cnts">
                      📩 모다정에서 우리 지역구 현역 의원 입법 활동 성적과 21대 총선 후보자 정보를 알려드립니다.
                    </div>
                  </a>
                </li>
                <li>
                  <a href="http://info.nec.go.kr/bizcommon/popup/popup_search_prevoteForm.xhtml?electionId=0020200415" target="_blank">
                    <div className="logo">
                      <img src='/static/images/vote-21.jpg' alt="사전투표"  />
                    </div>
                    <div className="cnts">
                      📍 사전투표 (4.10 - 04.11)<br/>
                      06-18시, 사전 투표가 진행됩니다. 근처의 사전투표소를 찾아보세요.
                    </div>
                  </a>
                </li>
              </ul>
              {/* <div className="btn">
                <a href="/proportional/detail">정당별 공약</a>
              </div> */}
            </div>
          </div>
      </Fragment>
    )
  }

}



export default CommitmentContainer;