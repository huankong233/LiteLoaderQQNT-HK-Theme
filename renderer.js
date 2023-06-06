(() => {
    const element = document.createElement("style");
    document.head.appendChild(element);

    const plugins_data = betterQQNT.plugins.test_theme.path.data;
    document.documentElement.style.setProperty(
        "--test-theme-background",
        `url("/${plugins_data.replaceAll("\\", "/")}/bg.jpg")`
    );

    test_theme.updateStyle((event, message) => {
        element.textContent = message;
    });
})();