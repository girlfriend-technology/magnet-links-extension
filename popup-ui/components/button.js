const cx = {
  primary: 'bg-yellow-500 font-semibold rounded-md py-2 px-3 mt-1 cursor-pointer',
  secondary: 'rounded-md py-2 px-3 mt-1 mr-2 cursor-pointer'
}

const Button = ({ children, className, theme, ...props }) => (
  <button className={className || theme === 'secondary' ? cx.secondary : cx.primary} {...props}>
    {children}
  </button>
)

export default Button
