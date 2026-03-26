/**
 * 日期格式化
 * @param date 日期对象或日期字符串
 * @param format 格式化模板，默认 YYYY-MM-DD
 * @returns 格式化后的日期字符串，无效日期返回空字符串
 */
export const formatDate = (date: Date | string | number, format: string = 'YYYY-MM-DD'): string => {
  let d: Date;

  if (date instanceof Date) {
    d = date;
  } else if (typeof date === 'string' || typeof date === 'number') {
    d = new Date(date);
  } else {
    return '';
  }

  // 检查日期是否有效
  if (isNaN(d.getTime())) {
    return '';
  }

  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  const hours = String(d.getHours()).padStart(2, '0');
  const minutes = String(d.getMinutes()).padStart(2, '0');
  const seconds = String(d.getSeconds()).padStart(2, '0');

  return format
    .replace('YYYY', String(year))
    .replace('MM', month)
    .replace('DD', day)
    .replace('HH', hours)
    .replace('mm', minutes)
    .replace('ss', seconds);
};

/**
 * 获取相对时间描述
 * @param date 日期对象或日期字符串
 * @returns 相对时间描述，如"刚刚"、"5分钟前"、"昨天"等
 */
export const formatRelativeTime = (date: Date | string | number): string => {
  let d: Date;

  if (date instanceof Date) {
    d = date;
  } else {
    d = new Date(date);
  }

  if (isNaN(d.getTime())) {
    return '';
  }

  const now = new Date();
  const diff = now.getTime() - d.getTime();
  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (seconds < 60) {
    return '刚刚';
  } else if (minutes < 60) {
    return `${minutes}分钟前`;
  } else if (hours < 24) {
    return `${hours}小时前`;
  } else if (days === 1) {
    return '昨天';
  } else if (days < 7) {
    return `${days}天前`;
  } else {
    return formatDate(d);
  }
};
