/**
 * Centralized Logging Service
 * 
 * Replaces inline console.log statements to allow for enterprise integration
 * with platforms like Datadog, Sentry, or AWS CloudWatch.
 */

class Logger {
  info(message: string, ...optionalParams: unknown[]) {
    // In production, pipe this to an external logging service
    console.info(`[INFO] ${new Date().toISOString()}: ${message}`, ...optionalParams);
  }

  warn(message: string, ...optionalParams: unknown[]) {
    console.warn(`[WARN] ${new Date().toISOString()}: ${message}`, ...optionalParams);
  }

  error(message: string, error?: unknown) {
    // In production, pipe this to an error tracking service (e.g., Sentry)
    console.error(`[ERROR] ${new Date().toISOString()}: ${message}`, error);
  }
}

export const logger = new Logger();
