import { useContext } from 'react'
import { Context } from '../utils/context'
import Header from '../components/header'
import Layout from '../components/layout'
import Text from '../components/text'

const Main = () => {
  const { isEditing } = useContext(Context)

  return (
    <Layout>
      <Header />
      <Text>
        Replace words and links
      </Text>
    </Layout>
  )
}

export default Main
