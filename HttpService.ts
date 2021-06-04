import { ObjectUtils } from '@aomi/utils/ObjectUtils';
import { urlArgs } from '@aomi/utils/HttpUtil';

import { HttpMethod } from './constants/HttpMethod';
import ErrorCode from './constants/ErrorCode';

export interface Params extends RequestInit {
  body?: any
  url: string
  timeout?: number
  upload?: boolean
}

const config: ConfigOption = {
  /**
   * 默认GET请求参数
   * 比如、设置默认的分页大小排序规则等
   */
  defaultGetArgs: {},

  onDownload: handleWebFileDownload
};

export type ConfigOption = {
  defaultGetArgs?: object
  /**
   * 处理文件下载
   */
  onDownload?: (url: string, response: Response) => Promise<void>
}

export function configure(options: ConfigOption) {
  const { defaultGetArgs } = options;
  if (defaultGetArgs) {
    config.defaultGetArgs = ObjectUtils.deepmerge(config.defaultGetArgs, defaultGetArgs);
  }
}

export async function handleWebFileDownload(url, response: Response) {
  let result = await response.blob();
  let disposition = response.headers.get('Content-Disposition');
  let reg = new RegExp('filename=".*"', 'i');
  let tmp = reg.exec(disposition || '');
  let filename = 'download';
  if (tmp && tmp[0] && tmp[0].trim() !== '') {
    filename = eval(tmp[0]);
  }
  let aLink = document.createElement('a');
  document.body.appendChild(aLink);
  let evt = document.createEvent('HTMLEvents');
  evt.initEvent('click', false, false);
  aLink.download = filename;
  aLink.href = window.URL.createObjectURL(result);
  aLink.click();
  window.URL.revokeObjectURL(url);
  aLink.dispatchEvent(evt);
}

export function isDownload(response: Response): boolean {
  return (response.headers.get('Content-Type') || '').includes('octet-stream');
}

function handleTimeout(promise: Promise<Response>, timeout: number): Promise<Response> {
  return Promise.race<Response>([promise, new Promise<Response>((ignored, reject) => {
    setTimeout(() => {
      reject('http request timeout');
    }, timeout);
  })]);
}

/**
 * 执行网络请求
 */
export async function execute({ method = HttpMethod.GET, url, timeout = 60000, upload, headers = {}, ...other }: Params) {
  const reqArgs: any = {
    credentials: 'include',
    ...other,
    method,
    headers
  };
  let newUrl = url;

  // 自动设置为JSON格式
  if (method.toUpperCase() !== HttpMethod.GET && !upload) {
    reqArgs.headers['Content-Type'] = 'application/json; charset=UTF-8';
  }

  // GET 请求自动把body转换为URL参数
  if (!method || method === HttpMethod.GET) {
    const newBody = reqArgs.body || {};
    let newParams: any = {
      ...newBody,
      ...config.defaultGetArgs
    };
    let separator = url.includes('?') ? '&' : '?';
    newUrl = `${url}${separator}${urlArgs(newParams)}`;
    Reflect.deleteProperty(reqArgs, 'body');
  } else if (reqArgs.body && typeof reqArgs.body === 'object' && !upload) {
    reqArgs.body = JSON.stringify(reqArgs.body);
  }

  let res: any = {};
  try {
    console.log(`request ${newUrl}`, reqArgs);
    let response = await handleTimeout(fetch(newUrl, reqArgs), timeout);
    if (response.ok) {
      if (isDownload(response)) {
        config.onDownload && await config.onDownload(url, response);
      } else {
        res = await response.json();
      }
    } else {
      res = {
        success: false,
        status: ErrorCode.EXCEPTION
      };
    }
    console.log(`${url} response status -> ${response.status}, response -> `, res);
  } catch (e) {
    console.warn(url, reqArgs, e);
    res = {
      success: false,
      status: ErrorCode.NETWORK_ERROR
    };
  }
  return res;
}
