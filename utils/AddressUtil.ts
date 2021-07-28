export class AddressUtil {

  /**
   * 数组转换为对象
   * @param address
   */
  static array2obj(address) {
    return {
      province: address[0],
      city: address[1],
      county: address[2]
    };
  }

  /**
   * 对象转换为数组
   * @param address
   */
  static obj2array(address) {
    return [
      address.province,
      address.city,
      address.county
    ];
  }
}
