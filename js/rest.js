
function navSlide() {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");

    burger.addEventListener("click", () => {
        //Toggle Nav
        nav.classList.toggle("nav-active");

        //Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ""
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
        //Burger Animation
        burger.classList.toggle("toggle");
    });

}

navSlide();


// side nav bar

// // modal
// var fas = document.querySelector(".fa-bread-slice")
// var modal = document.querySelector(".modal")
// fas.addEventListener("click", function () {
//     if (modal.style.display === "none") {
//         modal.style.display = "block";
//         modal.style.transition = "all 0.8s ease";

//     }
//     else {
//         modal.style.display = "none"
//     }

// })



// swiper
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    slidesPerColumn: 2,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});



// 


// var increasebutton = document.getElementById("right-btn")
// var decrebtn = document.getElementById("left-btn ")
// var countss = document.getElementById("countsss");
// var count = 0;


// increasebutton.addEventListener('click', () => {
//     count++
//     countss.innerHTML = count;
//     console.log("increase");

// })

// decrebtn.addEventListener("click", () => {
//     count--
//     countss.innerHTML = count;

//     console.log("decrease");

// })







      var swiper = new Swiper(".mySwipers", {
        pagination: {
            el: ".swiper-paginations",
            dynamicBullets: true,
        },
    });































// window.google = window.google || {};
// google.maps = google.maps || {};
// (function () {

//     var modules = google.maps.modules = {};
//     google.maps.__gjsload__ = function (name, text) {
//         modules[name] = text;
//     };

