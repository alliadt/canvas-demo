!function(t){var e={};function i(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},i.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i(i.s="sl1b")}({sl1b:function(t,e,i){"use strict";i.r(e);var n=i("ysz4");var r=class{constructor(t){this.moduleName=t,this.el=document.createElement("div"),this.isSignleModule=Object(n.b)(t)}renderToHtml(){this.isSignleModule&&this.el.classList.add("signle"),this.el.classList.add(this.moduleName),this.el.appendChild(this.canvas.el),document.body.appendChild(this.el),this.canvas.render()}aloneRender(){}collectRender(){}render(){return this.renderToHtml(),n.b?this.aloneRender():this.collectRender()}};var s=class{constructor(){this.el=document.createElement("canvas")}getContext(t,e){return this.el.getContext(t,e)}initCanvasSize(){this.el.width=this.width,this.el.height=this.height}};const a=500,o=500,h="24px sans-serif";var l=class extends s{constructor(t=a,e=o){super(),this.ctx=this.getContext("2d"),this.width=t,this.height=e,this.initVariable(),this.setCtxAttribute(),this.initCanvasSize(),this.ctx.translate(t/2,e/2)}initVariable(){this.radius=Math.min(this.width,this.height)/2*.8,this.centerRadius=10,this.marginBound=20,this.font=h,this.secondPointerLength=this.radius-this.marginBound,this.minutePointerLength=.8*this.secondPointerLength,this.hourPointerLength=.6*this.secondPointerLength}setCtxAttribute(){let{ctx:t}=this;t.fillStyle="#000000",t.strokeStyle="#000000",t.lineWidth=.5,t.font=this.font}drawDisc(t){t.beginPath(),t.arc(0,0,this.radius,0,2*Math.PI),t.stroke()}drawScale(t){let e,i=this.radius-this.marginBound,n=["1","2","3","4","5","6","7","8","9","10","11","12"];t.save(),t.textAlign="center",t.textBaseline="middle";for(let r=0,s=n.length;r<s;r++)e=Math.PI/6*(r-2),t.fillText(n[r],i*Math.cos(e),i*Math.sin(e));t.restore()}drawCenterArc(t){t.save(),t.fillStyle="red",t.beginPath(),t.arc(0,0,this.centerRadius,0,2*Math.PI,!1),t.closePath(),t.fill(),t.restore()}drawHourPointer(t,e){let i=Math.PI/6*(e-3);this.drawPointer(t,i,this.hourPointerLength)}drawMinutePointer(t,e){let i=Math.PI/30*(e-15);t.save(),t.fillStyle="#4286f4",t.strokeStyle="#4286f4",this.drawPointer(t,i,this.minutePointerLength),t.restore()}drawSecondPointer(t,e){let i=Math.PI/30*(e-15);t.save(),t.rotate(i),t.lineWidth=1,t.fillStyle="#ffffff",t.beginPath(),t.arc(0,0,.8*this.centerRadius,0,2*Math.PI),t.fill(),t.fillStyle="#e01619",t.beginPath(),t.arc(0,0,.6*this.centerRadius,0,2*Math.PI),t.fill(),t.strokeStyle="#a52729",t.beginPath(),t.moveTo(0,0),t.lineTo(this.secondPointerLength,0),t.stroke(),t.restore()}drawPointer(t,e,i){let n=45*Math.PI/180,r=this.centerRadius*Math.cos(n),s=this.centerRadius*Math.sin(n);t.save(),t.rotate(e),t.beginPath(),t.moveTo(r,-s),t.lineTo(i,0),t.lineTo(r,s),t.arc(0,0,this.centerRadius,n,2*Math.PI-n),t.closePath(),t.fill(),t.stroke(),t.restore()}render(){let{ctx:t,width:e,height:i}=this;t.clearRect(-e/2,-i/2,e,i);let n=new Date,r=n.getHours(),s=n.getMinutes(),a=n.getSeconds();this.drawDisc(t),this.drawCenterArc(t),this.drawScale(t),this.drawHourPointer(t,r),this.drawMinutePointer(t,s),this.drawSecondPointer(t,a),window.requestAnimationFrame(this.render.bind(this))}};i.d(e,"default",function(){return d});const c="clock";class d extends r{constructor(){super(c),this.canvas=new l}}Object(n.b)(c)&&(new d).render()},ysz4:function(t,e,i){"use strict";function n(){let t=window.location.search,e=Object.create(null);if(!t)return e;let i=/\?(\w+)=(\w+)/g,n=null;for(;n=i.exec(t);)e[n[1]]=n[2];return e}function r(t){let e=n();return e&&e.module===t}i.d(e,"a",function(){return n}),i.d(e,"b",function(){return r})}});
//# sourceMappingURL=clock.1526008222732.js.map