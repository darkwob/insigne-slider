import { type Options } from './options';
export type EventName = 'ready' | 'change' | 'movestart' | 'moveend' | 'resize' | 'autoplay' | 'refresh' | 'destroy';
export interface ChangeDetail {
    index: number;
    previous: number;
    slide: HTMLElement;
    slider: InsigneSlider;
}
type Handler = (detail: any) => void;
/** Adds a stylesheet once per document / shadow root the slider lives in. */
export declare function addCss(node: Node, key: string, css: string): void;
/** Options from the markup: <script type="application/json">, data-insigne='{…}', data-* and plain attributes. */
export declare function readMarkupOptions(el: HTMLElement, plainAttrs: boolean): Options;
export declare class InsigneSlider {
    static readonly version: string;
    static readonly defaults: Record<string, unknown>;
    /** The instance of an element (or selector), if any. */
    static get(target: Element | string | null): InsigneSlider | undefined;
    readonly el: HTMLElement;
    private root;
    private wrap;
    private engine;
    private fxl;
    private user;
    private o;
    private t;
    private reduced;
    private slideEls;
    private bgs;
    private credit;
    private handlers;
    private layers;
    private layersGen;
    private atmos;
    private particles;
    private depth;
    private io;
    private mo;
    private offs;
    private current;
    private started;
    private destroyed;
    private visible;
    constructor(target: HTMLElement | string, options?: Options, plainAttrs?: boolean);
    private resolve;
    private engineConfig;
    private creditOpts;
    private collect;
    private prepareBgs;
    private ratio;
    private heightFor;
    private layoutBgs;
    private start;
    private watch;
    private syncPaused;
    private loadAround;
    private changed;
    private loadExtras;
    private dropExtras;
    private thumbOff;
    private syncThumbs;
    /** Subscribe; returns an unsubscribe function. Also dispatched as DOM events "insigne:<name>". */
    on(name: EventName, fn: Handler): () => void;
    off(name: EventName, fn: Handler): void;
    once(name: EventName, fn: Handler): () => void;
    private emit;
    get index(): number;
    get count(): number;
    get slides(): HTMLElement[];
    /** Resolved options (defaults + markup + constructor + update()). */
    get options(): Readonly<Record<string, any>>;
    get isPlaying(): boolean;
    get isMoving(): boolean;
    next(): this;
    prev(): this;
    goTo(index: number, opts?: {
        instant?: boolean;
    }): this;
    play(): this;
    pause(): this;
    /** Change options at runtime. The current slide is kept. */
    update(options: Options): this;
    /** Re-reads the slides from the DOM (called automatically when children change). */
    refresh(): this;
    /** Inserts a slide (element or HTML string) at index (default: end). */
    addSlide(content: Node | string, index?: number): this;
    removeSlide(index: number): this;
    destroy(): void;
}
/** Option metadata (for tooling and docs). */
export declare const optionInfo: (name: string) => import("./options").OptMeta;
export {};
