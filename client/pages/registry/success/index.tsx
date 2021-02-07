import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Head from 'next/head';
import Link from 'next/link';
import { PageProps } from 'types';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
`;

export default function RegistrySuccessPage({ title }: PageProps): JSX.Element {
  return (
    <>
      <Head>
        <title>{title} | Success</title>
      </Head>
      <Container>
        <Typography>
          We have received your gift! Thank you so much for your contribution to
          our wedding, may God Bless you during these trying times.
        </Typography>
        <Typography>Waswa and Clare-Anne</Typography>
        <Link href="/registry">
          <Button>Back to Registry</Button>
        </Link>
      </Container>
    </>
  );
}
