includeScriptElementOfTypeJavascriptInBodyTag('/javascript/navigationBar.js');

function includeScriptElementOfTypeJavascriptInBodyTag(filePath) {

    let scriptElement = document.createElement('script');
    scriptElement.type = 'text/javascript';
    scriptElement.src = filePath;
    document.body.appendChild(scriptElement);
    scriptElement.async = true;

    // scriptElement.onload = function () {
    //     console.log('Script element of type JavaScript included in body tag.');
    // }
    // scriptElement.onerror = function () {
    //     console.log('Error in including script element of type JavaScript in body tag.');
    // }
}


