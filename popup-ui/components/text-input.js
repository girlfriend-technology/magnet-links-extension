const cx = 'mt-1 p-2 block w-full rounded-md border-yellow-500 border-2'

const TextInput = ({ className = cx, type = 'text', ...props }) => (
  <input type={type} className={className} {...props} />
)

export default TextInput
