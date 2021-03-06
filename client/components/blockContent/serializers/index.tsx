import { Anchor } from 'styles/anchor';
import { BlockStyleEnum } from 'enums';
import { ChildrenProps } from 'types';
import Image from 'next/image';
import Link from 'next/link';
import { Text } from 'styles/text';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import { theme } from 'theme';

interface ILinkProps extends ChildrenProps {
  mark: {
    href: string;
  };
}

const StyledAnchor = styled(Anchor)`
  ${({ color }) => {
    if (color) {
      return `
        color: ${color};
      
        &:hover,
        &:focus {
          color: ${color};
        }
      `;
    }
  }}
`;

const Em = styled(Typography)`
  font-style: italic;
`;

const Strikethrough = styled(Typography)`
  text-decoration: line-through;
`;

const Strong = styled(Typography)`
  ${({ theme }) => `
    font-weight: ${theme.typography.fontWeightBold};
  `}
`;

const Underline = styled(Typography)`
  text-decoration: underline;
`;

interface IImageContainerProps {
  maxWidth: number;
}

const ImageContainer = styled.section<IImageContainerProps>`
  width: 100%;
  margin: 0 auto ${theme.spacing(3)}px auto;
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

interface IBlockProps extends ChildrenProps {
  node: {
    style?: BlockStyleEnum;
  };
}

interface ISerializersConfig {
  linkColor?: string;
}

export function serializers({
  linkColor,
}: ISerializersConfig): Record<string, unknown> {
  return {
    marks: {
      em({ children }: ChildrenProps): JSX.Element {
        return <Em as="span">{children}</Em>;
      },
      link({ children, mark }: ILinkProps): JSX.Element {
        return mark.href?.startsWith(`/`) ? (
          <Link href={mark.href}>
            <StyledAnchor href={mark.href} color={linkColor}>
              {children}
            </StyledAnchor>
          </Link>
        ) : (
          <StyledAnchor
            color={linkColor}
            href={mark.href}
            rel="noopener noreferrer"
            target="_blank"
          >
            {children}
          </StyledAnchor>
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
      block({
        children,
        node: { style = BlockStyleEnum.normal },
      }: IBlockProps): JSX.Element {
        return (
          <Text
            variant={
              style === BlockStyleEnum.normal ||
              style === BlockStyleEnum.blockquote
                ? `h6`
                : style
            }
          >
            {children}
          </Text>
        );
      },
      image({ node }: IImage): JSX.Element {
        return (
          <ImageContainer maxWidth={node.maxWidth}>
            <Image
              layout="intrinsic"
              priority={true}
              quality={100}
              height={node.height}
              width={node.maxWidth}
              src={node.url}
            />
          </ImageContainer>
        );
      },
    },
  };
}
