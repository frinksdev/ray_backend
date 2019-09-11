/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["bower_components/Chart.js/dist/Chart.min.js","0e5fe70fcf9b154a8fe29dd0202684f9"],["bower_components/app-datepicker/app-datepicker-animations.html","906cc97550cad05343201bd7a3d59efb"],["bower_components/app-datepicker/app-datepicker-icons.html","1bb89c6b3506dc61b86092e44d8b1fc4"],["bower_components/app-datepicker/app-datepicker.html","ac4acf3a956900590244cda781757421"],["bower_components/app-layout/app-box/app-box.html","9440e8f0cf30187b4a841eb556930cd2"],["bower_components/app-layout/app-drawer-layout/app-drawer-layout.html","c204a7348be7826c897a4e320ef1001d"],["bower_components/app-layout/app-drawer/app-drawer.html","2cfe2d03e25ee8073159c12e29e70571"],["bower_components/app-layout/app-grid/app-grid-style.html","3ec86af25b97d0c4357395d0bb955a71"],["bower_components/app-layout/app-header-layout/app-header-layout.html","fae8e0d4f2b95f7a6278b55fb35b800a"],["bower_components/app-layout/app-header/app-header.html","cc81f1b266f84cacb2488195cbf55f35"],["bower_components/app-layout/app-layout-behavior/app-layout-behavior.html","f2969e5cae564c947e1ee0c2177bcdce"],["bower_components/app-layout/app-layout.html","c7055a0afdb1ac948e800a54997d8a69"],["bower_components/app-layout/app-scroll-effects/app-scroll-effects-behavior.html","7a2cd2da89213e76a44069305496b6d3"],["bower_components/app-layout/app-scroll-effects/app-scroll-effects.html","47ef4a1229fe38f7ebb0b846676908c9"],["bower_components/app-layout/app-scroll-effects/effects/blend-background.html","b4eaaeca39b790ea86b9dd731d1b69ed"],["bower_components/app-layout/app-scroll-effects/effects/fade-background.html","9e1b778964c2765b6b015b0b8c24f1f6"],["bower_components/app-layout/app-scroll-effects/effects/material.html","4a03dfd728dbfba9f9e7874b64fef018"],["bower_components/app-layout/app-scroll-effects/effects/parallax-background.html","4159e466a95973be5ef016b41a4c8763"],["bower_components/app-layout/app-scroll-effects/effects/resize-snapped-title.html","4ce7649cd519c55b28c611edd54a7f52"],["bower_components/app-layout/app-scroll-effects/effects/resize-title.html","739658b0db22095103bd40f32d398c93"],["bower_components/app-layout/app-scroll-effects/effects/waterfall.html","31c91494fdc3dadc3ce922a03ac24f1f"],["bower_components/app-layout/app-toolbar/app-toolbar.html","cac42c92a39fd9611d080d1362905030"],["bower_components/app-layout/helpers/helpers.html","5d8658a253e25662b5f3c96621f66ba5"],["bower_components/app-localize-behavior/app-localize-behavior.html","fbd7d7762b3bbc628b0f9b10a57b0500"],["bower_components/app-menu/app-menu-icon-item.html","2d6b58147641b02a0d07633257daf145"],["bower_components/app-menu/app-menu-shared-styles.html","90f82ba181ef1ee3606a5da8db012a8f"],["bower_components/app-menu/app-menu.html","33d8efbbd8e8fa43ea6f8bef56331ad7"],["bower_components/app-menu/app-submenu.html","27a8b6e55df00b4ef90be95e2348a4c8"],["bower_components/app-route/app-location.html","65296e22f912fd47922abf9886dc217a"],["bower_components/app-route/app-route-converter-behavior.html","7ea85ec7a659227e293bbd0a8ed02551"],["bower_components/app-route/app-route.html","99aa803ca8b33ebd508f64e9f9d73a35"],["bower_components/bodymovin/build/player/lottie.js","52eeb3b480bba52d0370ae0454cc2e8c"],["bower_components/bwt-datatable/bwt-datatable-card.html","13a121f9c0f6a48ab3aebe92f2e646d3"],["bower_components/bwt-datatable/bwt-datatable-column.html","8bd6cb956462d3f8e50cb4c59b3c0516"],["bower_components/bwt-datatable/bwt-datatable-edit-dialog.html","35636dc136ab3a2eed46f466a1bf2ce3"],["bower_components/bwt-datatable/bwt-datatable.html","6e8c0ba20fce4b77611466ff58b2aea5"],["bower_components/bwt-datatable/datatable-icons.html","17d5921f7e709eb158e5f158ff00096a"],["bower_components/bwt-datatable/src/collectionHelpers.js","2d68befc65a3ed9060decb32d7ac46b6"],["bower_components/bwt-datatable/src/weakCache.js","2cabde9249db091f25c68705bfc79a26"],["bower_components/chart-elements/chart-bar.html","fb07336af5fb92f38d4e37885f8b0c9c"],["bower_components/chart-elements/chart-js-import.html","eb6674a67e619d74f7236e786c9b7582"],["bower_components/chart-elements/chart-line.html","9fedf6bc134b95fffd0118d3cb70e826"],["bower_components/chart-elements/chart-property-behavior.html","2c190caa4820408135fe83620ad2c173"],["bower_components/chart-elements/chart-styles.html","bef1241823d1a67bed34213358552219"],["bower_components/chart-elements/context-behavior.html","044ddf57c912e34cd9fa75de63806790"],["bower_components/chart-elements/resize-behavior.html","2b798e4b50b1034e054ad52318c892c6"],["bower_components/file-drop-zone/file-drop-zone.html","60009a7273f572a7f2bb45b9a59832f7"],["bower_components/font-roboto/roboto.html","3dd603efe9524a774943ee9bf2f51532"],["bower_components/google-apis/google-maps-api.html","a44064caaa155887d41b21c7f64b99dc"],["bower_components/google-map/google-map-marker.html","1d93e4f619ef3065eedd9b88137168a9"],["bower_components/google-map/google-map-point.html","1931340818407f554817f93a27aefe4b"],["bower_components/google-map/google-map-poly.html","b03638dfc4704a6df877defe3618213a"],["bower_components/google-map/google-map-search.html","ebead4fb40c34281d122e00fad28c3c3"],["bower_components/google-map/google-map.html","1030af1b95742a84d77b250ba39b6ad4"],["bower_components/intl-messageformat/dist/intl-messageformat.min.js","e290bdbac9eea91a4fb2e6a912ded14b"],["bower_components/iron-a11y-announcer/iron-a11y-announcer.html","8e79f491f7fabb89335ebf30cde22cbc"],["bower_components/iron-a11y-keys-behavior/iron-a11y-keys-behavior.html","36f1d10109ee0b591691bbbc4a7d696a"],["bower_components/iron-ajax/iron-ajax.html","4a4a01114722092e5bbe4631d34dfa25"],["bower_components/iron-ajax/iron-request.html","15efbd81fa3ebbfb3ff5537eee7ad043"],["bower_components/iron-behaviors/iron-button-state.html","f251a6344896f5afb4419dca76611897"],["bower_components/iron-behaviors/iron-control-state.html","2c08ca0802bc295f956f3f4b0a672f18"],["bower_components/iron-checked-element-behavior/iron-checked-element-behavior.html","943e0ba5aa93712c411cb15be3bb7654"],["bower_components/iron-collapse/iron-collapse.html","d41b3b6b9642664e926650f6e3cc8d14"],["bower_components/iron-dropdown/iron-dropdown-scroll-manager.html","0be70b5e8b43c91a3cdfed186d21fcfe"],["bower_components/iron-dropdown/iron-dropdown.html","062de1bbc8009e8fdd2804ef38643515"],["bower_components/iron-fit-behavior/iron-fit-behavior.html","f0a96dd32eb1783590e54eed4bb67b79"],["bower_components/iron-flex-layout/iron-flex-layout-classes.html","7fdc2ab3c7921949621e8374a86e2af4"],["bower_components/iron-flex-layout/iron-flex-layout.html","bcac4712061b08d806c1778598ec78c7"],["bower_components/iron-form-element-behavior/iron-form-element-behavior.html","095764cf3de97ca58bcf009bc6f05260"],["bower_components/iron-form/iron-form.html","dd6a3df7055d2e51c22b9b33ff7548e3"],["bower_components/iron-icon/iron-icon.html","23b70883b807e1bd263d5603e954589b"],["bower_components/iron-icons/iron-icons.html","f167b940536136378cba6ddbc6bb00d0"],["bower_components/iron-iconset-svg/iron-iconset-svg.html","8dc80a23b28db5812a5036800254a69d"],["bower_components/iron-image/iron-image.html","7f0051d0dc881e8d99c892408acb1be6"],["bower_components/iron-input/iron-input.html","41b7ef2f12709c0126eeb0f11f3e3865"],["bower_components/iron-jsonp-library/iron-jsonp-library.html","26f3b47d579513e8da3350325e633596"],["bower_components/iron-list/iron-list.html","e490c7479c7be7f5f66d7dca75006e24"],["bower_components/iron-localstorage/iron-localstorage.html","1dd58c1dc7d831bf9bc91a8a1e395e94"],["bower_components/iron-location/iron-location.html","a5a1d9e421920836669dfdc9b58170cb"],["bower_components/iron-location/iron-query-params.html","ebc4b89eb5977bb8a53dae360457cb69"],["bower_components/iron-media-query/iron-media-query.html","3bd41562ca3686be17c68285b9246b1a"],["bower_components/iron-menu-behavior/iron-menu-behavior.html","d6fbb939c67b733b0a5949220c3f4109"],["bower_components/iron-menu-behavior/iron-menubar-behavior.html","bb3bb48cb55f43ae4e82ead07c5928cd"],["bower_components/iron-meta/iron-meta.html","6d386ce0b9ae78dd615091a8cd82e16e"],["bower_components/iron-overlay-behavior/iron-focusables-helper.html","b046d013cdf2b23ec6f5f0b4e1289313"],["bower_components/iron-overlay-behavior/iron-overlay-backdrop.html","6bd16c1e290341fa0e11ba963c8050af"],["bower_components/iron-overlay-behavior/iron-overlay-behavior.html","3ca67c9e3efad8fc3850830bf859a2d8"],["bower_components/iron-overlay-behavior/iron-overlay-manager.html","9f5e95eecb171912027f98e5736e724d"],["bower_components/iron-overlay-behavior/iron-scroll-manager.html","bff5471135ec8a47245ee66bbb0172d2"],["bower_components/iron-pages/iron-pages.html","f4987b10adcfe00d96d5bebde042cff5"],["bower_components/iron-range-behavior/iron-range-behavior.html","91e2669867935b2a10a8884e5e991d22"],["bower_components/iron-resizable-behavior/iron-resizable-behavior.html","b1987b8425c7825ae22d6bfa54b73ee7"],["bower_components/iron-scroll-target-behavior/iron-scroll-target-behavior.html","2f280cfdaebf323ea4229370fdf8b77c"],["bower_components/iron-scroll-threshold/iron-scroll-threshold.html","02d82dae59943d2f66a82be1b326e7c9"],["bower_components/iron-selector/iron-multi-selectable.html","cc6a0fe00ad1f43f3fcbf004e5172575"],["bower_components/iron-selector/iron-selectable.html","576d62be7369568b96398fc75f34978e"],["bower_components/iron-selector/iron-selection.html","e6d71d7c812b62ef324eee1684750251"],["bower_components/iron-selector/iron-selector.html","1facaed80539c5626cd248ec4b1011d4"],["bower_components/iron-validatable-behavior/iron-validatable-behavior.html","c48b726bce9a3095cb98628992998075"],["bower_components/moment/min/moment-with-locales.min.js","be092003963fbff17d1ad504947e5f3d"],["bower_components/moment/min/moment.min.js","6c62949d747a97edf0fa0ca06d63b4db"],["bower_components/neon-animation/animations/cascaded-animation.html","2a1a711d76e65ad857cafd9b9abf427d"],["bower_components/neon-animation/animations/fade-in-animation.html","749c9d1d5b5f4f27d687fc197309a5c5"],["bower_components/neon-animation/animations/fade-out-animation.html","d68aac80ac6bc94606e236f5eaa405ef"],["bower_components/neon-animation/animations/scale-up-animation.html","26ce23099e9b81ad31d3991d677badb6"],["bower_components/neon-animation/animations/slide-from-left-animation.html","aaa7dfd47066faa9a4ef0e162d1f7be7"],["bower_components/neon-animation/animations/slide-from-right-animation.html","293d4610b5d0053dab202df6fd28c183"],["bower_components/neon-animation/neon-animatable-behavior.html","38e4d82db81d0ab170d35331524e9b23"],["bower_components/neon-animation/neon-animated-pages.html","0fc79d89052d72a9d7d3d92eaddf7779"],["bower_components/neon-animation/neon-animation-behavior.html","539b86e0882f1059df3f2343a74d4b31"],["bower_components/neon-animation/neon-animation-runner-behavior.html","34b2b157893b4cf991047bd7bb111092"],["bower_components/neon-animation/web-animations.html","aa5266664b17a9a7d7ebf0c4e6fcf8c9"],["bower_components/paper-avatar/lib/jdenticon-1.4.0.min.js","646e1b71280d598a94bf4a08d34f64d4"],["bower_components/paper-avatar/lib/md5.min.js","5f5138e6f4be2031b46d45b096520753"],["bower_components/paper-avatar/paper-avatar.html","2e7d3c101b9e744de6c690edc88813d8"],["bower_components/paper-badge/paper-badge.html","cefb03fb3da50fb6b5b24019209a77f8"],["bower_components/paper-behaviors/paper-button-behavior.html","776ccd527d6e2fba13a47470dd0d7fb1"],["bower_components/paper-behaviors/paper-checked-element-behavior.html","b3dc28cdfdb58062cfa9d0f9bf166a75"],["bower_components/paper-behaviors/paper-inky-focus-behavior.html","acf3824aa4891737826dc34a4e6574aa"],["bower_components/paper-behaviors/paper-ripple-behavior.html","7e06e791dbf5be6e04ef69c195ea65a5"],["bower_components/paper-button/paper-button.html","128a7a5f28a53346e2251b638a6147e3"],["bower_components/paper-card/paper-card.html","9a7cf1cc5083c2f70b2109c1910d28bf"],["bower_components/paper-checkbox/paper-checkbox.html","817d44b3e6aba22a07a6c30dff68acdc"],["bower_components/paper-dialog-behavior/paper-dialog-behavior.html","87e52b9987d6966aaf5ca76810589a8a"],["bower_components/paper-dialog-behavior/paper-dialog-shared-styles.html","583a2b1fd983174e12159eec8a1e5c46"],["bower_components/paper-dialog-scrollable/paper-dialog-scrollable.html","34b541013180d6faa912b15d91604efd"],["bower_components/paper-dialog/paper-dialog.html","dbc40043361685fe33f5a64c5a001d66"],["bower_components/paper-dropdown-menu/paper-dropdown-menu-icons.html","bd8d99e625c1baab3431ae830d788c72"],["bower_components/paper-dropdown-menu/paper-dropdown-menu-shared-styles.html","62226dde51d0f26f0ccab279cfb89b58"],["bower_components/paper-dropdown-menu/paper-dropdown-menu.html","6fd5ba02e726992137714ed62ad20ad3"],["bower_components/paper-fab/paper-fab.html","8f5971510f5d9c460c36efcf74dbf2e6"],["bower_components/paper-icon-button/paper-icon-button-light.html","652062d1c83681021a26244ec05ec394"],["bower_components/paper-icon-button/paper-icon-button.html","cd0ac71797dcecb4581f61954a47f2c0"],["bower_components/paper-input-place/paper-input-place-icons.html","f3887514777760ecd771d14efdef7233"],["bower_components/paper-input-place/paper-input-place.html","1d69d93a78ad57d9558aa9d91440be2d"],["bower_components/paper-input/paper-input-addon-behavior.html","05e52a5f92f50f4c30f12ce76284d846"],["bower_components/paper-input/paper-input-behavior.html","a2603da2879b3575a50582a14dd0a769"],["bower_components/paper-input/paper-input-char-counter.html","734fda82da0f8f64de29e9f4e083a9bb"],["bower_components/paper-input/paper-input-container.html","9c473badabfb634f3b7217f7614f6246"],["bower_components/paper-input/paper-input-error.html","df73ef6b96f22adaba568860027aca80"],["bower_components/paper-input/paper-input.html","3c6d3df2480ecd7e72a0e828359f39cd"],["bower_components/paper-item/paper-icon-item.html","e5a84379c6c88dcda71319862231c1da"],["bower_components/paper-item/paper-item-behavior.html","7555e8a7d862e0086fc06679381e9103"],["bower_components/paper-item/paper-item-body.html","53903cc740e470a5f0661869d89d2f8f"],["bower_components/paper-item/paper-item-shared-styles.html","b5104778f1e5f558777d7558623493db"],["bower_components/paper-item/paper-item.html","bbcea6a06ad2e50f9d46e45adbe58514"],["bower_components/paper-listbox/paper-listbox.html","500ddcede7814c391d760893d21c8065"],["bower_components/paper-material/paper-material-shared-styles.html","0880145bd868df7784d5cd49963468f6"],["bower_components/paper-material/paper-material.html","eaad604fc13a502e455073a5bc4f6db3"],["bower_components/paper-menu-button/paper-menu-button-animations.html","c0161f8ea66c1c7e2c44f86c0d04d8d9"],["bower_components/paper-menu-button/paper-menu-button.html","51525877884ef48af29d548c9fdd0baf"],["bower_components/paper-money-input-ench/paper-money-input-ench.html","0c4280cec8efee4e888e0f32c69c4894"],["bower_components/paper-progress/paper-progress.html","53fbfbda4e3a1ca6d6a7452fb25dfad6"],["bower_components/paper-radio-button/paper-radio-button.html","acdfe0f5849c3f38af3f7343abbd0292"],["bower_components/paper-radio-group/paper-radio-group.html","b9aece421fc41a3fd3f157aa1320cbe1"],["bower_components/paper-ripple/paper-ripple.html","7f2a453fe906d810da93194f6125ce55"],["bower_components/paper-slider/paper-slider.html","ff7098a4f50d16dc096fbfc866b07979"],["bower_components/paper-spinner/paper-spinner-behavior.html","7f8a8cc6ad6c2519f89f471a15ee8e4b"],["bower_components/paper-spinner/paper-spinner-lite.html","c627cbd2ad2dc9b5e853f7cd47b104b5"],["bower_components/paper-spinner/paper-spinner-styles.html","f6b2d42a9d2262fafb034ea0f802fc80"],["bower_components/paper-spinner/paper-spinner.html","acff8d1e71eaac17569976125462ff67"],["bower_components/paper-styles/color.html","549925227bc04f9c17b52e2e35cd2e26"],["bower_components/paper-styles/default-theme.html","5357609d26772a270098c0e3ebb1bb98"],["bower_components/paper-styles/element-styles/paper-material-styles.html","8d8d619e6f98be2c5d7e49ca022e423c"],["bower_components/paper-styles/shadow.html","1f23a65a20ed44812df26a9c16468e3f"],["bower_components/paper-styles/typography.html","195497070df39ff889ce243627cf6589"],["bower_components/paper-tabs/paper-tab.html","03389779f984beaf4e44d893cc8c1278"],["bower_components/paper-tabs/paper-tabs-icons.html","f8e9e4ba00752fc54f1046143ba1be28"],["bower_components/paper-tabs/paper-tabs.html","70042f5037ea66f4acc843883e460e85"],["bower_components/paper-toast/paper-toast.html","17204b361b4f6a80e11c1abb3a6bf149"],["bower_components/paper-toggle-button/paper-toggle-button.html","7ade75268ef7258fa8f18d8154029e78"],["bower_components/paper-toolbar/paper-toolbar.html","49a0194c4b9374ccadd6078ef3a91909"],["bower_components/paper-tooltip/paper-tooltip.html","b668898764f31c9d4356268ad7a0c531"],["bower_components/paper-weather/icons.js","008152f72104fbefaae31e265769b31f"],["bower_components/paper-weather/moment-import.html","0b56a3d391fc4105c21227fdcbd0c782"],["bower_components/paper-weather/paper-weather.html","130ba4ba3c90f91c4d2b3f835a1664eb"],["bower_components/polymate/polymate-behavior.html","4c31a7c9bf4dbf2db9b353b6ec44dedd"],["bower_components/polymate/polymate-demo-controllers.html","f26dcf2c9713f0b04b56b8a9858b3f2d"],["bower_components/polymate/polymate-utils.html","6b5b52b64e7594764a3ed686fdd0ebf9"],["bower_components/polymate/polymate-view.html","9fe48f3978a4a50f120d52e1d76d11a8"],["bower_components/polymer/lib/elements/array-selector.html","a5a9eeac97e12f96ada2bc943faa9a93"],["bower_components/polymer/lib/elements/custom-style.html","7a711102d6e7f48af7e37df3d1985e4c"],["bower_components/polymer/lib/elements/dom-bind.html","3d9c46725bb7873ffdca426669807bc5"],["bower_components/polymer/lib/elements/dom-if.html","c69a8da0c9325a97a4e919486c33a724"],["bower_components/polymer/lib/elements/dom-module.html","0274847a61ad4ccf776db11f4bcab786"],["bower_components/polymer/lib/elements/dom-repeat.html","cd6eb13856518f75449addff93a7d761"],["bower_components/polymer/lib/legacy/class.html","03f17649f25298f35c89b287c527e01b"],["bower_components/polymer/lib/legacy/legacy-element-mixin.html","bb1e00832a1596c55c489884f088387f"],["bower_components/polymer/lib/legacy/mutable-data-behavior.html","c653c514de4663d0db5edff878b136ec"],["bower_components/polymer/lib/legacy/polymer-fn.html","34127afee1da9e6001e1eecb2aa1ed4f"],["bower_components/polymer/lib/legacy/polymer.dom.html","394ef9410d59ad8ed0c573a2103ad04e"],["bower_components/polymer/lib/legacy/templatizer-behavior.html","6a22fc2497c39df0b83889f9960cbe2f"],["bower_components/polymer/lib/mixins/dir-mixin.html","fb273e97dc5417b4607045e863d860b0"],["bower_components/polymer/lib/mixins/disable-upgrade-mixin.html","c49161cb45d416b34a28def831dac2ae"],["bower_components/polymer/lib/mixins/element-mixin.html","fdf30a5bae6b7c9799d5d87445f62de6"],["bower_components/polymer/lib/mixins/gesture-event-listeners.html","2ba36d04a7052d2094bdb6d2b4d29a17"],["bower_components/polymer/lib/mixins/mutable-data.html","0bab5b82fb1f716360963a950ac770ad"],["bower_components/polymer/lib/mixins/properties-changed.html","e5058cce685d4e710f7bb88e057382ec"],["bower_components/polymer/lib/mixins/properties-mixin.html","b55fb4ddd2fe5f7d441eddfe80de9acb"],["bower_components/polymer/lib/mixins/property-accessors.html","dbfcb880894ebb3f0f041cfb5d5504c5"],["bower_components/polymer/lib/mixins/property-effects.html","699378cc5138a9a65d12f7bef85f6e1e"],["bower_components/polymer/lib/mixins/template-stamp.html","b70fbd68336bd77b59111f3df1a3216a"],["bower_components/polymer/lib/utils/array-splice.html","000c6d75d97ae3d726147d513ea03a54"],["bower_components/polymer/lib/utils/async.html","08c8d6cdcd98587c97445dbf599af13c"],["bower_components/polymer/lib/utils/boot.html","3f654749b0b3d5c5aa45666da4296b21"],["bower_components/polymer/lib/utils/case-map.html","692010f0d6c564f6bee33642a9b1d128"],["bower_components/polymer/lib/utils/debounce.html","34da85cabbd14c1da33e20f167c7fc5a"],["bower_components/polymer/lib/utils/flattened-nodes-observer.html","89ae5904a36a4f4d7d7c59ab607c6019"],["bower_components/polymer/lib/utils/flush.html","8ba0c240258de76c32c4830728279503"],["bower_components/polymer/lib/utils/gestures.html","70ed8b9862a83ec6d88aec0f16ed525d"],["bower_components/polymer/lib/utils/html-tag.html","74fc6824c62aea205bf7cb5d68305358"],["bower_components/polymer/lib/utils/import-href.html","56803dd1c3ba5f7abdbfc4ea014aeb27"],["bower_components/polymer/lib/utils/mixin.html","9afbaddba736a0dea825b3e1a24f5943"],["bower_components/polymer/lib/utils/path.html","588864d30b74f858d9188ea111afb5dd"],["bower_components/polymer/lib/utils/render-status.html","c5ae8eac72609ae7f9cb6bfbef8ede81"],["bower_components/polymer/lib/utils/resolve-url.html","82f20a1f139c9f5d592e8d0e4d2591e3"],["bower_components/polymer/lib/utils/settings.html","fd41455f39b29753c065506c25a9fbc2"],["bower_components/polymer/lib/utils/style-gather.html","a7c328a15fcd255f49d6ae83c1d808f4"],["bower_components/polymer/lib/utils/telemetry.html","f517839054b9f4a14d5f0eecd64f054a"],["bower_components/polymer/lib/utils/templatize.html","f3d3d248a4143f7981b93dc84702cfa0"],["bower_components/polymer/lib/utils/unresolved.html","b8c7bf6a6ecd0fa21a24da8876d461eb"],["bower_components/polymer/polymer-element.html","08a7003aea6a4d70ba20306a1e92078e"],["bower_components/polymer/polymer.html","1ed2bae1bf6d43e8c8bc74100ddff270"],["bower_components/range-datepicker/moment-import.html","d313242087c22e7541cf7959438ff530"],["bower_components/range-datepicker/range-datepicker-behavior.html","c036db0dcde86ef851fe66d41a7b461d"],["bower_components/range-datepicker/range-datepicker-behavior.js","fa70a20fc76d5cbd6cf382ed942db0a3"],["bower_components/range-datepicker/range-datepicker-calendar.html","dd625b51064d13c113014e94188780d3"],["bower_components/range-datepicker/range-datepicker-calendar.js","7fe6d1a3ba8596d2375c442b353ea715"],["bower_components/range-datepicker/range-datepicker-cell.html","400d40077c72e81efc35c6ca62ec048b"],["bower_components/range-datepicker/range-datepicker-cell.js","a573b4ccdf8e397f9678138fd98a2b16"],["bower_components/range-datepicker/range-datepicker.html","499e05c65481a13291a14ecf376a1eb3"],["bower_components/range-datepicker/range-datepicker.js","469f036036c229e956413c58b3f71b85"],["bower_components/salte-rating/salte-rating.html","e1422cc9afe1a993054d085e446447a6"],["bower_components/shadycss/apply-shim.html","5b73ef5bfcac4955f6c24f55ea322eb1"],["bower_components/shadycss/apply-shim.min.js","4bacaf587edbf76d801f5856f2daaa77"],["bower_components/shadycss/custom-style-interface.html","7e28230b85cdcc2488e87172c3395d52"],["bower_components/shadycss/custom-style-interface.min.js","fabed66b5b266ae3e980facfc09c3b25"],["bower_components/socket.io-client/dist/socket.io.slim.js","9fb648ec43fcd7e6349ffd4b3220fd1d"],["bower_components/vaadin-button/src/vaadin-button.html","929a6c3b40290c53570c61c7e8514782"],["bower_components/vaadin-button/theme/lumo/vaadin-button-styles.html","e1770e19ef1471cad5eda7c70a0ea1fa"],["bower_components/vaadin-button/theme/lumo/vaadin-button.html","704ba46ca4a88baf63913bcf43df631e"],["bower_components/vaadin-combo-box/src/vaadin-combo-box-data-provider-mixin.html","17c68ca9fe6d1fc2c6af2b25fbbdfb26"],["bower_components/vaadin-combo-box/src/vaadin-combo-box-dropdown-wrapper.html","0623e36ba3b28de3ead1109995dc2b0a"],["bower_components/vaadin-combo-box/src/vaadin-combo-box-dropdown.html","821ac54f1651653fff294c79da6d0226"],["bower_components/vaadin-combo-box/src/vaadin-combo-box-item.html","017c52cc060995e053293d553eea9bfd"],["bower_components/vaadin-combo-box/src/vaadin-combo-box-light.html","7a45162b64bb1e8fd9849d4e05501df2"],["bower_components/vaadin-combo-box/src/vaadin-combo-box-mixin.html","b902f451a6812d074007064cb24a42ff"],["bower_components/vaadin-combo-box/src/vaadin-combo-box-placeholder.html","632bbd5a03194a1823b05167130a31e9"],["bower_components/vaadin-combo-box/theme/lumo/vaadin-combo-box-dropdown-styles.html","a0c236c66795b166521f6da2ca7723a3"],["bower_components/vaadin-combo-box/theme/lumo/vaadin-combo-box-item-styles.html","c46dc1f408446bc19e4447b1050ac01d"],["bower_components/vaadin-combo-box/theme/lumo/vaadin-combo-box-light.html","db6a299d1f83fa9e1025d36142b726a3"],["bower_components/vaadin-context-menu/src/vaadin-context-menu-overlay.html","d847656b694d4cc99e15ba61a44bdd3d"],["bower_components/vaadin-context-menu/src/vaadin-context-menu.html","1a45d75df17b13cd751e79356393c39c"],["bower_components/vaadin-context-menu/src/vaadin-contextmenu-event.html","44759b1622e06950510cb920128e60cd"],["bower_components/vaadin-context-menu/src/vaadin-contextmenu-items-mixin.html","b5b678d37592f6dbb298a589b5782d33"],["bower_components/vaadin-context-menu/src/vaadin-device-detector.html","3769b284a9682b9d7b2a450a2f6ddd0c"],["bower_components/vaadin-context-menu/theme/lumo/vaadin-context-menu-styles.html","8dc401bd0801fe6d2c589af3cb5460eb"],["bower_components/vaadin-context-menu/theme/lumo/vaadin-context-menu.html","e90d5cdc45df326d2abe9892b201343c"],["bower_components/vaadin-context-menu/vaadin-context-menu.html","787374acb00916d162fce4e74e730439"],["bower_components/vaadin-control-state-mixin/vaadin-control-state-mixin.html","98685dd51b411246ee1bd128c7ee08b6"],["bower_components/vaadin-development-mode-detector/vaadin-development-mode-detector.html","db71dbd0ffd45883256efe348c94f5bb"],["bower_components/vaadin-element-mixin/vaadin-element-mixin.html","ce23d6d0814e60fba663a3041a959566"],["bower_components/vaadin-item/src/vaadin-item-mixin.html","b02b8262b0cbaada059300b2c3ff7a29"],["bower_components/vaadin-item/src/vaadin-item.html","b5690c84e2620a8a7aa645710db6c51d"],["bower_components/vaadin-item/theme/lumo/vaadin-item-styles.html","37ac3e516301eee587295c3dff22ac47"],["bower_components/vaadin-item/theme/lumo/vaadin-item.html","8c67700ba412ec3313089229769bfde8"],["bower_components/vaadin-list-box/src/vaadin-list-box.html","487c81d40cb5e78938807ca35e61e72d"],["bower_components/vaadin-list-box/theme/lumo/vaadin-list-box-styles.html","d89bf71086d4bcd8a842cb226f812f2b"],["bower_components/vaadin-list-box/theme/lumo/vaadin-list-box.html","2fa9aa91aa52fd000c0f9be30cceee9b"],["bower_components/vaadin-list-mixin/vaadin-list-mixin.html","50bea7f0c88332ee154039b531f1dc4b"],["bower_components/vaadin-lumo-styles/color.html","7d5676a0364095d89555a0389112b576"],["bower_components/vaadin-lumo-styles/font-icons.html","3aa87f61718f4fec1b1ddd45c93e03e6"],["bower_components/vaadin-lumo-styles/mixins/field-button.html","2f6847a944cbbf7e025b8a905ea38a5b"],["bower_components/vaadin-lumo-styles/mixins/menu-overlay.html","ccfd86860781e88d8d6e189310b26c95"],["bower_components/vaadin-lumo-styles/mixins/overlay.html","d9f841f196183b5668862c95afd83bae"],["bower_components/vaadin-lumo-styles/mixins/required-field.html","3728d86feccaf5542476f2493cd77f0d"],["bower_components/vaadin-lumo-styles/sizing.html","25ad9e9a8800d45087fd9be497606751"],["bower_components/vaadin-lumo-styles/spacing.html","83d43c70cb2c7cc5214b8b2c32c0a8a0"],["bower_components/vaadin-lumo-styles/style.html","7053fb7b76561d1200ab790a6b3e3d78"],["bower_components/vaadin-lumo-styles/typography.html","014c342d26488746bac87dff2fa9520d"],["bower_components/vaadin-lumo-styles/version.html","2bfbcce1b78a1fa75441abf05ad326c9"],["bower_components/vaadin-overlay/src/vaadin-focusables-helper.html","445428a0b59e57433f0c35ddabc53b92"],["bower_components/vaadin-overlay/src/vaadin-overlay.html","dbeec143a00c1a6568aaa86d98edcc58"],["bower_components/vaadin-overlay/theme/lumo/vaadin-overlay-styles.html","47f59d8c01bb4ed769b4bbe8e2977e7a"],["bower_components/vaadin-overlay/theme/lumo/vaadin-overlay.html","21a0136f50ff88c912ef6db21e29f807"],["bower_components/vaadin-progress-bar/src/vaadin-progress-bar.html","584d6f4f1a70cda2f7c3a3b3228d71b8"],["bower_components/vaadin-progress-bar/src/vaadin-progress-mixin.html","3276e5222a17a314cd54ea6839d62500"],["bower_components/vaadin-progress-bar/theme/lumo/vaadin-progress-bar-styles.html","7f4ac825724254f43605fc436b412383"],["bower_components/vaadin-progress-bar/theme/lumo/vaadin-progress-bar.html","0672f0679963c64ae67ee4f8b343eb0f"],["bower_components/vaadin-text-field/src/vaadin-text-field-mixin.html","4ed84367648029295971e95792deb25d"],["bower_components/vaadin-text-field/src/vaadin-text-field.html","2a9459af84643a4ec0decaf9cb10fda7"],["bower_components/vaadin-text-field/theme/lumo/vaadin-text-field-styles.html","4e6c1d634258a1c1001b8bef7a39d886"],["bower_components/vaadin-text-field/theme/lumo/vaadin-text-field.html","80e05aea3ea9e6ca810779baecb17eb5"],["bower_components/vaadin-themable-mixin/vaadin-themable-mixin.html","5d51014d3a54a0e41b163c079d19f8cf"],["bower_components/vaadin-themable-mixin/vaadin-theme-property-mixin.html","f6573e0f47555ba17d96a55cad7ef02a"],["bower_components/vaadin-time-picker/src/vaadin-time-picker-text-field.html","cfea69965639b32566793fb3721f1760"],["bower_components/vaadin-time-picker/src/vaadin-time-picker.html","50cbcd9bc096cfca849779896f6635a7"],["bower_components/vaadin-time-picker/theme/lumo/vaadin-time-picker-styles.html","79398e652cdc26e1b3ef06430f34b012"],["bower_components/vaadin-time-picker/theme/lumo/vaadin-time-picker.html","c729b4dc4c68c9c2ee67a908a7068f0a"],["bower_components/vaadin-time-picker/vaadin-time-picker.html","9845f3485f4f5e0591551118aa521f81"],["bower_components/vaadin-upload/src/vaadin-upload-file.html","0723f78ea2ea38e6469498b065935151"],["bower_components/vaadin-upload/src/vaadin-upload-icons.html","cdb56575df108cd26b67705f51a64754"],["bower_components/vaadin-upload/src/vaadin-upload.html","e390bce864e9afe5be3f2597794e218f"],["bower_components/vaadin-upload/theme/lumo/vaadin-upload-styles.html","f03235e5525355f69c88aba913418363"],["bower_components/vaadin-upload/theme/lumo/vaadin-upload.html","bca8b75d39699cbdf42bad70c6d7b22a"],["bower_components/vaadin-upload/vaadin-upload.html","a73b6b3637994b810234ecb489cc669c"],["bower_components/vaadin-usage-statistics/vaadin-usage-statistics-collect.html","43608e860c202f084006f2e1270b3db2"],["bower_components/vaadin-usage-statistics/vaadin-usage-statistics.html","df66694a04887acb1adc8f867e42472a"],["bower_components/web-animations-js/web-animations-next-lite.min.js","9fe6feedb698e3b97973e54dd91a7cab"],["bower_components/webcomponentsjs/custom-elements-es5-adapter.js","8af5f1900788253d8384715a01425ab7"],["bower_components/webcomponentsjs/gulpfile.js","d62de2e3466a2ebfebb7c463a724f50d"],["bower_components/webcomponentsjs/webcomponents-ce.js","79018f7fe2788095460a82dad1d0e2d9"],["bower_components/webcomponentsjs/webcomponents-hi-ce.js","ceb979b7d4c089b9daa38eec743a3915"],["bower_components/webcomponentsjs/webcomponents-hi-sd-ce.js","4cc6fe042af14bded21af71ccb137f45"],["bower_components/webcomponentsjs/webcomponents-hi-sd.js","8631268c8fb731636ddf410293155f89"],["bower_components/webcomponentsjs/webcomponents-hi.js","2e02d950c1c199919a375acfd1fbc108"],["bower_components/webcomponentsjs/webcomponents-lite.js","e6a9f166ed6b16c555bd020782780db5"],["bower_components/webcomponentsjs/webcomponents-loader.js","596ad3dc06dfb78ecdc6bcee1d653f04"],["bower_components/webcomponentsjs/webcomponents-sd-ce.js","0ae8ee0bf172ca9bcbc04f1bfea15fe4"],["bower_components/webcomponentsjs/webcomponents-sd.js","221ef1c37f786b0f26f5e94e53276d20"],["bower_components/whenever.js/whenever.js","bae5171a9627eba97097e267248136e0"],["index.html","bb349df5600f996c2fc1bd167826e8af"],["languages.js","8fc0b0e36941d23a5eb9d3ca22b24420"],["manifest.json","11c59e6579bd538fedba14dad093fe1f"],["map.js","12f32a7bea7b6c441575a45b1bef91bf"],["src/elements/base-class.html","1d5feee4c530d6a8f12bcb6619f552c8"],["src/elements/dialog-media.html","08467b0787ab2a9fab79f7cc01bd3e60"],["src/elements/library.html","e631af7c2ce254a81b8f889e39d801cb"],["src/elements/my-icons.html","31bfa887ccbeb042f46be4e380edba1f"],["src/elements/my-meta.html","86a5d250e03c5f6aa3043a316e5249ae"],["src/pages/base-complaint-types/base-complaint-types.html","0ede5765e759cc4bc7bac5b0925835ff"],["src/pages/base-regions/base-regions.html","e64877099775763f49f6526449c35417"],["src/pages/base-services/base-services.html","e595c6894c8eced24ccd5045e9f7b110"],["src/pages/call-requests/call-requests.html","4afe525670697018c0e7a190b6322fc8"],["src/pages/complaints/complaints.html","03692fbd68041571648869fb4df09813"],["src/pages/coupons/coupons.html","a44a2c8277971e1cc4e1da6e0f947da8"],["src/pages/dashboard/dashboard.html","ae2d837d98ddc8cac451d16128d94048"],["src/pages/dashboard/widgets/drivers.html","41b72dd2532df00f3894145c516c7aed"],["src/pages/dashboard/widgets/map.html","da4d31bfe2b93a9e5a96dd97a91b6e8d"],["src/pages/dashboard/widgets/onlines.html","a4f77f40cef5de23049f020bab1df257"],["src/pages/dashboard/widgets/stat.html","cf2f03377a16b2642b215b4b4a1cddd0"],["src/pages/dashboard/widgets/today.html","2f4102d8bb92c30f835aaca9dbbcacb2"],["src/pages/drivers/drivers.html","9c57e3c8185668489f0ce40d3ec6dd4d"],["src/pages/library/library.html","6a0e6c69cdaceeea05a1ec5b5da00762"],["src/pages/order-service/order-service.html","b66a79fc1a7a2cf7d45b5a70f9c6ab61"],["src/pages/payment-requests/payment-requests.html","5634bde52bdd87a81ff45487bb134199"],["src/pages/pending-drivers/pending-drivers.html","ce455ceb443b58d72e0badab91756a40"],["src/pages/promotions/promotions.html","1dbfc43941808ad269329592dd1242de"],["src/pages/riders/riders.html","23841046204612aaf2eedd99594b2470"],["src/pages/settings-general/settings-general.html","94969c6770792d1446340b099632bd04"],["src/pages/settings-users/settings-users.html","de5e678201eeaba9df3de388256fd7eb"],["src/pages/travels/travels.html","6807e9e54e3a5ec01ed20361881007b9"],["src/screen-login.html","6cd97bb9646c0cd97b32f08ac04f2d3a"],["src/screen-main.html","5fecc49fe2b30db1382c1c67746c6fe0"],["src/screen-splash.html","cf92a9b795c97a26ff71e8a818898030"],["src/taxi-app.html","688c54ee2443431c018f5660af8e15d1"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function (body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function (kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function (kv) {
        return ignoreUrlParametersMatching.every(function (ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function (kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function (item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function (requests) {
    return requests.map(function (request) {
      return request.url;
    });
  }).then(function (urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(cacheName).then(function (cache) {
      return setOfCachedUrls(cache).then(function (cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function (response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function (responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function () {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function (event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function (cache) {
      return cache.keys().then(function (existingRequests) {
        return Promise.all(
          existingRequests.map(function (existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function () {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function (event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = '';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = 'index.html';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted(["\\/[^\\/\\.]*(\\?|$)"], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function (cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function (e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







