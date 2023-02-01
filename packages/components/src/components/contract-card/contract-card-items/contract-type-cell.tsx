import React from 'react';
import { TGetContractTypeDisplay } from '../../types';
import IconTradeTypes from '../../icon-trade-types';

export type TContractTypeCellProps = {
    getContractTypeDisplay: TGetContractTypeDisplay;
    is_high_low: boolean;
    multiplier?: number;
    type?: string;
};

const ContractTypeCell = ({ getContractTypeDisplay, is_high_low, multiplier, type = '' }: TContractTypeCellProps) => (
    <div className='dc-contract-type'>
        <div className='dc-contract-type__type-wrapper'>
            <IconTradeTypes
                type={is_high_low ? `${type.toLowerCase()}_barrier` : type.toLowerCase()}
                className='category-type'
                size={24}
            />
        </div>
        <div className='dc-contract-type__type-label'>
            <div>{getContractTypeDisplay(type, is_high_low) || ''}</div>
            {multiplier && <div className='dc-contract-type__type-label-multiplier'>x{multiplier}</div>}
        </div>
    </div>
);

export default ContractTypeCell;
