/**
 * Enterprise API client for fetching data from the backend.
 * Provides strong typings, standardized error handling, and centralized configuration.
 */
import { logger } from './logger';

export class ApiError extends Error {
  public status: number;
  public data: unknown;

  constructor(message: string, status: number, data?: unknown) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.data = data;
  }
}

/**
 * Core fetch wrapper that implements DRY principles for API calls.
 * @param endpoint - The API endpoint relative to the base URL (e.g., '/health/live')
 * @param options - Standard fetch options
 * @returns The parsed JSON response of type T
 */
export async function apiFetch<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || '/api';
  const url = `${baseUrl}${endpoint}`;

  const headers = {
    'Content-Type': 'application/json',
    ...options.headers,
  };

  try {
    const response = await fetch(url, { ...options, headers });

    if (!response.ok) {
      let errorData;
      try {
        errorData = await response.json();
      } catch {
        errorData = null;
      }
      const apiError = new ApiError(
        errorData?.detail || response.statusText || 'Unknown API Error',
        response.status,
        errorData
      );
      logger.error(`API Fetch Error [${response.status}] at ${endpoint}`, apiError);
      throw apiError;
    }

    return (await response.json()) as T;
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    }
    // Network or parsing errors
    logger.error(`Network or Parsing Error at ${endpoint}`, error);
    throw new ApiError(error instanceof Error ? error.message : 'Network Error', 0);
  }
}
