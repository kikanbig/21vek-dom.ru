// Google Sheets integration via Google Apps Script
// User needs to deploy a Google Apps Script web app

const STORAGE_KEY = "nps_pending_submissions";

// Google Apps Script Web App URL
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbw1Lr7IUVNy-1HL7RwnromDwienTGt9eM7llIOJfxGTn5N_AEOk2xd0uGovM3fAS5Bv/exec";

interface NPSData {
  timestamp: string;
  rating: number;
  comment: string;
}

export const submitToGoogleSheets = async (data: NPSData): Promise<boolean> => {
  if (!GOOGLE_SCRIPT_URL) {
    console.warn("Google Script URL not configured. Saving locally.");
    throw new Error("Google Script URL not configured");
  }

  // Use URL parameters for Google Apps Script compatibility
  const params = new URLSearchParams({
    timestamp: data.timestamp,
    rating: data.rating.toString(),
    comment: data.comment,
  });

  await fetch(`${GOOGLE_SCRIPT_URL}?${params.toString()}`, {
    method: "POST",
    mode: "no-cors",
  });

  return true;
};

export const savePendingSubmission = (data: NPSData): void => {
  const pending = getPendingSubmissions();
  pending.push(data);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(pending));
};

export const getPendingSubmissions = (): NPSData[] => {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : [];
};

export const getPendingCount = (): number => {
  return getPendingSubmissions().length;
};

export const clearPendingSubmissions = (): void => {
  localStorage.removeItem(STORAGE_KEY);
};

export const syncPendingSubmissions = async (): Promise<void> => {
  if (!navigator.onLine || !GOOGLE_SCRIPT_URL) return;

  const pending = getPendingSubmissions();
  if (pending.length === 0) return;

  const successful: number[] = [];

  for (let i = 0; i < pending.length; i++) {
    try {
      await submitToGoogleSheets(pending[i]);
      successful.push(i);
    } catch (error) {
      console.error("Failed to sync submission:", error);
    }
  }

  // Remove successfully synced items
  const remaining = pending.filter((_, i) => !successful.includes(i));
  if (remaining.length > 0) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(remaining));
  } else {
    clearPendingSubmissions();
  }
};

// Auto-sync when coming back online
if (typeof window !== "undefined") {
  window.addEventListener("online", () => {
    syncPendingSubmissions();
  });
}
