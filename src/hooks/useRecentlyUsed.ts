import { useState, useCallback } from "react";

const MAX_RECENT = 10;

export function useRecentlyUsed() {
  const [recentlyUsed, setRecentlyUsed] = useState<string[]>(() => {
    try {
      const stored = sessionStorage.getItem("signal-desk-recent");
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
        sessionStorage.setItem("signal-desk-recent", JSON.stringify(updated));
      } catch {
        // sessionStorage may be unavailable
      }
      return updated;
    });
  }, []);

  return { recentlyUsed, addRecent };
}
