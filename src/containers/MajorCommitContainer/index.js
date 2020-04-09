import React, { Component, Fragment } from 'react'

class MajorCommitContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      majorActv: false,
    };
  }
  

  render () {
    const { info } = this.props    
    return (
      <Fragment>     
        <div className="cnts-bgbox">
          <div className="inner">
            <h3>중요법안 찬반 현황</h3>
            <div className="quest">
              <button type="button"
                onClick={( () => { this.setState({ "majorActv" : !this.state.majorActv }) })}
              >?</button>
              <p className={this.state.majorActv ? "actv" : ""}>
                지난 20대 국회의 임기 중의 주요법안에 대한 투표결과를 알려줍니다. 패스트트랙, 민생에 많은 영향을 미쳤던 여러 법안에 대해 국회의원의 투표현황을 보여줍니다. <br/>
                해당 정보는 <a href="http://www.peoplepower21.org/index.php?_filter=search&mid=PSPD_press&search_target=title_content&search_keyword=20%EB%8C%80&document_srl=1690586&listStyle=list" target="_blank">열려라국회</a>의 정보를 가공하였습니다. 


              </p>
            </div>
            <div className="box-list">
              <ul>
                {
                  info.active.major_bill.map((item) => {
                    let text = "" 
                    switch (item.vote) {
                      case "○":
                        text = "찬성"
                        break;
                      case "X":
                        text = "반대"
                        break;
                      default:
                        text = item.vote
                        break;
                        
                    }
                    return (
                      <li key={item.bill_id}>
                        <p>[{item.bill_id}] - {item.title}</p>
                        <strong>{text}</strong>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }

}

export default MajorCommitContainer;