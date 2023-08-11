import { _ as __nuxt_component_0 } from "./nuxt-link-26e5a74c.js";
import { _ as __nuxt_component_0$1 } from "./StarRating-12fe3589.js";
import { resolveComponent, mergeProps, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
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
const __uid__vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  data: function() {
    return {
      _uid: "",
      story: ""
    };
  },
  async created() {
    this._uid = this.$route.params._uid;
    try {
      const resp = await fetch(
        "https://api-us.storyblok.com/v2/cdn/stories/home?version=draft&token=akxvYagdc08ae9dX5zmrrAtt"
      );
      const data = await resp.json();
      if (!resp.ok)
        return;
      this.story = data.story.content;
    } catch (err) {
      console.log(err);
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0;
  const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
  const _component_StarRating = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container mx-auto px-8 md:w-8/12 sm:w-full" }, _attrs))}><header class="reviewDetails-header">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    class: "flex items-center"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_font_awesome_icon, {
          icon: ["fas", "chevron-left"],
          class: "reviewDetails-header-icon"
        }, null, _parent2, _scopeId));
        _push2(`<span${_scopeId}>Back</span>`);
      } else {
        return [
          createVNode(_component_font_awesome_icon, {
            icon: ["fas", "chevron-left"],
            class: "reviewDetails-header-icon"
          }),
          createVNode("span", null, "Back")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h1 class="text-center font-bold my-10 reviewDetails-header-title"> Review Details </h1></header><!--[-->`);
  ssrRenderList(_ctx.story.body, (blok) => {
    _push(`<div>`);
    if (blok._uid === _ctx._uid) {
      _push(`<div class="reviewDetails-details-container"><div class="reviewDetails-details-item"><h3>Full Name</h3><p>${ssrInterpolate(blok.fullName)}</p></div><div class="reviewDetails-details-item"><h3>Order date</h3><p>${ssrInterpolate(new Date(blok.date).getFullYear())}/${ssrInterpolate(new Date(blok.date).getMonth())}/${ssrInterpolate(new Date(blok.date).getDate())}</p></div><div class="reviewDetails-details-item"><h3>Product Name</h3><p>${ssrInterpolate(blok.product)}</p></div><div class="reviewDetails-details-item"><h3>Rating</h3>`);
      _push(ssrRenderComponent(_component_StarRating, { blok }, null, _parent));
      _push(`</div><div class="reviewDetails-details-item"><h3>Review</h3><p>${ssrInterpolate(blok.review)}</p></div><div class="reviewDetails-details-item"><h3>Image</h3><div class="reviewDetails-details-img"><img${ssrRenderAttr("src", blok.image.filename)}${ssrRenderAttr("alt", blok.product)}></div></div></div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
  });
  _push(`<!--]--></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/reviews/[_uid].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __uid_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __uid_ as default
};
//# sourceMappingURL=__uid_-4c7f58d5.js.map
