import { useState, useCallback } from 'react';
import { apiFetch, ApiError } from '@/lib/api';

interface UseApiResult<T> {
  data: T | null;
  loading: boolean;
  error: ApiError | null;
  execute: () => Promise<void>;
}

/**
 * Reusable React Hook for fetching data from the centralized API service.
 * Implements DRY principles by abstracting loading and error state management.
 *
 * @param endpoint - The API endpoint to fetch
 * @param options - Fetch options
 * @returns An object containing data, loading state, error state, and the execute function.
 */
export function useApi<T>(endpoint: string, options: RequestInit = {}): UseApiResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<ApiError | null>(null);

  const execute = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await apiFetch<T>(endpoint, options);
      setData(result);
    } catch (err) {
      setError(err instanceof ApiError ? err : new ApiError('Unknown error', 500));
    } finally {
      setLoading(false);
    }
  }, [endpoint, options]);

  return { data, loading, error, execute };
}
