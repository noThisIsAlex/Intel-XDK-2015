var asset = {
    HelloWorld_png : "asset/HelloWorld.png",
    CloseNormal_png : "asset/CloseNormal.png",
    CloseSelected_png : "asset/CloseSelected.png",
    map_01 : "asset/tiled_sprites/Map_test01.tmx",
    map_02 : "asset/tiled_sprites/Map_02.tmx",
    terrian_tileset : "asset/tiled_sprites/terrain_tiles.png",
    terrain_corners : "asset/tiled_sprites/terrain_corners.png",
    enemy : "asset/tiled_sprites/soldier.png",
    powerplant_base : "asset/tiled_sprites/power_plant.png",
    powerplantlv1 : "asset/tiled_sprites/power_plant_lv1.png",
    powerplantlv2 : "asset/tiled_sprites/power_plant_lv2.png",
    powerplantlv3 : "asset/tiled_sprites/power_plant_lv3.png",
    tower_up : "asset/tiled_sprites/Basic_Tower_On_p1.png",
    tower_down : "asset/tiled_sprites/Basic_Tower_On_p2.png",
    tower_left : "asset/tiled_sprites/Basic_Tower_On_p3.png",
    tower_right : "asset/tiled_sprites/Basic_Tower_On_p4.png",
	tower_upoff: "asset/tiled_sprites/Basic_Tower_Off_p1.png",
    fireball : "asset/tiled_sprites/fireball.png",
    tank_decoration : "asset/tiled_sprites/tank_decoration.png",
    title : "asset/tiled_sprites/title.png",
    
    // soundfiles
    main_theme : "asset/sound_files/main_loop.wav",
    title_loop : "asset/sound_files/intro_loop.wav",
    loop_2 : "asset/sound_files/loop_2.wav",
    loop_3 : "asset/sound_files/loop_3.wav",
    all_loop : "asset/sound_files/loop_final.wav",
    power_on : "asset/sound_files/power_on.wav",
    power_off : "asset/sound_files/power_off.wav",
    turret_fired : "asset/sound_files/turret_fired.wav",
    taking_damage : "asset/sound_files/power_plant_hit.wav",
    lvl_up : "asset/sound_files/power_plant_lvl_up.wav",
    enemy_die : "asset/sound_files/enemy_die.wav"
};

var g_resources = [];
for (var i in asset) {
    g_resources.push(asset[i]);
}
