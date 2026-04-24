"use client";

/**
 * A simple event-based utility to trigger the Quote Modal from anywhere
 * without needing a global state library like Redux or Zustand.
 */

export const openQuoteModal = () => {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("toggle-quote-modal", { detail: true }));
  }
};

export const closeQuoteModal = () => {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("toggle-quote-modal", { detail: false }));
  }
};
