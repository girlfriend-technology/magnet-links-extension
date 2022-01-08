import Main from '../views/main'
import { ContextProvider } from '../utils/context'

const Index = () => (
  <ContextProvider>
    <Main />
  </ContextProvider>
)

export default Index
