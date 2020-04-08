import React, { Component, Fragment } from 'react'
// import './AnalyzeContainer.scss';

class AnalyzeContainer extends Component {

  render () {
    const { info } = this.props
    console.log(info.active)
    
    return (
      <Fragment>     
        <div className="cnts-box">
          <div className="inner">
            <h3>대표발의법안 중 가결법안 분석</h3>
            <span>(뉴스타파의 A-D안으로 분석하였습니다)</span>
            <div className="data-graph">
              <ul>
                <li>
                  <em>A</em>
                  <div>
                    <span style={{ width:  `${((info.active.analysis_info["A"].length/info.active.representative_approval_bill.length)*100).toFixed(2)}%`  }}>
                      <i>{ info.active.analysis_info["A"].length }건, {`${((info.active.analysis_info["A"].length/info.active.representative_approval_bill.length)*100).toFixed(2)}%`}</i>
                    </span>
                  </div>
                </li>
                <li>
                  <em>B</em>
                  <div>
                    <span style={{ width:  `${((info.active.analysis_info["B"].length/info.active.representative_approval_bill.length)*100).toFixed(2)}%`  }}>
                    <i>{ info.active.analysis_info["B"].length }건, {`${((info.active.analysis_info["B"].length/info.active.representative_approval_bill.length)*100).toFixed(2)}%`}</i></span>
                  </div>
                </li>
                <li>
                  <em>C</em>
                  <div>
                  <span style={{ width:  `${((info.active.analysis_info["C"].length/info.active.representative_approval_bill.length)*100).toFixed(2)}%`  }}>
                  <i>{ info.active.analysis_info["C"].length }건, {`${((info.active.analysis_info["C"].length/info.active.representative_approval_bill.length)*100).toFixed(2)}%`}</i></span>
                  </div>
                </li>
                <li>
                  <em>D</em>
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