/** A layer recipe: see https://slider.sadiksefa.com.tr/api/recipes */
export interface Recipe {
    split?: "none" | "words" | "chars" | "lines";
    mask?: boolean;
    stagger?: number;
    order?: "start" | "center" | "random";
    in: Record<string, unknown>[];
    loop?: Record<string, unknown>[];
    hover?: Record<string, unknown>[];
    out?: Record<string, unknown>[];
    [key: string]: unknown;
}
export interface Options {
    /** Transition between slides. CSS effects work everywhere; WebGL effects (heat-haze, ripple, liquid…) load on demand and fall back to a matching CSS effect when WebGL or CORS is unavailable. @default "slide" */
    effect?: "slide" | "fade" | "cube" | "coverflow" | "flip" | "cards" | "creative" | "stack" | "zoom" | "blur" | "rotate" | "parallax" | "warp" | "product" | "sketch" | "uncover" | "glitch" | "wipe" | "curtain" | "iris" | "diagonal" | "blinds" | "split" | "shutter" | "boxes" | "diamond" | "clock" | "heat-haze" | "ripple" | "liquid" | "rgb-glitch" | "pixel-dissolve" | "zoom-blur" | "swirl" | "page-curl" | "ink" | "god-rays" | "warp-speed" | "water" | "luma-morph" | "random-gl";
    /** Axis the slides travel along. @default "horizontal" */
    direction?: "horizontal" | "vertical";
    /** Slides visible at once (fractions allowed, e.g. 1.2 to peek the next one). "auto" uses each slide's own width. @default 1 */
    slidesPerView?: number | "auto";
    /** Responsive columns without breakpoints: as many slides as fit at this minimum width (px). 0 = off. @default 0 */
    minSlideWidth?: number;
    /** Gap between slides in px. @default 0 */
    spaceBetween?: number;
    /** Center the active slide (useful with slidesPerView > 1). @default false */
    centered?: boolean;
    /** "auto" (aspect / image ratio, zero config), "image" (exact ratio of each background — nothing is cropped), "content" (tallest slide), "fill" (the element's own CSS height), a number in px or any CSS length (e.g. "80vh"). @default "auto" */
    height?: number | string;
    /** Aspect ratio used by height "auto": "auto" picks a ratio per container width (wide on desktop, taller on phones) from the first background image, or e.g. "16/9", 2.4. @default "auto" */
    aspect?: number | string;
    /** Lower bound for computed heights (px or CSS length). @default 240 */
    minHeight?: number | string;
    /** Upper bound for computed heights (px or CSS length, vh is resolved against the window). @default "92vh" */
    maxHeight?: number | string;
    /** Overrides by container width: { 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }. Keys are min-widths of the slider itself, not the window. */
    breakpoints?: Record<number | string, Options>;
    /** Slide shown first (0-based). The URL hash #slide-3 also works when hash is on. @default 0 */
    startIndex?: number;
    /** Right-to-left. "auto" follows the dir attribute of the page. @default "auto" */
    rtl?: "auto" | boolean;
    /** Transition duration in ms. @default 700 */
    speed?: number;
    /** Easing of programmatic moves. "auto" picks one per effect. Dragging always follows the finger and releases with its momentum. @default "auto" */
    ease?: "auto" | "linear" | "sine.inOut" | "power2.inOut" | "power3.out" | "power4.out" | "expo.out" | "expo.inOut" | "circ.out" | "back.out";
    /** "loop" (endless, no cloned slides), "rewind" (jump back to the start) or "off". true/false are accepted. @default "loop" */
    loop?: "loop" | "rewind" | "off" | boolean;
    /** Animate elements with data-parallax / data-parallax-opacity / data-parallax-scale as slides move. @default true */
    parallax?: boolean;
    /** Page scroll drives the slider (scroll-telling). Loaded on demand. @default false */
    scrollDrive?: boolean;
    /** Depth shading on 3D effects (cube, flip, coverflow, cards, stack). @default true */
    slideShadows?: boolean;
    /** Coverflow: rotation of side slides (deg). @default 40 */
    coverflowRotate?: number;
    /** Coverflow: depth of side slides (px). @default 160 */
    coverflowDepth?: number;
    /** Coverflow: extra spacing of side slides (px). @default 0 */
    coverflowStretch?: number;
    /** Effect "creative": transforms of the previous / next slide ({ translate: [x, y, z], rotate: [x, y, z], scale, opacity }). */
    creative?: Record<string, any>;
    /** WebGL effects: strength of the distortion. @default 1 */
    shaderIntensity?: number;
    /** WebGL effects: speed of animated noise. @default 1 */
    shaderSpeed?: number;
    /** WebGL effects: direction (deg) for directional transitions. @default 0 */
    shaderAngle?: number;
    /** WebGL effects: where radial transitions start (the click / pointer, the center or shaderOriginX/Y). @default "pointer" */
    shaderOrigin?: "pointer" | "center" | "custom";
    /** Custom origin X (0–1). @default 0.5 */
    shaderOriginX?: number;
    /** Custom origin Y (0–1). @default 0.5 */
    shaderOriginY?: number;
    /** WebGL policy. "auto" skips WebGL on low-power devices and data saver. @default "auto" */
    gpu?: "auto" | "prefer-webgl" | "css-only";
    /** Advance automatically. A number is the delay in ms (same as autoplay: true + autoplayDelay). @default false */
    autoplay?: boolean | number;
    /** Time each slide stays (ms). @default 5000 */
    autoplayDelay?: number;
    /** Pause while the pointer is over the slider (and while it has keyboard focus). @default true */
    pauseOnHover?: boolean;
    /** Stop autoplay for good after the user swipes, clicks an arrow or a dot. @default false */
    stopOnInteraction?: boolean;
    /** Autoplay backwards. @default false */
    reverse?: boolean;
    /** Stop on the last slide (when loop is not "loop"). @default false */
    stopOnLast?: boolean;
    /** Progress ring that doubles as a pause / play button (WCAG 2.2.2). @default true */
    autoplayProgress?: boolean;
    /** Swipe with touch, pen or mouse. Every effect follows the finger, including 3D and masks. @default true */
    drag?: boolean;
    /** Momentum scrolling without snapping. @default false */
    freeMode?: boolean;
    /** Free mode, but settle on the nearest slide. @default false */
    freeModeSticky?: boolean;
    /** Rubber-band strength at the edges (loop off). @default 0.85 */
    resistance?: number;
    /** Arrow keys, PageUp/PageDown, Home/End while the slider has focus. @default true */
    keyboard?: boolean;
    /** Navigate with the mouse wheel / trackpad (the page scrolls on at the ends). @default false */
    mousewheel?: boolean;
    /** Sync the active slide with the URL hash (#slider-id-3), for deep links. @default false */
    hash?: boolean;
    /** Previous / next buttons. "hover" shows them on pointer devices on hover and always on touch. @default "hover" */
    arrows?: "hover" | "visible" | "hidden" | boolean;
    /** Arrows over the slides or outside them. @default "inside" */
    arrowsPlacement?: "inside" | "outside";
    /** Where the arrows sit. @default "sides" */
    arrowsPosition?: "sides" | "bottom-left" | "bottom-center" | "bottom-right" | "top-right";
    /** Arrow button size (px). 44 meets touch target guidelines. @default 44 */
    arrowSize?: number;
    /** Distance of the arrows from the edge (px). @default 16 */
    arrowOffset?: number;
    /** Dots (dynamic beyond 7 slides), "03 / 12" fraction, a progress bar or none. @default "dots" */
    pagination?: "dots" | "fraction" | "progress" | "none" | boolean;
    /** Pagination over the slides or below them. @default "inside" */
    paginationPlacement?: "inside" | "outside";
    /** CSS selector of another slider that acts as this one's thumbnails (synced both ways). @default "" */
    thumbs?: string;
    /** How background images fill the slide. "smart" covers like "cover" but never cuts the focus point or the safe area: if they would be cut it zooms out and fills the gap with a blurred copy. @default "smart" */
    fit?: "smart" | "cover" | "contain";
    /** Default focal point of background images ("x% y%"). Per image: data-focus. @default "50% 50%" */
    focus?: string;
    /** Default safe area that must always stay visible: "left top width height" in % of the image, e.g. "30 10 40 80". Per image: data-safe. @default "" */
    safe?: string;
    /** What fills the space around a zoomed-out image: "blur" (blurred copy), "none", or any CSS color. @default "blur" */
    backdrop?: string;
    /** Slow zoom / pan of the background on the active slide, centered on the focus point. true = "zoom-out". Per slide: data-ken-burns. @default false */
    kenBurns?: "zoom-in" | "zoom-out" | "pan-left" | "pan-right" | "pan-up" | "pan-down" | "diagonal" | "alternate" | boolean;
    /** Ken Burns duration (ms). @default 9000 */
    kenBurnsDuration?: number;
    /** Ken Burns zoom amount. @default 1.12 */
    kenBurnsScale?: number;
    /** Load images of slides out of view only when they are about to be shown. @default true */
    lazy?: boolean;
    /** Neighbor slides to preload on each side. @default 1 */
    preload?: number;
    /** Animate elements with data-in (entrance), data-out (exit), data-loop and data-hover when their slide becomes active. Loaded on demand. @default true */
    layers?: boolean;
    /** Default entrance recipe for elements with an empty data-in, and for headings / paragraphs / buttons when "auto". @default "" */
    layerIn?: string;
    /** Default exit: "reverse" (the entrance backwards, faster), an exit recipe (fade, up, down, left, blur) or "none". @default "reverse" */
    layerOut?: string;
    /** Multiplier for all layer timings (>1 = slower). @default 1 */
    layerSpeed?: number;
    /** Image recipe for the background of the entering slide (develop, focus, spotlight, rise, tint, flicker, depth-zoom, breathe). @default "none" */
    imageIn?: string;
    /** Your own recipes, merged over the built-in ones: { "my-rise": { split: "words", stagger: 40, in: [{ o: 0, y: 30 }, { o: 1, y: 0, d: 700, e: "expo.out" }] } }. */
    recipes?: Record<string, Recipe>;
    /** Animated light / texture over the slides (beams, rays, light-leak, grain, letterbox, vignette, scanlines, fog). @default "none" */
    overlay?: "none" | "beams" | "rays" | "light-leak" | "grain" | "letterbox" | "vignette" | "scanlines" | "fog";
    /** Canvas particle field (stars, warp, dust, snow, embers, bokeh, fireflies, bubbles). Loaded on demand, paused offscreen. @default "none" */
    particles?: "none" | "stars" | "warp" | "dust" | "snow" | "embers" | "bokeh" | "fireflies" | "bubbles";
    /** Particle count multiplier. @default 1 */
    particleDensity?: number;
    /** Scroll parallax: while the page scrolls, backgrounds and text move at different speeds (0 = off, 1 = strong). @default 0 */
    scrollDepth?: number;
    /** Accessible name of the slider (aria-label). Defaults to the aria-label of the element. @default "" */
    label?: string;
    /** Language of the built-in labels: "auto" (page lang), "en", "tr". @default "auto" */
    locale?: string;
    /** Override any label: { prev, next, goTo, slide, pause, play, carousel, slideRole }. */
    i18n?: Partial<Record<"carousel" | "slideRole" | "slide" | "prev" | "next" | "goTo" | "pause" | "play" | "credit", string>>;
    /** "auto" follows prefers-reduced-motion: 3D / WebGL become fade, layers appear without motion, autoplay is off. @default "auto" */
    reducedMotion?: "auto" | "always" | "never";
    /** Pause autoplay, WebGL, particles and layer loops while the slider is out of view or the tab is hidden. @default true */
    pauseOffscreen?: boolean;
    /** Attribution required by the license: "below" the slider (default), "inside" as a small badge, or "page" when your page already shows a visible link to sadiksefa.dev or sadiksefa.com.tr (e.g. in the footer). @default "below" */
    credit?: "below" | "inside" | "page";
    /** Alignment of the "below" credit. @default "end" */
    creditAlign?: "end" | "start" | "center";
    /** Credit colors. "auto" reads the page background. @default "auto" */
    creditTheme?: "auto" | "light" | "dark";
    /** Domain license key that removes the attribution requirement for the domains it was issued for. @default "" */
    license?: string;
    /** Swiper-style aliases. */
    gap?: number;
    centeredSlides?: boolean;
    initialSlide?: number;
    navigation?: boolean;
    disableOnInteraction?: boolean;
    autoHeight?: boolean;
    perView?: number | "auto";
    delay?: number;
}
