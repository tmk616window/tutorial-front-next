import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/material/styles'

interface IconProps {
  height: number;
  width: number;
}

export const Icon = styled(Avatar)<IconProps>(({ height, width }) => ({
  height: `${height}px`,
  width: `${width}px`,
  marginRight: '40px',
}))

