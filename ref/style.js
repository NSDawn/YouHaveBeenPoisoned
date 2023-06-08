var CANVAS_SIZE = new v2(1024, 576);
var SCALE = 4;

const COLORS = {
    "white": "#ffffff",
    "black": "#000000",
    "brown-outline": "#493c2b",
    "red-outline": "#732930",
    "statue-gray": "#656d71",
    "golden": "#f5d41d",
};

const FONT_LIST = [
    "MPLUS",
    "MPLUS_bold",
    "NotoSans",
    "NotoSansTamil",
];

const SFX_LIST = [
    "coughC.mp3",
    "card_flip.mp3",
    "card_shuffle.mp3",
    "coughA.mp3",
    "coughB.mp3",
    "hallucination.mp3",
    "statue_failure.mp3",
    "statue_success.mp3",
];

const IMG_LIST = [
    "ui_mouse_pointer.png",
    "ui_hallucination.png",
    "_cabinet.png",
    "_gems.png",
    "filt_chill.png",
    "item_bad.png",
    "item_bezoar.png",
    "item_butterfly.png",
    "item_catnip.png",
    "item_chiliflakes.png",
    "item_chive.png",
    "item_cicada.png",
    "item_cinnamon.png",
    "item_cloves.png",
    "item_copper.png",
    "item_coriander.png",
    "item_eggofadder.png",
    "item_eggofchicken.png",
    "item_eggofsparrow.png",
    "item_eyeofadder.png",
    "item_eyeofrabbit.png",
    "item_eyeofrat.png",
    "item_eyeofsheep.png",
    "item_featherofchicken.png",
    "item_featherofsparrow.png",
    "item_fieldgarlic.png",
    "item_fieldleek.png",
    "item_footofrabbit.png",
    "item_gold.png",
    "item_iron.png",
    "item_lavender.png",
    "item_lead.png",
    "item_lemonbalm.png",
    "item_load_0.png",
    "item_load_1.png",
    "item_load_2.png",
    "item_load_3.png",
    "item_load_4.png",
    "item_load_5.png",
    "item_load_6.png",
    "item_load_7.png",
    "item_load_8.png",
    "item_load_9.png",
    "item_load_10.png",
    "item_load_11.png",
    "item_load_12.png",
    "item_load_13.png",
    "item_load_14.png",
    "item_moth.png",
    "item_mustardseeds.png",
    "item_peppercorns.png",
    "item_peppermint.png",
    "item_poppyseeds.png",
    "item_pulverizedbug.png",
    "item_pulverizedleaf.png",
    "item_ramp.png",
    "item_rosemary.png",
    "item_sage.png",
    "item_saliva.png",
    "item_salt.png",
    "item_saltpeter.png",
    "item_scorpion.png",
    "item_shedskinofadder.png",
    "item_sigil.png",
    "item_sigil三.png",
    "item_sigil人.png",
    "item_sigil土.png",
    "item_sigil工.png",
    "item_sigil成.png",
    "item_sigil木.png",
    "item_sigil楽.png",
    "item_sigil死.png",
    "item_sigil水.png",
    "item_sigil火.png",
    "item_sigil玉.png",
    "item_sigil花.png",
    "item_sigil薬.png",
    "item_sigil車.png",
    "item_sigil金.png",
    "item_silver.png",
    "item_skullofadder.png",
    "item_skullofanglerfish.png",
    "item_skullofrat.png",
    "item_skullofsheep.png",
    "item_sodaash.png",
    "item_spider.png",
    "item_sulfur.png",
    "item_tailofrat.png",
    "item_tarot0.png",
    "item_tarot1.png",
    "item_tarot2.png",
    "item_tarot3.png",
    "item_tarot4.png",
    "item_tarot5.png",
    "item_tarot6.png",
    "item_tarot7.png",
    "item_tarot8.png",
    "item_tarot9.png",
    "item_tarot10.png",
    "item_tarot11.png",
    "item_tarot12.png",
    "item_tarot13.png",
    "item_tarot14.png",
    "item_tarot15.png",
    "item_tarot16.png",
    "item_tarot17.png",
    "item_tarot18.png",
    "item_tarot19.png",
    "item_tarot20.png",
    "item_tarot21.png",
    "item_tarotback.png",
    "item_thermometer.png",
    "item_thermometer0.png",
    "item_thermometer1.png",
    "item_thermometer2.png",
    "item_thyme.png",
    "item_tin.png",
    "item_vial.png",
    "item_vialargentous.png",
    "item_vialaurous.png",
    "item_vialbad.png",
    "item_vialcupric.png",
    "item_vialcuprous.png",
    "item_vialdraught.png",
    "item_vialelixir.png",
    "item_vialferric.png",
    "item_vialferrous.png",
    "item_vialherb.png",
    "item_vialherbextract.png",
    "item_vialmetal.png",
    "item_vialmetalb.png",
    "item_vialmineral.png",
    "item_vialplumbic.png",
    "item_vialplumbous.png",
    "item_vialstannic.png",
    "item_vialstannous.png",
    "item_vialsulfur.png",
    "item_vialtonic.png",
    "item_vialwater.png",
    "item_vialwaterherb.png",
    "item_vialwatermetal.png",
    "item_vialwatermetalb.png",
    "item_vialwatersulfur.png",
    "item_vitriol.png",
    "item_wormwood.png",
    "item_x.png",
    "palette.png",
    "tac_0.png",
    "tac_1.png",
    "tac_2.png",
    "tac_3.png",
    "ui_altar_head.png",
    "ui_altar.png",
    "ui_button_screenlf0.png",
    "ui_button_screenlf1.png",
    "ui_button_screenrt0.png",
    "ui_button_screenrt1.png",
    "ui_button_shuffle0.png",
    "ui_button_shuffle1.png",
    "ui_cabinet_al.png",
    "ui_cabinet_ar.png",
    "ui_cabinet_el.png",
    "ui_cabinet_er.png",
    "ui_cabinet_rl.png",
    "ui_cabinet_rr.png",
    "ui_cabinet_sl.png",
    "ui_cabinet_sr.png",
    "ui_cauldron_black.png",
    "ui_cauldron_blue.png",
    "ui_cauldron_gray.png",
    "ui_cauldron_pink.png",
    "ui_cauldron_purple.png",
    "ui_drawer.png",
    "ui_drawerci.png",
    "ui_drawercs.png",
    "ui_drawerf.png",
    "ui_drawerh.png",
    "ui_drawerhc.png",
    "ui_drawerhg.png",
    "ui_drawerhl.png",
    "ui_drawerii.png",
    "ui_drawerkc.png",
    "ui_drawerkl.png",
    "ui_draweroc.png",
    "ui_drawerot.png",
    "ui_drawers.png",
    "ui_drawerw.png",
    "ui_entryslot.png",
    "ui_inventory.png",
    "ui_lab.png",
    "ui_mortarslot.png",
    "ui_store.png",
]