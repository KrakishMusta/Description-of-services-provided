import { defineComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ServiceCard",
  __ssrInlineRender: true,
  props: {
    name: {},
    cost: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<article${ssrRenderAttrs(mergeProps({ class: "service-item" }, _attrs))}><div class="absolute w-full h-fit bottom-0"><div class="service-item-info"><h3>${ssrInterpolate(__props.name)}</h3><p>Стоимость: ${ssrInterpolate(__props.cost)} ₽</p></div></div></article>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ServiceCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "+Page",
  __ssrInlineRender: true,
  setup(__props) {
    const mockServices = [
      { name: "service_1", cost: 1e3 },
      { name: "service_2", cost: 999 },
      { name: "service_3", cost: 150 },
      { name: "service_4", cost: 9999 },
      { name: "service_5", cost: 1e3 },
      { name: "service_6", cost: 1e3 }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid-container" }, _attrs))}><header class="img-filler">...</header><main class="main-container"><section class="services-container"><!--[-->`);
      ssrRenderList(mockServices, (item, i) => {
        _push(ssrRenderComponent(_sfc_main$1, {
          key: i,
          name: item.name,
          cost: item.cost
        }, null, _parent));
      });
      _push(`<!--]--></section></main></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/index/+Page.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const import_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main
}, Symbol.toStringTag, { value: "Module" }));
const index = [
  {
    configName: "Page",
    importFilePath: "/src/pages/index/+Page.vue",
    isPlusFile: true,
    importFileExports: import_0
  }
];
export {
  index as default
};
