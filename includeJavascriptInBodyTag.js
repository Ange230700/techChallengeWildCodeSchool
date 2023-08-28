// LOGIC TO INCLUDE JAVASCRIPT FILES IN THIS FILE
function createScriptTag() {
    var scriptTag = document.createElement('script');
    return scriptTag;
}

function setSourceAttribute(scriptTag) {
    scriptTag.src = '/createMetadataTagForSetOfCharacters.js';
}

function setTypeAttribute(scriptTag) {
    scriptTag.type = 'text/javascript';
}

function putScriptTagInBodyTag(scriptTag) {
    try {
        document.body.appendChild(scriptTag);
    } catch (error) {
        console.log('Error in including javascript in body tag: ' + error);
    }
}

function includeJavascriptInBodyTag() {
    var scriptTag = createScriptTag();
    setSourceAttribute(scriptTag);
    setTypeAttribute(scriptTag);
    putScriptTagInBodyTag(scriptTag);
}

// function createScriptTagAndSetSourceAttributeAndSetTypeAttribute() {
//     var scriptTag = document.createElement('script');
//     scriptTag.src = '/createMetadataTagForSetOfCharacters.js';
//     scriptTag.type = 'text/javascript';
//     try {
//         document.body.appendChild(scriptTag);
//     } catch (error) {
//         console.log('Error in creating script tag and setting source attribute and setting type attribute: ' + error);
//     }
// }

window.onload = includeJavascriptInBodyTag;