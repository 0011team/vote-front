import React, { Component, Fragment } from 'react'
import './topInfoContainer.scss';

class TopInfoContainer extends Component {
  render () {
    const { district, info } = this.props
    console.log(this.props.router)
    return (
      <Fragment>     
        <div className="top-info-container">
          <div className="location">
              <a href={`/district/21?district=${district}`}>{district}</a>
              <em>20대 국회의원</em>
          </div>
          <div className="party-w">
              <div className="logo">
                  <img src={info.image_url} alt="" />
              </div>
              <div className="info">
                  <span>{info.party}</span>
                  <h2>{info.name}</h2>
                  <div>
                      <p>{info.birthday}</p>
                      <p>{info.education}</p>
                      <p>{info.address}</p>
                      <p>
                       {
                          info.career.split('\n').map( (line, index) => {
                            return (<span key={index}>{line}<br/></span>)
                          })
                        }
                      </p>
                  </div>
              </div>
          </div>
          
          <div className="c-tab">
              <ul>
                  <li><a href="#">입법</a></li>
                  {/* <li><a href="#">국회</a></li>
                  <li><a href="#">보행자안전</a></li>
                  <li><a href="#">청년신혼</a></li>
                  <li><a href="#">재난대응</a></li>
                  <li><a href="#">소상공인</a></li> */}
              </ul>
          </div>
          <div className="keyword-info">
            <p>키워드는 곧 제공될 예정입니다. </p>
          </div>
        </div>
      </Fragment>
    )
  }

}

export default TopInfoContainer;