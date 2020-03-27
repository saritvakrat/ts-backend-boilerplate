/* eslint-disable @typescript-eslint/explicit-member-accessibility */
export class CalculationUtils {
    /**
   * Generate random integer number in specified range
   *
   * @param {number} from Minimum number
   * @param {number} to Maximum number
   * @returns {number} Random integer number
   * @memberof CalculationsAndNumbers
   */
    generateRandomNumber(from: number, to: number): number {
        return Math.floor(Math.random() * (to - from + 1)) + from;
    }
}
