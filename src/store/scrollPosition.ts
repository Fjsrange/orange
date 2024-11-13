/**
 * 监听页面滑动
 */

import { defineStore } from "pinia";

export const useScrollStore = defineStore("scrollPosition", {
  state: () => ({
    position: 0,
  }),
  actions: {
    updatePosition(position: number) {
      this.position = position;
    },
  },
});
