/**
 * Centralized Logging Service
 * 
 * Replaces inline console.log statements to allow for enterprise integration
 * with platforms like Datadog, Sentry, or AWS CloudWatch.
 */

type LogLevel = 'info' | 'warn' | 'error';

interface LogEntry {
  timestamp: string;
  level: LogLevel;
  message: string;
  data?: unknown[];
  error?: unknown;
}

class Logger {
  private formatLog(level: LogLevel, message: string, data?: unknown[], error?: unknown): string {
    const entry: LogEntry = {
      timestamp: new Date().toISOString(),
      level,
      message,
      ...(data && data.length > 0 ? { data } : {}),
      ...(error ? { error } : {}),
    };
    
    // In production, we'd pipe this structured JSON directly to an ingestion service.
    return JSON.stringify(entry);
  }

  public info(message: string, ...optionalParams: unknown[]): void {
    console.info(this.formatLog('info', message, optionalParams));
  }

  public warn(message: string, ...optionalParams: unknown[]): void {
    console.warn(this.formatLog('warn', message, optionalParams));
  }

  public error(message: string, error?: unknown): void {
    console.error(this.formatLog('error', message, undefined, error));
  }
}

export const logger = new Logger();
