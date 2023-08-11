import { resolveComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import { orderBy } from "lodash";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "vue-router";
import "h3";
import "ufo";
import "devalue";
import "@unhead/ssr";
import "unhead";
import "@unhead/shared";
import "destr";
import "klona";
import "animejs";
import "defu";
const SearchBar_vue_vue_type_style_index_0_lang = "";
const _sfc_main$1 = {
  props: ["search"],
  data: function() {
    return {
      keyword: ""
    };
  }
  // TODO: Code the search function
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "search-bar" }, _attrs))}>${ssrInterpolate($props.search(_ctx.keyword))} <input${ssrRenderAttr("value", _ctx.keyword)} type="text" id="search" placeholder="search...Product or Name">`);
  _push(ssrRenderComponent(_component_font_awesome_icon, {
    icon: ["fas", "magnifying-glass"],
    class: "search-bar-icon"
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SearchBar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  props: ["blok"],
  data: function() {
    return {
      data: this.blok.body,
      toggle: true,
      toggle1: true
    };
  },
  // TODO: Need to compute an array for search result and replace the `blok` with new computed array in <StoryblokComponent />
  methods: {
    SearchHandler(keyword) {
      this.data = this.blok.body.filter(
        (el) => (el.product + el.fullName).replaceAll(" ", "").toLowerCase().includes(keyword.toLowerCase())
      );
    },
    sortby1(element, toggle) {
      this.data = orderBy(this.blok.body, element, "asc");
      this[toggle] = false;
    },
    sortby2(element, toggle) {
      this.data = orderBy(this.blok.body, element, "desc");
      this[toggle] = true;
    }
    // this.data = orderBy(this.blok.body, element, "asc");
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_SearchBar = __nuxt_component_0;
  const _component_StoryblokComponent = resolveComponent("StoryblokComponent");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col gap-8" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_SearchBar, { search: $options.SearchHandler }, null, _parent));
  _push(`<div class="flex gap-2">`);
  if (_ctx.toggle) {
    _push(`<button><button class="rounded-full inline-block p-2 px-3 border border-black hover:bg-red-600 hover:text-white transition-all ease-in-out"> Rating ↓ </button></button>`);
  } else {
    _push(`<button><button class="rounded-full inline-block p-2 px-3 border border-black hover:bg-red-600 hover:text-white transition-all ease-in-out"> Rating ↑ </button></button>`);
  }
  if (_ctx.toggle1) {
    _push(`<button><button class="rounded-full inline-block p-2 px-3 border border-black hover:bg-red-600 hover:text-white transition-all ease-in-out"> Date ↓ </button></button>`);
  } else {
    _push(`<button><button class="rounded-full inline-block p-2 px-3 border border-black hover:bg-red-600 hover:text-white transition-all ease-in-out"> Date ↑ </button></button>`);
  }
  _push(`</div><!--[-->`);
  ssrRenderList(_ctx.data, (blok) => {
    _push(ssrRenderComponent(_component_StoryblokComponent, {
      key: blok._uid,
      blok
    }, null, _parent));
  });
  _push(`<!--]--></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("storyblok/Page.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Page = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Page as default
};
//# sourceMappingURL=Page-2d69a3b5.js.map
