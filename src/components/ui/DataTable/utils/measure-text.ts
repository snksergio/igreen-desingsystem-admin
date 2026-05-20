/**
 * measure-text.ts — Canvas-based text measurement utility.
 *
 * Singleton canvas reutilizado entre todas as chamadas — evita custo de criar
 * canvas a cada medição. SSR-safe (retorna 0 quando `window` não existe).
 *
 * Usado por `calculateColumnWidths` (Layer 2 — Smart Content Sampling) pra
 * descobrir a largura ideal de uma coluna baseada no header + amostra de rows.
 */

let measureCanvas: HTMLCanvasElement | null = null;
let measureCtx: CanvasRenderingContext2D | null = null;

/** Fonte default — alinha com `text-body-sm` do DS (13px / Geist). */
const DEFAULT_FONT =
  "13px Geist, system-ui, -apple-system, BlinkMacSystemFont, sans-serif";

function ensureCtx(font: string = DEFAULT_FONT): CanvasRenderingContext2D | null {
  if (typeof document === "undefined") return null; // SSR safe
  if (!measureCanvas) {
    measureCanvas = document.createElement("canvas");
    measureCtx = measureCanvas.getContext("2d");
  }
  if (measureCtx) measureCtx.font = font;
  return measureCtx;
}

/**
 * Mede a largura em pixels de um texto na fonte default do DS.
 * Reutiliza um canvas singleton para evitar overhead de criação.
 *
 * @param text — texto a medir
 * @param font — font shorthand CSS (default: 13px Geist)
 * @returns largura em pixels (0 se SSR ou texto vazio)
 */
export function measureTextWidth(text: string, font?: string): number {
  if (!text) return 0;
  const ctx = ensureCtx(font);
  if (!ctx) return 0;
  return ctx.measureText(text).width;
}
