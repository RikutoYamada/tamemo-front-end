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
  isLoading?: boolean
  options: option[]
  selectedId: string
  onChange: (event: SelectChangeEvent) => void
}

export const SelectBox = (
  {
    size = 'small',
    sx = { width: '49%' },
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
        value={props.isLoading ? '1' : props.selectedId}
        label={props.label}
        onChange={props.onChange}
      >
        {props.isLoading ? (
          <MenuItem value='1'>
            読み込み中...
          </MenuItem>
        ) : (props.options.map(option => (
          <MenuItem key={option.id} value={option.id}>{option.name}</MenuItem>
        )))}
      </Select>
    </FormControl>
  )
}