export type FitMode = 'smart' | 'cover' | 'contain';
export type Rect = [number, number, number, number];
export interface Placement {
    left: number;
    top: number;
    width: number;
    height: number;
    /** Space left uncovered (needs a backdrop). */
    gaps: boolean;
}
/** "30% 40%" | "30 40" | "left top" | "center" -> [0.3, 0.4]. */
export declare function parseFocus(s: string | null | undefined, fallback?: [number, number]): [number, number];
/** "30 10 40 80" (percent: left top width height) -> fractions, or null. */
export declare function parseSafe(s: string | null | undefined): Rect | null;
/** Pure placement math (unit tested). W×H = box, w×h = natural image size. */
export declare function place(W: number, H: number, w: number, h: number, mode: FitMode, focus: [number, number], safe: Rect | null): Placement;
/** Canvas uv (y up) -> texture uv for the WebGL transitions. */
export declare function texMapOf(W: number, H: number, p: Placement): [number, number, number, number];
export interface Bg {
    /** Element marked data-bg (img, picture or video). */
    el: HTMLElement;
    /** The element that is sized and positioned (img inside picture, or el). */
    target: HTMLImageElement | HTMLVideoElement;
    fill: HTMLElement | null;
    focus: [number, number];
    safe: Rect | null;
    fit: FitMode;
    placement: Placement | null;
    kb: Animation | null;
}
export interface MediaOpts {
    fit: FitMode;
    focus: string;
    safe: string;
    backdrop: string;
}
export declare function natural(t: HTMLImageElement | HTMLVideoElement): [number, number];
export declare function srcOf(t: HTMLImageElement | HTMLVideoElement): string;
/** Finds the background of a slide: a child with data-bg, or the slide itself when it is an img / picture / video. */
export declare function findBg(slide: HTMLElement, o: MediaOpts): Bg | null;
/** Positions one background inside a W×H slide. Returns false while the natural size is unknown. */
export declare function layoutBg(b: Bg, W: number, H: number, backdrop: string): boolean;
export declare function resetBg(b: Bg): void;
export declare function kenBurns(b: Bg, style: string, index: number, duration: number, scale: number): void;
export declare function stopKenBurns(b: Bg): void;
/** Promotes data-src / data-srcset (also on <source>) to real attributes. */
export declare function loadLazy(slide: HTMLElement): void;
/** Viewport height for a slide width: the image ratio, kept within a range per container size. */
export declare function autoHeight(slideW: number, containerW: number, ratio: number | null, aspect: unknown): number | null;
/** px from a number or a CSS length (px, vh, svh, dvh, lvh, rem, em). */
export declare function toPx(v: unknown): number | null;
