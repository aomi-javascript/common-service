import * as objectPath from 'object-path';
import ErrorCode from '../constants/ErrorCode';

const data: any = {
  errorMsg: {
    UNKNOWN: '未知错误',
    '0000': '请求处理成功',
    '3000': '服务器繁忙,请稍后再试',
    '3001': '请求参数错误,请检查您输入的参数',
    '3002': '验证码不正确或者过期',
    '3003': '版本不匹配',
    '3004': '过期',
    '3008': '您输入的值小于最低值',
    '3009': '您输入的值大于最大值',
    '3011': '签名错误',
    '3201': '请求类型不支持',
    '3202': '请求方法不支持',
    '3210': '用户未授权',
    '3211': '用户名或者密码不正确',
    '3250': '您没有权限访问该资源',
    '3301': '资源已经存在',
    '3302': '资源不存在',
    '3303': '资源状态不可用'
  }
};

/**
 * 注册错误信息数据
 * @param userErrorMsg 错误信息
 */
export function setErrMsg(userErrorMsg) {
  data.errorMsg = {
    ...data.errorMsg,
    ...userErrorMsg
  };
}

/**
 * 获取错误信息`
 * @param response 服务端返回的数据
 * @param prefix 错误信息对象的key前缀
 * @author 田尘殇Sean(sean.snow@live.com)
 * @date 16/9/9
 */
export const getErrMsg = (response, prefix?: string): string => {
  const { errorMsg } = data;
  const { status, payload, describe } = response;

  // 错误码为3200 表示使用服务端返回的信息提示用户
  if (status === ErrorCode.CUSTOM_ERROR) {
    if (typeof payload === 'string') {
      return payload;
    }
    return `[${payload.status}]${payload.message}`;
  } else if (status === ErrorCode.EXCEPTION) {
    return describe || errorMsg['3000'] || errorMsg.UNKNOWN;
  }
  const path = prefix ? `${prefix}.${status}` : status;
  console.log(path);
  let result = objectPath.get(errorMsg, path) || errorMsg[status] || errorMsg.UNKNOWN;
  if (typeof result === 'function') {
    return result(response);
  }
  return result;
};

export default getErrMsg;
