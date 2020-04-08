import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { Map } from 'immutable'
import { connect } from 'react-redux'
import { getTopRepos } from 'actions/repos'
import { querySummaryLawmaker } from 'utils/services/api'

class Lawmaker21 extends Component {

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
    
  }

  render() {
    const { district } = this.props.router.query
    const { summaryInfo } = this.props;

    return (
      <Fragment>
      <div className="top-info">
				<div className="location">
					<a onClick={() => { this.props.router.push(`/`) }}>지역구</a><em>{district}</em>
				</div>
				<div className="preg-w">
					<h2>현재 국회의원</h2>
					<div className="inner">
						<figure>
							<div className="img">
                <a onClick={() => { this.props.router.push(`/district/20/detail?district=${district}&name=${summaryInfo.current_lawmaker.name}`) }} >
								  <img src={summaryInfo.current_lawmaker.image_url} alt="" />
                </a>
							</div>
							<figcaption>{summaryInfo.current_lawmaker.name}</figcaption>
						</figure>
						<div className="info">
							<p><strong>대표 발의 법안</strong></p>
							<em>
                {Number(summaryInfo.current_lawmaker.active_info.representative_bill.length)}개 <br />{summaryInfo.current_lawmaker.active_info.ranking.representative_bill.ranking}위 / {summaryInfo.current_lawmaker.active_info.ranking.representative_bill.total}명
              </em>
						</div>
					</div>
				</div>
			</div>
			<div className="cnts-box">
				<div className="inner">
					<h3>21대 국회의원 후보</h3>
					<div className="candidacy">
						<div>
              
							<ul style={{width: 136*summaryInfo.candidacy_lawmaker.length}}>
								{
								summaryInfo.candidacy_lawmaker.map ((item, index) => {
									return (
                    <li key={index}>
                      <a onClick={() => this.props.router.push(`/district/21/candidate?district=${district}&name=${item.name}`)} >
                      <div className="logo">
                        <img src={item.image_url} alt="" />
                      </div>
                      <p>기호 {item.num}</p>
                      <p>{item.name}<br/><span style={{ fontSize: "12px"}}>{item.party}</span></p>
                      
                      </a>
                    </li>
									)
								})
								}
							</ul>
						</div>
					</div>
				</div>
			</div>
			{/* <div className="cnts-box">
				<div className="inner">
					<h2>키워드별 비교</h2>
					<div className="c-tab">
						<ul>
							<li><a href="#">여성</a></li>
							<li><a href="#">국회</a></li>
							<li><a href="#">보행자안전</a></li>
							<li><a href="#">청년신혼</a></li>
							<li><a href="#">재난대응</a></li>
							<li><a href="#">소상공인</a></li>
						</ul>
					</div>
					<div className="keyword-info">
						<p>키워드별정보출력키워드별정보출력키워드별정보출력키워드별정보출력키워드별정보출력키워드별정보출력키워드별정보출력키워드별정보출력키워드별정보출력키워드별정보출력키워드별정보출력키워드별정보출력</p>
					</div>
					<div className="data-graph">
						<ul>
							<li>
								<div className="img">
									<img src="images/@profile.png" alt="" />
								</div>
								<em>박주민</em>
								<p>박주민의 여성공약</p>	
							</li>
							<li>
								<div className="img">
									<img src="images/@profile.png" alt="" />
								</div>
								<em>박주민</em>
								<p>내용출력내용출력내용출력내용출력내용출력내용출력내용출력내용출력내용출력내용출력내용출력내용출력내용출력내용출력내용출력내용출력</p>	
							</li>
							<li>
								<div className="img">
									<img src="images/@profile.png" alt="" />
								</div>
								<em>박주민</em>
								<p>내용출력내용출력내용출력내용출력</p>
							</li>
							<li>
								<div className="img">
									<img src="images/@profile.png" alt="" />
								</div>
								<em>홍길동</em>
								<p>내용출력내용출력내용출력내용출력</p>
							</li>
							<li>
								<div className="img">
									<img src="images/@profile.png" alt="" />
								</div>
								<em>박주민</em>
								<div><span style={{ width:  "10%" }}><i>52건, 10%</i></span></div>
							</li>
							<li>
								<div className="img">
									<img src="images/@profile.png" alt="" />
								</div>
								<em>박주민</em>
								<div><span style={{ width:  "100%" }}><i>100건, 5%</i></span></div>
							</li>
							<li>
								<div className="img">
									<img src="images/@profile.png" alt="" />
								</div>
								<em>박주민</em>
								<div><span style={{ width:  "5%" }}><i>00건, 00%</i></span></div>
							</li>
						</ul>
					</div>
				</div>
			</div> */}
      </Fragment>
    )
  }
}

export default Lawmaker21;
