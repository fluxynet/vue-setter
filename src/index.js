function plugin(Vue) {
  Vue.directive("setter", {
    bind(el, binding, vnode, oldVnode) {
      let d = binding.rawName.indexOf(".");
      if (d !== -1) {
        const s =
          "set" +
          binding.rawName.substr(d + 1, 1).toUpperCase() +
          binding.rawName.substr(d + 2);

        const setter = binding.value[s];
        const that = binding.value;

        el.addEventListener("input", () => setter.call(that, el.value));
      }
    }
  });
}

// Install by default if using the script tag
if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(plugin);
}

export default plugin;
const version = "1.0.0";
// Export all components too
export { version };
