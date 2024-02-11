import { create } from "zustand";
const useBotStore = create((set) => ({
    selectedBots: [],
    addSelectedBot: (bot) =>
      set((state) => ({ selectedBots: [...state.selectedBots, bot] })),
    removeSelectedBot: (botId) => set((state)=> ({ selectedBots: state.selectedBots.filter((bot) => bot.id !== botId)})),
  }));
  
  export default useBotStore;
  