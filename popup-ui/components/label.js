const cx = 'block font-semibold mb-4'

const Label = ({ children, className = cx, ...props }) => (
  <label className={className} {...props}>
    {children}
  </label>
)

export default Label
