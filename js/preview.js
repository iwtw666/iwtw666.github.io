function previewSlider(a){this.container=document.querySelector(a.container),this.images=this.container.querySelectorAll(".slider-item"),this.wrapper=document.querySelector(".slider-wrapper"),this.left=document.querySelector(a.arrowLeft),this.right=document.querySelector(a.arrowRight),this.width=window.innerWidth,this.pos=0,this.scale=void 0===a.scale?.4:a.scale,this.scrollSpeed=void 0===a.scrollSpeed?4:a.scrollSpeed,this.content=void 0!==a.content&&a.content;const b=2e3;var c=this,d=0,f=!1;if(this.wrapper.style.transform="translate3d(0, 0, 0)",this.left.classList.add("hide"),!c.content)for(var g=0;g<this.images.length;g++){this.container.removeChild(this.images[g]);var e=document.createElement("div");e.classList.add("slider-item"),e.style.backgroundImage="url("+this.images[g].getAttribute("src")+")",this.wrapper.appendChild(e)}this.slideNext=function(a){c.pos<=-1*((c.images.length-1)*c.width)?(a.preventDefault(),this.right.classList.add("hide")):c.pos<=-1*((c.images.length-2)*c.width)?(c.pos-=c.width,c.wrapper.style.transform="translate3d("+c.pos+"px, 0, 0)",d++,c.leftPreview(),this.right.classList.add("hide")):(c.pos-=c.width,c.wrapper.style.transform="translate3d("+c.pos+"px, 0, 0)",d++,this.left.classList.remove("hide"),this.right.classList.remove("hide"),c.leftPreview(),c.rightPreview()),f=!1,c.right.classList.remove("show")},this.slidePrev=function(a){0===c.pos?(a.preventDefault(),this.left.classList.add("hide")):1===d?(c.pos+=c.width,c.wrapper.style.transform="translate3d("+c.pos+"px, 0, 0)",d--,this.left.classList.add("hide"),c.rightPreview()):(c.pos+=c.width,c.wrapper.style.transform="translate3d("+c.pos+"px, 0, 0)",d--,this.right.classList.remove("hide"),this.left.classList.remove("hide"),c.leftPreview(),c.rightPreview()),f=!1,c.left.classList.remove("show")},this.leftPreview=function(){if(0<d){var a=c.left.querySelector(".preview"),b=c.images[d-1].getAttribute("style").match(/url\(["']?([^"']*)["']?\)/)[1];a.setAttribute("style","background-image: url("+b+")")}},this.rightPreview=function(){if(d<c.images.length-1){var a=c.right.querySelector(".preview"),b=c.images[d+1].getAttribute("style").match(/url\(["']?([^"']*)["']?\)/)[1];a.setAttribute("style","background-image: url("+b+")")}},this.previewAnimate=function(a,d,e){d.classList.add("animate"),d.classList.add("show"),f=!0,"right"===e?(c.startCounting(p),setTimeout(function(){c.slideNext(a),d.classList.remove("animate")},b)):(c.startCounting(o),setTimeout(function(){c.slidePrev(a),d.classList.remove("animate")},b))},this.startCounting=function(a){var b=0,c=setInterval(function(){b++,a.innerHTML=b,100===b&&(clearInterval(c),a.innerHTML=0)},20)};var h=document.createElement("div"),j=document.createElement("div");h.innerHTML="<span>See all<br>slides</span>",j.innerHTML="<span>See all<br>slides</span>",h.classList.add("grid"),j.classList.add("grid"),this.left.appendChild(h),this.right.appendChild(j);var k=document.createElement("div"),l=document.createElement("div");k.classList.add("preview"),l.classList.add("preview"),this.left.appendChild(k),this.right.appendChild(l);var m=document.createElement("div"),n=document.createElement("div");m.innerHTML="Prev<br>Slide",n.innerHTML="Next<br>Slide",m.classList.add("arrow-link"),n.classList.add("arrow-link"),this.left.appendChild(m),this.right.appendChild(n);var o=document.createElement("div"),p=document.createElement("div");o.innerHTML="0",p.innerHTML="0",o.classList.add("counter"),p.classList.add("counter"),this.left.appendChild(o),this.right.appendChild(p),this.rightPreview(),l.addEventListener("click",function(a){c.previewAnimate(a,c.right,"right")}),k.addEventListener("click",function(a){c.previewAnimate(a,c.left,"left")}),this.right.addEventListener("mouseleave",function(){f||this.classList.remove("show")}),this.left.addEventListener("mouseleave",function(){f||this.classList.remove("show")});for(var q=document.querySelectorAll(".grid"),r=!0,s=null,t=null,g=0;g<q.length;g++)q[g].addEventListener("click",function(){f||(c.left.classList.add("hide"),c.right.classList.add("hide"),0===c.pos?c.wrapper.style.transformOrigin="0":c.pos/=10*c.scale,c.wrapper.style.transform="translate3d("+c.pos+"px, 0, 0) scale("+c.scale+")",c.wrapper.classList.add("zoom"),setTimeout(function(){function a(a){for(var b,d=c.wrapper,e=0,f=0;d.offsetParent;)e+=d.offsetLeft,f+=d.offsetTop,d=d.offsetParent;a?(b=a.pageX,ypos=a.pageY):(b=window.event.x+document.body.scrollLeft-2,ypos=window.event.y+document.body.scrollTop-2),b-=e,ypos-=f,b>=c.width-100?Math.abs(c.wrapper.getBoundingClientRect().left)!=c.images.length*c.width*c.scale-c.width&&(c.slideRight(r),r=!1):100>=b?0!=c.wrapper.getBoundingClientRect().left&&(c.slideLeft(r),r=!1):(clearInterval(s),clearInterval(t),r=!0)}c.wrapper.onmousemove=a},1e3))});this.slideRight=function(a){a&&c.wrapper.classList.contains("zoom")&&(c.wrapper.style.transition="none",s=setInterval(function(){c.pos-=c.scrollSpeed,c.wrapper.style.transform="translate3d("+c.pos+"px, 0, 0) scale("+c.scale+")",Math.abs(c.wrapper.getBoundingClientRect().left)===c.images.length*c.width*c.scale-c.width&&clearInterval(s)},1))},this.slideLeft=function(a){a&&c.wrapper.classList.contains("zoom")&&(c.wrapper.style.transition="none",t=setInterval(function(){c.pos+=c.scrollSpeed,c.wrapper.style.transform="translate3d("+c.pos+"px, 0, 0) scale("+c.scale+")",0===c.wrapper.getBoundingClientRect().left&&clearInterval(t)},1))};for(var g=0;g<this.images.length;g++)(function(a){c.images[g].addEventListener("click",function(){c.wrapper.classList.contains("zoom")&&(c.wrapper.style.transition="all 1s ease-in-out",c.wrapper.classList.remove("zoom"),c.pos=-1*(a*c.width),d=a,c.wrapper.style.transform="translate3d("+c.pos+"px, 0, 0)",0===a?c.right.classList.remove("hide"):a===c.images.length-1?c.left.classList.remove("hide"):(c.right.classList.remove("hide"),c.left.classList.remove("hide")),c.leftPreview(),c.rightPreview())})})(g)}