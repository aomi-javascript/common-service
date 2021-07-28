export type Label = { key: string; value: any };

export type LabelKeyOption = { label: string; value: string };

export class LabelUtil {
  /**
   * 转换数组形式的label为对象形式
   * @param labels
   */
  static toObject(labels: Array<Label> = []) {
    const labelResult = {};
    labels.forEach(({ key, value }) => {
      let newValue = value;
      try {
        newValue = JSON.parse(value);
      } catch (e) {
      }
      labelResult[key] = newValue;
    });
    return labelResult;
  }

  /**
   * 转换对象形式的label为数组形式
   * @param labels
   */
  static toArray(labels: { [key: string]: any } = {}): Array<Label> {
    return Object.keys(labels).map<Label>(key => ({
      key,
      value: typeof labels[key] === 'object' || Array.isArray(labels[key]) ? JSON.stringify(labels[key]) : labels[key],
    }));
  }
}

