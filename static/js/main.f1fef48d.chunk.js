(this["webpackJsonpgps-react"]=this["webpackJsonpgps-react"]||[]).push([[0],{107:function(e,t,a){},108:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(10),l=a.n(r),i=(a(61),a(18)),c=a(19),s=a(22),h=a(20),u=a(23),d=a(27),p=a(51),m=a.n(p),f=a(52),g=a.n(f)()("localhost:8000"),b=!1;g.on("connect",(function(){b=!0,console.log("socket connect to server")}));var w,v,E=function(e){g.on("osc",e)},y=a(13),S=a.n(y),k={},O={},P=function(){v=new S.a.Compressor(-30,3).toMaster(),(w=new S.a.Reverb({pre_delay:.05,decay:3,wet:.6})).generate();for(var e=0;e<"CDEFGAB".length;e++)for(var t=2;t<=6;t++)O["CDEFGAB"[e]+t]=new S.a.Synth({oscillator:{type:"sine"},envelope:{attack:.1,decay:5,sustain:.2,release:.5}}),O["CDEFGAB"[e]+t].envelope.decayCurve="exponential"},C=function(e){var t=Math.ceil(e.layer),a=Math.max(.5,t-e.layer),n=x(t);if(k[n])return clearTimeout(k[n]),void setTimeout((function(){j(n)}),150);var o=.8*S.a.Frequency(n).toFrequency()*a;console.log(n,o);var r=new S.a.Filter(o,"lowpass");console.log(O[n]),O[n].chain(r,w,v).triggerAttack(n),k[n]=setTimeout((function(){j(n)}),150)},j=function(e){O[e].triggerRelease(),k[e]=null},x=function(e){e=Math.floor(Math.pow(e,1/1.4));var t="CDEFGAB".length;return"CDEFGAB"[e%t]+Math.min(6,Math.floor(2+e/t))},M=function(){var e=(new S.a.Synth).toMaster();e.volume.value=-60,e.triggerAttackRelease("C4","16n")};function D(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function F(e){var t,a=0,n=0,o=[],r=[],l={},i=!0,c=0,s=[];E((function(e){"/gps/trigger"==e.address&&(JSON.parse(e.args[0].value).id==t&&(c=0))})),e.setup=function(){e.createCanvas(e.windowWidth,e.windowHeight),e.frameRate(30),console.log("issocketConnect:"+b),P()},e.windowResized=function(){e.resizeCanvas(e.windowWidth,e.windowHeight)},e.myCustomRedrawAccordingToNewPropsHandler=function(e){e.configData&&(l=e.configData,p()),e.dataPoint&&0!==Object.keys(l).length&&(o=e.dataPoint,u()),e.myId&&(console.log(e.myId),t=e.myId)};var h=function(t){var a=function(e,t,a){if(a.lon&&a.lat){var n=(a.lon-t.lon)*t.globalScale,o=(a.lat-t.lat)*t.globalScale,r=e.createVector(n,o);return r.x=(r.x>0?1:-1)*Math.pow(Math.abs(r.x),t.globalPow),r.y=(r.y>0?1:-1)*Math.pow(Math.abs(r.y),t.globalPow),r.y*=-1,r}return null}(e,l,t),n=1*a.mag().toFixed(5),o=1*(a.heading()/Math.PI*180).toFixed(5);return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?D(a,!0).forEach((function(t){Object(d.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):D(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},t,{pos:a,dist:n,degree:o})},u=function(){console.log("updateDataPoint");var t=e.int(e.frameCount/4);t&&(r=o.map(h).slice(-t)),i=!(t>o.length)},p=function(){for(var e=0;e<50;e++)s[e]=I(e,l.globalScale,l.globalPow)};e.draw=function(){var t,o;e.frameCount%25===0&&i&&u(),n=a,t=l.radioSpeed,o=e.frameCount,a=t*o/60%(2*Math.PI)-Math.PI,c++,e.background(255/c,100),e.textSize(12),e.fill(255),e.stroke(255,10),e.strokeWeight(1);var h="Total Nodes: ".concat(function(e){return e.length}(r),"\nActive: ").concat(function(e){return e.filter((function(e){return!e.leave})).length}(r),"\nExecute Time: ").concat(e.frameCount,"\nScanning: ").concat((a/Math.PI*180).toFixed(2),"\xb0");!function(e,t){e.push(),e.fill(255),e.textSize(14),e.textLeading(24),e.text(new Date,20,e.height-35),e.pop(),e.push(),e.fill(255,130),e.text(t,20,35),e.pop()}(e,h),e.translate(e.width/2,e.height/2),function(e,t){var a=e.frameCount;e.noFill();for(var n=0;n<50;n++){var o=0;if(t.length>n&&(o=t[n]),e.stroke(255,Math.max(60-n/10*60,4)+4*Math.sin(-a/10+n)),n<9){e.fill(255,255,255,1+1*e.noise(a/10,n)),e.stroke(255,20),e.beginShape(e.LINES);for(var r=0;r<360;r++){var l=A(o,a,n,r,50/(10-n));e.vertex(l*Math.cos(e.radians(r+a/40)),l*Math.sin(e.radians(r+a/40)))}e.endShape(),e.noStroke(),e.beginShape();for(var i=0;i<360;i++){var c=A(o,a,n,i,30/(8-n));e.vertex(c*Math.cos(e.radians(i+a/40)),c*Math.sin(e.radians(i+a/40)))}e.endShape(e.CLOSE)}else e.noFill(),e.ellipse(0,0,o,o)}}(e,s),function(e,t,a,n,o){var r;e.textSize(12),e.fill(255),e.stroke(255,10),e.strokeWeight(1),t.forEach((function(t,l){var i,c=Date.now()-t.timeStamp,s=t.pos.heading(),h=t.showId;if(t.pos){i=s-a;var u=(n-s)*(a-s)<=0&&Math.abs(n-a)<1;if(u){if(r!==t){var d={layer:N(t.dist,o.globalScale,o.globalPow),degree:t.degree,dist:t.dist,leave:t.leave,pos:t.pos};C(d)}r=t}e.push();var p=t.pos.mag();if(p<2*e.width){e.noFill(),e.beginShape();for(var m=0;m<p-10;m+=2){var f=s+e.noise(e.frameCount/10+m/10)/60;e.vertex(Math.cos(f)*m,Math.sin(f)*m)}e.endShape()}e.pop();var g=Math.abs(i%(2*Math.PI))<.08&&i<0;g&&(e.push(),e.fill(0,0,0,70),e.noStroke(),e.rect(t.pos.x+6,t.pos.y-5,e.textWidth(h)+8,12),e.fill(255),e.text(h,t.pos.x+10,t.pos.y+5),e.pop()),u?e.fill(255):e.fill(255,5+150/Math.log(c)+(g?50:0));var b=5+(i<0?Math.max(Math.min(-1/i,6),0):0)+2*e.noise(l,e.frameCount,t.lon);t.leave||(e.fill(255,0,0),b=5+2*Math.sin(e.frameCount/10),e.push(),e.stroke(255,200),e.rectMode(e.CENTER),e.translate(t.pos.x,t.pos.y),e.rotate(e.frameCount/(10+t.lon/100)),e.noFill(),e.rect(0,0,12,12),e.pop(),e.text("//ACTIVE ".concat(e.frameCount%10<5?".":"","\nID: ").concat(h),t.pos.x+10,t.pos.y+20)),e.ellipse(t.pos.x,t.pos.y,b,b)}else console.log("no position?")}))}(e,r,a,n,l),e.noFill(),function(e,t){e.push(),e.stroke(255,200),e.strokeWeight(2),e.line(0,0,1e3*Math.cos(t),1e3*Math.sin(t)),e.noStroke();for(var a=0;a<20;a++)e.fill(255,2.5*(20-a)),e.beginShape(),e.vertex(0,0),e.vertex(1e3*Math.cos(t-.02*(a-1)),1e3*Math.sin(t-.02*(a-1))),e.vertex(1e3*Math.cos(t-.02*a),1e3*Math.sin(t-.02*a)),e.endShape(e.CLOSE);e.pop()}(e,a),function(e,t){e.push(),e.fill("#f24"),e.noStroke(),e.ellipse(0,0,8,8),e.rectMode(e.CENTER),e.stroke(255),e.noFill(),e.strokeWeight(2),e.rect(0,0,20,20),e.rotate(e.frameCount/100),e.stroke(255,20),e.rect(0,0,20,20),e.pop(),e.push(),e.fill(255,200),e.text(t,20,12),e.pop()}(e,l.centerName),function(e){e.push(),e.stroke(255,255),e.strokeWeight(10),e.rect(-e.width/2,-e.height/2,e.width,e.height),e.strokeWeight(1),e.stroke(255,30),e.rect(-e.width/2+10,-e.height/2+10,e.width-20,e.height-20),e.stroke(255,255),e.strokeWeight(2),e.line(-e.width/2,0,-e.width/2+20,0),e.line(e.width/2,0,e.width/2-20,0),e.line(0,-e.height/2,0,-e.height/2+20),e.line(0,e.height/2,0,e.height/2-20),e.noStroke(),e.fill(255,200),e.textAlign(e.CENTER),e.text("W",-e.width/2+20+15,5),e.text("E",e.width/2-20-15,5),e.text("N",0,-e.height/2+20+20),e.text("S",0,e.height/2-20-10),e.pop()}(e),function(e){var t=(new Date).getSeconds();e.fill(255),e.rect(-e.width/2+t%5*30+20,e.height/2-75,25,6),e.stroke(255),e.noFill(),e.rect(-e.width/2+(t+1)%5*30+20,e.height/2-75,25,6)}(e)}}function I(e,t,a){return.5*Math.pow(Math.abs(e*t/10),a)}function N(e,t,a){return 10*Math.pow(e/.25,1/a)/t}function A(e,t,a,n,o){return e/2+Math.sin(t/(10+10*a)+n/360*2*Math.PI*10)*o}var z=a(36);z.initializeApp({apiKey:"AIzaSyBlfFaGBx7B_nBnlR29yhJAr6kPjqAdLfo",authDomain:"test-84ae7.firebaseapp.com",databaseURL:"https://test-84ae7.firebaseio.com",projectId:"test-84ae7",storageBucket:"test-84ae7.appspot.com",messagingSenderId:"762464277938"});var B=z.database().ref().child("earthlocations"),W=(a(104),null),L={},T=function(){var e=navigator.userAgent||navigator.vendor||window.opera;if(/android|windows phone/i.test(e))return"1. Open the Chrome app.\n\n2. Find and tap Settings.\n\n3. Tap Site settings > Location.\n\n4. Turn Location on.";if(/iPad|iPhone|iPod/.test(e)&&!window.MSStream)return'1. Open the settings app.\n\n2. Find and tap Safari/Chrome.\n\n3. Tap Location.\n\n4. Select "While Using the App".';return"Enable Location Permission"}();function G(e){console.log("yo!"),W=!0,L={lat:e.coords.latitude,lon:e.coords.longitude,timeStamp:Date.now(),date:Date(Date.now()),leave:!1}}function R(e){switch(console.log("fail!"+T),W=!1,e.code){case 1:console.log("Permission denied");break;case 2:console.log("Permission allowed, location disabled");break;case 3:console.log("Permission allowed, timeout reached")}}var _=a(12),U=a(8),H=a(21);a(34),a(35);function J(e){var t=Object(n.useState)(e.show),a=Object(_.a)(t,2),r=a[0],l=a[1],i=Object(n.useState)(""),c=Object(_.a)(i,2),s=c[0],h=c[1],u=function(){M(),l(!1),""!==s&&e.onChange(s,!0)};return Object(n.useEffect)((function(){e.show&&l(!0)}),[e.show]),o.a.createElement(o.a.Fragment,null,o.a.createElement(U.a,{show:r,centered:!0,dialogClassName:"black-modal-dialog",backdropClassName:"black-modal-backdrop"},o.a.createElement(U.a.Body,{bsPrefix:"black-modal-body"},o.a.createElement("label",{htmlFor:"name"},"Name your session")," ",o.a.createElement("br",null),o.a.createElement("input",{id:"name",type:"text",placeholder:e.name,value:s,onChange:function(e){return h(e.target.value)}}),o.a.createElement("span",{className:"hint"}," \u26a0 \u5b8c\u6574\u5448\u73fe\u4f5c\u54c1\uff0c\u8acb\u6253\u958b\u8072\u97f3\u53ca\u5b9a\u4f4d\u3002"),"           "),o.a.createElement(U.a.Footer,{bsPrefix:"black-modal-footer"},o.a.createElement(H.a,{variant:"dark",size:"sm",onClick:u},"Default"),o.a.createElement(H.a,{variant:"light",size:"sm",onClick:u},"Save"))))}function q(e){var t=Object(n.useState)(e.show),a=Object(_.a)(t,2),r=a[0],l=a[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement(H.a,{onClick:function(){l(!0)},bsPrefix:"intro-button"},"i"),o.a.createElement(U.a,{show:r,onHide:function(){l(!1)},centered:!0,dialogClassName:"black-modal-dialog",backdropClassName:"black-modal-backdrop"},o.a.createElement(U.a.Header,{closeButton:!0,bsPrefix:"black-modal-header"}),o.a.createElement(U.a.Body,{bsPrefix:"black-modal-body"},o.a.createElement("h6",null,"\u8ddd\u96e2\u4e4b\u6b4c",o.a.createElement("br",null),o.a.createElement("span",{class:"eng-hint"},"Song of Distance")),o.a.createElement("br",null),o.a.createElement("p",null,"\u300c\u8ddd\u96e2\u4e4b\u6b4c\u300d\u662f\u4e00\u4ef6\u5c07\u4f7f\u7528\u8005\u5b9a\u4f4d\u8cc7\u6599\u8f49\u5316\u70ba\u6a02\u97f3\u7684\u751f\u6210\u5f0f\u97f3\u6a02\u7cfb\u7d71\u3002\u7cfb\u7d71\u5c07\u4e0d\u65b7\u6383\u63cf\u5468\u570d\u6240\u7684\u9023\u7dda\u88dd\u7f6e\uff0c\u540c\u6642\u4e5f\u5c07\u60a8\u7684\u88dd\u7f6e\u5ea7\u6a19\u63d0\u4f9b\u7d66\u5176\u4ed6\u88dd\u7f6e\u3002"))))}var K=a(55),V=a.n(K);function Q(e){var t=Object(n.useState)(e.show),a=Object(_.a)(t,2),r=a[0],l=a[1],i=Object(n.useState)((function(){var e=navigator.userAgent||navigator.vendor||window.opera;return/android|windows phone/i.test(e)?0:/iPad|iPhone|iPod/.test(e)&&!window.MSStream?1:2})),c=Object(_.a)(i,1)[0];return Object(n.useEffect)((function(){l(e.show)}),[e.show]),o.a.createElement(o.a.Fragment,null,o.a.createElement(U.a,{show:r,centered:!0,dialogClassName:"black-modal-dialog",backdropClassName:"black-modal-backdrop"},o.a.createElement(U.a.Header,{bsPrefix:"black-modal-header"}),o.a.createElement(U.a.Body,{bsPrefix:"black-modal-body"},o.a.createElement("h6",null,o.a.createElement("span",{className:"zh-tw-hint"},"\u70ba\u4e86\u4f5c\u54c1\u7684\u5b8c\u6574\u5448\u73fe\uff0c\u8acb\u5141\u8a31\u4f7f\u7528\u5b9a\u4f4d\u529f\u80fd"),o.a.createElement("span",{className:"eng-hint"},"Enable location permission for the best experience.")),0===c&&o.a.createElement(X,null),1===c&&o.a.createElement(Z,null))))}function X(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("ol",null,o.a.createElement("li",null,o.a.createElement("span",{class:"zh-tw-hint"},"\u958b\u555f",o.a.createElement("img",{src:V.a,alt:"Settings"}),"\u300c\u8a2d\u5b9a\u300d\u61c9\u7528\u7a0b\u5f0f\u3002"),o.a.createElement("span",{class:"eng-hint"},'Open the "Settings" app')),o.a.createElement("li",null,o.a.createElement("span",{class:"zh-tw-hint"},"\u9ede\u9078\u4f7f\u7528\u7684\u700f\u89bd\u5668\u3002"),o.a.createElement("span",{class:"eng-hint"},' Find and tap "Safari" or "Chrome"')),o.a.createElement("li",null,o.a.createElement("span",{class:"zh-tw-hint"},"\u8f15\u89f8\u300c\u4f4d\u7f6e\u300d\u3002"),o.a.createElement("span",{class:"eng-hint"},'Tap "Location"')),o.a.createElement("li",null,o.a.createElement("span",{class:"zh-tw-hint"},"\u9078\u64c7\u300c\u4f7f\u7528 App \u671f\u9593\u300d\u3002"),o.a.createElement("span",{class:"eng-hint"},'Select "While Using the App'))))}var Y={color:"gray",fontWeight:"bolder"};function Z(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement("ol",null,o.a.createElement("li",null,o.a.createElement("span",{class:"zh-tw-hint"},"\u958b\u555fChrome\u61c9\u7528\u7a0b\u5f0f\u3002"),o.a.createElement("span",{class:"eng-hint"},'Open the "Chrome" app.')),o.a.createElement("li",null,o.a.createElement("span",{class:"zh-tw-hint"},"\u9ede\u9078\u300c\u8a2d\u5b9a\u300d\u3002"),o.a.createElement("span",{class:"eng-hint"},' Find and tap "Settings"')),o.a.createElement("li",null,o.a.createElement("span",{class:"zh-tw-hint"},"\u8f15\u89f8\u300c\u7db2\u7ad9\u8a2d\u5b9a\u300d",o.a.createElement("span",{style:Y},">"),"\u300c\u5b9a\u4f4d\u300d\u3002"),o.a.createElement("span",{class:"eng-hint"},'Tap "Site settings" ',o.a.createElement("span",{style:Y},">"),' "Location"')),o.a.createElement("li",null,o.a.createElement("span",{class:"zh-tw-hint"},"\u5c07\u5b9a\u4f4d\u958b\u555f\u3002"),o.a.createElement("span",{class:"eng-hint"},"Turn Location on"))))}function $(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function ee(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?$(a,!0).forEach((function(t){Object(d.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):$(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var te="generative_geo_id",ae="generative_name",ne="generative_geo_id_time",oe=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).state={gp:{},dataPoint:[]},a.initGPS=function(){},a.updateDataSet=function(e){console.log("updateDataset"),a.setState({dataPoint:Object.entries(e).filter((function(e){return e[0]!==L.key})).map((function(e){return ee({},e[1],{key:e[0]})}))})},a.checkData=function(e){Object.entries(e).forEach((function(e){("key"in e[1]||B.child(e[0]).child("key").set(e[0]),"showId"in e[1]||!e[0]||B.child(e[0]).child("showId").set(le(e[0])),e[1].timeStamp&&e[1].lat&&e[1].lon)?Date.now()-e[1].timeStamp>6e3?e[1].leave||B.child(e[0]).child("leave").set(!0):e[1].leave&&B.child(e[0]).child("leave").set(!1):B.child(e[0]).remove()}))},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log("setupGPS"),navigator.geolocation.watchPosition(G,R),B.on("value",(function(t){e.updateDataSet(t.val())}))}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(Q,{show:!1===W}),o.a.createElement(q,{show:!1}),W&&o.a.createElement(re,{dataPoint:this.state.dataPoint}))}}]),t}(n.Component),re=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).state={data:{globalScale:5e5,globalPow:.5,maxLineLength:100,radioSpeed:.8,lat:L.lat,lon:L.lon,centerName:"center"},name:"center",naming:!1},a.addGPSKey=function(){var e,t=localStorage.getItem(te),n=localStorage.getItem(ne),o=localStorage.getItem(ae);t&&Date.now()-n<36e5?(console.log("Old Id Detected! use "+t),e=t,localStorage.setItem(ne,Date.now())):(e=B.push(L).key,o=le(e),console.log("Generate new id "+e),localStorage.setItem(te,e),localStorage.setItem(ne,Date.now())),L.key=e,console.log(L.key),o||(o=le(e)),L.showId=o,B.child(e).set(L),a.changeCenterName(o,!1)},a.changeCenterName=function(e,t){localStorage.setItem(ae,e),t&&L.key&&B.child(L.key).child("showId").set(e),a.setState({data:ee({},a.state.data,{centerName:e}),name:e})},a.saveControlData=function(){var e=a.state.data;sessionStorage.setItem("controlData",JSON.stringify(ee({},e)))},a.handleWindowBeforeUnload=function(e){B.child(L.key).child("leave").set(!0)},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("beforeunload",this.handleWindowBeforeUnload),this.addGPSKey(),this.setState({naming:!0})}},{key:"componentWillUnmount",value:function(){window.removeEventListener("beforeunload",this.handleWindowBeforeUnload)}},{key:"render",value:function(){var e=this.state.data,t=this.props.dataPoint;return o.a.createElement(o.a.Fragment,null,o.a.createElement(J,{show:this.state.naming,name:e.centerName,onChange:this.changeCenterName}),o.a.createElement(m.a,{sketch:F,dataPoint:t,configData:e,myId:L.key}))}}]),t}(n.Component),le=function(e){return"A"+e.split("").map((function(e){return e.charCodeAt(0)})).reduce((function(e,t){return e*t}),1)%1e3},ie=oe,ce=(a(107),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement(ie,null)}}]),t}(o.a.Component));l.a.render(o.a.createElement(ce,null),document.getElementById("root"))},35:function(e,t,a){},55:function(e,t,a){e.exports=a.p+"static/media/Settings-icon.43d7547b.png"},56:function(e,t,a){e.exports=a(108)},61:function(e,t,a){},91:function(e,t){}},[[56,1,2]]]);
//# sourceMappingURL=main.f1fef48d.chunk.js.map