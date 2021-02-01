import { Anchor } from 'styles/anchor';
import { ChildrenProps } from 'types';
import Image from 'next/image';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import { theme } from 'theme';

const Block = styled(Typography)`
  padding: 0 ${theme.spacing(2)}px ${theme.spacing()}px;
  text-align: justify;
`;

const Em = styled(Typography)`
  font-style: italic;
`;

const Strikethrough = styled(Typography)`
  text-decoration: line-through;
`;

const Strong = styled(Typography)`
  font-weight: ${theme.typography.fontWeightBold};
`;

const Underline = styled(Typography)`
  text-decoration: underline;
`;

interface IImageContainerProps {
  height: number;
  maxWidth: number;
}

const ImageContainer = styled.section<IImageContainerProps>`
  height: ${({ height }) => `${height}px`};
  width: calc(100% - ${theme.spacing(4)}px);
  margin: 0 auto ${theme.spacing()}px auto;
  max-width: ${({ maxWidth }) => `${maxWidth}px`};
  position: relative;
`;

interface IImage {
  node: {
    _type: `image`;
    height: number;
    maxWidth: number;
    url: string;
    _key?: string;
  };
}

export const serializers = {
  marks: {
    em({ children }: ChildrenProps): JSX.Element {
      return <Em as="span">{children}</Em>;
    },
    link({ children, ...props }: ChildrenProps): JSX.Element {
      return (
        <Anchor {...props} rel="noopener noreferrer" target="_blank">
          {children}
        </Anchor>
      );
    },
    strong({ children }: ChildrenProps): JSX.Element {
      return <Strong as="span">{children}</Strong>;
    },
    underline({ children }: ChildrenProps): JSX.Element {
      return <Underline as="span">{children}</Underline>;
    },
    [`strike-through`]: ({ children }: ChildrenProps): JSX.Element => {
      return <Strikethrough as="span">{children}</Strikethrough>;
    },
  },
  types: {
    block({ children }: ChildrenProps): JSX.Element {
      return <Block>{children}</Block>;
    },
    image({ node }: IImage): JSX.Element {
      return (
        <ImageContainer height={node.height} maxWidth={node.maxWidth}>
          <Image
            layout="fill"
            objectFit="cover"
            priority={true}
            quality={100}
            src={node.url}
          />
        </ImageContainer>
      );
    },
  },
};
