import { useRef } from "react";

type noop = (...args: any[]) => any;

/**
 * usePersistFn instead of useCallback to reduce cognitive load
 */
export function usePersistFn<T extends noop>(fn: T) {
  const fnRef = useRef<T>(fn);
  fnRef.current = fn;

  // Initialize with undefined to allow mutation, but cast to T | undefined
  const persistFn = useRef<T | undefined>(undefined);
  
  if (!persistFn.current) {
    persistFn.current = function (this: unknown, ...args: any[]) {
      return fnRef.current.apply(this, args);
    } as T;
  }

  return persistFn.current as T;
}
