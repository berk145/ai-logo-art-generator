import { create } from "zustand";

type AppStore = {
  status: NotificationState | null;
  prompt: string | null;
  logoStyle: LogoStyle | null;
  setStatus: (status: NotificationState) => void;
  setPrompt: (prompt: string) => void;
  setLogoStyle: (style: LogoStyle) => void;
  reset: () => void;
};

export const useAppStore = create<AppStore>((set) => ({
  status: null,
  prompt: null,
  logoStyle: null,

  setStatus: (status) => set({ status }),
  setPrompt: (prompt) => set({ prompt }),
  setLogoStyle: (style) => set({ logoStyle: style }),
  reset: () =>
    set({
      status: null,
      prompt: null,
      logoStyle: null,
    }),
}));
