(this["webpackJsonpgps-react"]=this["webpackJsonpgps-react"]||[]).push([[0],{109:function(e,t,a){},110:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(11),i=a.n(r),l=(a(63),a(18)),c=a(19),s=a(22),h=a(20),u=a(23),d=a(27),p=a(52),m=a.n(p),g=a(53),f=a.n(g)()("https://gps-250305.appspot.com"),b=!1;f.on("connect",(function(){b=!0,console.log("socket connect to server")}));var v,w,y,E,S,k=function(e,t){f.emit("osc",{address:e,args:[{value:t}]})},O=function(e){f.on("osc",e)},P=a(7),C=a.n(P),x=a(36),M=a.n(x),j=a(54),D=a.n(j),F=["C","D","Eb","F","G","A","Bb"],I=(C.a.Frequency("F3").toFrequency(),9),N={},A={},z=function(){var e=new C.a.Limiter(-.5).toMaster();(w=new C.a.Compressor(-30,3).connect(e)).ratio.value=20,(v=new C.a.Reverb({pre_delay:.05,decay:5,wet:.6}).connect(w)).generate(),(S=new C.a.Filter(6e3,"lowpass")).rolloff=-12,S.connect(v),L(),console.log("sample here",M.a),y=new C.a.Sampler({C3:M.a},(function(){console.log("sample load!"),y.attack=.25})).connect(S),E=new C.a.Sampler({C2:D.a},(function(){console.log("short sample load!")})).connect(S)},L=function(){for(var e=0;e<I;e++)W(e),A[e]=!1},W=function(e){N[e]=new C.a.Synth({oscillator:{type:"sine"},envelope:{attack:.1,decay:5,sustain:.15,release:.5}}),N[e].envelope.decayCurve="exponential"},_=function(e){var t=Math.ceil(e.layer),a=Math.max(.5,t-e.layer);t=B(t);var n=0,o=0;n=T(t),o=C.a.Frequency(n).toFrequency()*a;var r=new C.a.Filter(o,"lowpass");return r.Q.value=2,!0!==e.leave?(console.log("~"),void y.connect(r).triggerAttack(n)):A[t]?void 0:(A[t]=!0,E.connect(r).triggerAttack(n),void setTimeout((function(){A[t]=!1}),200))},B=function(e){return e=Math.floor(Math.pow(e,1)+Math.floor(3*Math.random())-1)-1,Math.max(Math.min(e,I-1),0)},T=function(e){var t=F.length;return F[e%t]+Math.min(5,Math.floor(2+e/t))},R=function(){var e=(new C.a.Synth).toMaster();e.volume.value=-60,e.triggerAttackRelease("C4","16n")};function G(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function U(e){var t,a,n=0,o=0,r=[],i=[],l={},c=!0,s=0,h=[];O((function(e){"/gps/trigger"==e.address&&(JSON.parse(e.args[0].value).id==t&&(s=0))})),e.setup=function(){e.createCanvas(e.windowWidth,e.windowHeight),e.frameRate(30),console.log("issocketConnect:"+b),z(),(a=e.createButton("yo")).position(19,19),a.mousePressed((function(){_({layer:30,leave:!1})}))},e.windowResized=function(){e.resizeCanvas(e.windowWidth,e.windowHeight)},e.myCustomRedrawAccordingToNewPropsHandler=function(e){e.configData&&(l=e.configData,m()),e.dataPoint&&0!==Object.keys(l).length&&(r=e.dataPoint,p()),e.myId&&(console.log(e.myId),t=e.myId)};var u=function(t){var a=function(e,t,a){if(a.lon&&a.lat){var n=(a.lon-t.lon)*t.globalScale,o=(a.lat-t.lat)*t.globalScale,r=e.createVector(n,o);return r.x=(r.x>0?1:-1)*Math.pow(Math.abs(r.x),t.globalPow),r.y=(r.y>0?1:-1)*Math.pow(Math.abs(r.y),t.globalPow),r.y*=-1,r}return null}(e,l,t),n=1*a.mag().toFixed(5),o=1*(a.heading()/Math.PI*180).toFixed(5);return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?G(a,!0).forEach((function(t){Object(d.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):G(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},t,{pos:a,dist:n,degree:o})},p=function(){console.log("updateDataPoint");var t=e.int(e.frameCount/4);if(t){var a=H(10,l.globalScale,l.globalPow);i=r.slice(-t).map(u).filter((function(e){return e.dist<a}))}c=!(t>r.length)},m=function(){for(var e=0;e<50;e++)h[e]=H(e,l.globalScale,l.globalPow)};e.draw=function(){var t,a;e.frameCount%25===0&&c&&p(),o=n,t=l.radioSpeed,a=e.frameCount,n=t*a/60%(2*Math.PI)-Math.PI,e.frameCount%30===0&&k("/gps/radio",1*(n/Math.PI*180).toFixed(5)),s++,e.background(255/s,100),e.textSize(12),e.fill(255),e.stroke(255,10),e.strokeWeight(1);var r="Total Nodes: ".concat(function(e){return e.length}(i),"\nActive: ").concat(function(e){return e.filter((function(e){return!e.leave})).length}(i),"\nExecute Time: ").concat(e.frameCount,"\nScanning: ").concat((n/Math.PI*180).toFixed(2),"\xb0");!function(e,t){e.push(),e.fill(255),e.textSize(14),e.textLeading(24),e.text(new Date,20,e.height-35),e.pop(),e.push(),e.fill(255,130),e.text(t,20,35),e.pop()}(e,r),e.translate(e.width/2,e.height/2),function(e,t){var a=e.frameCount;e.noFill();for(var n=0;n<50;n++){var o=0;if(t.length>n&&(o=t[n]),e.stroke(255,Math.max(60-n/10*60,4)+4*Math.sin(-a/10+n)),n<9){e.fill(255,255,255,1+1*e.noise(a/10,n)),e.stroke(255,20),e.beginShape(e.LINES);for(var r=0;r<360;r++){var i=q(o,a,n,r,50/(10-n));e.vertex(i*Math.cos(e.radians(r+a/40)),i*Math.sin(e.radians(r+a/40)))}e.endShape(),e.noStroke(),e.beginShape();for(var l=0;l<360;l++){var c=q(o,a,n,l,30/(8-n));e.vertex(c*Math.cos(e.radians(l+a/40)),c*Math.sin(e.radians(l+a/40)))}e.endShape(e.CLOSE)}else e.noFill(),e.ellipse(0,0,o,o)}}(e,h),function(e,t,a,n,o){var r;e.textSize(12),e.fill(255),e.stroke(255,10),e.strokeWeight(1),t.forEach((function(t,i){var l,c=Date.now()-t.timeStamp,s=t.pos.heading(),h=t.showId;if(t.pos){l=s-a;var u=(n-s)*(a-s)<=0&&Math.abs(n-a)<1;if(u){if(r!==t){var d=JSON.stringify({degree:t.degree,dist:t.dist,id:t.key,data:t.data,leave:t.leave,timeStamp:t.timeStamp,time_to_now_second:c}),p={layer:J(t.dist,o.globalScale,o.globalPow),degree:t.degree,dist:t.dist,leave:t.leave,pos:t.pos};_(p),k("/gps/trigger",d)}r=t}e.push();var m=t.pos.mag();if(m<2*e.width){e.noFill(),e.beginShape();for(var g=0;g<m-10;g+=2){var f=s+e.noise(e.frameCount/10+g/10)/60;e.vertex(Math.cos(f)*g,Math.sin(f)*g)}e.endShape()}e.pop();var b=Math.abs(l%(2*Math.PI))<.08&&l<0;b&&(e.push(),e.fill(0,0,0,70),e.noStroke(),e.rect(t.pos.x+6,t.pos.y-5,e.textWidth(h)+8,12),e.fill(255),e.text(h,t.pos.x+10,t.pos.y+5),e.pop()),u?e.fill(255):e.fill(255,5+150/Math.log(c)+(b?50:0));var v=5+(l<0?Math.max(Math.min(-1/l,6),0):0)+2*e.noise(i,e.frameCount,t.lon);t.leave||(e.fill(255,0,0),v=5+2*Math.sin(e.frameCount/10),e.push(),e.stroke(255,200),e.rectMode(e.CENTER),e.translate(t.pos.x,t.pos.y),e.rotate(e.frameCount/(10+t.lon/100)),e.noFill(),e.rect(0,0,12,12),e.pop(),e.text("//ACTIVE ".concat(e.frameCount%10<5?".":"","\nID: ").concat(h),t.pos.x+10,t.pos.y+20)),e.ellipse(t.pos.x,t.pos.y,v,v)}else console.log("no position?")}))}(e,i,n,o,l),e.noFill(),function(e,t){e.push(),e.stroke(255,200),e.strokeWeight(2),e.line(0,0,1e3*Math.cos(t),1e3*Math.sin(t)),e.noStroke();for(var a=0;a<20;a++)e.fill(255,2.5*(20-a)),e.beginShape(),e.vertex(0,0),e.vertex(1e3*Math.cos(t-.02*(a-1)),1e3*Math.sin(t-.02*(a-1))),e.vertex(1e3*Math.cos(t-.02*a),1e3*Math.sin(t-.02*a)),e.endShape(e.CLOSE);e.pop()}(e,n),function(e,t){e.push(),e.fill("#f24"),e.noStroke(),e.ellipse(0,0,8,8),e.rectMode(e.CENTER),e.stroke(255),e.noFill(),e.strokeWeight(2),e.rect(0,0,20,20),e.rotate(e.frameCount/100),e.stroke(255,20),e.rect(0,0,20,20),e.pop(),e.push(),e.fill(255,200),e.text(t,20,12),e.pop()}(e,l.centerName),function(e){e.push(),e.stroke(255,255),e.strokeWeight(10),e.rect(-e.width/2,-e.height/2,e.width,e.height),e.strokeWeight(1),e.stroke(255,30),e.rect(-e.width/2+10,-e.height/2+10,e.width-20,e.height-20),e.stroke(255,255),e.strokeWeight(2),e.line(-e.width/2,0,-e.width/2+20,0),e.line(e.width/2,0,e.width/2-20,0),e.line(0,-e.height/2,0,-e.height/2+20),e.line(0,e.height/2,0,e.height/2-20),e.noStroke(),e.fill(255,200),e.textAlign(e.CENTER),e.text("W",-e.width/2+20+15,5),e.text("E",e.width/2-20-15,5),e.text("N",0,-e.height/2+20+20),e.text("S",0,e.height/2-20-10),e.pop()}(e),function(e){var t=(new Date).getSeconds();e.fill(255),e.rect(-e.width/2+t%5*30+20,e.height/2-75,25,6),e.stroke(255),e.noFill(),e.rect(-e.width/2+(t+1)%5*30+20,e.height/2-75,25,6)}(e)}}function H(e,t,a){return.5*Math.pow(Math.abs(e*t/10),a)}function J(e,t,a){return 10*Math.pow(e/.25,1/a)/t}function q(e,t,a,n,o){return e/2+Math.sin(t/(10+10*a)+n/360*2*Math.PI*10)*o}var K=a(37);K.initializeApp({apiKey:"AIzaSyBlfFaGBx7B_nBnlR29yhJAr6kPjqAdLfo",authDomain:"test-84ae7.firebaseapp.com",databaseURL:"https://test-84ae7.firebaseio.com",projectId:"test-84ae7",storageBucket:"test-84ae7.appspot.com",messagingSenderId:"762464277938"});var V=K.database().ref().child("earthlocations"),Q=(a(106),{}),X=null,Y=function(){var e=navigator.userAgent||navigator.vendor||window.opera;if(/android|windows phone/i.test(e))return"1. Open the Chrome app.\n\n2. Find and tap Settings.\n\n3. Tap Site settings > Location.\n\n4. Turn Location on.";if(/iPad|iPhone|iPod/.test(e)&&!window.MSStream)return'1. Open the settings app.\n\n2. Find and tap Safari/Chrome.\n\n3. Tap Location.\n\n4. Select "While Using the App".';return"Enable Location Permission"}();function Z(e){console.log("yo!"),!0,Q={lat:e.coords.latitude,lon:e.coords.longitude,timeStamp:Date.now(),date:Date(Date.now()),leave:!1},X(!0)}function $(e){switch(console.log("fail!"+Y),!1,e.code){case 1:console.log("Permission denied");break;case 2:console.log("Permission allowed, location disabled");break;case 3:console.log("Permission allowed, timeout reached")}X(!1)}var ee=a(13),te=a(9),ae=a(21);a(34),a(35);function ne(e){var t=Object(n.useState)(e.show),a=Object(ee.a)(t,2),r=a[0],i=a[1],l=Object(n.useState)(""),c=Object(ee.a)(l,2),s=c[0],h=c[1],u=function(){R(),i(!1),""!==s&&e.onChange(s,!0)};return Object(n.useEffect)((function(){e.show&&i(!0)}),[e.show]),o.a.createElement(o.a.Fragment,null,o.a.createElement(te.a,{show:r,centered:!0,dialogClassName:"black-modal-dialog",backdropClassName:"black-modal-backdrop"},o.a.createElement(te.a.Body,{bsPrefix:"black-modal-body"},o.a.createElement("label",{htmlFor:"name"},"Name your session")," ",o.a.createElement("br",null),o.a.createElement("input",{id:"name",type:"text",placeholder:e.name,value:s,onChange:function(e){return h(e.target.value)}}),o.a.createElement("span",{className:"hint"}," \u26a0 \u5b8c\u6574\u5448\u73fe\u4f5c\u54c1\uff0c\u8acb\u6253\u958b\u8072\u97f3\u53ca\u5b9a\u4f4d\u3002"),"           "),o.a.createElement(te.a.Footer,{bsPrefix:"black-modal-footer"},o.a.createElement(ae.a,{variant:"dark",size:"sm",onClick:u},"Default"),o.a.createElement(ae.a,{variant:"light",size:"sm",onClick:u},"Save"))))}function oe(e){var t=Object(n.useState)(e.show),a=Object(ee.a)(t,2),r=a[0],i=a[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement(ae.a,{onClick:function(){i(!0)},bsPrefix:"intro-button"},"i"),o.a.createElement(te.a,{show:r,onHide:function(){i(!1)},centered:!0,dialogClassName:"black-modal-dialog",backdropClassName:"black-modal-backdrop"},o.a.createElement(te.a.Header,{closeButton:!0,bsPrefix:"black-modal-header"}),o.a.createElement(te.a.Body,{bsPrefix:"black-modal-body"},o.a.createElement("h6",null,"\u8ddd\u96e2\u4e4b\u6b4c",o.a.createElement("br",null),o.a.createElement("span",{class:"eng-hint"},"Song of Distance")),o.a.createElement("br",null),o.a.createElement("p",null,"\u300c\u8ddd\u96e2\u4e4b\u6b4c\u300d\u662f\u4e00\u4ef6\u5c07\u4f7f\u7528\u8005\u5b9a\u4f4d\u8cc7\u6599\u8f49\u5316\u70ba\u6a02\u97f3\u7684\u751f\u6210\u5f0f\u97f3\u6a02\u7cfb\u7d71\u3002\u7cfb\u7d71\u5c07\u4e0d\u65b7\u6383\u63cf\u5468\u570d\u6240\u7684\u9023\u7dda\u88dd\u7f6e\uff0c\u540c\u6642\u4e5f\u5c07\u60a8\u7684\u88dd\u7f6e\u5ea7\u6a19\u63d0\u4f9b\u7d66\u5176\u4ed6\u88dd\u7f6e\u3002"))))}var re=a(57),ie=a.n(re);function le(e){var t=Object(n.useState)(e.show),a=Object(ee.a)(t,2),r=a[0],i=a[1],l=Object(n.useState)((function(){var e=navigator.userAgent||navigator.vendor||window.opera;return/android|windows phone/i.test(e)?0:/iPad|iPhone|iPod/.test(e)&&!window.MSStream?1:2})),c=Object(ee.a)(l,1)[0];return Object(n.useEffect)((function(){i(e.show)}),[e.show]),o.a.createElement(o.a.Fragment,null,o.a.createElement(te.a,{show:r,centered:!0,dialogClassName:"black-modal-dialog",backdropClassName:"black-modal-backdrop"},o.a.createElement(te.a.Header,{bsPrefix:"black-modal-header"}),o.a.createElement(te.a.Body,{bsPrefix:"black-modal-body"},o.a.createElement("h6",null,o.a.createElement("span",{className:"zh-tw-hint"},"\u70ba\u4e86\u4f5c\u54c1\u7684\u5b8c\u6574\u5448\u73fe\uff0c\u8acb\u5141\u8a31\u4f7f\u7528\u5b9a\u4f4d\u529f\u80fd"),o.a.createElement("span",{className:"eng-hint"},"Enable location permission for the best experience.")),0===c&&o.a.createElement(ce,null),1===c&&o.a.createElement(he,null))))}function ce(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("ol",null,o.a.createElement("li",null,o.a.createElement("span",{class:"zh-tw-hint"},"\u958b\u555f",o.a.createElement("img",{src:ie.a,alt:"Settings"}),"\u300c\u8a2d\u5b9a\u300d\u61c9\u7528\u7a0b\u5f0f\u3002"),o.a.createElement("span",{class:"eng-hint"},'Open the "Settings" app')),o.a.createElement("li",null,o.a.createElement("span",{class:"zh-tw-hint"},"\u9ede\u9078\u4f7f\u7528\u7684\u700f\u89bd\u5668\u3002"),o.a.createElement("span",{class:"eng-hint"},' Find and tap "Safari" or "Chrome"')),o.a.createElement("li",null,o.a.createElement("span",{class:"zh-tw-hint"},"\u8f15\u89f8\u300c\u4f4d\u7f6e\u300d\u3002"),o.a.createElement("span",{class:"eng-hint"},'Tap "Location"')),o.a.createElement("li",null,o.a.createElement("span",{class:"zh-tw-hint"},"\u9078\u64c7\u300c\u4f7f\u7528 App \u671f\u9593\u300d\u3002"),o.a.createElement("span",{class:"eng-hint"},'Select "While Using the App'))))}var se={color:"gray",fontWeight:"bolder"};function he(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement("ol",null,o.a.createElement("li",null,o.a.createElement("span",{class:"zh-tw-hint"},"\u958b\u555fChrome\u61c9\u7528\u7a0b\u5f0f\u3002"),o.a.createElement("span",{class:"eng-hint"},'Open the "Chrome" app.')),o.a.createElement("li",null,o.a.createElement("span",{class:"zh-tw-hint"},"\u9ede\u9078\u300c\u8a2d\u5b9a\u300d\u3002"),o.a.createElement("span",{class:"eng-hint"},' Find and tap "Settings"')),o.a.createElement("li",null,o.a.createElement("span",{class:"zh-tw-hint"},"\u8f15\u89f8\u300c\u7db2\u7ad9\u8a2d\u5b9a\u300d",o.a.createElement("span",{style:se},">"),"\u300c\u5b9a\u4f4d\u300d\u3002"),o.a.createElement("span",{class:"eng-hint"},'Tap "Site settings" ',o.a.createElement("span",{style:se},">"),' "Location"')),o.a.createElement("li",null,o.a.createElement("span",{class:"zh-tw-hint"},"\u5c07\u5b9a\u4f4d\u958b\u555f\u3002"),o.a.createElement("span",{class:"eng-hint"},"Turn Location on"))))}function ue(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function de(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ue(a,!0).forEach((function(t){Object(d.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ue(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var pe="generative_geo_id",me="generative_name",ge="generative_geo_id_time",fe=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).state={gp:{},gpsPermission:null,dataPoint:[]},a.gpsPermit=function(e){a.setState({gpsPermission:e})},a.initGPS=function(){},a.updateDataSet=function(e){console.log("updateDataset"),a.setState({dataPoint:Object.entries(e).filter((function(e){return e[0]!==Q.key})).map((function(e){return de({},e[1],{key:e[0]})}))})},a.checkData=function(e){Object.entries(e).forEach((function(e){("key"in e[1]||V.child(e[0]).child("key").set(e[0]),"showId"in e[1]||!e[0]||V.child(e[0]).child("showId").set(ve(e[0])),e[1].timeStamp&&e[1].lat&&e[1].lon)?Date.now()-e[1].timeStamp>6e3?e[1].leave||V.child(e[0]).child("leave").set(!0):e[1].leave&&V.child(e[0]).child("leave").set(!1):V.child(e[0]).remove()}))},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log("setupGPS"),function(e){X=e,console.log("setup gps");navigator.geolocation.watchPosition(Z,$)}(this.gpsPermit),V.on("value",(function(t){e.updateDataSet(t.val())}))}},{key:"render",value:function(){var e=this.state.gpsPermission;return o.a.createElement(o.a.Fragment,null,o.a.createElement(le,{show:!1===e}),o.a.createElement(oe,{show:!1}),e&&o.a.createElement(be,{dataPoint:this.state.dataPoint}))}}]),t}(n.Component),be=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).state={data:{globalScale:5e6,globalPow:.45,maxLineLength:100,radioSpeed:.25*Math.PI,lat:Q.lat,lon:Q.lon,centerName:"center"},name:"center",naming:!1},a.addGPSKey=function(){var e,t=localStorage.getItem(pe),n=localStorage.getItem(ge),o=localStorage.getItem(me);t&&Date.now()-n<36e5?(console.log("Old Id Detected! use "+t),e=t,localStorage.setItem(ge,Date.now())):(e=V.push(Q).key,o=ve(e),console.log("Generate new id "+e),localStorage.setItem(pe,e),localStorage.setItem(ge,Date.now())),Q.key=e,console.log(Q.key),o||(o=ve(e)),Q.showId=o,V.child(e).set(Q),a.changeCenterName(o,!1)},a.changeCenterName=function(e,t){localStorage.setItem(me,e),t&&Q.key&&V.child(Q.key).child("showId").set(e),a.setState({data:de({},a.state.data,{centerName:e}),name:e})},a.saveControlData=function(){var e=a.state.data;sessionStorage.setItem("controlData",JSON.stringify(de({},e)))},a.handleWindowBeforeUnload=function(e){V.child(Q.key).child("leave").set(!0)},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("beforeunload",this.handleWindowBeforeUnload),this.addGPSKey(),this.setState({naming:!0})}},{key:"componentWillUnmount",value:function(){window.removeEventListener("beforeunload",this.handleWindowBeforeUnload)}},{key:"render",value:function(){var e=this.state.data,t=this.props.dataPoint;return o.a.createElement(o.a.Fragment,null,o.a.createElement(ne,{show:this.state.naming,name:e.centerName,onChange:this.changeCenterName}),o.a.createElement(m.a,{sketch:U,dataPoint:t,configData:e,myId:Q.key}))}}]),t}(n.Component),ve=function(e){return"A"+e.split("").map((function(e){return e.charCodeAt(0)})).reduce((function(e,t){return e*t}),1)%1e3},we=fe,ye=(a(109),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement(we,null)}}]),t}(o.a.Component));i.a.render(o.a.createElement(ye,null),document.getElementById("root"))},35:function(e,t,a){},36:function(e,t,a){e.exports=a.p+"static/media/C3_mid_long_44.1k.07d4d97c.mp3"},54:function(e,t,a){e.exports=a.p+"static/media/C2_low_short_44.1k.9d4cbcaa.mp3"},57:function(e,t,a){e.exports=a.p+"static/media/Settings-icon.43d7547b.png"},58:function(e,t,a){e.exports=a(110)},63:function(e,t,a){},93:function(e,t){}},[[58,1,2]]]);
//# sourceMappingURL=main.b93fe39a.chunk.js.map