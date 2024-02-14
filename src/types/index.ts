import { FieldValues, UseControllerProps } from 'react-hook-form'

export type RHFControllerProps<T extends FieldValues = FieldValues> = Pick<
  UseControllerProps<T>,
  'name' | 'control'
>
