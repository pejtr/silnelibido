import { useState, useRef, useCallback } from 'react';

interface UseCompositionProps<T> {
  onCompositionStart?: (e: React.CompositionEvent<T>) => void;
  onCompositionEnd?: (e: React.CompositionEvent<T>) => void;
  onKeyDown?: (e: React.KeyboardEvent<T>) => void;
}

export function useComposition<T extends HTMLElement>({
  onCompositionStart,
  onCompositionEnd,
  onKeyDown,
}: UseCompositionProps<T> = {}) {
  const isComposingRef = useRef(false);

  const handleCompositionStart = useCallback(
    (e: React.CompositionEvent<T>) => {
      isComposingRef.current = true;
      onCompositionStart?.(e);
    },
    [onCompositionStart]
  );

  const handleCompositionEnd = useCallback(
    (e: React.CompositionEvent<T>) => {
      isComposingRef.current = false;
      onCompositionEnd?.(e);
    },
    [onCompositionEnd]
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<T>) => {
      if (isComposingRef.current && e.key === 'Enter') {
        // Prevent default behavior if composing
        return;
      }
      onKeyDown?.(e);
    },
    [onKeyDown]
  );

  return {
    onCompositionStart: handleCompositionStart,
    onCompositionEnd: handleCompositionEnd,
    onKeyDown: handleKeyDown,
    isComposing: isComposingRef.current,
  };
}
