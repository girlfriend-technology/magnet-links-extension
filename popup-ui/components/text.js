const cx = 'mb-4'

const Text = ({ children, className = cx, ...props }) => (
  <p className={className} {...props}>
    {children}
  </p>
)

export default Text
