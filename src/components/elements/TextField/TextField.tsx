import React, { useState, MouseEvent } from 'react'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import { TextField as MuiTextField, TextFieldProps as MuiTextFieldProps } from '@mui/material'

export const TextField = (
  {
    sx = { width: '250px' },
    size = 'small',
    ...props
  }: MuiTextFieldProps
) => {

  const [showPassword, setShowPassword] = useState(false)

  const handleClickShowPassword = () => setShowPassword((show) => !show)
  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  }

  const determineType = () => {
    if (props.type === 'password') {
      return showPassword ? 'text' : 'password'
    } else {
      return props.type
    }
  }

  return (
    <MuiTextField
      sx={sx}
      size={size}
      InputProps={{
        endAdornment: props.type === 'password' && (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        )
      }}
      {...props}
      type={determineType()}
    />
  )
}