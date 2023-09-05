// LOGIC TO INCLUDE SCRIPT ELEMENTS OF TYPE JAVASCRIPT IN THE BODY

function includeScriptElementOfTypeJavascriptInBodyTag(filePath) {
    let scriptElement = document.createElement('script');
    scriptElement.src = filePath;
    scriptElement.type = 'text/javascript';
    document.body.innerHTML += scriptElement.outerHTML;
}

includeScriptElementOfTypeJavascriptInBodyTag('/navigationBar.js');