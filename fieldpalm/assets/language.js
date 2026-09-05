(() => {
  const buttons = [...document.querySelectorAll("[data-language]")];
  const panels = [...document.querySelectorAll("[data-panel]")];
  function showLanguage(language, updateHash = true) {
    const selected = language === "zh" ? "zh" : "en";
    panels.forEach((panel) => { panel.hidden = panel.dataset.panel !== selected; });
    buttons.forEach((button) => button.setAttribute("aria-pressed", String(button.dataset.language === selected)));
    document.documentElement.lang = selected === "zh" ? "zh-CN" : "en";
    document.title = selected === "zh" ? document.body.dataset.titleZh : document.body.dataset.titleEn;
    if (updateHash) history.replaceState(null, "", `#${selected}`);
  }
  buttons.forEach((button) => button.addEventListener("click", () => showLanguage(button.dataset.language)));
  const requested = location.hash.slice(1);
  const initial = requested === "zh" || requested === "en" ? requested : (navigator.language || "").toLowerCase().startsWith("zh") ? "zh" : "en";
  showLanguage(initial, false);
})();
