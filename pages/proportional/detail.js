import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { Map } from 'immutable'
import { connect } from 'react-redux'
import { getTopRepos } from 'actions/repos'

import TopInfoContainer from 'containers/TopInfoContainer'
import RecordContainer from 'containers/RecordContainer'
import SocialNetworkContainer from 'containers/SocialNetworkContainer'

class PRLawmakerDetail20 extends Component {
  
  render () {
    return (
      <Fragment>     
          <TopInfoContainer />
          <RecordContainer />
          <SocialNetworkContainer />
      </Fragment>
    )
  }
}

export default PRLawmakerDetail20;
