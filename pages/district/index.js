import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { Map } from 'immutable'
import { connect } from 'react-redux'
import { getTopRepos } from 'actions/repos'
import { querySummaryLawmaker } from 'utils/services/api'

class LawmakerSummary extends Component {

  static async getInitialProps(ctx) {

    const { district } = ctx.query;
    const res = await querySummaryLawmaker(district).
      then((res) => {
        return res
      });
    return { summaryInfo: res.data }
  }

  constructor(props) {
    super(props);
    this.state = {
      lawMakerInfo: '',
      districtActive: true
    };
    // this.handleDistrictSearch = this.handleDistrictSearch.bind(this)
    // this.handleChangeState = this.handleChangeState.bind(this)
    // this.handleDistrictSearch = this.handleDistrictSearch.bind(this)
  }

  handleDistrictSearch = (e, district) => {
    e.preventDefault();
    
    // this.props.router.push(`/district/20/detail?district=${district.name}`)
  }

  render() {
    const { district } = this.props.router.query
    const { summaryInfo } = this.props;
    console.log(summaryInfo)

    return (
      <Fragment>
        <div className="topInfo">
          <div className="tab">
            <ul>
              <li className={this.state.districtActive ?  "selected" : '' }>
                <a href="#">지역구</a>
              </li>
              {/* <li className={!this.state.districtActive ?  "selected" : '' }>
                <a href="#">비례대표</a>
              </li> */}
            </ul>
          </div>
        </div>
        <div className="profile-w">
          <div className="img">
              <img src={summaryInfo.current_lawmaker.image_url} alt="" />
          </div>
          <p>우리 지역 {district}의 20대 국회의원은 <br />
            <strong>
            <a onClick={() => { this.props.router.push(`/district/20/detail?district=${district}&name=${summaryInfo.current_lawmaker.name}`) }} >
              {summaryInfo.current_lawmaker.name}
            </a>
            </strong> 입니다.<br/>
            <span style={{ fontSize: "12px"}}>{summaryInfo.current_lawmaker.name}의원의 20대성적을 확인하려면 사진을 클릭해주세요.</span>
          </p>
          
          <p>21대 국회의원 후보는 <br />
            <a onClick={() => this.props.router.push(`/district/21?district=${district}`) }>{summaryInfo.candidacy_lawmaker.length}명</a> 입니다.
          </p>
          <div className="btn">
            <a onClick={() => this.props.router.push(`/district/21?district=${district}`) }>후보 확인하기</a>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default LawmakerSummary;
