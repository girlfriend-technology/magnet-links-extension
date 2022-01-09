import { useContext } from 'react'
import { Context } from '../utils/context'
import Label from '../components/label'
import Select from '../components/select'
import map from 'lodash/map'
import get from 'lodash/get'
import find from 'lodash/find'
import modes from '../constants/modes'
import TextInput from '../components/text-input'

const Main = () => {
  const { data, setData } = useContext(Context)

  const handleModeChange = (e) => {
    const { value } = e.target
    const mode = find(modes, { name: value })
    setData({ mode })
  }

  const handleCustomPrefixChange = (e) => {
    const { value } = e.target
    setData({
      mode: {
        ...data.mode,
        prefix: value
      }
    })
  }

  return (
    <>
      <Label>
        Select a mode:
        <Select onChange={handleModeChange}>
          {map(modes, ({ name }) => (
            <option
              key={name}
              value={name}
              selected={name === data.mode.name}
            >
              {name}
            </option>
          ))}
        </Select>
      </Label>
      {get(data, 'mode.shouldUseCustomPrefix') && (
        <Label>
          Custom Prefix:
          <TextInput
            defaultValue={get(data, 'mode.prefix')}
            onChange={handleCustomPrefixChange}
          />
        </Label>
      )}
    </>
  )
}

export default Main
