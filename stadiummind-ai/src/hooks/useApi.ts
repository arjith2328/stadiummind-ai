import { useState, useCallback } from 'react';
import { apiFetch, ApiError } from '@/lib/api';

interface UseApiResult<T> {
  data: T | null;
  loading: boolean;
  error: ApiError | null;
  execute: (overrideOptions?: RequestInit) => Promise<void>;
}

/**
 * Reusable React Hook for fetching data from the centralized API service.
 * Implements DRY principles by abstracting loading and error state management.
 *
 * @param endpoint - The API endpoint to fetch
 * @param defaultOptions - Default fetch options
 * @returns An object containing data, loading state, error state, and the execute function.
 */
export function useApi<T>(endpoint: string, defaultOptions: RequestInit = {}): UseApiResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<ApiError | null>(null);

  const execute = useCallback(async (overrideOptions?: RequestInit) => {
    setLoading(true);
    setError(null);
    try {
      const result = await apiFetch<T>(endpoint, { ...defaultOptions, ...overrideOptions });
      setData(result);
    } catch (err) {
      setError(err instanceof ApiError ? err : new ApiError('Unknown error', 500));
    } finally {
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [endpoint]); // Excluding defaultOptions to avoid infinite re-renders if not memoized

  return { data, loading, error, execute };
}
