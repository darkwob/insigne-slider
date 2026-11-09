export type OptType = 'boolean' | 'number' | 'string' | 'enum' | 'object' | 'boolean|number' | 'enum|boolean' | 'number|enum' | 'number|string';
export interface OptMeta {
    name: string;
    type: OptType;
    default: unknown;
    values?: readonly string[];
    group: Group;
    min?: number;
    max?: number;
    /** Not settable from an HTML attribute (functions, nested objects other than JSON). */
    noAttr?: boolean;
    since?: string;
}
export type Group = 'layout' | 'motion' | 'autoplay' | 'interaction' | 'navigation' | 'images' | 'layers' | 'atmosphere' | 'a11y' | 'credit';
export declare const CSS_EFFECTS: readonly ['slide', 'fade', 'cube', 'coverflow', 'flip', 'cards', 'creative', 'stack', 'zoom', 'blur', 'rotate', 'parallax', 'warp', 'product', 'sketch', 'uncover', 'glitch', 'wipe', 'curtain', 'iris', 'diagonal', 'blinds', 'split', 'shutter', 'boxes', 'diamond', 'clock'];
export declare const GL_EFFECTS: readonly ['heat-haze', 'ripple', 'liquid', 'rgb-glitch', 'pixel-dissolve', 'zoom-blur', 'swirl', 'page-curl', 'ink', 'god-rays', 'warp-speed', 'water', 'luma-morph', 'random-gl'];
export declare const EFFECTS: readonly ["slide", "fade", "cube", "coverflow", "flip", "cards", "creative", "stack", "zoom", "blur", "rotate", "parallax", "warp", "product", "sketch", "uncover", "glitch", "wipe", "curtain", "iris", "diagonal", "blinds", "split", "shutter", "boxes", "diamond", "clock", "heat-haze", "ripple", "liquid", "rgb-glitch", "pixel-dissolve", "zoom-blur", "swirl", "page-curl", "ink", "god-rays", "warp-speed", "water", "luma-morph", "random-gl"];
export declare const EASES: readonly ['auto', 'linear', 'sine.inOut', 'power2.inOut', 'power3.out', 'power4.out', 'expo.out', 'expo.inOut', 'circ.out', 'back.out'];
export declare const KEN_BURNS: readonly ['zoom-in', 'zoom-out', 'pan-left', 'pan-right', 'pan-up', 'pan-down', 'diagonal', 'alternate'];
export declare const OVERLAYS: readonly ['none', 'beams', 'rays', 'light-leak', 'grain', 'letterbox', 'vignette', 'scanlines', 'fog'];
export declare const PARTICLES: readonly ['none', 'stars', 'warp', 'dust', 'snow', 'embers', 'bokeh', 'fireflies', 'bubbles'];
export declare const OPTIONS: readonly OptMeta[];
export declare const BY_NAME: Record<string, OptMeta>;
export declare const DEFAULTS: Record<string, unknown>;
/** Accepted aliases (Swiper-style names) -> canonical name. */
export declare const ALIASES: Record<string, string>;
export declare const ATTR: Record<string, string>;
/** Turns an attribute string into the option's value type. Unknown / invalid -> undefined. */
export declare function coerce(name: string, raw: string | null): unknown;
/** Normalizes user input: aliases, "1.5" strings, booleans for enum options. Returns warnings in dev. */
export declare function normalize(options: object, warn?: (msg: string) => void): Record<string, unknown>;
export type { Options, Recipe } from './options.gen';
