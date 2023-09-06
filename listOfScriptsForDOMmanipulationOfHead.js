includeScriptElementOfTypeJavascriptInHeadTag('/javascript/charsetMetadata.js');
includeScriptElementOfTypeJavascriptInHeadTag('/javascript/viewportMetadata.js');
includeScriptElementOfTypeJavascriptInHeadTag('/javascript/titleMetadata.js');

function includeScriptElementOfTypeJavascriptInHeadTag(filePath) {
    let scriptElement = document.createElement('script');
    scriptElement.setAttribute('type', 'text/javascript');
    scriptElement.setAttribute('src', filePath);
    document.head.appendChild(scriptElement);
    scriptElement.async = true;

    // scriptElement.onload = function () {
    //     console.log('Script element of type JavaScript included in head tag.');
    // }
    // scriptElement.onerror = function () {
    //     console.log('Error in including script element of type JavaScript in head tag.');
    // }
}