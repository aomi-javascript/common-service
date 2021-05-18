export interface Page<T> {
  totalElements: number
  size: number
  number: number
  content: Array<T>
  first: boolean
  last: boolean
}

export const DEFAULT_PAGE: Page<any> = {
  totalElements: 0,
  size: 0,
  number: 0,
  content: [],
  first: true,
  last: true
};
