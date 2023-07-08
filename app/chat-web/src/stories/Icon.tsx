import Avatar, { AvatarProps } from '@mui/material/Avatar';

export type IconProps = {
  height: number;
  width: number;
  marginRight?: number
} & AvatarProps

const Icon: React.FC<IconProps> = ({ height, width, marginRight }) => <Avatar sx={{
  height: `${height}px`,
  width: `${width}px`,
  marginRight: `${marginRight}px`
}} />

export default Icon