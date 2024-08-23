import { create } from "zustand";

/**
 * Create a new account
 * @param {boolean} isOpen
 * @param {() => void} onOpen
 * @param {() => void} onClose
 * @returns
 *
 * The isOpen is boolean to determine if the sheet is open or not
 * The onOpen and onClose are functions to open and close the sheet component
 */
type NewAccountState = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export const useNewAccounts = create<NewAccountState>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
