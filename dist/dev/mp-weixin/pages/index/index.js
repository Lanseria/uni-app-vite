"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  setup(__props) {
    const title = common_vendor.ref("Hello");
    const form = common_vendor.reactive({
      name: "World"
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(title.value),
        b: common_vendor.t(common_vendor.unref(form).name)
      };
    };
  }
});
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/zhangchao/Documents/HBuilderProjects/aoshan-qz/src/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
