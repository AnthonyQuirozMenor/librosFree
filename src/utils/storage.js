const FAVORITES_KEY = 'librosfree_favorites_v1';
const PROGRESS_KEY = 'librosfree_progress_v1';
const READER_PREFS_KEY = 'librosfree_reader_prefs_v1';

// Gestión de Favoritos
export function getFavoriteIds() {
  try {
    const raw = localStorage.getItem(FAVORITES_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function isBookFavorite(bookId) {
  return getFavoriteIds().includes(bookId);
}

export function toggleBookFavorite(bookId) {
  const current = getFavoriteIds();
  const exists = current.includes(bookId);
  const updated = exists ? current.filter((id) => id !== bookId) : [...current, bookId];
  try {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(updated));
  } catch {
    // Fallback silencioso si localStorage está restringido
  }
  return !exists;
}

// Gestión de Progreso de Lectura ("Mi lectura")
export function getAllReadingProgress() {
  try {
    const raw = localStorage.getItem(PROGRESS_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export function getBookReadingProgress(bookId) {
  const all = getAllReadingProgress();
  return all[bookId] || null;
}

export function saveBookReadingProgress(bookId, currentPageIndex, totalPages) {
  const all = getAllReadingProgress();
  const safeTotal = Math.max(1, totalPages);
  const safePage = Math.max(0, Math.min(currentPageIndex, safeTotal - 1));
  const percentage = Math.round(((safePage + 1) / safeTotal) * 100);
  const previous = all[bookId] || {};

  all[bookId] = {
    bookId,
    currentPage: safePage,
    totalPages: safeTotal,
    percentage: previous.completed ? 100 : percentage,
    completed: previous.completed || percentage >= 100,
    lastReadAt: new Date().toISOString()
  };

  try {
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(all));
  } catch {
    // Ignorar error de cuota
  }
  return all[bookId];
}

export function toggleBookCompleted(bookId, totalPages = 1) {
  const all = getAllReadingProgress();
  const existing = all[bookId] || {
    bookId,
    currentPage: totalPages - 1,
    totalPages,
    percentage: 100
  };
  const nextCompleted = !existing.completed;
  all[bookId] = {
    ...existing,
    completed: nextCompleted,
    percentage: nextCompleted ? 100 : Math.round(((existing.currentPage + 1) / Math.max(1, existing.totalPages)) * 100),
    lastReadAt: new Date().toISOString()
  };
  try {
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(all));
  } catch {
    // Ignorar error
  }
  return all[bookId];
}

export function getLastReadEntry() {
  const all = Object.values(getAllReadingProgress());
  if (all.length === 0) return null;
  all.sort((a, b) => new Date(b.lastReadAt).getTime() - new Date(a.lastReadAt).getTime());
  return all[0];
}

// Preferencias del Lector Digital
export function getReaderPreferences() {
  try {
    const raw = localStorage.getItem(READER_PREFS_KEY);
    return raw ? JSON.parse(raw) : { theme: 'sepia', fontSize: 19, viewMode: 'paginated' };
  } catch {
    return { theme: 'sepia', fontSize: 19, viewMode: 'paginated' };
  }
}

export function saveReaderPreferences(prefs) {
  const current = getReaderPreferences();
  const updated = { ...current, ...prefs };
  try {
    localStorage.setItem(READER_PREFS_KEY, JSON.stringify(updated));
  } catch {
    // Ignorar error
  }
  return updated;
}
