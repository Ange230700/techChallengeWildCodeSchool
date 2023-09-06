includeTitleMetadataTag();

function includeTitleMetadataTag() {
    let currentURL = window.location.href;

    let webpagesTitles = {
        "index": "The Royal Kingdom of Colchis",
        "royalFamily": "The Royal Family of Colchis",
        "royalAssets": "The Royal Assets of Colchis",
        "contact": "Contact The Royal Kingdom"
    };

    let titleMetadataTag = document.createElement('title');

    if (currentURL[currentURL.length - 1] === '/') {
        titleMetadataTag.innerHTML = "The Royal Kingdom of Colchis";
    }

    for (let webpagesTitle in webpagesTitles) {
        if (currentURL.includes(`/html/${webpagesTitle}.html`)) {
            titleMetadataTag.innerHTML = webpagesTitles[webpagesTitle];
        }
    }

    document.head.appendChild(titleMetadataTag);
}