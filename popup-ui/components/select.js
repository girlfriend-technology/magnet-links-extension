const cx = 'mt-1 p-2 block w-full rounded-md border-yellow-500 border-2'

const Select = ({ className = cx, children, ...props }) => (
  <select className={className} {...props}>
    {children}
  </select>
)

export default Select
