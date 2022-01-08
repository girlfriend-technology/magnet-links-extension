const cx = 'text-xl font-semibold border-b-2 border-yellow-500 mb-3'

const Header = ({ children, className = cx, ...props }) => (
  <h1 className={className} {...props}>
    Magnet Links
  </h1>
)

export default Header
