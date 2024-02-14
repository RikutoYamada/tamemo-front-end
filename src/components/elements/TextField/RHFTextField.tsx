import { TextFieldProps as MuiTextFieldProps } from '@mui/material'
import { FieldValues, useController } from 'react-hook-form'

import { TextField } from '@/components/elements/TextField'
import { RHFControllerProps } from '@/types'

type CustomMuiTextFieldProps = Omit<MuiTextFieldProps, 'name' | 'onChange'>

export const RHFTextField = <T extends FieldValues>({
  name,
  control,
  ...props
}: RHFControllerProps<T> & CustomMuiTextFieldProps) => {
  const { field } = useController({ name, control })
  return <TextField name={field.name} onChange={field.onChange} {...props} />
}
