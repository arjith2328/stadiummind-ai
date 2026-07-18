import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Merges Tailwind CSS classes, resolving conflicts using tailwind-merge.
 *
 * @param inputs - An array of class values, objects, or conditional class expressions.
 * @returns A strictly merged string of CSS classes.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}
