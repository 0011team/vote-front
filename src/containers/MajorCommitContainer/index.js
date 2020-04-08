import React, { Component, Fragment } from 'react'

class MajorCommitContainer extends Component {

  render () {
    const { repos } = this.props
    return (
      <Fragment>     
        <div className="cnts-bgbox">
          <div className="inner">
            <h3>중요법안 찬반 현황</h3>
            <div className="quest">
              <button type="button">?</button>
              <p>국회의원은 1개 이상의 상임위에서 활동합니다. 상임위에서는 소관 의안과 청원 심사, 정부기관 감사 활동을 합니다. 의정활동의 핵심입니다.</p>
            </div>
            <div className="box-list">
              <ul>
                <li>
                  <p>감염병 예방 및 관리법 - 감영병 의심자에 대한 격리 감염병 예방 및 관리법 - 감영병 의심자에 대한 격리</p>
                  <strong>찬성</strong>
                  <span>소속정당의견 : 찬성</span>
                </li>
                <li>
                  <p>감염병 예방 및 관리법 - 감영병 의심자에 대한 격리 감염병 예방 및 관리법 - 감영병 의심자에 대한 격리</p>
                  <strong>찬성</strong>
                  <span>소속정당의견 : 찬성</span>
                </li>
                <li>
                  <p>감염병 예방 및 관리법 - 감영병 의심자에 대한 격리 감염병 예방 및 관리법 - 감영병 의심자에 대한 격리</p>
                  <strong>반대</strong>
                  <span>소속정당의견 : 찬성</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }

}

export default MajorCommitContainer;