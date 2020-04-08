import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { Map } from 'immutable'
import { connect } from 'react-redux'
import { getTopRepos } from 'actions/repos'
import { queryAddress } from 'utils/services/api'

import SearchDistrictContainer from 'containers/SearchDistrictContainer'
import ProportionalContainer from 'containers/PRContainer'

class Home extends Component {

  static async getInitialProps (ctx) {
    const res = await queryAddress().
      then((res) => {
        return res
      });
    return {states : res.data }
  }

  constructor(props) {
    super(props);
    this.state = {
      hidden: false,
      districtActive: true,
      stateValue: "",
      provinceList: [], 
      uniqueProvinceList: [],
      selectedDistricts: ""
    };
    this.handleChangeState = this.handleChangeState.bind(this)
    this.handleDistrictSearch = this.handleDistrictSearch.bind(this)
  }


  componentDidMount() {
    this.setState({
      stateValue: '서울특별시'
    });
    
    const towns = queryAddress('서울특별시').then((res) => {
      
      let copyData = res.data;
      this.setState({
        provinceList: res.data,
        uniqueProvinceList: this.uniqByList(copyData, it => it.province )
      })
    }); 
  }


  uniqByList = (data, key) => {
    return [
      ...new Map(
        data.map(x => [key(x), x])
      ).values()
    ]
  }
  

  handleTab = (type) => {
    if (type == 'district') {
      this.setState({ districtActive : true})
    } else {
      this.setState({ districtActive : false})
    } 
  }

  handleChangeState = async (e) =>  {
    e.preventDefault();
    this.setState({
      stateValue: e.target.value
    });
    const towns = await queryAddress(e.target.value).then((res) => {
      this.setState({
        provinceList: res.data,
        uniqueProvinceList: this.uniqByList(res.data, it => it.province )
      })
    }); 
  }

  handleChangeDistrict = (e) =>  {
    const { provinceList } = this.state;
    e.preventDefault();
    
    let selected = [];
    provinceList.map( (item) => {
        if (item.province == event.target.value) {
          selected.push(item)  
      }
    })
    return this.setState({
        selectedDistricts: selected
    })
  }

  handleDistrictSearch = (e, district) => {
    e.preventDefault();
    this.props.router.push(`/district?district=${district.name}`)
    // this.props.router.push(`/district/20/detail?district=${district.name}`)
  }

  render () {
    const { states } = this.props
    const { provinceList, selectedDistricts, uniqueProvinceList} = this.state;

    return (
      <Fragment>
        <main id="snContent">
          <div className="topInfo">
            <div className="tab">
              <ul>
                <li className={this.state.districtActive ?  "selected" : '' }>
                  <a onClick={this.handleTab.bind(this, 'district')} href="#">지역구</a>
                </li>
                {/* <li className={!this.state.districtActive ?  "selected" : '' }>
                  <a onClick={this.handleTab.bind(this, 'pr')} href="#">비례대표</a>
                </li> */}
              </ul>
            </div>
            { this.state.districtActive ? (<div className="search">
              <div>
              <select value={this.state.provinceValue} onChange={this.handleChangeState}>
              {
                states.map( (item, index) => <option key={index} value={item}>{item}</option>) 
              }
              </select>
              <select title="선거구 선택" onChange={this.handleChangeDistrict}>
              {
                uniqueProvinceList.length > 0 ? uniqueProvinceList.map( (item, index) => <option key={index} value={item.province}>{item.province}</option>) : <option>시군구명</option> 
              }
              </select>
              </div>
              {
                selectedDistricts.length > 0 ? selectedDistricts.map((item) => {
                return (
                  <button key={item.id} type="submit" 
                  onClick={(e)=> this.handleDistrictSearch(e, item.district)}>
                    {item.district.name}으로 검색
                    <br/><span>({item.town.join(',')})</span>
                  </button>
                )}) : ""
              }
              <button type="`ssubmit">내 위치에서 검색</button>
            </div>) : 
            (<div className="candidacy">
              <h2>후보정당</h2>
              <div>
                <ul>
                  <li>
                    <a href="#">
                        <div className="logo">
                            <img src="/static/images/logo01.png" alt="" />
                        </div>
                        <p>더불어민주당</p>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                        <div className="logo">
                            <img src="/static/images/logo02.png" alt="" />
                        </div>
                        <p>미래통합당</p>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                        <div className="logo">
                            <img src="/static/images/logo03.png" alt="" />
                        </div>
                        <p>미래한국당</p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>) }
          </div>
          { this.state.districtActive ? 
            <SearchDistrictContainer/> :
            <ProportionalContainer /> }
        </main>
      </Fragment>
    )
  }

  _goToAbout = () => {
    this.props.router.push('/about')
  }
}

export default Home;
