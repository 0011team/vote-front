import React, { Component, Fragment } from 'react'
import { query21Candidate } from 'utils/services/api'
import CandidacyContainer from 'containers/TopInfoContainer/CandidacyContainer'

import DetailInfoContainer from 'containers/DetailInfoContainer'
// import Modal from 'react-modal';


class Candidate21 extends Component {
  
  static async getInitialProps(ctx) {
    const { district, name } = ctx.query;
    const res = await query21Candidate(district, name).
      then((res) => {
        return res
      });
    return { candidateInfo: res.data }
  }

  constructor(props) {
    super(props);
    this.state = {
      lawMakerInfo: '',
      districtActive: true,
      sPaneOpenBottom: false,
      openPanel: false
    };
  }
  
  // componentDidMount() {
  //   Modal.setAppElement(this.el);
  // }

  handleDistrictSearch = (e, district) => {
    e.preventDefault();
    
  }

  render() {
    const { district } = this.props.router.query
    const { candidateInfo } = this.props;

    console.log(candidateInfo)
    return (
      <Fragment>
         <CandidacyContainer
          district={district}
          info={candidateInfo}
        />
        <div className="c-box">
          <div className="c-tab">
              {/* <ul>
                  <li><a href="#">여성</a></li>
                  <li><a href="#">국회</a></li>
                  <li><a href="#">보행자안전</a></li>
                  <li><a href="#">청년신혼</a></li>
                  <li><a href="#">재난대응</a></li>
                  <li><a href="#">소상공인</a></li>
              </ul> */}
          </div>
          <a href={`http://policy.nec.go.kr/plc/popup/initUMAPopup.do?sgId=20200415&subSgId=220200415&huboid=${candidateInfo.nec_id}`} target="_blank">
            <div className="keyword-info">
              공약보기(해당 의원의 선관위 공약 페이지로 이동합니다)
            </div>  
          </a>
          <a href={`http://info.nec.go.kr/electioninfo/candidate_detail_info.xhtml?electionId=0020200415&huboId=${candidateInfo.nec_id}`} target="_blank">
            <div className="keyword-info">
              전과, 체납, 학력 등 더 자세한 정보보기<br/>
              (해당 의원의 선관위 공약 페이지로 이동합니다)
            </div>
          </a>
          <div className="info-table">
            <ul> 
              <li>
                <h3>현재직업</h3>
                <p>{candidateInfo.job}</p>
              </li>
              <li>
                <h3>재산</h3>
                <p>{Number(Number(candidateInfo.property)/100000).toFixed(2)}억원</p>
              </li>
              <li>
                <h3>전과이력</h3>
                <p>{candidateInfo.conviction_count}</p>
              </li>
              <li>
                <h3>출마횟수</h3>
                <p>{candidateInfo.candidacy_count}</p>
              </li>
              <li>
                <h3>체납정보</h3>
                <p>현재 채납액: {candidateInfo.not_pay_tax_current}원</p>
                <p>최근 5년간 체납액: {Number(candidateInfo.not_pay_tax_five)*1000}원</p>
                <p>납부액: {candidateInfo.payed_tax}원</p>
              </li>

            </ul>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default Candidate21;
