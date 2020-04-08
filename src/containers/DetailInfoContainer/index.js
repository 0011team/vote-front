import React, { Component, Fragment } from 'react'
import './DetailInfoContainer.scss';

class DetailInfoContainer extends Component {
  modifyCount = (count) => {
    const regExp = /\(([^)]+)\)/;

    const matches = regExp.exec(count)
    const vote_count = count.substring(0, matches.index)
    const vote_rate = matches[1]

  return (<span><strong>{vote_count}표</strong> <br/>{vote_rate}%</span>)
  }

  modifyCommiteeInfo = (info) => {
    var obj = eval("("+info+")");
    var keys = Object.keys(obj)

    const dataGraph = (
      <div className="data-graph commitee-graph">
        <ul>
          {
            keys.map((item, i) => {
              return (<li key={i}>
                <em>{item}</em>
                <div>
                  <span style={{ width:  obj[item].replace(' ', '')  }}>
                    <i>{obj[item]}</i>
                  </span>
                </div>
              </li>)
            })
          }
        </ul>
      </div>
    )
    return dataGraph
  }

  render () {
    const { info } = this.props
    return (
      <Fragment>     
        <div className="cnts-bgbox">
          <div className="inner">
            <div className="box-list">
              <ul>
                {/* <li>
                  <p>유권자 1인당 획득 예산</p>
                  <strong>000,000,000원<br />000위 / 318명</strong>
                  <div className="quest">
                    <button type="button">?</button>
                    <p>국회의원은 1개 이상의 상임위에서 활동합니다. 상임위에서는 소관 의안과 청원 심사, 정부기관 감사 활동을 합니다. 의정활동의 핵심입니다.</p>
                  </div>
                </li> */}
                <li>
                  <p>20대 선거 득표율</p>
                  <strong>
                    {info.active.vote_count ? this.modifyCount(info.active.vote_count) : "해당 의원의 득표 정보를 가지고 올 수 없습니다."}
                  </strong>
                  <div className="quest">
                    <button type="button">?</button>
                    <p>국회의원은 1개 이상의 상임위에서 활동합니다. 상임위에서는 소관 의안과 청원 심사, 정부기관 감사 활동을 합니다. 의정활동의 핵심입니다.</p>
                  </div>
                </li>
                <li>
                  <p>본회의 출석율</p>
                  <strong>{info.active.attend_rate}%<br />{info.active.ranking.attend_rate.ranking}위 / {info.active.ranking.attend_rate.total}명</strong>
                  <div className="quest">
                    <button type="button">?</button>
                    <p>해당 신고재산은 열려라 국회에서 정보를 가져와서 사용했습니다.</p>
                  </div>
                </li>
                <li>
                  <p>상임위원회 출석율</p>
                  {info.active.committee_attend_info ? this.modifyCommiteeInfo(info.active.committee_attend_info) : "해당 의원의 상임위 정보를 가지고 올 수 없습니다."}
                  <div className="quest">
                    <button type="button">?</button>
                    <p>해당 신고재산은 열려라 국회에서 정보를 가져와서 사용했습니다.</p>
                  </div>
                </li>
                <li>
                  <p>신고재산(2020년기준)</p>
                  <strong>{Number(info.active.property/100000).toFixed(2)}억원<br />{info.active.ranking.property.ranking}위 / {info.active.ranking.property.total}명</strong>
                  <div className="quest">
                    <button type="button">?</button>
                    <p>해당 신고재산은 열려라 국회에서 정보를 가져와서 사용했습니다.</p>
                  </div>
                </li>
                {/* <li>
                  <p>후원금</p>
                  <strong>00%<br />000위 / 318명</strong>
                  <div className="quest">
                    <button type="button">?</button>
                    <p>국회의원은 1개 이상의 상임위에서 활동합니다. 상임위에서는 소관 의안과 청원 심사, 정부기관 감사 활동을 합니다. 의정활동의 핵심입니다.</p>
                  </div>
                </li> */}
                <li>
                  <p>대표발의법안</p>
                  <strong>{Number(info.representative_bill_count)}개 <br />{info.active.ranking.representative_bill.ranking}위 / {info.active.ranking.representative_bill.total}명</strong>
                  <div className="quest">
                    <button type="button">?</button>
                    <p>국회의원은 1개 이상의 상임위에서 활동합니다. 상임위에서는 소관 의안과 청원 심사, 정부기관 감사 활동을 합니다. 의정활동의 핵심입니다.</p>
                  </div>
                </li>
                <li>
                  <p>대표발의법안 중 가결비율</p>
                  <strong>
                    {Number(info.representative_bill_approval_count)}개 ({
                    (Number(info.representative_bill_approval_count)/Number(info.representative_bill_count)).toFixed(2)*100}%)
                    <br />{info.active.ranking.representative_approval_bill_rate.ranking}위 / {info.active.ranking.representative_approval_bill_rate.total}명</strong>
                  <div className="quest">
                    <button type="button">?</button>
                    <p>국회의원은 1개 이상의 상임위에서 활동합니다. 상임위에서는 소관 의안과 청원 심사, 정부기관 감사 활동을 합니다. 의정활동의 핵심입니다.</p>
                  </div>
                </li>
                <li>
                  <p>함께 제안한 법안</p>
                  <strong>{Number(info.proposal_count)}개 <br />{info.active.ranking.proposer_bill.ranking}위 / {info.active.ranking.proposer_bill.total}명 </strong>
                  <div className="quest">
                    <button type="button">?</button>
                    <p>국회의원은 1개 이상의 상임위에서 활동합니다. 상임위에서는 소관 의안과 청원 심사, 정부기관 감사 활동을 합니다. 의정활동의 핵심입니다.</p>
                  </div>
                </li>
                <li>
                  <p>함께 제안한 법안 중 가결비율</p>
                  <strong>{Number(info.approval_count)}개 ({
                    ((Number(info.approval_count)/Number(info.proposal_count))*100).toFixed(2)}%)
                    <br />{info.active.ranking.approval_bill_rate.ranking}위 / {info.active.ranking.approval_bill_rate.total}명 
                  </strong>
                  <div className="quest">
                    <button type="button">?</button>
                    <p>국회의원은 1개 이상의 상임위에서 활동합니다. 상임위에서는 소관 의안과 청원 심사, 정부기관 감사 활동을 합니다. 의정활동의 핵심입니다.</p>
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

export default DetailInfoContainer;