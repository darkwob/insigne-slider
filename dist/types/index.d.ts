import { InsigneSlider } from './core/slider';
import { define } from './api/element';
import { init, autoInit } from './api/data';
import { create, renderSlide } from './api/json';
import { OPTIONS, EFFECTS, CSS_EFFECTS, GL_EFFECTS, EASES, KEN_BURNS, OVERLAYS, PARTICLES } from './core/options';
import { place, parseFocus, parseSafe } from './core/media';
declare module './core/slider' {
    namespace InsigneSlider {
        /** Registers <insigne-slider> and <insigne-slide>. */
        let define: typeof import('./api/element').define;
        /** Starts every [data-insigne] element under root. */
        let init: typeof import('./api/data').init;
        /** init() now and for elements added later. */
        let autoInit: typeof import('./api/data').autoInit;
        /** Renders slides from data and starts a slider. */
        let create: typeof import('./api/json').create;
        let effects: typeof import('./core/options').EFFECTS;
        let options: typeof import('./core/options').OPTIONS;
    }
}
export { InsigneSlider };
export default InsigneSlider;
export { define, init, autoInit, create, renderSlide };
export { OPTIONS, EFFECTS, CSS_EFFECTS, GL_EFFECTS, EASES, KEN_BURNS, OVERLAYS, PARTICLES };
export { place as smartFit, parseFocus, parseSafe };
export { InsigneSliderElement, InsigneSlideElement } from './api/element';
export type { Options, OptMeta } from './core/options';
export type { EventName, ChangeDetail } from './core/slider';
export type { SliderSpec, SlideSpec, LayerSpec, BgSpec } from './api/json';
