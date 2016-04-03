/* eslint-disable */
/**
 * [check if user is authenticated
 * @return {[boolean]}
 */
export function checkAuth() {
  if (localStorage.getItem('idToken')) {
    return true;
  }
  return false;
}
