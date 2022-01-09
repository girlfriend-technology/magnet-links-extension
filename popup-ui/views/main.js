import Header from '../components/header'
import Layout from '../components/layout'
import Text from '../components/text'
import Editor from './editor'

const Main = () => {
  return (
    <Layout>
      <Header />
      <Text>
        When a webpage has a link to a magnet uri scheme, Magnet Links will point it to your choice of website, such as Put.io, or your clipboard.
      </Text>
      <Editor />
    </Layout>
  )
}

export default Main
