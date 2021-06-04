export const ErrorCode = {
  NETWORK_ERROR: '300',
  SUCCESS: '0000',
  EXCEPTION: '3000',
  PARAMS_ERROR: '3001',
  CUSTOM_ERROR: '3200',
  /**
   * 未授权
   */
  UNAUTHORIZED: '3210',
  /**
   * 无权限访问目标资源
   */
  ACCESS_DENIED: '3250'
};

export default ErrorCode;
