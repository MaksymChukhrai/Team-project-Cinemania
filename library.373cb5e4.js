!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=e.parcelRequire8a95;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var a={id:e,exports:{}};return t[e]=a,r.call(a.exports,a,a.exports),a.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequire8a95=r);var a=r("kicot"),i=r("kjABN"),o=1,l=new(0,a.default)({selector:".select",url:"/genre/movie/list",query:"language=en"});function s(e){var t=l.importFromLS();if(e)return e.map((function(e){var n=t.find((function(t){return t.id===e}));return n?n.name:null})).join(", ")}l.getGenreList();var c=document.querySelector(".library"),d=JSON.parse(localStorage.getItem("libraryFilms")),u=document.querySelector(".library-filter");function m(e){var t=Number(u.value);try{if(0===(d=JSON.parse(localStorage.getItem("libraryFilms"))).length)throw new Error("масив пустий");if(isNaN(t))return void v(d);v(d.filter((function(e){return e.genres?e.genres.some((function(e){return e.id===t})):e.genre_ids.some((function(e){return e===t}))})))}catch(e){!function(e){console.log(e)}(e)}}function v(e){var t=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:9*o;return e.slice(0,t).reduce((function(e,t){return e+g(t)}),"")}(e);!function(){var e=document.querySelector(".load-more");JSON.parse(localStorage.getItem("libraryFilms")).length>9?(e.classList.remove("is-hidden"),e.addEventListener("click",t)):e.classList.add("is-hidden");function t(){o+=1,v(d)}}(),function(e){c&&(c.innerHTML="",c.insertAdjacentHTML("beforeend",e))}(t),function(){if(!c)return;c.querySelectorAll(".movie-card").forEach((function(e){var t=Number(e.dataset.idMovie),n=d;if(0===n.length)throw Error("Список бібліотеки пустий");var r=n.filter((function(e){return e.id===t}));if(0===r.length)throw Error("у об`єктів повинні бути id");e.addEventListener("click",(function(e){e.preventDefault(),document.body.style.overflow="hidden",document.addEventListener("keydown",p),function(e){var t=e.title,n=e.original_title,r=e.poster_path,a=e.vote_average,i=e.vote_count,o=e.popularity,l=e.overview,c=(e.genre_ids,"Add to My Library"),d=JSON.parse(localStorage.getItem("libraryFilms"))||[],u=!0,m=!1,v=void 0;try{for(var g,f=d[Symbol.iterator]();!(u=(g=f.next()).done);u=!0){var p=g.value;p.title!==t&&p.original_title!==t||(c="Remove from My Library")}}catch(e){m=!0,v=e}finally{try{u||null==f.return||f.return()}finally{if(m)throw v}}var b=null;b=e.genres?e.genres.map((function(e){return e.name})).slice(0,2).join(", "):s(e.genre_ids.slice(0,2));var h=b;b.length>20&&(h=b.split(",")[0]);var _=document.getElementById("moreDetails");_.classList.remove("more-details-is-hidden");var w="",L="";null===r?(w="https://image.tmdb.org/t/p/w500/wwemzKWzjKYJFfCeiB57q3r4Bcm.png",L="style=padding-top:130px"):w="https://image.tmdb.org/t/p/w400"+r;_.innerHTML='\n      <div class="more-details-modal">\n        <div class="close-button-box">\n          <button class="more-details-close-button" id="closeDetails" type="button">X</button>\n        </div>\n        <div '.concat(L,' class="details-wrapper">\n          <div class="more-details-img-box">\n            <img width="380px" class="more-detail-img" src="').concat(w,'" alt="').concat(t,'" />\n          </div>\n          <div class="more-details-info">\n            <h2 class="film-title">').concat(t||n,'</h2>\n            <table>\n              <tr>\n                <td class="table-row table-column-name">Vote / Votes:</td>\n                <td><span class="vote-average">').concat(a,'</span> / <span class="vote-count">').concat(i,'</span></td>\n              </tr>\n              <tr>\n                <td class="table-row table-column-name">Popularity:</td>\n                <td>').concat(o,'</td>\n              </tr>\n              <tr>\n                <td class="table-row table-column-name">Genre:</td>\n                <td>').concat(h,'</td>\n              </tr>\n            </table>\n            <span class="description-about">About:</span>\n            <span class="more-details-about">').concat(l,'</span>\n            <div class="more-details-adml-box">\n              <button id="addToLibraryButton" class="button-rem-me">').concat(c,"</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    "),_.querySelector("#closeDetails").addEventListener("click",y),_.querySelector("#addToLibraryButton").addEventListener("click",(function(){!function(e){try{var t=document.getElementById("addToLibraryButton"),n=JSON.parse(localStorage.getItem("libraryFilms"))||[],r=e.title||e.original_title;if("Add to My Library"===t.textContent)t.textContent="Remove from My Library",n.push(e),localStorage.setItem("libraryFilms",JSON.stringify(n));else{t.textContent="Add to My Library";var a=n.findIndex((function(e){return e.title===r||e.original_title===r}));-1!==a&&(n.splice(a,1),localStorage.setItem("libraryFilms",JSON.stringify(n)))}}catch(e){console.error(e)}}(e)}))}(r[0]),setTimeout(i.styleModal,0)}))}))}(),f()}function g(e){var t=e.poster_path,n=e.original_title,r=e.title,a=e.vote_average,i=e.release_date,o=e.id,l=null,c=l=e.genres?e.genres.map((function(e){return e.name})).slice(0,2).join(", "):s(e.genre_ids.slice(0,2));l.length>20&&(c=l.split(",")[0]);var d="",u="";return null===t?(d="https://image.tmdb.org/t/p/w500/wwemzKWzjKYJFfCeiB57q3r4Bcm.png",u="style=padding-top:150px"):d="https://image.tmdb.org/t/p/w400"+t,'<a href="" data-id-movie="'.concat(o||0,'">\n  <div ').concat(u,' class="movie-card overlay-card" data-id-movie="').concat(o||0,'">\n      <img class="gallery__image" src="').concat(d,'" alt="').concat(r||n,'" loading="lazy"/>\n      <div class="gallery__up_image"></div>\n      <div class="catalog_info">\n        <h2 class="catalog_title">\n        ').concat(r||n,'\n        </h2>\n          <div class="ganres_rating">\n            <p class="catalog_genres">\n            ').concat(c," | ").concat(i.slice(0,4),'\n            </p>\n            <div class="rating">\n            <div class="rating__body">\n              <div class="rating__active" style="width: ').concat(10*a.toFixed(1),'%;"></div>\n              <div class="rating__items">\n                <input type="radio" class="rating__item" name="rating" value="1">\n                <input type="radio" class="rating__item" name="rating" value="2">\n                <input type="radio" class="rating__item" name="rating" value="3">\n                <input type="radio" class="rating__item" name="rating" value="4">\n                <input type="radio" class="rating__item" name="rating" value="5">\n              </div>\n            </div>\n          </div>\n          </div>\n      </div>\n      </div>\n      </a>')}function f(){if(c){var e=function(){if(0===d.length)return document.querySelector(".library-filter").style.display="none",'<div class="empty-library"> \n      <p class="empty-library-text">OOPS...<br/> We are very sorry! <br/> You don’t have any movies in your library.</p>\n      <button type="button" class="button-watch-trailer">\n        <a class="hero-href"  href="./catalog.html">Search movie</a>\n      </button>\n    </div>'}();e&&(c.innerHTML="",c.insertAdjacentHTML("beforeend",e))}}function y(){var e=document.getElementById("moreDetails");document.body.style.overflow="visible",e.classList.add("more-details-is-hidden"),document.removeEventListener("keydown",p),m(),f()}function p(e){"Escape"===e.key&&y()}u&&u.addEventListener("input",m),v(d)}();
//# sourceMappingURL=library.373cb5e4.js.map
