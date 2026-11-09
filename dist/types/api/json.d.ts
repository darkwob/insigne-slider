import { InsigneSlider } from '../core/slider';
import type { Options } from '../core/options';
export interface BgSpec {
    src: string;
    srcset?: string;
    sizes?: string;
    alt?: string;
    /** Focal point "x% y%". */
    focus?: string;
    /** Safe area "left top width height" (% of the image). */
    safe?: string;
    fit?: 'smart' | 'cover' | 'contain';
    /** Render a muted, looping background <video> (src = video, poster = image for WebGL / first paint). */
    video?: boolean;
    poster?: string;
    lazy?: boolean;
}
export interface LayerSpec {
    /** Element tag (default "div"; "a" when href is set). */
    tag?: string;
    text?: string;
    /** Trusted HTML. Never pass user input here. */
    html?: string;
    href?: string;
    className?: string;
    style?: string | Record<string, string | number>;
    attrs?: Record<string, string>;
    /** Entrance recipe (data-in), exit (data-out), split and delay in ms. */
    in?: string;
    out?: string;
    split?: 'words' | 'chars' | 'lines' | 'none';
    delay?: number;
    /** Parallax offset while sliding (data-parallax), e.g. "-30%" or -120. */
    parallax?: string | number;
    children?: LayerSpec[];
}
export interface SlideSpec {
    bg?: string | BgSpec;
    layers?: LayerSpec[];
    /** Trusted HTML inserted after the background, before the layers (shades, decorations). */
    html?: string;
    className?: string;
    style?: string | Record<string, string | number>;
    attrs?: Record<string, string>;
    kenBurns?: string | boolean;
    /** Per-slide content wrapper class (layers are placed inside a div with this class). */
    contentClass?: string;
}
export interface SliderSpec extends Options {
    options?: Options;
    slides: (SlideSpec | string)[];
}
export declare function renderSlide(s: SlideSpec | string): HTMLElement;
/** Renders the slides into target (replacing its children) and starts a slider on it. */
export declare function create(target: HTMLElement | string, spec: SliderSpec): InsigneSlider;
