import NextHead from 'next/head'
import { string } from 'prop-types'

const defaultDescription = '모두다정치 - 우리 지역구의 21대 후보와 20대 의원의 활동을 확인하세요. '
const defaultOGURL = 'https://vote.0011.team/'
const defaultOGImage = 'https://seeso-cpms.s3-ap-northeast-1.amazonaws.com/uploads/modajung.png'

const Meta = (props) => (
  <NextHead>
    <meta charSet="UTF-8" />
    <title>{'모두다정치'}</title>
    <meta name="description" content={props.description || defaultDescription} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta itemprop="name" content="모두다정치" />
    <meta itemprop="description" content="모두다정치 - 우리 지역구의 21대 후보와 20대 의원의 활동을 확인하세요." />
    <meta itemprop="image" content="https://seeso-cpms.s3-ap-northeast-1.amazonaws.com/uploads/modajung.png" />
    <meta property="description" content="모두다정치 - 우리 지역구의 21대 후보와 20대 의원의 활동을 확인하세요." />
  
    <link rel="icon" sizes="192x192" href="/static/next.png" />
    <link rel="apple-touch-icon" href="/static/next.png" />
    <link rel="mask-icon" href="/static/favicon-mask.svg" color="#49B882" />
    <link rel="icon" href="/static/favicon.ico" />

    <meta property="og:type" content="website" />
    <meta property="og:title" content="모두다정치 - 우리 지역구의 21대 후보와 20대 의원의 활동을 확인하세요." />
    <meta property="og:url" content={props.url || defaultOGURL} />
    <meta property="og:description" content={props.description || defaultDescription} />

    <meta name="twitter:site" content={props.url || defaultOGURL} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content={props.ogImage || defaultOGImage} />
    <meta property="og:image" content={props.ogImage || defaultOGImage} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
  </NextHead>
)

Meta.propTypes = {
  title: string,
  description: string,
  url: string,
  ogImage: string
}

export default Meta
