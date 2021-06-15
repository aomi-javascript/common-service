export type FeeRateType = 'CAP' | 'PERCENTAGE' | 'CAP_PERCENTAGE';

/**
 * 费率类型
 */
export const feeRateType: Record<string, FeeRateType> = {
  cap: 'CAP',
  percentage: 'PERCENTAGE',
  capPercentage: 'CAP_PERCENTAGE'
};

/**
 * 费率
 */
export interface FeeRate {
  type: FeeRateType,
  value: number
  min?: number
  max?: number
}
