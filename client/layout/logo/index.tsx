import Image from 'next/image';
import { theme } from 'theme';

export function Logo(): JSX.Element {
  return (
    <Image
      height={theme.breakpoints.up(`sm`) ? `80` : `60`}
      width={theme.breakpoints.up(`sm`) ? `80` : `60`}
      src="/logo.svg"
    />
  );
}
