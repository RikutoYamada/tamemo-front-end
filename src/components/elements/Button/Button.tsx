import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress'

export type ButtonProps = MuiButtonProps & {
  isLoading?: boolean
}

export const Button = ({
  children,
  sx = { color: 'white' },
  isLoading = false,
  ...props
}: ButtonProps) => {
  return (
    <MuiButton sx={sx} {...props}>
      {isLoading && <CircularProgress sx={sx} size={20} />}
      {children}
    </MuiButton>
  )
}
