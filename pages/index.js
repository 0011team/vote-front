import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { Map } from 'immutable'
import { connect } from 'react-redux'
import { getTopRepos } from 'actions/repos'
import { queryAddress } from 'utils/services/api'
import { geolocated, geoPropTypes } from "react-geolocated";

import SearchDistrictContainer from 'containers/SearchDistrictContainer'
import ProportionalContainer from 'containers/PRContainer'
import { renderStatic } from 'react-helmet'

class Home extends Component {

  // static async getInitialProps (ctx) {
    
  // }

  constructor(props) {
    super(props);
    this.state = {
      hidden: false,
      districtActive: true,
      provinceList: [], 
      uniqueProvinceList: [],
      selectedDistricts: "",
      states: [],
      stateValue: "서울특별시",
      townValue: ""
    };
    this.handleChangeState = this.handleChangeState.bind(this)
    this.handleDistrictSearch = this.handleDistrictSearch.bind(this)
  }


  componentDidMount() {
    this.setState({
      stateValue: '서울특별시'
    });
    const res = queryAddress().
      then((res) => {
        this.setState({
          states: res.data
        })
    });
    
    
    const towns = queryAddress('서울특별시').then((res) => {
      
      
      let provinceList = res.data;

      let copyData = provinceList;
      
      let uList = this.uniqByList(copyData, it => it.province );
      
      uList.unshift({
        province: "지역보기",
        town: []
      })
      
      this.setState({
        provinceList: provinceList,
        uniqueProvinceList:uList 
      })
    }); 

    const script = document.createElement("script");
    script.async = true;
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=996c4a7027802de18a9994dd3bb15083&autoload=false&libraries=services";
      
    document.head.appendChild(script);

    script.onload = () => {
      kakao.maps.load(() => {
        const option = {
            center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
            level: 3 // 지도의 확대 레벨
        };
        const el = this.mapRef;
        //지도생성
        const map = new kakao.maps.Map(el, option);
      });
    };
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
    window.location.href = `https://vote.0011.team/district?district=${district.name}`
    // this.props.router.push()
  }

  searchAddrFromCoords = (coords, callback) => {
    // 좌표로 행정동 주소 정보 요청
    const geocoder = new kakao.maps.services.Geocoder();
    geocoder.coord2RegionCode(coords.longitude, coords.latitude, callback);         
  }

  handleLocation = async () => {
    const { states } = this.state;

    const matchedState = await this.searchAddrFromCoords(this.props.coords, (result, status) => {
      // console.log(this.state.provinceList);
      if (status == "OK") {
        const state = result[0].region_1depth_name
        const town = result[0].region_2depth_name


        const matched = states.find( (item) => {
          return item == state
        })

        this.setState({
          stateValue: matched
        }, () => {
          queryAddress(matched).then((res) => {
            
            this.setState({
              provinceList: res.data,
              uniqueProvinceList: this.uniqByList(res.data, it => it.province )
            }, () => {
                let selected = [];
                var el = this.state.provinceList.find(item => item.province.includes(town));
                this.state.provinceList.map( (item) => {
                    if (item.province == el.province) {
                      selected.push(item)  
                  }
                })
                
                return this.setState({
                    selectedDistricts: selected,
                    townValue: el.province
                })
              
            })
          }); 
        })

      } else {
        alert("현재 위치의 해당정보를 가져올 수 없습니다. ")
      }
    })
  } 


  render () {
    const { states, provinceList, selectedDistricts, uniqueProvinceList} = this.state;
    const mapWidth = {
      width: 0,
      height: 0
    };
    
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
              <select 
                value={this.state.stateValue} 
                onChange={this.handleChangeState}
              >
              {
                states.map( (item, index) => <option key={index} value={item}>{item}</option>) 
              }
              </select>
              <select 
                title="선거구 선택" 
                value={this.state.townValue} 
                onChange={this.handleChangeDistrict}>
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
              {/* 지도 검색용  */}
              <div className="map_wrap" style={mapWidth}>
                <div className="map" id="map" ref={ref => (this.mapRef = ref)}></div>
              </div>
              <button onClick={this.handleLocation}>내 위치에서 검색</button>
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

// export default Home;


export default geolocated({
    positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
})(Home);