/**
 * 资源权限类型定义
 */
export type ResourceUri = {
  /**
   * 基础地址
   */
  base: string
  /**
   * 查询地址
   */
  query?: string
  /**
   * 详情地址
   */
  detail?: string
  /**
   * 新增地址
   */
  create?: string
  /**
   * 更新地址
   */
  update?: string
}
