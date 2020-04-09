import React, { Component, Fragment } from 'react'
import './DetailInfoContainer.scss';

class DetailInfoContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      attendActv: false,
      r_app_actv: false,
      r_bill_actv: false,
      propertyActv: false,
      voteActv: false,
      attendRateActv: false
    };
  }
  
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
    const watchPeople = "http://watch.peoplepower21.org/";
    
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
                  <p>🙋‍♂️ 본회의 출석률</p>
                  <strong>{info.active.attend_rate}%<br />{info.active.ranking.attend_rate.ranking}위 / {info.active.ranking.attend_rate.total}명</strong>
                  <div className="quest">
                  <button type="button"
                      onClick={( () => { this.setState({ "attendRateActv" : !this.state.attendRateActv }) })}
                    >?</button>
                    <p className={this.state.attendRateActv ? "actv" : ""}>
                      ‘본회의 출석률’은 의원의 <strong>입법활동 성실성</strong>을 보여줍니다. 본회의에서 국회 의사를 최종 결정하며, 의원은 본회의 표결(찬성, 반대, 기권)을 통해 정책과 법안에 대한 입장을 드러냅니다.<br/>
                      해당 정보는 <a href={`${watchPeople}/${info.active.peoplepower21_url}`} target="_blank">열려라국회</a>의 정보를 가공하였습니다. 
                    </p>
                  </div>
                </li>
                <li>
                  <p>🙋‍♀️ 상임위원회 출석률</p>
                  {info.active.committee_attend_info ? this.modifyCommiteeInfo(info.active.committee_attend_info) : "해당 의원의 상임위 정보를 가지고 올 수 없습니다."}
                  <div className="quest">
                    <button type="button"
                      onClick={( () => { this.setState({ "attendActv" : !this.state.attendActv }) })}
                    >?</button>
                    <p className={this.state.attendActv ? "actv" : ""} >
                      ‘상임위원회 출석률’은 의원의 <strong>입법활동 성실성</strong>을 보여줍니다. 국회의원은 자신이 속한 상임위원회에 출석하여 소관 의안과 청원 심사, 정부기관 감사 활동을 수행합니다. 의원의 핵심 입법활동입니다.
                      해당 정보는 <a href={`${watchPeople}/${info.active.peoplepower21_url}`} target="_blank">열려라국회</a>의 정보를 가공하였습니다. 
                    </p>
                  </div>
                </li>
                <li>
                  <p>✍️ 대표발의 법안</p>
                  <strong>{Number(info.representative_bill_count)}개 <br />{info.active.ranking.representative_bill.ranking}위 / {info.active.ranking.representative_bill.total}명</strong>
                  <div className="quest">
                    <button type="button"
                      onClick={( () => { this.setState({ "r_bill_actv" : !this.state.r_bill_actv }) })}
                    >?</button>
                    <p className={this.state.r_bill_actv ? "actv" : ""}>
                      ‘대표발의 법안’은 의원의 <strong>입법활동 역량</strong>을 보여줍니다. 국회의원 모두 입법권을 갖는 헌법기관입니다. 법안을 대표로 발의하는 의원은 법률안의 기초를 마련하고, 입법을 주도합니다.  
                    </p>
                  </div>
                </li>
                <li>
                  <p>👊 대표발의 법안 가결률</p>
                  <strong>
                    {Number(info.representative_bill_approval_count)}개 ({
                    (Number(info.representative_bill_approval_count)/Number(info.representative_bill_count)).toFixed(2)*100}%)
                    <br />{info.active.ranking.representative_approval_bill_rate.ranking}위 / {info.active.ranking.representative_approval_bill_rate.total}명</strong>
                  <div className="quest">
                    <button type="button"
                      onClick={( () => { this.setState({ "r_app_actv" : !this.state.r_app_actv }) })}
                    >?</button>
                    <p className={this.state.r_app_actv ? "actv" : ""}>
                    ‘대표발의 법안 가결률’은 의원의 <strong>입법활동 역량</strong>을 보여줍니다. 가결률은 야구로 치면 의원의 법안 타율입니다. 아무리 좋은 발의안도 국회 문턱을 넘지 못하면 세상을 바꿀 수 없습니다. 20대 국회에서 2만 건의 법안이 발의되었지만, 그 중 가결된 법안은 34%(7362건)에 불과합니다.
                    </p>
                  </div>
                </li>
                <li>
                  <p>🗳 20대 선거 득표율</p>
                  <strong>
                    {info.active.vote_count ? this.modifyCount(info.active.vote_count) : "해당 의원의 득표 정보를 가지고 올 수 없습니다."}
                  </strong>
                  <div className="quest">
                  <button type="button"
                      onClick={( () => { this.setState({ "voteActv" : !this.state.voteActv }) })}
                    >?</button>
                    <p className={this.state.voteActv ? "actv" : ""}>
                      국회의원 선거에서 유권자는 지역구 후보에게 1표, 지지 정당에 1표를 행사합니다. 지난 20대 선거에서 현역 의원이 몇 표를 받아 당선되었는지 확인해보세요.  
                    </p>
                  </div>
                </li>
                <li>
                  <p>💰 신고재산(2020년기준)</p>
                  <strong>{Number(info.active.property/100000).toFixed(2)}억원<br />{info.active.ranking.property.ranking}위 / {info.active.ranking.property.total}명</strong>
                  <div className="quest">
                    <button type="button"
                      onClick={( () => { this.setState({ "propertyActv" : !this.state.propertyActv }) })}
                    >?</button>
                    <p className={this.state.propertyActv ? "actv" : ""}>
                    국회의원 재산현황은 공직자윤리법에 따라 매년 한 차례 공개됩니다. <br/>
                    해당 정보는 <a href={`${watchPeople}/${info.active.peoplepower21_url}`} target="_blank">열려라국회</a>의 정보를 가공하였습니다. </p>
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
                
                {/* <li>
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
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }

}

export default DetailInfoContainer;