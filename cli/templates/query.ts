import Yasgui from "@triply/yasgui";

const url = window.location.href.endsWith('/') ? window.location.href.slice(0, -1) : window.location.href;

new Yasgui(document.getElementById("yasgui")!!, {
    requestConfig: { endpoint: url + "/query" },
    endpointCatalogueOptions: {
        getData: function () {
            return [
                { endpoint: url + "/query" },
                { endpoint: url + "/update" },
            ];
        },
        keys: [],
    }
});