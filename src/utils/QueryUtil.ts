import Common from '../constants/Common';

/**
 * 查询工具类
 */
export class QueryUtil {
  /**
   * 查询参数转换
   * 如果存在`createRange`字段，则转换为 createStartAt 和 createEndAt
   * @param createAtRange 创建时间区间
   * @param args
   * @deprecated use transformDate
   */
  static transform({createAtRange, ...args}: any = {}) {
    const result = {...args};
    if (Array.isArray(createAtRange) && createAtRange.length === 2) {
      result.createStartAt = `${createAtRange[0].format(Common.DATE_FORMAT)} 00:00:00`;
      result.createEndAt = `${createAtRange[1].format(Common.DATE_FORMAT)} 23:59:59`;
    }
    return result;
  }

  /**
   *
   * @param range
   * @param namePrefix 名字前缀
   * @param options
   */
  static transformRange(range: Array<any>, namePrefix: string, options?: {
    /**
     * 名字后缀 默认 startAt\ endAt
     */
    nameSuffix?: Array<string>
  }) {
    const {
      nameSuffix
    } = options ?? {}
    return {
      [`${namePrefix}${nameSuffix?.[0] ?? 'StartAt'}`]: range[0],
      [`${namePrefix}${nameSuffix?.[1] ?? 'EndAt'}`]: range[1]
    }
  }

  /**
   * 转换时间相关的参数为
   * startAt 和 endAt 形式
   * @param dateRange 开始结束时间
   * @param namePrefix 名字前缀 默认为 StartAt 和EndAt
   * @param options 转换选项
   */
  static transformDate(dateRange: Array<any>, namePrefix: string, options?: {
    format?: 'DATE' | 'DATETIME' | 'TIME',
    /**
     * 日期添加默认时间
     * start = 00:00:00
     * end = 23:59:59
     */
    dateWithTime?: boolean
  }): Record<string, string> {
    if (dateRange.length != 2) {
      return {}
    }
    const format = options?.format ?? 'DATE'
    let start = dateRange[0].format(Common[`${format}_FORMAT`])
    let end = dateRange[1].format(Common[`${format}_FORMAT`])
    if (format === 'DATE' && options?.dateWithTime) {
      start = `${start} 00:00:00`;
      end = `${end} 23:59:59`
    }

    return {
      [`${namePrefix}StartAt`]: start,
      [`${namePrefix}EndAt`]: end
    }
  }
}
