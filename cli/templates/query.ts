import Yasgui from "@triply/yasgui";

const url = window.location.href.endsWith('/') ? window.location.href.slice(0, -1) : window.location.href;


let yasgui =  new Yasgui(document.getElementById("yasgui")!!, {
    requestConfig: { endpoint: url + "/query" },
    endpointCatalogueOptions: {
        getData: function () {
            return [
                { endpoint: url + "/query" },
                { endpoint: url + "/update" },
            ];
        },
        keys: [],
    } ,
    //tabName : "config"
});

yasgui.on("tabAdd" , (instance: Yasgui, newTabId: string) =>{
      //instance.config.tabName = "config"
    //instance.tabElements.get(newTabId).tabEl!!.innerHTML ="<div> hello </div>"
    instance.tabElements.addTab(newTabId ,   )
    console.log("add tab")
})
yasgui.on("tabSelect" , (instance: Yasgui, newTabId: string) => {
    instance.tabElements.get(newTabId)!!
    console.log("select tab")
})