//     google.maps.Load = function (apiLoad) {
//         delete google.maps.Load;
//         apiLoad([0.009999999776482582, [null, [["https://khms0.googleapis.com/kh?v=908\u0026hl=en-US\u0026", "https://khms1.googleapis.com/kh?v=908\u0026hl=en-US\u0026"], null, null, null, 1, "908", ["https://khms0.google.com/kh?v=908\u0026hl=en-US\u0026", "https://khms1.google.com/kh?v=908\u0026hl=en-US\u0026"]], null, null, null, null, [["https://cbks0.googleapis.com/cbk?", "https://cbks1.googleapis.com/cbk?"]], [["https://khms0.googleapis.com/kh?v=130\u0026hl=en-US\u0026", "https://khms1.googleapis.com/kh?v=130\u0026hl=en-US\u0026"], null, null, null, null, "130", ["https://khms0.google.com/kh?v=130\u0026hl=en-US\u0026", "https://khms1.google.com/kh?v=130\u0026hl=en-US\u0026"]]], ["en-US", "US", null, 0, null, null, "https://maps.gstatic.com/mapfiles/", null, "https://maps.googleapis.com", "https://maps.googleapis.com", null, "https://maps.google.com", null, "https://maps.gstatic.com/maps-api-v3/api/images/", "https://www.google.com/maps", null, "https://www.google.com", 1, "https://maps.googleapis.com/maps_api_js_slo/log?hasfast=true"], ["https://maps.googleapis.com/maps-api-v3/api/js/45/8b", "3.45.8b"], [2898758165], null, "google-maps-embed", null, [35, 39, 137, 1, 2, 3, 8, 11, 14, 15, 17, 18, 20, 21, 23, 24, 26, 32, 45, 47, 48, 88, 30, 10, 51, 63, 68, 71, 72, 76, 78, 81, 85, 102, 103, 104, 105, 106, 117, 118, 121, 114, 123, 127, 131, 136], null, null, "onApiLoad", ["geometry", "search"], null, 1, "https://khms.googleapis.com/mz?v=908\u0026", null, "https://earthbuilder.googleapis.com", "https://earthbuilder.googleapis.com", null, "https://mts.googleapis.com/maps/vt/icon", [["/maps/vt"], ["/maps/vt"], null, null, null, null, null, null, null, null, null, null, ["/maps/vt"], "/maps/vt", 567000000, 567, 567293647], 2, 500, [null, null, null, null, "https://www.google.com/maps/preview/log204", "", "https://static.panoramio.com.storage.googleapis.com/photos/", ["https://geo0.ggpht.com/cbk", "https://geo1.ggpht.com/cbk", "https://geo2.ggpht.com/cbk", "https://geo3.ggpht.com/cbk"], "https://maps.googleapis.com/maps/api/js/GeoPhotoService.GetMetadata", "https://maps.googleapis.com/maps/api/js/GeoPhotoService.SingleImageSearch", ["https://lh3.ggpht.com/", "https://lh4.ggpht.com/", "https://lh5.ggpht.com/", "https://lh6.ggpht.com/"]], null, null, null, null, "/maps/api/js/ApplicationService.GetEntityDetails", 0, null, null, null, null, [], ["45.8b"], 1, 0, [1], null, null, null, 0.009999999776482582], loadScriptTime);
//     };
//     var loadScriptTime = (new Date).getTime();
// })();
// // inlined
// google.maps.__gjsload__('geometry', function (_) {
//     var ria = function (a, b) { return Math.abs(_.Ze(b - a, -180, 180)) }, sia = function (a, b, c, d, e) {
//         if (!d) { c = ria(a.lng(), c) / ria(a.lng(), b.lng()); if (!e) return e = Math.sin(_.ud(a.lat())), e = Math.log((1 + e) / (1 - e)) / 2, b = Math.sin(_.ud(b.lat())), _.vd(2 * Math.atan(Math.exp(e + c * (Math.log((1 + b) / (1 - b)) / 2 - e))) - Math.PI / 2); a = e.fromLatLngToPoint(a); b = e.fromLatLngToPoint(b); return e.fromPointToLatLng(new _.N(a.x + c * (b.x - a.x), a.y + c * (b.y - a.y))).lat() } e = _.ud(a.lat()); a = _.ud(a.lng()); d = _.ud(b.lat()); b = _.ud(b.lng()); c = _.ud(c); return _.Ze(_.vd(Math.atan2(Math.sin(e) *
//             Math.cos(d) * Math.sin(c - b) - Math.sin(d) * Math.cos(e) * Math.sin(c - a), Math.cos(e) * Math.cos(d) * Math.sin(a - b))), -90, 90)
//     }, tia = function () { }, Zr = {
//         containsLocation: function (a, b) {
//             var c = _.Ze(a.lng(), -180, 180), d = !!b.get("geodesic"), e = b.get("latLngs"), f = b.get("map"); f = !d && f ? f.getProjection() : null; for (var g = !1, h = 0, k = e.getLength(); h < k; ++h)for (var l = e.getAt(h), m = 0, p = l.getLength(); m < p; ++m) {
//                 var q = l.getAt(m), r = l.getAt((m + 1) % p), t = _.Ze(q.lng(), -180, 180), v = _.Ze(r.lng(), -180, 180), w = Math.max(t, v); t = Math.min(t, v); (180 < w - t ? c >=
//                     w || c < t : c < w && c >= t) && sia(q, r, c, d, f) < a.lat() && (g = !g)
//             } return g || Zr.isLocationOnEdge(a, b)
//         }
//     }; _.xb("module$exports$mapsapi$geometry$polyGeometry.PolyGeometry.containsLocation", Zr.containsLocation);
//     Zr.isLocationOnEdge = function (a, b, c) {
//         c = c || 1E-9; var d = _.Ze(a.lng(), -180, 180), e = b instanceof _.hj, f = !!b.get("geodesic"), g = b.get("latLngs"); b = b.get("map"); b = !f && b ? b.getProjection() : null; for (var h = 0, k = g.getLength(); h < k; ++h)for (var l = g.getAt(h), m = l.getLength(), p = e ? m : m - 1, q = 0; q < p; ++q) {
//             var r = l.getAt(q), t = l.getAt((q + 1) % m), v = _.Ze(r.lng(), -180, 180), w = _.Ze(t.lng(), -180, 180), x = Math.max(v, w), y = Math.min(v, w); if (v = 1E-9 >= Math.abs(_.Ze(v - w, -180, 180)) && (Math.abs(_.Ze(v - d, -180, 180)) <= c || Math.abs(_.Ze(w - d, -180, 180)) <=
//                 c)) { v = a.lat(); w = Math.min(r.lat(), t.lat()) - c; var H = Math.max(r.lat(), t.lat()) + c; v = v >= w && v <= H } if (v) return !0; if (180 < x - y ? d + c >= x || d - c <= y : d + c >= y && d - c <= x) if (r = sia(r, t, d, f, b), Math.abs(r - a.lat()) < c) return !0
//         } return !1
//     }; _.xb("module$exports$mapsapi$geometry$polyGeometry.PolyGeometry.isLocationOnEdge", Zr.isLocationOnEdge); var $r = { computeHeading: function (a, b) { var c = _.Af(a), d = _.Bf(a); a = _.Af(b); b = _.Bf(b) - d; return _.Ze(_.vd(Math.atan2(Math.sin(b) * Math.cos(a), Math.cos(c) * Math.sin(a) - Math.sin(c) * Math.cos(a) * Math.cos(b))), -180, 180) } }; _.xb("module$exports$mapsapi$geometry$spherical.Spherical.computeHeading", $r.computeHeading);
//     $r.computeOffset = function (a, b, c, d) { b /= d || 6378137; c = _.ud(c); var e = _.Af(a); a = _.Bf(a); d = Math.cos(b); b = Math.sin(b); var f = Math.sin(e); e = Math.cos(e); var g = d * f + b * e * Math.cos(c); return new _.zf(_.vd(Math.asin(g)), _.vd(a + Math.atan2(b * e * Math.sin(c), d - f * g))) }; _.xb("module$exports$mapsapi$geometry$spherical.Spherical.computeOffset", $r.computeOffset);
//     $r.computeOffsetOrigin = function (a, b, c, d) { c = _.ud(c); b /= d || 6378137; d = Math.cos(b); var e = Math.sin(b) * Math.cos(c); b = Math.sin(b) * Math.sin(c); c = Math.sin(_.Af(a)); var f = e * e * d * d + d * d * d * d - d * d * c * c; if (0 > f) return null; var g = e * c + Math.sqrt(f); g /= d * d + e * e; var h = (c - e * g) / d; g = Math.atan2(h, g); if (g < -Math.PI / 2 || g > Math.PI / 2) g = e * c - Math.sqrt(f), g = Math.atan2(h, g / (d * d + e * e)); if (g < -Math.PI / 2 || g > Math.PI / 2) return null; a = _.Bf(a) - Math.atan2(b, d * Math.cos(g) - e * Math.sin(g)); return new _.zf(_.vd(g), _.vd(a)) };
//     _.xb("module$exports$mapsapi$geometry$spherical.Spherical.computeOffsetOrigin", $r.computeOffsetOrigin); $r.interpolate = function (a, b, c) { var d = _.Af(a), e = _.Bf(a), f = _.Af(b), g = _.Bf(b), h = Math.cos(d), k = Math.cos(f); b = $r.xn(a, b); var l = Math.sin(b); if (1E-6 > l) return new _.zf(a.lat(), a.lng()); a = Math.sin((1 - c) * b) / l; c = Math.sin(c * b) / l; b = a * h * Math.cos(e) + c * k * Math.cos(g); e = a * h * Math.sin(e) + c * k * Math.sin(g); return new _.zf(_.vd(Math.atan2(a * Math.sin(d) + c * Math.sin(f), Math.sqrt(b * b + e * e))), _.vd(Math.atan2(e, b))) };
//     _.xb("module$exports$mapsapi$geometry$spherical.Spherical.interpolate", $r.interpolate); $r.xn = function (a, b) { var c = _.Af(a); a = _.Bf(a); var d = _.Af(b); b = _.Bf(b); return 2 * Math.asin(Math.sqrt(Math.pow(Math.sin((c - d) / 2), 2) + Math.cos(c) * Math.cos(d) * Math.pow(Math.sin((a - b) / 2), 2))) }; $r.computeDistanceBetween = function (a, b, c) { c = c || 6378137; return $r.xn(a, b) * c }; _.xb("module$exports$mapsapi$geometry$spherical.Spherical.computeDistanceBetween", $r.computeDistanceBetween);
//     $r.computeLength = function (a, b) { b = b || 6378137; var c = 0; a instanceof _.di && (a = a.getArray()); for (var d = 0, e = a.length - 1; d < e; ++d)c += $r.computeDistanceBetween(a[d], a[d + 1], b); return c }; _.xb("module$exports$mapsapi$geometry$spherical.Spherical.computeLength", $r.computeLength); $r.computeArea = function (a, b) { return Math.abs($r.computeSignedArea(a, b)) }; _.xb("module$exports$mapsapi$geometry$spherical.Spherical.computeArea", $r.computeArea);
//     $r.computeSignedArea = function (a, b) { b = b || 6378137; a instanceof _.di && (a = a.getArray()); for (var c = a[0], d = 0, e = 1, f = a.length - 1; e < f; ++e)d += $r.Ju(c, a[e], a[e + 1]); return d * b * b }; _.xb("module$exports$mapsapi$geometry$spherical.Spherical.computeSignedArea", $r.computeSignedArea); $r.Ju = function (a, b, c) { return $r.Ku(a, b, c) * $r.iw(a, b, c) }; $r.Ku = function (a, b, c) { c = [a, b, c, a]; a = []; for (var d = b = 0; 3 > d; ++d)a[d] = $r.xn(c[d], c[d + 1]), b += a[d]; b /= 2; c = Math.tan(b / 2); for (d = 0; 3 > d; ++d)c *= Math.tan((b - a[d]) / 2); return 4 * Math.atan(Math.sqrt(Math.abs(c))) };
//     $r.iw = function (a, b, c) { a = [a, b, c]; b = []; for (c = 0; 3 > c; ++c) { var d = a[c], e = _.Af(d); d = _.Bf(d); var f = b[c] = []; f[0] = Math.cos(e) * Math.cos(d); f[1] = Math.cos(e) * Math.sin(d); f[2] = Math.sin(e) } return 0 < b[0][0] * b[1][1] * b[2][2] + b[1][0] * b[2][1] * b[0][2] + b[2][0] * b[0][1] * b[1][2] - b[0][0] * b[2][1] * b[1][2] - b[1][0] * b[0][1] * b[2][2] - b[2][0] * b[1][1] * b[0][2] ? 1 : -1 }; var as = { decodePath: function (a) { for (var b = _.Ue(a), c = Array(Math.floor(a.length / 2)), d = 0, e = 0, f = 0, g = 0; d < b; ++g) { var h = 1, k = 0; do { var l = a.charCodeAt(d++) - 63 - 1; h += l << k; k += 5 } while (31 <= l); e += h & 1 ? ~(h >> 1) : h >> 1; h = 1; k = 0; do l = a.charCodeAt(d++) - 63 - 1, h += l << k, k += 5; while (31 <= l); f += h & 1 ? ~(h >> 1) : h >> 1; c[g] = new _.zf(1E-5 * e, 1E-5 * f, !0) } c.length = g; return c } }; _.xb("module$exports$mapsapi$poly$polylineCodec.PolylineCodec.decodePath", as.decodePath);
//     as.encodePath = function (a) { a instanceof _.di && (a = a.getArray()); return as.Mx(a, function (b) { return [Math.round(1E5 * b.lat()), Math.round(1E5 * b.lng())] }) }; _.xb("module$exports$mapsapi$poly$polylineCodec.PolylineCodec.encodePath", as.encodePath); as.Mx = function (a, b) { for (var c = [], d = [0, 0], e, f = 0, g = _.Ue(a); f < g; ++f)e = b ? b(a[f]) : a[f], as.Mr(e[0] - d[0], c), as.Mr(e[1] - d[1], c), d = e; return c.join("") }; as.Mr = function (a, b) { as.Nx(0 > a ? ~(a << 1) : a << 1, b) };
//     as.Nx = function (a, b) { for (; 32 <= a;)b.push(String.fromCharCode((32 | a & 31) + 63)), a >>= 5; b.push(String.fromCharCode(a + 63)) }; _.C.google.maps.geometry = { encoding: as, spherical: $r, poly: Zr }; _.n = tia.prototype; _.n.decodePath = as.decodePath; _.n.encodePath = as.encodePath; _.n.computeDistanceBetween = $r.computeDistanceBetween; _.n.interpolate = $r.interpolate; _.n.computeHeading = $r.computeHeading; _.n.computeOffset = $r.computeOffset; _.n.computeOffsetOrigin = $r.computeOffsetOrigin; _.Qf("geometry", new tia);
// });

// // inlined
// google.maps.__gjsload__('search', function (_) { var zia = function () { }, hs = function (a) { this.setValues(a); _.Pf("search_impl") }; _.D(zia, _.J); _.D(hs, zia); hs.prototype.changed = function () { var a = this, b = this.get("map"), c = null; b && (c = b.__gm, b = c.get("blockingLayerCount") || 0, c.set("blockingLayerCount", b + 1)); _.Pf("search_impl").then(function (d) { d.qu(a); c && (d = c.get("blockingLayerCount") || 0, c.set("blockingLayerCount", d - 1)) }) }; _.Lg(hs.prototype, { map: _.lk }); _.C.google.maps.search = { GoogleLayer: hs }; _.Qf("search", {}); });
