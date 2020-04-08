import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { Map } from 'immutable'
import { connect } from 'react-redux'
import { getTopRepos } from 'actions/repos'


class ProportionalContainer extends Component {
  static async getInitialProps ({ store, query }) {
    const lang = query.lang || 'javascript'
    await store.dispatch(getTopRepos({ lang }))
    return { lang }
  }

  componentDidMount () {
    const { getTopRepos } = this.props
    getTopRepos({ lang: 'ruby' })
  }

  render () {
    const { repos } = this.props
    return (
      <Fragment>
      <div className="cnts-box">
          <div className="inner">
            <h3>공약</h3>
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
            <ul className="pledge-list">
              <li>
                <div className="logo">
                    <img src="/static/images/logo01.png" alt="더불어 민주당" />
                </div>
                <div className="cnts">
                    여성폭력 OUT! 여성이 안전한 사회를 만들겠습니다. 더불어민주당은 강력한 여성폭력 근절 대책을 통해 ‘모든 여성이 …
                </div>
              </li>
              <li>
                <div className="logo">
                    <img src="/static/images/logo02.png" alt="미래통합당" />
                </div>
                <div className="cnts">
                    국가를 위하여 희생하거나 공헌한 분들을 위한 합리적인 예우와 보상을 위한 보훈정책들이 추진되어 오고 있지만, …
                </div>
              </li>
            </ul>
            <div className="btn">
                <a href="#">정당별 공약</a>
            </div>
          </div>
        </div>
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

ProportionalContainer.propTypes = {
  repos: PropTypes.instanceOf(Map).isRequired,
  getTopRepos: PropTypes.func.isRequired
}

export { ProportionalContainer }
export default connect(mapStateToProps, {
  getTopRepos
})(ProportionalContainer)
