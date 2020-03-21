type LogLevel = 'info' | 'error' | 'warn' | 'debug';

export interface Logger {
  logJson(
    level: LogLevel,
    json: LogData
  ): any;
}
export interface LogData {
  [key: string]: LogData | string | number | boolean | string[] | number[] | boolean[];
}
