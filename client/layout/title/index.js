import Image from 'next/image';
import { Text } from 'grommet';
import { useDaysToGo } from 'hooks/daysToGo';

export function Title({ mobile }) {
  const daysToGo = useDaysToGo();

  return (
    <>
      <Image
        height={mobile ? `80` : `100`}
        width={mobile ? `80` : `150`}
        src="/logo.svg"
      />
      <Text margin={{ top: `small`, bottom: `medium` }} size="xxlarge">
        Waswa & Clare-Anne
      </Text>
      <Text margin={{ bottom: `xsmall` }} size="xlarge">
        April 24th, 2021
      </Text>
      <Text size="xlarge">{daysToGo}</Text>
    </>
  );
}
