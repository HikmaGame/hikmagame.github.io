var unityInstance = null;

function initializeUnity() {
    var canvas = document.querySelector("#unity-canvas");
    var loadingBar = document.querySelector("#unity-loading-bar");
    var progressBarFull = document.querySelector("#unity-progress-bar-full");

    var buildUrl = "Build";
    var loaderUrl = buildUrl + "/Hikma.loader.js";
    var config = {
        dataUrl: buildUrl + "/Hikma.data",
        frameworkUrl: buildUrl + "/Hikma.framework.js",
        codeUrl: buildUrl + "/Hikma.wasm",
        streamingAssetsUrl: "StreamingAssets",
        companyName: "DefaultCompany",
        productName: "Hikma Game",
        productVersion: "1.0",
        showBanner: unityShowBanner,
    };

    loadingBar.style.display = "block";

    var script = document.createElement("script");
    script.src = loaderUrl;
    script.onload = () => {
        createUnityInstance(canvas, config, (progress) => {
            progressBarFull.style.width = 100 * progress + "%";
        }).then((instance) => {
            unityInstance = instance;
            loadingBar.style.display = "none";
        }).catch((message) => {
            alert(message);
        });
    };
    document.body.appendChild(script);
}

window.addEventListener('load', initializeUnity);
