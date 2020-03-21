import { v4 as uuid } from 'uuid';

export class GenericUtils {
  /**
   * @returns {string} uuid val
   */
  public static generateUUID(): string {
    return uuid();
  }


  /**
   * Generate random string specified length with extra characters.
   * By default, generator using next chars:
   * 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
   *
   * @param {number} length Length of generated string
   * @param {string} [chars=''] Extra chars what would used for generating.
   * @returns {string}
   * @memberof Metadata
   */
  generateRandomCharacterLetters(length: number, chars = ''): string {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz' + chars;

    do {
      text = '';
      for (let i = 0; i < length; i++) { text += possible.charAt(Math.floor(Math.random() * possible.length)); }
    } while (!(/[a-z]/.test(text) && /[A-Z]/.test(text)) && text.length > 2);
    return text;
  }
}
