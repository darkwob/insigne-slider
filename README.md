<p align="center">
  <a href="https://slider.sadiksefa.com.tr"><img src="assets/logo.svg" width="72" height="72" alt="Insigne Slider"></a>
</p>

<h1 align="center">Insigne Slider</h1>

<p align="center">
  Slides that keep their composition.<br>
  Zero-config responsive layout, crop-free images, cinematic layer animations and WebGL transitions —<br>
  as a web component, with HTML <code>data-*</code> attributes or from JavaScript / JSON.
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/insigne-slider"><img src="https://img.shields.io/npm/v/insigne-slider?color=121210&label=npm" alt="npm"></a>
  <a href="https://www.jsdelivr.com/package/npm/insigne-slider"><img src="https://img.shields.io/jsdelivr/npm/hm/insigne-slider?color=121210" alt="jsDelivr"></a>
  <a href="https://slider.sadiksefa.com.tr"><img src="https://img.shields.io/badge/docs-slider.sadiksefa.com.tr-c9a35b" alt="Docs"></a>
</p>

<p align="center">
  <a href="https://slider.sadiksefa.com.tr/guide/quick-start">Quick start</a> ·
  <a href="https://slider.sadiksefa.com.tr/guide/">Guide</a> ·
  <a href="https://slider.sadiksefa.com.tr/api/options">API</a> ·
  <a href="https://slider.sadiksefa.com.tr/templates/">Templates</a> ·
  <a href="https://slider.sadiksefa.com.tr/playground/">Playground</a> ·
  <a href="https://slider.sadiksefa.com.tr/tr/">Türkçe</a>
</p>

---

## Install

**CDN** — one line, no build step:

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/insigne-slider@1/dist/insigne-slider.js"></script>
```

Classic script (no modules): `https://cdn.jsdelivr.net/npm/insigne-slider@1/dist/insigne-slider.iife.js`

**npm**

```bash
npm install insigne-slider
```

```js
import { InsigneSlider } from 'insigne-slider';      // side-effect free
// or: import 'insigne-slider/auto';                 // registers <insigne-slider>, starts [data-insigne]
```

## Three ways, one vocabulary

```html
<!-- 1. Web component -->
<insigne-slider effect="fade" autoplay="5000" ken-burns>
  <insigne-slide bg="hall.jpg" alt="Main hall" focus="40% 35%">
    <h2 data-in="lines-up">Opening night</h2>
  </insigne-slide>
  <insigne-slide bg="stage.jpg" alt="Stage"></insigne-slide>
</insigne-slider>

<!-- 2. Plain HTML with data attributes -->
<div data-insigne data-effect="cube" data-autoplay="5000">
  <div><img data-bg src="a.jpg" alt="" data-focus="30% 40%"></div>
  <div><img data-bg src="b.jpg" alt=""></div>
</div>
```

```js
// 3. JavaScript / JSON
new InsigneSlider('#hero', { effect: 'ripple', autoplay: 4000 });

InsigneSlider.create('#hero', {
  effect: 'fade',
  slides: [{ bg: { src: 'a.jpg', alt: '', focus: '30% 40%' }, layers: [{ tag: 'h2', text: 'Hello', in: 'chars-up' }] }],
});
```

## Highlights

- **Responsive without breakpoints** — height from the image ratio (taller on phones), columns from `minSlideWidth`, breakpoints by container width.
- **Smart fit** — focal point and safe area keep the subject in frame on every screen; backgrounds stay real `<img>` / `<picture>`.
- **Layers & typography** — `data-in="chars-up"`: 30 recipes, split by line / word / letter, your own recipes as JSON.
- **40 transitions** — 27 CSS effects and 13 WebGL shaders, every one draggable; loop without cloned slides.
- **Accessible** — carousel roles, live region, inert off-screen slides, keyboard, pause button, reduced motion.
- **45 KB gzip core**; WebGL, layers, particles and overlays load only when used.

## Examples

See [examples/](./examples) — standalone pages for every feature and all templates.

## Documentation

Everything is at **[slider.sadiksefa.com.tr](https://slider.sadiksefa.com.tr)** (English and Turkish): guides from a three-image slider to data-driven heroes, the full option reference with types and defaults, events, methods, JSON schema, recipes, theming, migration from Swiper and Slider Revolution.

## Support

- Bugs and feature requests: [issues](https://github.com/darkwob/insigne-slider/issues)
- Questions: [discussions](https://github.com/darkwob/insigne-slider/discussions)

This repository hosts releases, examples and issue tracking. The source code is not published; the files in [dist/](./dist) and on npm are the build.

## License

Free for any use, including commercial, as long as the visible credit to **sadiksefa.dev** stays (built in, or a visible link elsewhere on the page). A domain license key removes the credit — see [LICENSE](./LICENSE) and the [license guide](https://slider.sadiksefa.com.tr/guide/license).
