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
   */
  static transform({ createAtRange, ...args }: any = {}) {
    const result = { ...args };
    if (Array.isArray(createAtRange) && createAtRange.length === 2) {
      result.createStartAt = `${createAtRange[0].format(Common.DATE_FORMAT)} 00:00:00`;
      result.createEndAt = `${createAtRange[1].format(Common.DATE_FORMAT)} 23:59:59`;
    }
    return result;
  }
}
