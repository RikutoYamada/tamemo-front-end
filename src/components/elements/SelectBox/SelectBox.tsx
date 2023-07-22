import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { FormControlProps } from '@mui/material/FormControl'

type option = {
  id: number
  name: string
}

type SelectBoxProps = {
  id: string
  label: string
  size?: FormControlProps['size']
  sx?: FormControlProps['sx']
  options: option[]
  selectedId: string
  onChange: (event: SelectChangeEvent) => void
}

//TODO initialize
const mainExpenseCategories = [
  { id: 1, name: '食費' },
  { id: 2, name: '交通費' }
]

export const SelectBox = (
  {
    size = 'small',
    sx = { width: '49%' },
    options = mainExpenseCategories,
    ...props
  }: SelectBoxProps
) => {
  const SelectComponentId = props.id
  const InputLabelComponentId = props.id?.concat('-label')

  return (
    <FormControl size={size} sx={sx}>
      <InputLabel id={InputLabelComponentId}>
        {props.label}
      </InputLabel>
      <Select
        labelId={InputLabelComponentId}
        id={SelectComponentId}
        value={props.selectedId}
        label={props.label}
        onChange={props.onChange}
      >
        {options.map(option => (
          <MenuItem key={option.id} value={option.id}>{option.name}</MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}