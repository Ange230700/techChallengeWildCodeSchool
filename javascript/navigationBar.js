function firstHTMLpartOfNavigationBar() {
    return `
        <nav>
            <img src="/assets/logo.png" alt="logo" />
            <ul>
    `;
}

function navigationBarItems() {
    let navigationBarItems = {
        "Home": "index",
        "Royal Family": "royalFamily",
        "Royal Assets": "royalAssets",
        "Contact Us": "contact"
    };
    let navigationBarItemsHTML = ``;
    for (let navigationBarItem in navigationBarItems) {
        if (navigationBarItem == "Home") {
            navigationBarItemsHTML += `
                <li>
                    <a href="/">
                        ${navigationBarItem}
                    </a>
                </li>
            `;
            continue;
        }
        navigationBarItemsHTML += `
                <li>
                    <a href="/html/${navigationBarItems[navigationBarItem]}.html">
                        ${navigationBarItem}
                    </a>
                </li>
        `;
    }
    return navigationBarItemsHTML;
}

function lastHTMLpartOfNavigationBar() {
    return `
            </ul>
        </nav>
    `;
}

function HTMLtoPutInNavigationBarElement() {
    return `
        ${firstHTMLpartOfNavigationBar()}
        ${navigationBarItems()}
        ${lastHTMLpartOfNavigationBar()}
    `;
}

document.getElementById('navigationBar').innerHTML = HTMLtoPutInNavigationBarElement();
