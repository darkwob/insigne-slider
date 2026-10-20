import { InsigneSlider, type EventName } from '../core/slider';
import { type Options } from '../core/options';
export declare class InsigneSliderElement extends HTMLElement {
    static get observedAttributes(): string[];
    /** The underlying instance (available after the element is connected and parsed). */
    slider: InsigneSlider | null;
    private pending;
    connectedCallback(): void;
    disconnectedCallback(): void;
    attributeChangedCallback(name: string, old: string | null, value: string | null): void;
    /** Options set from JS before / after the element is ready (el.options = {…}). */
    set options(o: Options);
    get options(): Options;
    next(): void;
    prev(): void;
    goTo(i: number, opts?: {
        instant?: boolean;
    }): void;
    play(): void;
    pause(): void;
    get index(): number;
    get count(): number;
    on(name: EventName, fn: (d: any) => void): () => void;
}
export declare class InsigneSlideElement extends HTMLElement {
    static get observedAttributes(): string[];
    connectedCallback(): void;
    attributeChangedCallback(): void;
    /** bg="url" creates (or updates) the <img data-bg> the slider places. */
    private sync;
}
/** Registers the custom elements (idempotent). */
export declare function define(sliderTag?: string, slideTag?: string): void;
