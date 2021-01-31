import Box from '@material-ui/core/Box';
import { Countdown } from './countdown';
import Image from 'next/image';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import { theme } from 'theme';

interface ITitleProps {
  mobile: boolean;
}

const TitleText = styled(Typography)`
  margin: ${theme.spacing()}px 0;
`;

const SubtitleText = styled(Typography)`
  margin-bottom: ${theme.spacing()}px;
`;

const CountdownContainer = styled(Box)`
  margin-top: ${theme.spacing()}px;
`;

export function Title({ mobile }: ITitleProps): JSX.Element {
  return (
    <>
      <Image
        height={mobile ? `60` : `80`}
        width={mobile ? `60` : `80`}
        src="/logo.svg"
      />
      <TitleText>Waswa & Clare-Anne</TitleText>
      <SubtitleText>April 24th, 2021</SubtitleText>
      <CountdownContainer>
        <Countdown />
      </CountdownContainer>
    </>
  );
}
