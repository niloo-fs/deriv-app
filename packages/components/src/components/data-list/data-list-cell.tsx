import classNames from 'classnames';
import React from 'react';

type TRenderCellContent<T> = {
    cell_value: object;
    is_footer: boolean;
    passthrough: unknown;
    row_obj: T;
};
type TDataListCell<T, G> = {
    className: string;
    column: {
        col_index: number | string;
        title: string;
        renderCellContent: (props: TRenderCellContent<T>) => React.ReactNode;
        renderHeader: (prop: renderHeaderType) => React.ReactNode;
    };
    is_footer: boolean;
    passthrough: G;
    row: T;
};

type renderHeaderType = { title: string };
const DataListCell = <T, G>({ className, column, is_footer, passthrough, row }: TDataListCell<T, G>) => {
    if (!column) return null;
    const { col_index, title } = column;
    const cell_value = row[col_index];
    return (
        <div className={classNames(className, column.col_index)}>
            {!is_footer && (
                <div className={classNames(`${column.col_index}__row-title`, 'data-list__row-title')}>
                    {column.renderHeader ? column.renderHeader({ title }) : title}
                </div>
            )}
            <div className='data-list__row-content'>
                {column.renderCellContent
                    ? column.renderCellContent({ cell_value, is_footer, passthrough, row_obj: row })
                    : cell_value}
            </div>
        </div>
    );
};

export default React.memo(DataListCell);
