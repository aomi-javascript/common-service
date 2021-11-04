/**
 * 服务异常
 */
export class ServiceError extends Error {

  public status;
  public describe;
  public payload;

  /**
   *
   * @param status 状态
   * @param describe 描述
   * @param payload 相关数据
   */
  constructor({ status, describe, payload }) {
    super(describe);
    this.status = status;
    this.describe = describe;
    this.payload = payload;
  }

}
