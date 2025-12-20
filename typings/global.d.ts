declare module 'vue' {
  export interface GlobalComponents {
    VAside: (typeof import('vui'))['VAside'];
    VButton: (typeof import('vui'))['VButton'];
    VButtonGroup: (typeof import('vui'))['VButtonGroup'];
    VContainer: (typeof import('vui'))['VContainer'];
    VFooter: (typeof import('vui'))['VFooter'];
    VHeader: (typeof import('vui'))['VHeader'];
    VIcon: (typeof import('vui'))['VIcon'];
    VMain: (typeof import('vui'))['VMain'];
    VRadio: (typeof import('vui'))['VRadio'];
    VRadioGroup: (typeof import('vui'))['VRadioGroup'];
    VText: (typeof import('vui'))['VText'];
  }
}

export {};
