import {
  Anchor,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Paragraph,
  Text,
} from 'grommet';

import Image from 'next/image';
import styled from 'styled-components';

const CardContainer = styled(Card)`
  max-width: 300px;
`;

const Description = styled(Paragraph)`
  margin: 0;
`;

const PrimaryButton = styled(Button)`
  color: var(--white);
`;

export function RegistryItem({ description, image, link, name, price }) {
  return (
    <CardContainer
      direction="column"
      gap="small"
      pad={{ horizontal: `medium`, vertical: `small` }}
    >
      <CardHeader align="center" justify="between">
        <Text>{name}</Text>
        <Text>${price}</Text>
      </CardHeader>
      <CardBody direction="column" gap="xsmall">
        <Image layout="responsive" height={200} width={275} src={image} />
        <Description>{description}</Description>
      </CardBody>
      <CardFooter justify="end">
        {link ? (
          <Anchor href={link} rel="noopener noreferrer" target="_blank">
            Purchase here
          </Anchor>
        ) : (
          <PrimaryButton primary={true} label="Buy" />
        )}
      </CardFooter>
    </CardContainer>
  );
}
