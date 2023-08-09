import ja from 'date-fns/locale/ja'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import {
  DatePicker as MuiDatePicker,
  DatePickerProps as MuiDatePickerProps,
} from '@mui/x-date-pickers/DatePicker'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { TextFieldProps as MuiTextFieldProps } from '@mui/material'

type DatePickerProps = {
  size?: MuiTextFieldProps['size']
  sx?: MuiTextFieldProps['sx']
  value: MuiDatePickerProps<Date>['value']
  onCahnge: MuiDatePickerProps<Date>['onChange']
}

export const DatePicker = ({
  size = 'small',
  sx = { width: '35%' },
  ...props
}: DatePickerProps) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ja}>
      <MuiDatePicker
        value={props.value}
        onChange={props.onCahnge}
        slotProps={{
          toolbar: { hidden: true },
          textField: {
            size,
            sx,
          },
        }}
      />
    </LocalizationProvider>
  )
}
