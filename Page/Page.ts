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
  last: false
};

export type PageRequest = {
  /**
   * 每页大小
   */
  size: number,
  /**
   * 页码
   */
  page: number,
  /**
   * 排序
   */
  sort: string
}


/**
 * 从一个参数中提取 查询请求参数
 */
export function getPageReq(args: Record<string, any>): PageRequest {
  return {
    size: args.size || 20,
    page: args.page || 0,
    sort: args.sort || ''
  };
}

/**
 * 排序字符串转成对象
 * @param sortStr 排序字符串
 */
export function sortStr2Obj(sortStr: string) {
  const tmp = sortStr.split(',');
  const direction = tmp[1].trim();
  return {
    [tmp[0].trim()]: direction === 'desc' ? -1 : 1
  };
}
