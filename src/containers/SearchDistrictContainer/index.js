import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { Map } from 'immutable'
import { connect } from 'react-redux'
import { getTopRepos } from 'actions/repos'
import SearchResults from 'components/SearchResults'
import CommitmentContainer from '../CommitmentContainer';
import './SearchContainer.scss';

class SearchDistrictContainer extends Component {
  static async getInitialProps ({ store, query }) {
    const lang = query.lang || 'javascript'
    await store.dispatch(getTopRepos({ lang }))
    return { lang }
  }

  render () {
    const { repos } = this.props
    return (
      <Fragment>
          
        <CommitmentContainer /> 
      {/* <SearchResults repos={repos} /> */}
      </Fragment>
    )
  }

  _goToAbout = () => {
    this.props.router.push('/about')
  }
}

function mapStateToProps (state) {
  return {
    repos: state.repos
  }
}

SearchDistrictContainer.propTypes = {
  repos: PropTypes.instanceOf(Map).isRequired,
  getTopRepos: PropTypes.func.isRequired
}

export { SearchDistrictContainer }
export default connect(mapStateToProps, {
  getTopRepos
})(SearchDistrictContainer)
