import React, { PureComponent } from 'react'
import Link from 'next/link'
// import * as S from './_styles.module.scss' //throw an error in the terminal
import "./_styles.module.scss"

export default class Layout extends PureComponent {
  render () {
    return (
      <div className='header-w'>
        <header>
          <h1>
            <a href="/">0011</a><span>모두다정치</span>
          </h1>
				  {/* <div className="menu">
					  <button type="button"><span>메뉴</span></button>
				  </div> */}
        </header>
        <hr />
        { this.props.children }
      </div>
    )
  }
}
