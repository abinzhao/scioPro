interface PropsType {
  file: any;
  format?: string[];
  size?: number;
  formatMsg?: string;
  sizeMsg?: string;
}

/**
 * @param {*} file
 * @param {string[]} format  指定文件格式 ['jpg', 'jpeg', 'png', 'gif']
 * @param {number} size  指定文件大小(字节)
 * @param {string} formatMsg 格式错误提示
 * @param {string} sizeMsg   大小超出限制提示
 * @returns {Promise<any>}
 */
const FileToBase64 = (props: PropsType) => {
  const {
    file,
    format = ['jpg', 'jpeg', 'png', 'gif'],
    size = 20 * 1024 * 1024,
    formatMsg = '文件格式不正确',
    sizeMsg = '文件大小超出限制',
  } = props;

  return new Promise((resolve, reject) => {
    // 格式过滤
    let suffix = file.type.split('/')[1].toLowerCase();
    let inFormat = false;
    for (let i = 0; i < format.length; i++) {
      if (suffix === format[i]) {
        inFormat = true;
        break;
      }
    }
    if (!inFormat) {
      reject(formatMsg);
    }
    // 大小过滤
    if (file.size > size) {
      reject(sizeMsg);
    }
    // 转base64字符串
    let fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      let res = fileReader.result;
      resolve({ base64String: res, suffix: suffix });
      reject('异常文件，请重新选择');
    };
  });
};
export default FileToBase64;
