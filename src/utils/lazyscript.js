export default function lazyscript(url, hasCallback) {

    return createScript(url);

    /**
     * 创建script
     * @param url
     * @returns {Promise}
     */
    function createScript() {
        const doc = document;
        const scriptElement = doc.createElement('script');
        doc.body.appendChild(scriptElement);

        const promise = new Promise((resolve, reject) => {
            scriptElement.addEventListener('load', (e) => {
                removeScript(scriptElement);
                if (!hasCallback) {
                    resolve(e);
                }
            }, false);

            scriptElement.addEventListener('error', (e) => {
                removeScript(scriptElement);
                reject(e);
            }, false);

            if (hasCallback) {
                window.__lazycb__ = () => {
                    resolve();
                    window.__lazycb__ = null;
                };
            }
        });

        if (hasCallback) {
            url += '&callback=__lazycb__';
        }
        scriptElement.src = url;

        return promise;
    }

    /**
     * 移除script标签
     * @param scriptElement script dom
     */
    function removeScript(scriptElement) {
        document.body.removeChild(scriptElement);
    }

}
