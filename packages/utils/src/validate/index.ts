/**
 * 手机号校验
 * 支持 11 位中国大陆手机号
 * @param phone 手机号字符串
 * @returns 是否为有效手机号
 */
export const validatePhone = (phone: string): boolean => {
  if (!phone || typeof phone !== 'string') {
    return false;
  }
  // 中国大陆手机号正则：1 开头，第二位为 3-9，共 11 位
  const phoneRegex = /^1[3-9]\d{9}$/;
  return phoneRegex.test(phone.trim());
};

/**
 * 邮箱校验
 * @param email 邮箱字符串
 * @returns 是否为有效邮箱
 */
export const validateEmail = (email: string): boolean => {
  if (!email || typeof email !== 'string') {
    return false;
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim());
};

/**
 * 身份证号校验
 * 支持 15 位和 18 位身份证号
 * @param idCard 身份证号字符串
 * @returns 是否为有效身份证号
 */
export const validateIdCard = (idCard: string): boolean => {
  if (!idCard || typeof idCard !== 'string') {
    return false;
  }
  const idCardRegex = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
  return idCardRegex.test(idCard.trim());
};

/**
 * URL 校验
 * @param url URL 字符串
 * @returns 是否为有效 URL
 */
export const validateUrl = (url: string): boolean => {
  if (!url || typeof url !== 'string') {
    return false;
  }
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

/**
 * 空值判断
 * 判断 null/undefined/空字符串/空数组/空对象
 * @param value 任意值
 * @returns 是否为空值
 */
export const isEmpty = (value: unknown): boolean => {
  if (value === null || value === undefined) {
    return true;
  }
  if (typeof value === 'string') {
    return value.trim() === '';
  }
  if (Array.isArray(value)) {
    return value.length === 0;
  }
  if (typeof value === 'object') {
    return Object.keys(value).length === 0;
  }
  return false;
};

/**
 * 非空判断
 * @param value 任意值
 * @returns 是否为非空值
 */
export const isNotEmpty = (value: unknown): boolean => {
  return !isEmpty(value);
};
