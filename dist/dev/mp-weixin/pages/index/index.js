"use strict";
var common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _component_uni_badge = common_vendor.resolveComponent("uni-badge");
  _component_uni_badge();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const title = common_vendor.ref("Hello");
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(title.value),
        b: common_vendor.p({
          size: "small",
          text: 100,
          absolute: "rightBottom",
          type: "primary"
        })
      };
    };
  }
});
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/zhangchao/Documents/HBuilderProjects/aoshan-qz/src/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
