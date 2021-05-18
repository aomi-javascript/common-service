/**
 * 基础服务
 */
import { Page } from './Page';

export interface BaseService<T> {

  loading: boolean

  page: Page<T>

  /**
   * 数据查询
   * @param args 查询参数
   */
  query(args?: any): Promise<any>;

  /**
   * 数据持久化
   * @param args 参数
   * @param options 其他选项
   */
  persist(args: T, options: any): Promise<any>

  del(args: any, options: any): Promise<any>

}
