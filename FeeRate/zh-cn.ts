import { feeRateType } from './FeeRate';

/**
 * 费率类型文本说明
 */
export const feeRateTypeText = {
  [feeRateType.cap]: '固定值',
  [feeRateType.percentage]: '百分比',
  [feeRateType.capPercentage]: '封顶加百分比'
};
