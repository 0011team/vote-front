import React, { Component, Fragment } from 'react'
// import './AnalyzeContainer.scss';

class AnalyzeContainer extends Component {

  render () {
    const { info } = this.props
    
    return (
      <Fragment>     
        <div className="cnts-box">
          <div className="inner">
            <h3>대표발의법안 중 가결법안 분석</h3>
            🔍 <strong>가결법안 중요도</strong><br/>
            <p>‘가결법안의 중요도’는 의원의 입법활동 역량과 진정성을 보여줍니다.
            입법 성과를 내고자 용어 몇 개만 바꿔 새로운 법안입법 성과를 내고자 용어 몇 개만 바꿔 새로운 법안을 내는 경우가 많기 때문입니다.<br/>
            뉴스타파의 도움을 받아, <a style={{ textDecoration: "underline"}} href="https://newstapa.org/article/VCGL-" target="_blank"> 
            국회작동법 프로젝트 분석 데이터</a>를 제공받았고, 20.1.9일자 이후 법안은 모다정에서 가져왔습니다. <br/>
            법안의 중요도에 따라 4개 등급으로 나눴습니다.
            
            A 👍👍👍 사회 이슈 해결 & 민생 영향이 큰 법안<br/>
            B 👍👍 문제 해결과 정책추진에 도움을 주는, 의미있는 법안<br/>
            C 👍 단순 조문 추가나 법체계상 미비점을 보완하기 위한 법안<br/>
            D ☠️ 단순 용어변경, 벌금형 통일, 용어순화 등 건수늘리기 법안
            </p>
            <div className="data-graph">
              <ul>
                <li>
                  <em>A  👍👍👍</em>
                  <div>
                    <span style={{ width:  `${((info.active.analysis_info["A"].length/info.active.representative_approval_bill.length)*100).toFixed(2)}%`  }}>
                      <i>{ info.active.analysis_info["A"].length }건, {`${((info.active.analysis_info["A"].length/info.active.representative_approval_bill.length)*100).toFixed(2)}%`}</i>
                    </span>
                  </div>
                </li>
                <li>
                  <em>B  👍👍 </em>
                  <div>
                    <span style={{ width:  `${((info.active.analysis_info["B"].length/info.active.representative_approval_bill.length)*100).toFixed(2)}%`  }}>
                    <i>{ info.active.analysis_info["B"].length }건, {`${((info.active.analysis_info["B"].length/info.active.representative_approval_bill.length)*100).toFixed(2)}%`}</i></span>
                  </div>
                </li>
                <li>
                  <em>C  👍 </em>
                  <div>
                  <span style={{ width:  `${((info.active.analysis_info["C"].length/info.active.representative_approval_bill.length)*100).toFixed(2)}%`  }}>
                  <i>{ info.active.analysis_info["C"].length }건, {`${((info.active.analysis_info["C"].length/info.active.representative_approval_bill.length)*100).toFixed(2)}%`}</i></span>
                  </div>
                </li>
                <li>
                  <em>D  ☠️ </em>
                  <div>
                    <span style={{ width:  `${((info.active.analysis_info["D"].length/info.active.representative_approval_bill.length)*100).toFixed(2)}%`  }}>
                    <i>{ info.active.analysis_info["D"].length }건, {`${((info.active.analysis_info["D"].length/info.active.representative_approval_bill.length)*100).toFixed(2)}%`}</i></span>
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

export default AnalyzeContainer;