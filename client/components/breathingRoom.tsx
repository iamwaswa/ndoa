import { BreathingRoomSpacingEnum } from 'enums';
import { ChildrenProps } from 'types';
import styled from 'styled-components';

const BreathingRoomContainer = styled.div<Pick<IBreathingRoomProps, 'breathe'>>`
  padding: ${({ breathe, theme }) => {
    switch (breathe) {
      case BreathingRoomSpacingEnum.BOTH:
        return theme.spacing(2, 2);
      case BreathingRoomSpacingEnum.HORIZONTAL:
        return theme.spacing(0, 2);
      case BreathingRoomSpacingEnum.VERTICAL:
        return theme.spacing(2, 0);
      default:
        return 0;
    }
  }};
`;

interface IBreathingRoomProps extends ChildrenProps {
  breathe: BreathingRoomSpacingEnum;
}

export function BreathingRoom({
  children,
  breathe,
}: IBreathingRoomProps): JSX.Element {
  return (
    <BreathingRoomContainer breathe={breathe}>
      {children}
    </BreathingRoomContainer>
  );
}
