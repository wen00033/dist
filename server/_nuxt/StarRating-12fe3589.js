import { resolveComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
const StarRating_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  name: "StarRating",
  props: ["blok"],
  data: function() {
    return {
      fullStars: [],
      emptyStars: []
    };
  },
  created() {
    if (this.blok.stars == 5) {
      for (let i = 0; i < this.blok.stars; i++) {
        this.fullStars.push("fas");
      }
    } else {
      for (let i = 0; i < this.blok.stars; i++) {
        this.fullStars.push("fas");
      }
      for (let i = 0; i < 5 - this.blok.stars; i++) {
        this.emptyStars.push("far");
      }
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "rating-stars-container" }, _attrs))}><!--[-->`);
  ssrRenderList(_ctx.fullStars, (fas) => {
    _push(`<div>`);
    _push(ssrRenderComponent(_component_font_awesome_icon, {
      icon: [fas, "star"],
      class: "rating-stars"
    }, null, _parent));
    _push(`</div>`);
  });
  _push(`<!--]-->`);
  if (_ctx.emptyStars) {
    _push(`<!--[-->`);
    ssrRenderList(_ctx.emptyStars, (far) => {
      _push(`<div>`);
      _push(ssrRenderComponent(_component_font_awesome_icon, {
        icon: [far, "star"],
        class: "rating-stars"
      }, null, _parent));
      _push(`</div>`);
    });
    _push(`<!--]-->`);
  } else {
    _push(`<!---->`);
  }
  _push(` ${ssrInterpolate($props.blok.stars)}</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/StarRating.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __nuxt_component_0 as _
};
//# sourceMappingURL=StarRating-12fe3589.js.map
