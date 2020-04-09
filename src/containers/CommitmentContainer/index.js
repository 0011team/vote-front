import React, { Component, Fragment } from 'react'
import './CommitmentContainer.scss';

class CommitmentContainer extends Component {

  render () {
    const { repos } = this.props
    return (
      <Fragment>     
          <div className="commitment-box">
            <div className="inner">
              <ul className="pledge-list">
                <li>
                  <div className="logo">
                    <img src='/static/images/logo01.png' alt="더불어 민주당"  />
                  </div>
                  <div className="cnts">
                    0011 은
                  </div>
                </li>
              </ul>
              {/* <div className="btn">
                <a href="/proportional/detail">정당별 공약</a>
              </div> */}
            </div>
          </div>
      </Fragment>
    )
  }

}

export default CommitmentContainer;