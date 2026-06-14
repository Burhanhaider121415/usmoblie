import { useState, useCallback } from "react";

const RECENT_KEY = "signal-desk-recent";
const MAX_RECENT = 10;

export function useRecentlyUsed() {
  const [recentlyUsed, setRecentlyUsed] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem(RECENT_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  const addRecent = useCallback((playbookId: string) => {
    setRecentlyUsed((prev) => {
      const filtered = prev.filter((id) => id !== playbookId);
      const updated = [playbookId, ...filtered].slice(0, MAX_RECENT);
      try {
        localStorage.setItem(RECENT_KEY, JSON.stringify(updated));
      } catch {
        // localStorage may be unavailable
      }
      return updated;
    });
  }, []);

  return { recentlyUsed, addRecent };
}
