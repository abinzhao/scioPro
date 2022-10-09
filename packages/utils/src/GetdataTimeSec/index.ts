interface PropsType {
  date?: string | number | Date;
  type?: 'yyyy-mm-dd' | 'yyyy/mm/dd' | 'yyyy-mm-dd hh:mm:ss' | 'yyyy/mm/dd hh:mm:ss';
  isWeekDay?: boolean;
}
/**
 * @param {string | number | Date} date 需要格式化的时间，不传参时默认为当前系统时间
 * @param {'yyyy-mm-dd'|'yyyy/mm/dd'|'yyyy-mm-dd hh:mm:ss'|'yyyy/mm/dd hh:mm:ss'} type 格式化类型
 * @param {boolean} isWeekDay 是否显示星期 默认显示
 * @return {string} timeText 返回系统时间字符串
 */
const GetdataTimeSec = (props: PropsType = {}) => {
  const { date, type, isWeekDay = true } = props;
  let time = date ? new Date(date) : new Date();
  let weekDay;
  let year = time.getFullYear();
  let month = time.getMonth() + 1;
  let day = time.getDate();
  //获取时分秒
  let h = time.getHours();
  let m = time.getMinutes();
  let s = time.getSeconds();
  //检查是否小于10
  h = check(h);
  m = check(m);
  s = check(s);
  let now_day = time.getDay();
  switch (now_day) {
    case 0:
      {
        weekDay = '星期日';
      }
      break;
    case 1:
      {
        weekDay = '星期一';
      }
      break;
    case 2:
      {
        weekDay = '星期二';
      }
      break;
    case 3:
      {
        weekDay = '星期三';
      }
      break;
    case 4:
      {
        weekDay = '星期四';
      }
      break;
    case 5:
      {
        weekDay = '星期五';
      }
      break;
    case 6:
      {
        weekDay = '星期六';
      }
      break;
    case 7:
      {
        weekDay = '星期日';
      }
      break;
  }
  let timeText =
    year + '年' + month + '月' + day + '日  ' + ' ' + weekDay + ' ' + h + ':' + m + ':' + s;
  if (type == 'yyyy-mm-dd') {
    return `${year}-${month}-${day} ${isWeekDay ? weekDay : ''}`;
  } else if (type == 'yyyy/mm/dd') {
    return `${year}/${month}/${day} ${isWeekDay ? weekDay : ''}`;
  } else if (type == 'yyyy-mm-dd hh:mm:ss') {
    return `${year}-${month}-${day} ${h}:${m}:${s} ${isWeekDay ? weekDay : ''}`;
  } else if (type == 'yyyy/mm/dd hh:mm:ss') {
    return `${year}/${month}/${day} ${h}:${m}:${s} ${isWeekDay ? weekDay : ''}`;
  }

  return timeText;
};

//时间数字小于10，则在之前加个“0”补位。
function check(i: any) {
  let num;
  i < 10 ? (num = '0' + i) : (num = i);
  return num;
}

export default GetdataTimeSec;
