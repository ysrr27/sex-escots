atwpjp([0],{15:function(e,t,n){function o(e){return/(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/.test(e)}function r(e){var t=new Array;e:for(var n=0;n<e.length;n++){for(var a=0;a<t.length;a++)if(t[a]==e[n])continue e;t[t.length]=e[n]}return t}function s(e){var t,n=window,a=document,o=n.onkeydown||function(){},r=function(t){e(t),o(t)};_.msi?(t=a.onkeydown,a.onkeydown=function(){r(),null!=t&&t()}):(t=n.onkeydown,n.onkeydown=function(e){r(e),null!=t&&t()})}function c(){return _.ie6?' style="cursor:hand;"':""}function u(e){if(p(e)){var t=R(!0),n=z();v(e),y(e,t[0]-n),E(e,t[1]-n)}}function l(e,t){e&&e.value&&e.value.length>t&&(e.value=e.value.substring(0,t))}function d(e,t,n){return e.length>t&&(e=e.slice(0,t-1),n&&e[e.length-1]!=n&&e.push(n)),e}function A(e){if(e._e)return!0;for(var t in e)if("_e"!=t&&e.hasOwnProperty(t))return delete e._e,!1;return e._e=1,!0}function p(e){return"string"==typeof e&&(e=document.getElementById(e)),e}function h(e){return'<a name="'+e+'"></a>'}function f(e,t,n,a){return"<div "+(1===n?"class":"id")+'="'+e+'"'+(0===t?' style="display:none"':"")+(a?a:"")+">"}function g(e,t,n){e=p(e),e&&e.style&&(e.style[t]=n)}function m(e,t,n){n||g(e,"display","none"),t&&g(e,"visibility","hidden")}function v(e,t,n){n||g(e,"display","block"),t&&g(e,"visibility","visible")}function w(e,t){e=p(e),e&&(e.className?-1==e.className.indexOf(t)&&(e.className+=" "+t):e.className=t)}function x(e,t){if(e=p(e)){if(!e.className)return;-1!=e.className.indexOf(t)&&(e.className=e.className.split(t).join(" "))}}function b(e,t){return e=p(e),e?e.className?-1!=e.className.indexOf(t):!1:void 0}function C(e,t){return e=p(e),e&&e.parentNode&&(e.parentNode.className||"").indexOf(t)>-1}function y(e,t){g(e,"width",t+"px")}function E(e,t){g(e,"height",t+"px")}function M(e){return e=p(e),e?"block"==e.style.display:!1}function R(e){var t=ee.documentElement,n=ee.body,a=0,o=0,r=0,i=0;return e&&(F.innerHeight&&F.scrollMaxY?(a=n.scrollWidth,o=F.innerHeight+F.scrollMaxY):n.scrollHeight>n.offsetHeight?(a=n.scrollWidth,o=n.scrollHeight):(a=n.offsetWidth,o=n.offsetHeight)),F.self&&F.self.innerHeight?(r=F.self.innerWidth,i=F.self.innerHeight):t&&t.clientHeight?(r=t.clientWidth,i=t.clientHeight):n&&(n.clientWidth||n.clientHeight)?(r=n.clientWidth,i=n.clientHeight):n&&(r=n.clientWidth,i=n.clientHeight),[e!==!0||r>a?r:a,e!==!0||i>o?i:o]}function k(){var e=ee.documentElement,t=ee.body;return"number"==typeof F.pageYOffset?[F.pageXOffset,F.pageYOffset]:t&&(t.scrollLeft||t.scrollTop)?[t.scrollLeft,t.scrollTop]:e&&(e.scrollLeft||e.scrollTop)?[e.scrollLeft,e.scrollTop]:[0,0]}function B(e){var t=document.documentElement,n=0,a=0,o=0,r=0;do o=/fixed/.test(e.style.position),r|=o,n+=e.offsetTop||0,a+=e.offsetLeft||0,o&&e&&(n+=e.scrollTop,a+=e.scrollLeft),e=e.offsetParent;while(e);return!_.ie6&&t.scrollTop&&r&&(n+=t.scrollTop,a+=t.scrollLeft),[a,n]}function z(){if($)return $;try{var e=document,t=e.ce("div"),n=e.ce("div"),a=e.getElementsByTagName("body")[0],o=t.style;o.width="50px",o.height="50px",o.overflow="hidden",o.position="absolute",o.top="-200px",o.left="-200px",n.style.height="100px",a.appendChild(t),t.appendChild(n);var r=n.innerWidth;t.style.overflow="scroll";var i=n.innerWidth;t.removeChild(n),a.removeChild(t),$=r&&i?r-i:20}catch(s){$=20}return $}function S(e){e&&(e.cancelBubble=!0,e.preventDefault&&e.preventDefault())}n(60).add("menu");var D,U,I=n(45),O=n(21),N=n(1),Q=n(13),T=n(693),V=n(14),_=n(2),j=n(9),H=n(59),G=n(885),L=n(96),F=window,P=O(),K=n(63),Y=n(166),J=n(621),Z=function(e){e||(e=window.event||event),e.keyCode?_ate.maf.key=e.keyCode:e.which&&(_ate.maf.key=e.which)},W=function(e){e||(e=window.event||event),e.keyCode?_ate.maf.key=e.keyCode:e.which&&(_ate.maf.key=e.which)},q=function(){9===_ate.maf.key?_ate.maf.key=null:(_ate.maf.key=null,addthis_close())},X=function(e,t){return t||(t=window.event||event||{}),T(t),addthis_sendto(e)};_ate.maf=_ate.maf||{};var $=_.msi?20:void 0;if(!window._atw){var ee=(L.getPopServices(),document);!function(){var e,t=document.compatMode,n=1,a=window;t&&("BackCompat"===t?n=2:"CSS1Compat"===t&&(n=0),_.mode=n,_.msi&&(_.mod=n,2!=n&&!_.ie6||window.addthis_do_ab||(e=a.onscroll?a.onscroll:function(){},window.onscroll=function(){_atw&&_atw.fpf(),e()})))}(),window._atw={ver:300,show:1,uus:function(){_atw.uusf||(_ate.track.cev("uus",1),_atw.uusf=1)},ujq:function(){return!_.ie6&&!_.ie7&&!_.ie8&&"function"==typeof window.jQuery},css:{},conf:{},data:{auth:{},contacts:{all:{},origin:{}}},fe:null,plo:[],pla:function(){for(;_atw.plo.length>0;){var e=_atw.plo.pop();addthis_open(e[1],e[2],e[3],e[4],e[5],e[6])}},gps:function(e){_atw.evar();var t=window.addthis_options;e(t?t.replace(",more","").split(","):[])},ibt:function(){if(_atw.bti)return _atw.bti;var e=(window.addthis_product||"men").substr(0,3),t="bkm"==e||"bmt"==e||"fct"==e||"fxe"==e;return t&&(_atw.bti=t),t},lfy:0,fpf:function(){if(_.ie6||_.msi&&2==_.mod){var e=document,t=e.documentElement,n=e.body,a=_atw,o=p(a.did),r=p("at16p"),i=t&&"undefined"!=typeof t.scrollTop,s=n&&"undefined"!=typeof n.scrollTop,c=!1,u=p("atie6ifh"),l=i&&s?Math.max(t.scrollTop,n.scrollTop):i?t.scrollTop:n.scrollTop;if(l+=10,l!=a.lfy){if(a.lfy=l,r&&(r.style.top=l+"px"),o&&o.className&&o.className.indexOf("mmborder")>-1){var d=0,A=R();d=r&&""!=r.style.marginTop?r.style.marginTop.split("px").shift():Math.max(0,A[1]/2-222.5),o.style.top=l-10+d+"px",c=!0}u&&_.ie6&&(u.style.top=(c?0:290)+l+"px")}}},rev:"$Rev$",lang:function(e,t){var n=_.msi?navigator.userLanguage:navigator.language,a=e||n,o=_atw,r=o.conf.ui_localize||window.addthis_localize,i=window.addthis_translations||[];if(r)switch(t){case 1:r=r.share_caption;break;case 2:r=r.more;break;case 3:r=r.email_caption;break;case 4:r=r.email;break;case 5:r=r.favorites;break;case 6:r=r.email_instructions;break;case 7:r=r.email_to;break;case 8:r=r.email_from;break;case 9:r=r.email_message;break;case 10:r=r.email_privacy;break;case 11:r=r.email_send;break;case 12:r=r.email_valid;break;case 13:r=r.email_sent;break;case 14:r=r.rss_caption;break;case 15:r=r.rss_instructions;break;case 16:r=r.rss_remember;break;case 17:r=r.done;break;case 18:r=r.get_your_own;break;case 19:r=r.email_address;break;case 20:r=r.optional;break;case 21:r=r.max_characters;break;case 22:r=r.print;break;case 23:r=r.whats_this;break;case 24:r=r.privacy;break;case 25:r=r.use_address_book;break;case 26:r=r.cancel;break;case 27:r=r.sign_in_contacts;break;case 28:r=r.username;break;case 29:r=r.password;break;case 30:r=r.remember_me;break;case 31:r=r.sign_in;break;case 32:r=r.select_address_book;break;case 33:r=r.error_auth;break;case 34:r=r.email_recipients;break;case 35:r=r.find_a_service;break;case 36:r=r.no_services;break;case 37:r=r.share_again;break;case 38:r=r.sign_out;break;case 39:r=r.getting_contacts;break;case 40:r=r.suggest_a_service;break;case 41:r=r.share_successful;break;case 42:r=r.toolbar_promo;break;case 43:r=r.download;break;case 44:r=r.dont_show_these;break;case 45:r=r.sending;break;case 46:r=r.captcha;break;case 47:r=r.settings;break;case 48:r=r.email_error;break;case 49:r=r.captcha_header;break;case 50:r=r.captcha_instr;break;case 51:r=r.captcha_missing;break;case 52:r=r.captcha_error;break;case 53:r=r.signin_customize}if(r)return r;for(var s in i)if(i.hasOwnProperty(s))for(var c in i[s][0])if(i[s][0].hasOwnProperty(c)&&i[s][0][c]===a&&i[s].length>t&&i[s][t])return i[s][t];return["Bookmark &amp; Share","More...","Email a Friend","Email","Favorites","Multiple emails? Use commas.","To","From","Note","Privacy Policy: We never share your personal information.","Send","Please enter a valid email address.","Message sent!","Subscribe to Feed","Select from these web-based feed readers:","Please don't ask me again; send me directly to my favorite feed reader.","Done","Get your own button!","email address","optional","255 character limit","Print","What's this?","Privacy","Use Address Book","Cancel","Sign in to use your contacts","Username","Password","Remember me","Sign In","Select address book","Error signing in.","Please limit to 5 recipients.","Find a service","No matching services.","Share again.","Sign out","Getting contacts","Suggest a service","Share successful!","Make sharing easier with AddThis for Firefox.","Download","Don't show these","Sending message...",'We hate spam too! Please <a id="at16ecmc" href="#" onclick="_atw.rse();_atw.cef();return true" target="_blank">click here</a> to confirm you are a real-live person.',"Settings","Sorry, we couldn't send this message. Please try again in a few minutes.","Please help us prevent spam.","Type the two words:","Please enter a valid response.","Sorry, your response was incorrect.","Sign in to customize"][t-1]},rss:{aol:"AOL",bloglines:"Bloglines",google:"Google Reader",mymsn:"My MSN",netvibes:"Netvibes",newsisfree:"Newsisfree",pageflakes:"Pageflakes",yahoo:"Yahoo"},emb:{dashboard:"Dashboard",windows:"Windows"},list:V(K.list),ibm:function(){var e=_atw,t=(e.conf||{}).product||window.addthis_product||"";return b(e.did,"mmborder")||t.indexOf("bkm")>-1},ics:function(e,t){var n,a,o,r,i=_atw;if(i.custom_list)return i.custom_list[e];if(t.services_custom){i.custom_list={},n=t.services_custom;for(o in n)a=n[o],i.custom_list[a.code]=a,e===a.code&&(r=a);return r}return!1},sag:function(){_ate.as(_atw.ibm()?"bkmore":"more")},hkd:function(e){"undefined"==typeof e&&(e=window.event);var t=_atw;e&&27==e.keyCode&&(t.clb(),S(e))},filt:function(e,t,n,a,o,r){var i,s,c=0,u=(_atw,a||"ati_"),l=o||"at16nms",d=r||"div",A=""!=e?e.replace(/\W+/g,"").replace(/ /g,"").toLowerCase():"";m(l),n&&v(n);for(i in t)if("string"==typeof t[i]){var h=p(u+i.replace("@","_")),f=i.toLowerCase(),g=t[i].toLowerCase(),w=0;(f.indexOf(e)>-1||f.indexOf(A)>-1||g.indexOf(A)>-1||g.indexOf(e)>-1)&&(w=1,c++),!s&&h&&(s=h.parentNode),w?v(h):m(h)}if(c&&s){c=0;var x=s.getElementsByTagName(d);for(i in x)x[i].style&&"block"==x[i].style.display&&c++}0===c&&(v(l),n&&m(n)),""==e.replace(/ /g,"")&&n&&m(n)},div:null,xwa:function(){null!==_atw.cwa&&clearTimeout(_atw.cwa)},cwa:null,xhwa:function(){null!==_atw.hwa&&clearTimeout(_atw.hwa)},hwa:null,ost:!1,get:function(e){return"string"==typeof e&&(e=document.getElementById(e)),e},did:"at15s",rhv:function(e){e&&e.className&&(e.className=e.className.replace("athov",""))},shv:function(e){e&&-1==e.className.indexOf("athov")&&(e.className+=" athov")},addImg:function(e){if(e=e.getElementsByTagName("div")[0],e&&!(e.getElementsByTagName("img").length>0)){a=_ate;var t=document.createElement("img");t.align="left",t.src="//s7.addthis.com/images/60x60_at_"+(a.bro.ffx?"firefox_toolbar.jpg":a.bro.msi?"ie_toolbar.gif":a.bro.chr?"ch_extension.gif":"sf_extension.gif"),e.insertBefore(t,e.firstChild)}},eok:function(e){var t=_atw,n=_atw.ver>=200,a=p("at_"+(n?"success":"send")),o=n?p("at_promo"):a;if(m("at_sending"),n)e?(t.err(t.lang(t.conf.ui_language,48),null,"at_error"),v("at_email",1)):addthis_do_ab?(t.ppr=!0,t.cle(),o&&!_ate.dbm&&(_atw.addImg(o),v(o)),v(a),m("at_email")):(o&&!_ate.dbm&&(_atw.addImg(o),v(o)),v(a),m("at_captcha"),m("at_email"),t.cle());else{var r=t.lang(P,13);-1==r.indexOf("&")&&(a.value=r)}t.cwa=setTimeout(_atw.clo,1200),_ate.gat&&_ate.gat("email",null,t.conf,t.share)},roe:function(e){var t=_atw;m("at_sending"),t.cle(),_atw.ver>=200&&t.err(t.lang(t.conf.ui_language,46).replace('href="#"','href="'+e+'"'),null,"at_error")},ert:function(e,t,n){n||(n="at_error");var a=_atw,o=p(n);o.innerHTML=e||a.lang(a.conf.ui_language,33),v(o),t&&(t.style.borderColor="#dd0000")},err:function(e,t,n){var a=_atw,o=_atw.ver>=200;null===a.fe&&t&&(a.fe=t,t.focus(),o?(t.style.outlineStyle="none",t.style.outlineWidth="0px"):alert(e)),o&&setTimeout(function(){a.ert(e,t,n)},50)},mck:0,cef:function(){var e=_atw,t=_ate,n=e.mck<2||e.ibm();return addthis_do_ab?n?t.com("cef"):t.com("cle"):n?e.clb():t.as("more"),!1},cle:function(){var e=_atw,t=_atw.ver>=200?"":"15",n=p("at_msg"+t),a=p("at_to"+t);n&&(n.value=addthis_email_note||e.conf.ui_email_note||""),a&&(a.value=e.conf.ui_email_to||""),m("at16pit")},rse:function(e){var t=_atw,n=_atw.ver,a="at_from"+(200>n?"15":""),o="at_to"+(200>n?"15":""),r=p(o),i="at_"+(200>n?"send":"success"),s=t.lang(t.conf.ui_language,11),c=function(e){e=p(e),e&&(e.style.borderColor=e.style.outlineWidth=e.style.outlineStyle="")};200>n&&-1==s.indexOf("&")&&(p(i).value=s),r&&", "==r.value.substr(r.value.length-2)&&(r.value=r.value.substr(0,r.value.length-2)),c("at_ab_user"),c("at_ab_pass"),m("at_ab_error"),m("at_error"),m("at16eatdr"),m("at_captcha"),e||(c(a),c(o),m(i),m("at_promo"),v("at_email",1))},lml:l,clo:function(){var e=_atw,t=p(e.did),n=_atw.ver,a=document.gn("embed");if(t&&(200>n&&m("at_email15"),m(t),_.ie6&&m("atie6cmifh"),m("at_pspromo",1)),a&&e.conf&&e.conf.ui_hide_embed)for(i=0;i<a.length;i++)a[i].addthis_hidden&&(a[i].style.visibility="visible");return e.sta&&"compact"==e.sta&&(_ate.ed.fire("addthis.menu.close",window.addthis||{},{pane:e.sta}),e.sta=null),!1},hash:window.location.hash,psp:function(){if((_.msi||_.ffx||_.chr||_.saf||_atc.sjp)&&!_.ipa){var e=(window,window._atab,_atw);if(!e.addthis_popup_mode){if(e.mck<1){var t=(p("at15ptc"),p(e.did));p("at15s_brand");if(m("at_hover"),!(_ate.sau||{}).gat){var n=(document.getElementById("at_testpromo_bg")||{}).style;n&&(n.background="url(//s7.addthis.com/images/btn_"+(_.saf?"saf_dl120.gif":_.chr?"ch_dl120.gif":_.msi?"ie_dl129x51.jpg":"ff_dl120.jpg")+")",_.saf?(n.width="120px",n.height="47px"):_.msi&&(n.marginBottom="-12px"))}v("at_pspromo",1),v(t),u("at16lb")}else e.clb();_.msi&&"BackCompat"==document.compatMode?m("atic_auth",!0,!0):m("atic_auth"),x("at15s","at-menu-auth")}}},clb:function(){var e=window,t=(window._atab,_atw);return t.mck=0,t.addthis_popup_mode?e.close():e.addthis_do_ab?_ate.com("clb"):(m("at_complete"),m("at16lb"),m("at_email"),m("at_promo"),m("at_pspromo",1),m("at16p"),m("at15s"),x("at15s_head","at15s_head_success"),m("atie6ifh"),m("atie6cmifh"),m("at15s"),(_ate.maf||{}).pre&&_ate.maf.pre.focus()),t.sta&&"compact"!==t.sta&&(_ate.ed.fire("addthis.menu.close",window.addthis||{},{pane:t.sta}),t.sta=null),!1},sho:function(e,t){var n=(_ate,_atw),a=_atw.ver,o=(n.conf.ui_language.split("-").shift(),a>=200||"bkemail"==e||n.ibm()),r="at16lb",i="at_hover",s="at_feed",c="at_share",l="at16psf",d="at_email"+(o?"":15),A=p("at16pit"),h=p(_atw.did),f=p("atie6ifh"),g=p("at16p"),b=p("at_to"),C=p("at"+(o?16:15)+"ptc"),M=!1,k=!1;if(m(c),m(s),m(l,1),m(d,1),m("at_copylink",1),m("at16abifc"),m("at_error"),m(i),o&&(m(h),m(A,1),m("at_promo"),m("at_success"),m("at_pspromo",1),x("at15s_head","at15s_head_success")),"feed"==e)m(c),w(s,"atused"),v(s),C.innerHTML=addthis_caption_feed,M=!0;else if("share"==e||""===e||"bkmore"==e)"bkmore"==e?(M=k=!0,w(n.did,"mmborder")):(e="share",h.style.display="",x(n.did,"mmborder")),m(g),n.conf.ui_use_vertical_menu&&m("at15s_head"),v(i),_.ipa&&u("at16lb"),C&&(C.innerHTML=addthis_caption_share);else{if(_atw.mck++,"link"==e){C&&(C.innerHTML="Permalink");var B=document.createElement("iframe");B.src=t,B.frameBorder="0",B.height="353px",B.width="295px",p("at_copylink").innerHTML="",p("at_copylink").appendChild(B),v("at_copylink",1)}else if("more"!==e){if("bkemail"==e||n.ibm()?(w(n.did,"mmborder"),m("at_use_addr"),m(A,1),k=!0):o&&v("at_use_addr"),-1==e.indexOf("email")&&(e="email"),n.rse(),a>=200&&(v("at16abifc"),window._atab&&(_atab.plda(),n.ppr&&(n.ppr=!1,n.conf.ui_use_addressbook&&(_atab.opp(),_atab.opp())))),v(d,1),a>=200&&(m(c),k||v(A,1),window._atab)){var S=_atab.ipo();A&&(A.innerHTML="&"+(S?"l":"r")+"aquo;")}C.innerHTML=addthis_caption_email,"emailab"==e&&_atab.opp()}else m("at_captcha"),v(c),v(l,1),C&&(C.innerHTML=addthis_caption_share);M=!0}if(M&&a>=200||k){var D="bkmore"==e||"link"==e;if(v(r),addthis_do_ab)g.style.marginTop=0,g.style.marginLeft=0,g.style.top=0,g.style.left=0;else{var U=R(!0),I=R(),O=z();y(r,U[0]-O),E(r,U[1]-O),!D||o?g.style.marginTop=Math.max(0,I[1]/2-222.5)+"px":h.style.display=""}if(!D&&(_.ie6&&v(f),v(g),window.addthis_do_ab||n.fpf(),"more"==e)){y(g,300),y("at16abifc",300);var N=p("at16filt");N&&"none"!=N.style.display&&N.focus()}"email"==e&&b&&b.focus()}if(n.show-->0&&!_atc.abf){var Q=n.conf.services_compact_org||"",T=Q.split(",").length,V=0,j=0,H=window.addthis_ssh;H&&n.csl&&(H=H.split(n.csl).shift().replace(/,$/,"")),H||n.crs||!Q||Q===addthis_options_default?H&&H!==n.crs&&(V=window.addthis_ssh):j=T,_ate.ed.fire("addthis-internal.compact",window.addthis||{},{svc:e,cmo:j,cso:V,crs:n.crs,pco:n.conf.product||addthis_product})}},dut:function(e,t){var n=document,a=(e||"").toLowerCase(),o=(t||"").toLowerCase();return addthis_url=e,addthis_title=t,(""===a||"[url]"===a||"<data:post.url/>"===a)&&(addthis_url=location.href),(""===o||"[title]"===o||"<data:post.title/>"===o)&&(addthis_title=n.title),[addthis_url,addthis_title]},menu:function(e,t,a,o){var i=_ate,u=_atw,l=document,A=(a||u.share.url||"").toLowerCase(),v=((o||u.share.title||"").toLowerCase(),j(),n(165));if("feed"==t&&A.length&&(u.share.url="feed://"+(a||u.share.url)),u.ost){var y=p("at15s_brand"),E=p("at16_brand"),M=u.conf.ui_cobrand,z=p("at15ptc"),S=u.conf.ui_header_color,I=u.conf.ui_header_background;y&&(y.innerHTML=M),E&&(E.innerHTML=M),z&&(z.innerHTML=window.addthis_caption_share),g("at15s_head","backgroundColor",I),g("at16pt","backgroundColor",I),g("at16ptx","color",S),g("at16pt","color",S),g("at16ptc","color",S),g("at15s_brand","color",S),g("at16ptc","color",S),u.conf.ui_use_close_control?(w("at15s_brand","at15s_brandx"),x("at15sptx","at15dn")):(x("at15s_brand","at15s_brandx"),w("at15sptx","at15dn"))}else{var O=window;if(s(_atw.hkd),!_atc.ostm){if(!O.addthis_product||0!==O.addthis_product.indexOf("f"))for(he in O.addthis_conf)_atc[he]=O.addthis_conf[he];for(he in O.addthis_config)"product"!=he&&"services_compact"!=he&&(u.conf[he]=O.addthis_config[he]);_atc.ostm=1}u.ti=1;var N,T,V,H,G="</span>",L="</div>",F="</a>",P='<div style="clear:both;">'+L,K=u.conf.ui_language||"en",$=function(e,t,n,a){return'<input id="'+e+'" '+(addthis_do_ab?'class="abif" ':_.ffx&&2==_.mode?'class="atfxmode2"':"")+'name="'+e+'" type="text" tabindex="'+_atw.ti++ +'" '+(n?'value="'+n+'" ':"")+'size="'+(a?a:30)+'"'+t+"/>"},ee=window.addthis_feed||(u.share.url?u.share.url.indexOf("feed://")>-1:!1)||u.hf,te=u.conf.ui_header_background,ne=""!=te?' style="background-color:'+te+'"':"",ae=u.conf.ui_header_color,oe=(window.addthis_ssh?addthis_ssh.split(","):[],""!=ae?' style="color:'+ae+'"':""),re=window.addthis_caption_share,ie=(u.conf.services_exclude||"").replace(/\s/g,"").replace(/\*/,""),se=u.conf.product||window.addthis_product,ce=_ate.cookie.rck("_atfrom"),ue={},le='<div id="at16lb"'+(_.msi?' style="filter:alpha(opacity=0.01);"':"")+' onclick="return _atw.clb()">'+L;if(ie)for(var de=ie.split(","),Ae=0;Ae<de.length;Ae++)ue[de[Ae]]=1;_atw.excluded=ue;var pe=(u.conf.services_compact||addthis_options_default).replace(/\s/g,"").replace(/\*/,"");""===j()&&-1==se.indexOf("ffext")&&-1==se.indexOf("fxe")&&(pe=pe.replace(/^email(?:,)|,email/g,"")),pe=pe.split(",");for(var he=0;he<pe.length;he++)if(he<pe.length-1&&"more"===pe[he]){var fe=pe.splice(he,1);pe.push(fe[0]);break}pe=r(pe),le+=[_.ie6?'<iframe id="atie6ifh" src="javascript:false" style="display:none;filter:alpha(opacity=0)"></iframe><iframe id="atie6cmifh" src="javascript:false" style="display:none;filter:alpha(opacity=0)"></iframe>':"",f("at16pcc"),f("at16p",!ee&&_atw.ver>=200?1:0),h("atpro"),h("atclb"),h("atopp"),h("atcle"),h("atcef"),f("at16pib"),f("at16pi")].join(""),le+=!addthis_do_ab&&u.conf.ui_use_addressbook?'<a id="at16pit" href="#" onclick="if (window._atab) return _atab.opp()" style="display:none">&raquo;'+F:"",le+=f("at16pp",0)+L,le+=f("at16pm",1,0,2==_.mod?'style="width:299px"':0==_.mod?'style="width:300px"':""),le+=f("at16pt",1,0,ne),re==u.lang(K,1)&&"feed"==t&&(re=u.lang(K,14)),le+='<h4><span id="at16ptc"'+oe+">"+re+G+'</h4><span id="at16_brand"'+oe+">"+u.conf.ui_cobrand+G,le+='<a id="at16ptx" href="#" tabindex="9000" onclick="return _atw.clb()"'+oe+'>X<span class="at_a11y">Close AddThis Expanded Menu</span></a>',le+=L,le+=f("at16pc",1,"at_default");var ge=u.rss;le+=f("at_feed",0),le+='<span style="display:block">'+u.lang(K,15)+G+"<br/>";var he=1;for(var N in ge)ue[N]||"string"==typeof ge[N]&&(le+="<div"+c()+(he%2===0?' class="at_litem"':"")+(" onclick=\"return addthis_sendto('"+N+"');\">")+'<a class="fbtn at_baa '+N+'">'+ge[N]+"</a>"+L,he++);le+=L,le+=f("at_share"),le+=f("at16psf"),le+='<label for="at16filt" class="at_a11y">Sharing Service Filter</label>',le+=$("at16filt","maxlength=\"50\" onkeyup=\"_atw.filt(this.value,_atw.list,false,'ati_','at16nms','a');_atw.uus()\""+(_.msi?"":' style="padding:2px 0 0"'),""),le+=L,le+=f("at16ps",1,0,'class="addthis_32x32_style" '+(2==_.mod?'style="height:292px"':"")),le+=f("at16nms",0)+(u.lang(K,36)||"")+L,ge=u.list;var me=u.conf.services_expanded||[],ve=0;if(u.conf.services_expanded)me=me.replace(/ /g,"").split(",");else for(var N in ge)"string"!=typeof N||ue[N]||me.push(N);for(me.sort(function(e,t){if("string"==typeof ge[e]&&"string"==typeof ge[t]){var n=(ge[e]||"").toLowerCase(),a=(ge[t]||"").toLowerCase();return(n>a?1:n==a?0:-1)||0}return 0}),he=0;he<me.length;he++)N=me[he],H=u.css[N],V=ge[N],"string"!=typeof V||ue[N]||ve++;le+=L,le+=P+L,le+=f("at_complete",0),le+='<button onclick="_atw.clb()">'+u.lang(K,17)+"</button>",le+=L,le+=f("at_success",0)+u.lang(K,13)+' <a href="#" onclick="'+(addthis_do_ab?"_ate.com('cle');_atw.rse()":"_atw.get('at16filt').value='';_atw.filt('',_atw.list);_atw.sag()")+';return false">'+_atw.lang(K,37)+"</a>"+L,le+=f("at_sending",0)+'<div class="at16c"><div class="at_redloading"></div><br/>'+u.lang(K,45)+L+L,le+=f("at_error",0,null,'class="at_error"')+L,le+=f("at_copylink",0),le+=L,le+=f("at_captcha",0)+L,le+=L;var we=!_.ipa&&u.conf.ui_use_vertical_menu;le+=(addthis_do_ab?"":D)+L+L+L+L+L,we&&(U=U.replace('id="','class="atm-f'+(_.msi&&_.mod?" atm-f-iemode2":"")+'" id="'));var xe=f("at15s_head",1,0,ne)+'<span id="at15ptc"'+oe+">"+addthis_caption_share+"</span><span "+(u.conf.ui_use_close_control?'class="at15s_brandx" ':"")+'id="at15s_brand"'+oe+">"+u.conf.ui_cobrand+'</span><a id="at15sptx" '+(u.conf.ui_use_close_control?"":'class="at15dn" ')+'href="#" onclick="return _atw.clb()"'+oe+' onkeydown="if(!e){var e = window.event||event;}if(e.keyCode){_ate.maf.key=e.keyCode;}else{if(e.which){_ate.maf.key=e.which;}}if(_ate.maf.key==9){ addthis_close(); _ate.maf.sib.tabIndex=9001;_ate.maf.sib.focus();}else{/*alert(_ate.maf.key)*/} _ate.maf.key=null" tabindex="9000" >X</a>'+L,be=i.bro.msi,Ce=i.bro.chr,ye=i.bro.saf,Ee=be?"Internet&nbsp;Explorer":Ce?"Chrome":ye?"Safari":"Firefox",Me=function(e){return"http://"+_atd+(ye?"tools/safari?":be?"tools/internet-explorer?":"landing?"+(Ce?"to=chrome&amp;":"to=ffext&amp;"))+"utm_source=ps&amp;utm_medium="+(e?e:"link")+"&amp;utm_content=AT"+(be?"IE":Ce?"CH":ye?"SF":"FF")+"&amp;utm_campaign=ATSP"+(be?"I":Ce?"C":ye?"S":"F")+"4_DL"},Re=f("at_pspromo",0);if((i.sau||{}).gat){var ke="?utm_source=Promo&utm_medium=link&utm_campaign=at_ra&utm_content=ATPS"+(i.bro.ffx?"FF":i.bro.msi?"IE":i.bro.chr?"CR":"SF")+"_DL";Re+='<div style="float:left; text-align:center; margin:20px 0 0 -1px; width:150px"><span style="font-size:12px; color:#4c4c4c; font-weight:normal; line-heig">Know what your users are<br>sharing, in real time.</span>',Re+='<a href="http://www.addthis.com/analytics'+ke+'" target="_blank"><img src="//s7.addthis.com/static/t00/ata_60.png" style="border:none; display:block;margin:15px 0 0 0" /></a>',Re+=L}else Re+='<div style="position:absolute;display:block;border:0">    <div id="at_testpromo" style="display:block"><div class="at-promo-single" align="center">    <h4>'+u.lang(K,42).replace("Firefox",Ee)+'</h4>    <div align="center"><a target="_blank" href="'+Me("img")+'">      <div id="at_testpromo_bg" class="at-promo-single-dl-'+(ye?"sa":Ce?"ch":be?"ie":"ff")+'" border="0" alt="'+_atw.lang(K,43)+'"></div></a>'+(i.bro.ie6||i.bro.ie7||i.bro.ff2?"":(_atw.ver<300?"<br>":"")+'<a target="_blank" href="http://'+_atd+'pages/toolbar-preferences" style="'+(be&&2==i.bro.mod&&we?"position:absolute;left:35px;top:125px":"padding-top:10px")+';font-size:10px">'+_atw.lang(K,44)+"</a>")+"</div></div>    </div></div>";Re+=L;for(var Be,ze,Se="ja,fr,he,it,af,ga,el,tl,ro,ru,ms,mk,az,zh,sq,te,be,ta,uk,ml,eu,se,su,aze,gre,tra,fre,gdh,jpn,mac,mak,msa,may,ron,rum,rus,tam,tgl,ukr,zho",De=(window.addthis_ssh||"").split(","),Ue={},Ie=[],he=0;he<De.length;he++)Ue[De[he]]=1;pe=_.ipa?d(pe,7,"more"):we?d(pe,8,"more"):d(pe,12,"more");for(var he=0;he<pe.length;he++){N=pe[he],H=u.css[N];var ge=u.list,Oe=K.split("-").shift(),Ne=N.split("_").shift(),Qe=Ue[Ne]||Ue[N];if(N in ge){if(V=ge[N],ue[N]||"string"!=typeof V)continue;if(T=H?J(N,H):Y({code:N,alt:V,title:V}),!T)continue;if("email"!==N||""!==j()||se.indexOf("ffext")>-1||se.indexOf("fxe")>-1){if(we)Be=v.a(T,v.span(ge[N]+("more"===N&&-1===Se.indexOf(Oe)?" ("+ve+")":"")).css("at-label",Qe?" at_bold":"","at-size-16")).id("atic_"+N).href("#"),ze=Be.element,ze.addEventListener?(ze.addEventListener("keypress",Z,!1),ze.addEventListener("keydown",W,!1),ze.addEventListener("blur",q,!1),ze.addEventListener("click",Q(X,null,N),!1)):ze.attachEvent&&(ze.attachEvent("onkeypress",Z),ze.attachEvent("onkeydown",W),ze.attachEvent("onblur",q),ze.attachEvent("onclick",Q(X,null,N)));else{if("link"===N&&_.ie9)continue;Be=v.a(T,v.span(ge[N]+("more"===N&&-1===Se.indexOf(Oe)?" ("+ve+")":"")).css("at-label")).id("atic_"+N).href("#").css("at_item "+(_.ipa?"addthis_16x16_style ":"")+(Qe?" at_bold":"")+" at_col"+he%2).attr("onclick","return addthis_sendto('"+N+"');").attr("onmouseover",i.bro.ffx&&2!=i.bro.mode||i.bro.ipa?"":"_atw.shv(this)").attr("onmouseout",i.bro.ffx&&2!=i.bro.mode||i.bro.ipa?"":"_atw.rhv(this)").attr("tabindex",he+2)}Ie.push(Be),0===he&&(_ate.maf.firstCompact="atic_"+N)}}}Ie.push(v.div().style("clear:both;"));var Te=U.replace("mm","hm"),Ve=v.div().id("at20mc").style("z-index:1000000;position:static").css(_.ipa?"ipad":"").html(le).element,_e=v.div(Ie).id("at_hover").css(we?"atm-s":"").style("display:none;"),je=v.div(v.div().html(xe).element.firstChild,v.div().html(Re).element.firstChild,_e,v.div().html(Te).element.firstChild);we?je.css("atm-i"):je.id(u.did+"_inner");var He=v.div(je).id(u.did).css((_.ie6?u.did+(we?"atm":"")+"ie6":_.msi&&_.mod&&!we?"atiemode2":"")+(we?" atm":"")).attr("onmouseover","_atw.xwa()").attr("onmouseout","if (this.className.indexOf('border')==-1) addthis_close()").style("z-index:1000000;position:absolute;display:none;visibility:hidden;top:0px;left:0px;").element;Ve.appendChild(He),l.body.appendChild(Ve);var he=p("at_from");he&&(he.value=addthis_do_ab?addthis_efrom||ce||"":ce||u.conf.ui_email_from||"")}u.xwa(),u.dut(a,o);var Ge,Le,Fe,Pe=16;e.getElementsByTagName&&(Ge=e.getElementsByTagName("img"),Le=e.getElementsByTagName("span")),Fe=C(e,"addthis_counter")&&Le&&Le[0],Ge&&Ge[0]?(e=Ge[0],Pe=0):Fe||b(e,"addthis_button")&&Le&&Le[0]?(e=Le[0],Pe=0):(i.bro.saf||i.bro.chr)&&e.childNodes&&1==e.childNodes.length&&3==e.childNodes[0].nodeType&&(Pe=0);var Ke=offLeft=void 0;if(Ke="undefined"!=typeof(window.addthis_config||{}).ui_offset_top?(window.addthis_config||{}).ui_offset_top||0:u.conf.ui_offset_top||0,"undefined"!=typeof(window.addthis_config||{}).ui_offset_left?offLeft=(window.addthis_config||{}).ui_offset_left||0:offLeft=u.conf.ui_offset_left||0,u.sho(t,a),"email"!=t&&"feed"!=t&&"more"!=t&&"bkemail"!=t&&("email"!=t||!b(u.did,"mmborder"))){var Ye=(B(e),void 0!=offLeft?offLeft:u.conf.ui_offset_left),Je=void 0!=Ke?Ke:u.conf.ui_offset_top,Ze=0,We=0,qe=R(),Xe=k(),$e=p(u.did)||{style:0},et=$e.style,tt=_.ie6?p("atie6cmifh").style:null,nt=u.conf.ui_hover_direction||0,at=u.conf.ui_compact_direction||-1,ot="bkmore"==t||b(u.did,"mmborder"),rt=-1!=at&&1&at,it=-1!=at&&2&at,st=-1!=at&&4&at,ct=-1!=at&&8&at;if(0===et)return u.ost=!0,!1;et.display="";var ut=$e.clientWidth,lt=$e.clientHeight;if(ot){var dt=p("at16p");Ze=qe[0]/2-ut/2,We=dt&&""!=dt.style.marginTop?dt.style.marginTop:Math.max(0,qe[1]/2-222.5)+"px",We=We.split("px").shift()-8}else{var At=e.getBoundingClientRect(),pt=window.scrollY||document.documentElement.scrollTop,ht=window.scrollX||document.documentElement.scrollLeft,ft=window.innerHeight||document.documentElement.clientHeight;(0===At.height||0===At.width)&&(At=e.parentElement.getBoundingClientRect());var gt=At.top>.66*ft,mt=-1!==nt&&!ct,vt=gt&&mt;if(st||1===nt||vt){var wt=$e.getBoundingClientRect(),xt=wt.bottom-wt.top;Ze=ht+At.left,We=pt+At.top-xt}else Ze=ht+At.left,We=pt+At.bottom;var bt=Ze-Xe[0]+ut+20>qe[0];(rt||!it&&bt)&&(Ze=Ze-ut+(e.clientWidth||50))}if((Fe&&((e.parentNode.parentNode.parentNode.parentNode||{}).className||"").indexOf("bar_vertical")>-1||!Fe&&((e.parentNode.parentNode.parentNode||{}).className||"").indexOf("bar_vertical")>-1)&&(We+=Xe[1]+(Fe?16:0)),u.conf.ui_hide_embed){var Ct=Ze+ut,yt=We+lt,Et=l.gn("embed"),Mt=0,Rt=0,kt=0;for(he=0;he<Et.length;he++)Mt=B(Et[he]),Rt=Mt[0],kt=Mt[1],Ze<Rt+Et[he].clientWidth&&We<kt+Et[he].clientHeight&&Ct>Rt&&yt>kt&&"hidden"!=Et[he].style.visibility&&(Et[he].addthis_hidden=!0,Et[he].style.visibility="hidden")}x("at15s_head","at15s_head_success"),m("at_pspromo",1);var Bt=_ate.util.parent(e,".addthis_bar"),zt=_ate.util.parent(e,".addthis_toolbox"),St=function(e){return window.getComputedStyle&&null!=e&&e!=document?"fixed"===window.getComputedStyle(e).position:!1};Ze+=parseInt(Ye,10),We+=parseInt(Je,10),et.left=Ze+"px",St(zt)||St(Bt)?et.top=We+Xe[1]+"px":et.top=We+"px",et.visibility="visible",tt&&(tt.left=et.left,tt.top=et.top),ot&&u.fpf()}_ate.maf.key="9",_ate.maf&&_ate.maf.sib&&(_ate.maf.sib.tabIndex="1000");try{p("at_hover").getElementsByTagName("a")[0].focus()}catch(Et){}u.ost=!0},nuc:function(e,t,n){m("at_error"),_atw.hsr(n,"nucaptcha")},hsr:function(e,t){var n,a="",o=_atw.share&&_atw.share.email_vars?_atw.share.email_vars:addthis_share&&addthis_share.email_vars?addthis_share.email_vars:{};if(_atw.ver<200||!window.postMessage)return void _atw.roe(e);if(m("at_sending"),m("at_email"),(n=p("at16recapframe"))||(p("at_captcha").innerHTML="",n=document.createElement("iframe"),n.id="at16recapframe",n.scrolling="no",n.width="298px",n.height="315px",n.frameBorder="0",p("at_captcha").appendChild(n)),o&&"object"==typeof o)for(var r in o)"string"==typeof o[r]&&(a+=(""===a?"":"&")+_euc(r)+"="+_euc(o[r]));!addthis_share.email_template&&_atw.share.email_template&&(addthis_share.email_template=_atw.share.email_template);var i=_euc(_ate.share.geneurl(addthis_share,{from:p("at_from").value,to:p("at_to").value,vars:a,note:p("at_msg").value},this.mck>1?{product:"max-"+_atw.ver}:null));_.msi&&(t="recaptcha"),n.src=_atr+("nucaptcha"==t?"nucaptcha.html":"recaptcha.html")+"#lng="+_euc(O())+"&tellfriend="+_euc(i),v("at_captcha"),window._atab&&(_atab.ipo()&&_atab.opp(!0),m("at16pit",1),window.addthis_do_ab&&_ate.com("hip"))},cpmh:function(e){if(e&&e.origin&&".addthis.com"==e.origin.substr(e.origin.length-12)){var t=p("at16recapframe");switch(e.data){case"reclb":t&&t.parentNode.removeChild(t),_atw.clb();break;case"rerse":m("at_error");break;case"ncr":_atw.err(_atw.lang(_atw.conf.ui_language,51),p("at16recapframe")),_atw.cle();break;case"cpe":_atw.err(_atw.lang(_atw.conf.ui_language,52),p("at16recapframe")),_atw.cle();break;case"eok":t&&t.parentNode.removeChild(t),_atw.eok()}}},evar:function(){try{var e,t,n=_atw,a=function(e,t,n){return n||(n=window),(void 0===n[e]||""===n[e])&&(n[e]=t),n[e]},r="addthis_",i=_ate,s="services_",c=r+"logo",u=r+"header",l=r+"caption_",d=i.gvl((_atw.conf||{}).ui_language||i.lng()),p=j(),h=n.conf&&!A(n.conf)?n.conf:window.addthis_config||{},f=n.share||window.addthis_share||{},g=h.services_custom,m=_atw.ibt();if((i.bro.xp||i.bro.mob)&&delete n.list.mailto,window[r+"language"]=d,a("ui_use_vertical_menu",!0,h),vertical=!_.ipa&&h.ui_use_vertical_menu,a(r+"localize",0),a(r+"feed",""),a(r+"wpl"),n.hf=addthis_feed.length>0,a(l+"email",n.lang(d,3)),a(r+"caption",n.lang(d,1)),a(r+"use_addressbook",!1),a(r+"do_ab",!1),a(r+"product","men-"+_atw.ver),_atw.ver>=300&&(n.list.settings=n.lang(d,47)+"..."),n.list.more=n.lang(d,2),n.list.email=n.lang(d,4),
n.list.favorites=n.lang(d,5),n.list.print=n.lang(d,22),a(r+"popup",!1),a(r+"popup_mode",!1),a(r+"url",""),a(r+"append_data",!p||"addthis"==p.toLowerCase()),a(r+"brand",""),a(r+"title",""),a(r+"content",""),a(r+"email_note",_atc.enote?_atc.enote:""),a(r+"email_from",""),a(r+"email_to",""),a(r+"use_personalization",!0),a(r+"options_default",L.getPopServices().split(",").slice(0,11).join(",")+",more"),a(r+"options_rank",L.getPopServices()),a(r+"options",addthis_options_default),a(r+"exclude",""),a(r+"ssh",""),a(c,""),a(c+"_background",""),a(c+"_color",""),a(u+"_background",""),a(u+"_color",""),a(l+"share",addthis_caption),a(l+"feed",n.lang(d,14)),a(r+"hide_embed",!1),a(r+"share",{}),_.ipa&&(addthis_exclude&&-1==addthis_exclude.indexOf("print")&&(addthis_exclude+=","),addthis_exclude+="print"),a("type","link",f),a("url",addthis_url,f),a("title",addthis_title,f),a("description","",f),a("swfurl","",f),a("modules",{},f),a("feed",addthis_feed,f),a("screenshot","",f),a("author","",f),a("email_template",window.addthis_email_template||"",f),a("email_vars",window.addthis_email_vars?"string"==typeof addthis_email_vars?_ate.util.fromKV(addthis_email_vars):addthis_email_vars:{},f),a("ui_cobrand",addthis_brand,h),a("ui_disable",!1,h),a("ui_508_compliant",!1,h),a("ui_window_panes",!1,h),a("ui_close_control",!h.ui_cobrand&&(h.ui_click||_atw.ver>=200),h),a("ui_click",h.ui_window_panes,h),a("ui_email_note",addthis_email_note,h),a("ui_email_from",_ate.cookie.rck("_atfrom")||addthis_email_from||"",h),a("ui_email_to",addthis_email_to,h),a("ui_hover_direction",0,h),a("ui_compact_direction",-1,h),a("ui_delay",window.addthis_hover_delay,h),a("ui_language",addthis_language,h),a("ui_hide_embed",addthis_hide_embed,h),a("ui_localize",addthis_localize,h),a("ui_header_color",addthis_header_color,h),a("ui_header_background",addthis_header_background,h),a("ui_icons",!0,h),a("ui_use_embeddable_services_beta",!1,h),a("ui_use_embeddable_services",h.ui_use_embeddable_services_beta,h),a("ui_use_mailto",!1,h),a("ui_use_addressbook",addthis_use_addressbook||m,h),a("ui_use_close_control",h.ui_close_control,h),a("ui_open_windows",!1,h),a("ui_show_promo",!0,h),a("data_ga_tracker",null,h),a("data_ga_property",null,h),a("data_omniture_collector","",h),a("pubid",window.addthis_pub,h),a("username",h.pubid,h),a("product",addthis_product,h),a("data_track_clickback",addthis_append_data||h.data_track_linkback||_ate.track.ctp(h.product,h),h),a(s+"custom",[],h),a(s+"localize",d,h),a(s+"expanded","",h),a(s+"compact_org",h.services_compact,h),a(s+"exclude",addthis_exclude,h),h.services_exclude=h.services_exclude.replace(/\s/g,""),a(s+"exclude_natural",h.services_exclude,h),n.conf.parentServices&&N(n.conf.parentServices,function(e){h.services_exclude+=(h.services_exclude.length>1?",":"")+e}),0==h.ui_show_promo&&(_ate.dbm=1),h.ui_use_embeddable_services||f.swfurl||f.swfurl_secure||f.iframeurl||(!f.url||f.url==window.location.href)&&(_ate.share.links.iframe_src||_ate.share.links.video_src))for(t in n.emb)n.list[t]=n.emb[t];else for(t in n.emb)f.modules[t]&&(n.list[t]=n.emb[t]);if(g)for(n.custom_list=n.custom_list||{},g instanceof Array||(g=[g]),e=0;e<g.length;e++){var v=g[e];v.name&&v.icon&&v.url&&o(v.url)&&(v.code=v.url=v.url.replace(/ /g,""),0===v.code.indexOf("http")&&(v.code=v.code.substr(0===v.code.indexOf("https")?8:7)),v.code=v.code.split("?").shift().split("/").shift().toLowerCase(),n.custom_list[v.code]=v,n.list[v.code]=v.name,n.css[v.code]={"background-image":"url("+v.icon+")","background-repeat":"no-repeat","background-position":"top left","background-color":"transparent !important","background-size":"16px"},g[e]=v)}else g=[];var w=_ate.share.services.init(h)||{};if(n.crs=w.crs,n.csl=w.csl,h.services_compact=(w.conf||{}).services_compact,a(s+"compact",addthis_options,h),n.conf=h,n.share=f,h.ui_use_addressbook&&_atc.abf)return!0}catch(i){window.console&&console.log("evar",i)}return!1}},function(){var e=n(167).getMixin({campaign:"AddThis compact menu"}),t=n(19).isBrandingReduced();U=f("at15pf")+e.generateBranding(t).element.innerHTML+"</div>",D=(f("at15pf")+'<a class="at-privacy-info" target="_blank" href="'+G+' ">'+H("Privacy",24)+"</a>"+e.generateBranding(t).element.innerHTML+"</div>").replace(/15/g,"16").replace(/compact/,"expanded")}(),_ate.menu=n(105)(D),addthis.menu=_ate.menu.open,addthis.menu.close=_ate.menu.close,_ate.ao=function(e,t,n,a,o,r){if(e===document.body)return _ate.menu.open(e,o,r);if(_.iph||_.dro||_.wph)return!0;var i=_atw;if(_atw.ver>=250&&(o&&!A(o)&&(i.conf=o),r&&!A(r)&&(i.share=r)),!i.evar()){n&&_ate.usu(n);var s=i.dut(n,a);i.share||(i.share={}),n&&(i.share.url=s[0]),a&&(i.share.title=s[1]);var c=(_ate,document,(n||i.share.url||"").toLowerCase(),(a||i.share.title||"").toLowerCase(),j(),i.conf.ui_delay);if(c&&""===t){if(c=Math.min(500,Math.max(50,c)),i.xhwa(),i.hwa=null,"hwe"!=e)return i.hwe=e,void(i.hwa=setTimeout(function(){_ate.ao("hwe",t,n||i.share.url,a||i.share.title||"")},c));e=i.hwe,i.hwe=null}return i.conf.ui_window_panes===!0?_ate.as("email"==t||"link"==t?t:"more",i.conf,i.share):"link"==t?i.menu(e,t,_atr+"static/link.html#inl=true&url="+_euc(n)+"&ats="+_euc(I(addthis_share))+"&atc="+_euc(I(addthis_config)),a):i.menu(e,t,n,a),(!i.sta||"expanded"==i.sta&&"email"==t)&&("more"==t&&(t="expanded"),t||(t="compact"),!i.sta||"email"!=t&&"link"!=t||_ate.ed.fire("addthis.menu.close",window.addthis||{},{pane:i.sta}),i.sta=t,_ate.ed.fire("addthis.menu.open",window.addthis||{},{element:e,pane:t,url:n,title:a,conf:o,share:r})),!1}},_ate.ac=function(){_atw.xhwa(),M("at_pspromo")||(clearTimeout(_atw.cwa),_atw.cwa=setTimeout(_atw.clo,_atc.cwait))},_ate.as=function(e,t,n){var a,o=V(n),r=V(t);return n=_ate.util.extend(o||{},_atw.share||{}),t=_ate.util.extend(r||{},_atw.conf||{}),a=_ate.util.extend(n,t),_ate.share.cleanly(e,a),!1};for(;_ate.plo&&_ate.plo.length>0;){var te=_ate.plo.pop(),ne=te[0];switch(ne){case"open":addthis_open(te[1],te[2],te[3],te[4],te[5],te[6]),_atw.plo.push(te);break;case"cout":break;case"send":var ae,oe;te.length>2&&(ae=te[2],oe=te[3]),addthis_sendto(te[1],ae,oe);break;case"span":var re=p(te[1]);re&&(_atw.evar(),re.innerHTML='<a href="'+_ate.share.genurl("")+"\" onmouseover=\"return addthis_open(this, 'share', '"+te[2]+"', '"+(te[3]||"").replace(/'/g,"\\'")+'\')" onmouseout="addthis_close()" onclick="return addthis_to()" class="snap_noshots"><img src="'+_atr+'static/btn/v2/lg-bookmark-en.gif" width="125" height="16" style="border:none;padding:0px" alt="AddThis" /></a>');break;case"deco":_atw.evar(),te[1](te[2],te[3],te[4],te[5]);break;case"pref":_atw.gps(te[1])}}_ate.ed.fire("addthis.menu.ready",{atw:_atw}),window.postMessage&&(window.attachEvent?window.attachEvent("onmessage",_atw.cpmh):window.addEventListener("message",_atw.cpmh,!1))}},885:function(e,t,n){e.exports="//www.addthis.com/privacy"}});