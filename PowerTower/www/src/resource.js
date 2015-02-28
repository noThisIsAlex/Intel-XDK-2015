var asset = {
    HelloWorld_png : "asset/HelloWorld.png",
    CloseNormal_png : "asset/CloseNormal.png",
    CloseSelected_png : "asset/CloseSelected.png",
    map_01 : "asset/tiled_sprites/Map_test01.tmx",
    terrian_tileset : "asset/tiled_sprites/terrain_tiles.png",
    enemy : "asset/tiled_sprites/enmy.png",
    powerplant: "asset/tiled_sprites/power_plant.png",
    powerplantlv1: "asset/tiled_sprites/power_plant_lv1.png",
    powerplantlv2: "asset/tiled_sprites/power_plant_lv2.png",
    powerplantlv3: "asset/tiled_sprites/power_plant_lv3.png",
    tower: "asset/tiled_sprites/Basic_Tower_On.png"
};

var g_resources = [];
for (var i in asset) {
    g_resources.push(asset[i]);
}