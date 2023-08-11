import { _ as __nuxt_component_0 } from "./StarRating-12fe3589.js";
import { _ as __nuxt_component_0$1 } from "./nuxt-link-26e5a74c.js";
import { mergeProps, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "ufo";
import "hookable";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "vue-router";
import "h3";
import "devalue";
import "@unhead/ssr";
import "unhead";
import "@unhead/shared";
import "destr";
import "klona";
import "animejs";
import "defu";
const Review_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  name: "Review",
  props: ["blok"]
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_StarRating = __nuxt_component_0;
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid md:grid-cols-4 reviewCard-container" }, _attrs))}><div class="flex flex-col justify-center gap-3"><p class="font-semibold">${ssrInterpolate($props.blok.fullName)}</p><p class="reviewCard-date">${ssrInterpolate(new Date($props.blok.date).getFullYear())}/${ssrInterpolate(new Date($props.blok.date).getMonth())}/${ssrInterpolate(new Date($props.blok.date).getDate())}</p></div><div class="flex flex-col justify-center gap-3"><p class="font-semibold">${ssrInterpolate($props.blok.product)}</p><div class="flex gap-1 items-center">`);
  _push(ssrRenderComponent(_component_StarRating, { blok: $props.blok }, null, _parent));
  _push(`</div></div><div class="reviewCard-img"><img${ssrRenderAttr("src", $props.blok.image.filename)}${ssrRenderAttr("alt", $props.blok.product)}></div><div class="reviewCard-btn">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: `/reviews/${$props.blok._uid}`
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<button${_scopeId}>More Details</button>`);
      } else {
        return [
          createVNode("button", null, "More Details")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("storyblok/Review.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Review = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Review as default
};
//# sourceMappingURL=Review-3fdc5fbc.js.map
