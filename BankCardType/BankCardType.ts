export type BankCardType = 'DEBIT_CARD' | 'CREDIT_CARD' | 'SEMI_CREDIT_CARD' | 'PREPAID_CARD'

/**
 * @author 田尘殇Sean(sean.snow@live.com)
 * @date 2017/3/28
 */
export const bankCardType: Record<string, BankCardType> = {
  debitCard: 'DEBIT_CARD',
  creditCard: 'CREDIT_CARD',
  semiCreditCard: 'SEMI_CREDIT_CARD',
  prepaidCard: 'PREPAID_CARD'
};
