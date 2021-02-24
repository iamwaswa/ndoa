import Image from 'next/image';
import { useTheme } from '@material-ui/core';

export function Logo(): JSX.Element {
  const theme = useTheme();
  return (
    <Image
      height={theme.breakpoints.up(`sm`) ? `80` : `60`}
      width={theme.breakpoints.up(`sm`) ? `80` : `60`}
      src="/logo.svg"
    />
  );
}
