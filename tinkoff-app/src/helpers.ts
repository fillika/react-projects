type cookieOptions = {
  [key: string]: string | number | boolean
}

export function getCookie(name: string): string | undefined {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([.$?*|{}()\]\\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

export function setCookie(name: string, value: string, options: cookieOptions = {}): void {
  options = {
    path: '/',
    ...options
  };

  // if (options.expires instanceof Date) {
  //   options.expires = options.expires.toUTCString();
  // }

  let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

  for (let optionKey in options) {

    updatedCookie += "; " + optionKey;

    let optionValue = options[optionKey];

    if (optionValue !== true) {
      updatedCookie += "=" + optionValue;
    }
  }

  document.cookie = updatedCookie;
}

/**
 * Check cookie. If haven't, clear localStorage (for refresh information)
 * @param {string} key - LS key
 */
export function checkCookieAndCleanLS(key: string) {
  const cookie = getCookie('reactUser');

  if (cookie === undefined) {
    delete localStorage[key];
  }
}