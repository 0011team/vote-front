import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { Map } from 'immutable'
import { connect } from 'react-redux'
import { getTopRepos } from 'actions/repos'
import { query20sLawmaker } from 'utils/services/api'

import TopInfoContainer from 'containers/TopInfoContainer'
import DetailInfoContainer from 'containers/DetailInfoContainer'
import AnalyzeContainer from 'containers/analyzeContainer'
import MajorCommitContainer from 'containers/MajorCommitContainer'

class LawmakerDetail20 extends Component {

  static async getInitialProps(ctx) {

    const { district } = ctx.query;

    const res = await query20sLawmaker(district).
      then((res) => {
        return res
      });
    return { lawMakerInfo: res.data }
  }

  constructor(props) {
    super(props);
    this.state = {

      lawMakerInfo: '',
    };
    // this.handleChangeState = this.handleChangeState.bind(this)
    // this.handleDistrictSearch = this.handleDistrictSearch.bind(this)
  }

  render() {
    const { district } = this.props.router.query
    const { lawMakerInfo } = this.props;

    return (
      <Fragment>
        <TopInfoContainer
          district={district}
          info={lawMakerInfo}
        />
        <DetailInfoContainer
          info={lawMakerInfo}
        />
        <AnalyzeContainer
          info={lawMakerInfo}
         />
        <MajorCommitContainer
          info={lawMakerInfo}
       />
      </Fragment>
    )
  }
}

export default LawmakerDetail20;
