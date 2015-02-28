var asset = {
    HelloWorld_png : "asset/HelloWorld.png",
    CloseNormal_png : "asset/CloseNormal.png",
    CloseSelected_png : "asset/CloseSelected.png",
    map_01 : "asset/tiled_sprites/Map_GOD_PLEASE_WORK.tmx",
    big_tileset : "asset/tiled_sprites/Big_TileSet.png",
    enemy : "asset/tiled_sprites/enmy.png",
    powerplantlv2: "asset/tiled_sprites/Power Plant.png",
    powerplantlv1: "asset/tiled_sprites/Power Plant lvl 1.png",
    powerplantlv3: "asset/tiled_sprites/Power Plant lvl 3.png",
    tower: "asset/tiled_sprites/Tower.png"
};

var g_resources = [];
for (var i in asset) {
    g_resources.push(asset[i]);
}