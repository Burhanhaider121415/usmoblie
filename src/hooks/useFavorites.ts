import { useState, useCallback, useEffect } from "react";

const FAVORITES_KEY = "signal-desk-favorites";

export function useFavorites() {
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem(FAVORITES_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
    } catch {
      // localStorage may be unavailable
    }
  }, [favorites]);

  const toggleFavorite = useCallback((playbookId: string) => {
    setFavorites((prev) => {
      if (prev.includes(playbookId)) {
        return prev.filter((id) => id !== playbookId);
      }
      return [...prev, playbookId];
    });
  }, []);

  const isFavorite = useCallback(
    (playbookId: string) => favorites.includes(playbookId),
    [favorites]
  );

  return { favorites, toggleFavorite, isFavorite };
}
