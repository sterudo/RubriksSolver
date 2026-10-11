import { reactive, watch } from 'vue';
import { loadSettings, saveSettings } from './core/explain.js';

// Shared by the Settings tab and the tutor; every change is written to localStorage.
export const aiSettings = reactive(loadSettings());

watch(aiSettings, (value) => saveSettings({ ...value }), { deep: true });
