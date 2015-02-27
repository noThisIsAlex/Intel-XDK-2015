var asset = {
    HelloWorld_png : "asset/HelloWorld.png",
    CloseNormal_png : "asset/CloseNormal.png",
    CloseSelected_png : "asset/CloseSelected.png"
};

var g_resources = [];
for (var i in asset) {
    g_resources.push(asset[i]);
}