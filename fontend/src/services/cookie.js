import Cookie from 'universal-cookie';

const cookie = new Cookie();

class CookieService {
  get(key) {
    return cookie.get(key);
  }

  set(key, value, options) {
    cookie.set(key, value, options);
  }

  remove(key, options) {
    cookie.remove(key, options);
  }

  getAll(options) {
    cookie.getAll(options);
  }
}

export default new CookieService();
