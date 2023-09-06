includeViewportMetadataTag();

function includeViewportMetadataTag() {
    let viewportMetadataTag = document.createElement('meta');
    viewportMetadataTag.name = "viewport";
    viewportMetadataTag.content = "width=device-width, initial-scale=1.0";
    document.head.appendChild(viewportMetadataTag);
}