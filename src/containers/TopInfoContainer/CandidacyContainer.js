import React, { Component, Fragment } from 'react'
import './topInfoContainer.scss';

class CandidacyContainer extends Component {
  render () {
    const { district, info } = this.props
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
        </div>
      </Fragment>
    )
  }

}

export default CandidacyContainer;