window.pmt=function(){var t={version:"v2.0.36",log:function(e){t.output=t.output||[],t.output.push(e)},url:function(){return window.location.href.startsWith("http")&&window.location.href||""},set:function(e,o){t[e]=o},getPubId:function(){return(document.cookie.match("(^|;) ?_PUB_ID=([^;]*)(;|$)")||[])[2]},drivePubId:function(e){const o=t.url(),n="pub_id=";let a,i;if(o.match(n)){if(i=o.split(n).pop().split("&").shift(),a="_PUB_ID="+i+"; path=/",document.cookie=a,e){let t=o.replace(n+i,"");t=t.replace("?&","?"),t=t.replace("&&","&");t.split("?").pop()||(t=t.split("?").shift());const e=t.length-1;"&"===t.charAt(e)&&(t=t.substring(0,e)),window.location.replace(t)}return a}return t.getPubId()},driveCampaignId:function(e){let o;const n="dcid=",a=e&&e.dcid||window.location.search&&window.location.search.match(n)&&window.location.search.split(n).pop().split("&").shift()||(document.cookie.match("(^|;) ?dcid=([^;]*)(;|$)")||[])[2];let i,c;const r=e&&e.form,s=e&&e.url||t.url();return function(t){const e=t;let o;const i=a&&a.replace(n,"");t&&(e.tagName?a&&!e.driver_campaign_id&&(o=document.createElement("input"),o.type="hidden",o.name="driver_campaign_id",o.value=i,e.appendChild(o)):a&&(e.driver_campaign_id=i))}(r),s.match(n)?(i=s.split(n).pop().split("&").shift(),c=new Date,c.setDate(c.getDate()+30),o="dcid="+i+"; expires="+c.toUTCString()+"; path=/",document.cookie=o,o):e}};return t.enablePostmanAnalytics=function(e,o,n){if("function"!=typeof e||e.postmanAnalyticsEnabled||navigator.doNotTrack&&!o._disableDoNotTrack)return e;function a(t){return t.replace(/"/gi,'"')}function i(t){return"string"==typeof t&&t.split(window.location.host).pop()}return o||(o={}),e.postmanAnalyticsEnabled=!0,function(c,r,s,d,l){const u="load"!==r||t.url()!==t.currentURL;if(!u)return!1;e.apply(this,arguments);const p="gtm.uniqueEventId";let m,f,g,h;const w=r||n;t.initCategory||(t.initCategory=c);const y={category:c,action:w,indexType:"client-events",property:o._property||document.location.host,propertyId:document.location.host,traceId:t.getTraceId(null,o),timestamp:(new Date).toISOString()},I=i(t.currentURL)||document.referrer||t.externalURL||"",b=navigator.language||window.navigator.userLanguage||"?";function k(t,e){const o=t&&t.split(",")||[],n=o.length;let a,i;for(a=0;a<n;a+=1){const t=o[a];if(i=-1!==e.indexOf(t),i)break}return i}y.meta={url:i(I),language:b,user:t.user},s&&(y.entityId=s),l&&(y.meta.user=l),"load"===y.action&&y.entityId&&document.body&&document.body.id&&(y.entityId=y.entityId+"#"+document.body.id),d&&(m=parseInt(d,10),f=m&&!m.isNaN&&m||null,h="string"==typeof d,g=h&&d.match(":")&&d.split(":").pop()||h&&d||"object"==typeof d&&a(JSON.stringify(d))||"",f&&(y.value=f),g&&(s?y.entityId+=":"+g:y.entityId=g)),(Object.keys(o)||[]).forEach((function(t){"_"!==t.charAt(0)&&(y[t]=o[t])})),r||"object"!=typeof c||(y.action=c.action||c.event||c[Object.keys(c)[0]],c[p]&&(y.category=p+"-"+c[p])),"local"===y.env&&(y.env="beta"),"object"==typeof y.category&&y.category&&"string"==typeof y.category.category&&(y.category=y.category.category),["category","event","label"].forEach((function(t){"object"==typeof y[t]&&(y[t]=y[t]&&a(JSON.stringify(y[t])))})),y.userId=t.getPubId()||t.store()&&t.store().userId||y.userId,t.userId=y.userId;const _=t.getTraceId().split("|").pop();return t.traceId=t.getTraceId().split(_).shift()+t.userId,-1===window.name.indexOf("PM.")&&(window.name=t.getTraceId()),t.api().store(),setTimeout((function(){t.api()}),1e3),y.category&&y.action&&"function"==typeof o.fetch&&o.fetch(o._url,y)||y.entityId&&"object"==typeof document&&(()=>{const e=o._allow&&k(o._allow,document.location.pathname)||!o._allow&&!0,n=o._disallow&&k(o._disallow,document.location.pathname),a=btoa(JSON.stringify(y));if(e&&!n){if(fetch){if("load"===y.action){if(y.action&&!u)return t.trackIt(),!1;y.entityId=y.entityId.split("#").shift()}t.getTraceId(y),fetch(o._url,{method:"POST",headers:{Accept:"text/html","Content-Type":"text/html"},body:a,mode:"no-cors",keepalive:!0}).catch((function(e){t.log(e)})),t.event=y}else!function(t){const e=new XMLHttpRequest;e.open("POST",o._url),e.setRequestHeader("Accept","application/json"),e.setRequestHeader("Content-type","text/plain"),e.send(t)}(a);t.currentURL=t.url(),-1===y.meta.url.indexOf(document.location.host)&&(t.externalURL=y.meta.url)}})(),!0}},t.watch=function(){const e=(new Date).getTime();if(!t.store().session||t.store().session>36e5){t.store("time",e),t.store("session",1);let o=t.getTraceId().split("|");o.shift(),o=o.join("|"),t.event&&window.pmt("setScalp",[{property:t.event.property,_traceId:"pm"+btoa((new Date).getTime())+"|"+o}])}else t.store("session",e-t.store().time);return t.store("time",e),t.stored},t.ga=function(){"function"==typeof window.ga&&window.ga.apply(this,arguments)},t.getEnv=function(t){let e;e="production";const o=t||document.location.hostname;return["beta","local","stag"].forEach((function(t){o.match(t)&&(e=t)})),e},t.setScalp=function(e){if("object"==typeof window){const o=(document.location.search&&document.location.search.match("dcid=([^;]*)(;|$)")||[])[1],n=o&&o.split("&").shift()||(document.cookie.match("(^|;) ?dcid=([^;]*)(;|$)")||[])[2],a=document.location.search.substr(1).split("&"),i=window.localStorage.getItem("utms"),c=i&&i.split(",")||[];a.forEach((t=>{const e=t.match("([UTM|utm].*)=([^;]*)(;|$)");e&&(-1!==e[0].indexOf("utm")||-1!==e[0].indexOf("UTM"))&&c.push(e[0])}));const r=c.length&&c.join(".")||"",s="PM."+btoa((new Date).toISOString()),d=t.getUserId()||window.name&&window.name.match("|PM.")&&window.name.split("|").pop()||t.store()&&t.store().userId;t.store("userId",d||s);const l="pm"+btoa((new Date).getTime());"string"==typeof window.name&&"pm"===window.name.substring(0,2)||(n&&-1===window.name.indexOf("DCID.")?window.name=l+"|DCID."+n+(r&&"|"+r||"")+"|"+(d||s):window.name=l+(r&&"|"+r||"")+"|"+(d||s));const u=!t.scalpCount&&t.getTraceId()||e._traceId||window.parent&&window.parent.name||window.name,p=function(){t.scalpCount||(t.scalpCount=0),t.scalpCount+=1,t.watch()},m=t.getPubId()||d||window.name.split("|").pop(),f={env:"function"==typeof t.getEnv&&t.getEnv()||"production",type:"events-website",userId:m,_allow:!e.disallow&&e.allow,_disableDoNotTrack:void 0===e.disableDoNotTrack||e.disableDoNotTrack,_disallow:!e.allow&&e.disallow,_property:e.property||document.location.host,_traceId:u},g=f.env.match("prod")?"https://bi.pst.tech/events":"https://bi-beta.pst.tech/events";f._url=e.url||g,t.store("traceId",u),t.traceId=u,t.userId=m,t.scalp=t.enablePostmanAnalytics(p,f)}},t.getTraceUrl=function(e){const o=-1!==e.indexOf("?")?"&":"?";return e+o+"trace="+t.getTraceId()},t.trace=function(e){document.location.href=t.getTraceUrl(e)},t.getUtmUrl=function(e){const o=-1!==e.indexOf("?")?"&":"?",n=t.traceId.split(".").pop(),a=t.traceId.split("."+n).shift().substr(1).split("."),i=[];return a.forEach((t=>{const e=t.match("([UTM|utm].*)=([^;]*)(;|$)");e&&(-1!==e[0].indexOf("utm")||-1!==e[0].indexOf("UTM"))&&i.push(e[0])})),e+o+(i.length&&i.join("&")||"utm="+document.location.host)},t.utm=function(e){let o=t.getUtmUrl(e);o.match("trace=")||(o=o+"&trace="+t.traceId),document.location.href=o},t.trackClicks=function(e,o){const n=function(n){const a=document.body&&document.body.id&&"#"+document.body.id||"";if(e){const i=n.target.getAttribute(e);i&&t.scalp(o||t.initCategory,"click","target",a+i)}else if(!e&&("string"==typeof n.target.className||"string"==typeof n.target.id)){const e=n.target.className||n.target.id||n.target.parentNode.className||-1;if("string"==typeof e){const i=document.location.pathname+a+":"+n.target.tagName+"."+e.split(" ").join("_");try{t.scalp(o||t.initCategory,"click",i)}catch(e){t.log(e.message)}}}};document.body.getAttribute("data-trackClicks")||document.body.addEventListener("mousedown",n,!0),document.body.setAttribute("data-trackClicks",e||"default")},t.driveTrack=function(e){let o;const n="_track=",a=e&&e._track||window.location.search&&window.location.search.match(n)&&window.location.search.split(n).pop().split("&").shift()||(document.cookie.match("(^|;) ?"+n+"([^;]*)(;|$)")||[])[2],i=e&&e.url||t.url(),c=t.getEnv(),r=c.match("stag")?"stage":c;return t.tracking=!0,t.trackIt(),i.match(n)?(o="postman-"+r+".track="+a+"; path=/",document.cookie=o,o):e},t.trackIt=function(){const e=(document.cookie.match("(^|;) ?postman-[a-z]+.track=([^;]*)(;|$)")||[])[2];if(e&&t.tracking){let o=t.url();const n=-1===o.indexOf("?")?"?":"&";-1===o.indexOf("_track")&&"default"!==e&&(o=`${o}${n}_track=${e}`,document.location.replace(o))}},t.xhr=function(t,e){const o=new XMLHttpRequest,n="t="+(new Date).getTime(),a=-1===t.indexOf("?")?"?":"&",i=t+a+n;o.withCredentials=!0,o.addEventListener("readystatechange",(function(){4===this.readyState&&e(this.responseText)})),o.open("GET",i),o.send()},t.bff=function(e,o,n){const a=(n?"/mkapi/":"https://www.postman.com/mkapi/")+e+".json";t.xhr(a,o)},t.store=function(e,o){const n=(document.cookie.match("(^|;) ?_pm.store=([^;]*)(;|$)")||[])[2],a=n&&JSON.parse(n)||{};t.stored={...a},e&&o&&(t.stored[e]=o);const i=document.location.host.split("."),c=i.pop(),r=i.pop(),s=new Date;s.setDate(s.getDate()+1080);let d="_pm.store="+JSON.stringify(t.stored)+"; expires="+s.toUTCString()+"; domain=."+r+"."+c+"; path=/";if(!r){const t=d.split("domain=").pop().split(";").shift();d=d.replace(t,"localhost")}return document.cookie=d,t.stored},t.getTraceIdFromCookie=function(){return(document.cookie.match("(^|;) ?_pmt=([^;]*)(;|$)")||[])[2]},t.getTraceIdFromUrl=function(){const e="trace=",o=t.url(),n=o.match(e)&&o.split(e).pop().split("&").shift();return n&&t.store("traceId",n),n},t.getTraceId=function(e,o){const n=t.getTraceIdFromUrl()||t.getTraceIdFromCookie()||t.store().traceId||t.traceId||o&&o._traceId||"";return n&&e&&(e.traceId=n),n},t.getUserId=function(e){const o=t.getTraceId().split("|").pop()||t.store().userId||t.userId||"";return o&&e&&(e.userId=o),o},t.api=function(e){"object"==typeof e&&Object.keys(e).forEach((function(t){window[t]=e[t]}));const o=window.pm,n=o&&o.billing,a=n&&n.plan,i=a&&a.features;if(i){const e=i&&i.is_paid_plan_growth,o=e&&e.value,n=i&&i.is_enterprise_plan_growth,a=(n&&n.value?"enterprise":o&&"paid")||"free";t.store("plan",a)}return t},setTimeout((function(){const t=document.getElementById("pmtSDK"),e=t&&t.getAttribute("data-track-category")||"pm-analytics",o=t&&t.getAttribute("data-track-property"),n=t&&t.getAttribute("data-track-url"),a=t&&"false"!==t.getAttribute("data-track-disable-do-not-track"),i=t&&"true"===t.getAttribute("data-drive-track"),c=t&&"false"!==t.getAttribute("data-drive-campaign-id"),r=t&&"false"!==t.getAttribute("data-drive-pub-id"),s=t&&"false"!==t.getAttribute("data-track-load"),d=t&&"false"!==t.getAttribute("data-track-clicks"),l=d&&t.getAttribute("data-track-clicks-attribute")||null;if(o){const t={property:o};n&&(t.url=n),a&&(t.disableDoNotTrack=a),window.pmt("setScalp",[t]),s&&window.pmt("scalp",[e,"load",document.location.pathname]),d&&window.pmt("trackClicks",[l,e]),c&&window.pmt("driveCampaignId"),r&&window.pmt("drivePubId",[!0]),i&&window.pmt("driveTrack")}}),1e3),function(e,o){return t[e]?"function"==typeof t[e]?t[e].apply(t,o):t[e]:null}}();
