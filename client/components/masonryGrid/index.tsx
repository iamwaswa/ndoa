import { Fragment, useMemo } from 'react';
import styled from 'styled-components';
import { FunctionType } from 'types';

type ColumnToIndexesMap = Record<string, Array<number>>;

type CombinedGap = {
  column: number | string;
  row: number | string;
};

type MasonryGridGap = number | string | CombinedGap;

interface IMasonrySpacingProps {
  spacing: MasonryGridGap;
}

const MasonryGridContainer = styled.div<IMasonrySpacingProps>`
  display: flex;

  & > * + * {
    margin-left: ${({ spacing }) => {
      const margin = spacingIsCombined(spacing) ? spacing.column : spacing;
      return spacingIsDigits(margin) ? `${margin}px` : margin;
    }};
  }
`;

const MasonryGridColumn = styled.div<IMasonrySpacingProps>`
  display: flex;
  flex-direction: column;

  & > * + * {
    margin-top: ${({ spacing }) => {
      const margin = spacingIsCombined(spacing) ? spacing.column : spacing;
      return spacingIsDigits(margin) ? `${margin}px` : margin;
    }};
  }
`;

interface IMasonryGridProps {
  gap: MasonryGridGap;
  numberOfItems: number;
  renderItem: FunctionType<[number], JSX.Element>;
  columns?: number;
}

export function MasonryGrid({
  gap,
  numberOfItems,
  columns = 2,
  renderItem,
}: IMasonryGridProps): JSX.Element {
  const columnToIndexesMap = useMemo((): ColumnToIndexesMap => {
    return createColumnToIndexesMap({
      numberOfColumns: columns,
      numberOfItems,
    });
  }, [columns, numberOfItems]);

  return (
    <MasonryGridContainer spacing={gap}>
      {Array(columns)
        .fill(null)
        .map(
          (_: null, index: number): JSX.Element => (
            <MasonryGridColumn key={index} spacing={gap}>
              {columnToIndexesMap[String(index)].map(
                (itemIndex: number): JSX.Element => (
                  <Fragment key={itemIndex}>{renderItem(itemIndex)}</Fragment>
                )
              )}
            </MasonryGridColumn>
          )
        )}
    </MasonryGridContainer>
  );
}

function spacingIsCombined(spacing: MasonryGridGap): spacing is CombinedGap {
  return typeof spacing !== `string` && typeof spacing !== `number`;
}

function spacingIsDigits(spacing: number | string): boolean {
  return /^\d+$/.test(String(spacing));
}

interface ICreateGridColumnToIndexesMapArgs {
  numberOfColumns: number;
  numberOfItems: number;
}

function createColumnToIndexesMap({
  numberOfColumns,
  numberOfItems,
}: ICreateGridColumnToIndexesMapArgs): ColumnToIndexesMap {
  const map = Array(numberOfColumns)
    .fill(null)
    .reduce(
      (map: ColumnToIndexesMap, _: null, index: number): ColumnToIndexesMap => {
        map[String(index)] = [];
        return map;
      },
      {}
    );

  let key = 0;

  Array(numberOfItems)
    .fill(null)
    .forEach((_: null, index: number): void => {
      map[String(key)].push(index);
      key = (key + 1) % numberOfColumns;
    });

  return map;
}
