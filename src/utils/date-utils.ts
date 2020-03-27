/* eslint-disable @typescript-eslint/explicit-member-accessibility */
import * as moment from 'moment';

export class DateUtils {
    /**
  * Format date to 'YYYY-MM-DD'
  *
  * @param {(number | string)} date
  * @returns {string}
  * @memberof Metadata
  */
    formatDate(date: number | string): string {
        return moment(date).format('YYYY-MM-DD');
    }

    /**
  * Generate a random date from start to end,
  * if only start is specified than from 2000 to start,
  * if no parameter specified than from 2000 to now
  *
  * @param {Date} start From date
  * @param {Date} end To date
  * @returns {Date}
  * @memberof Dates
  */
    generateRandomDate(start: Date, end: Date): Date {
        if (start && end) {
            return new Date(
                start.getTime() + Math.random() * (end.getTime() - start.getTime())
            );
        } else if (start && !end) {
            return new Date(
                start.getTime() +
                Math.random() * (start.getTime() - new Date(2000, 0).getTime())
            );
        } else {
            return new Date(
                start.getTime() +
                Math.random() * (new Date().getTime() - new Date(2000, 0).getTime())
            );
        }
    }
}
