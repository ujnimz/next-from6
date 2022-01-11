"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[735],{7473:function(e,t,a){a.d(t,{Z:function(){return X}});var r=a(5893),n=a(7294),i=a(131),o=a(6513),s=a(6496),l=function(e){var t=e.title,a=e.tag,n=e.textColor,i=e.spanColor,o=e.controls,l=t.replace("[","<span class='font-bold ".concat(i,"'>")).replace("]","</span>"),c="".concat(a);return(0,r.jsx)(s.E.div,{className:"text-center max-w-3xl",variants:{hidden:{opacity:0,y:50,transition:{duration:.5,ease:"easeOut"}},visible:{opacity:1,y:0,transition:{duration:.5,ease:"easeOut"}}},initial:"hidden",animate:o,children:(0,r.jsx)(c,{className:"text-4xl md:text-5xl font-light text-center leading-none md:leading-tight ".concat(n),children:(0,r.jsx)("span",{dangerouslySetInnerHTML:{__html:l}})})})};function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=[],r=!0,n=!1,i=void 0;try{for(var o,s=e[Symbol.iterator]();!(r=(o=s.next()).done)&&(a.push(o.value),!t||a.length!==t);r=!0);}catch(l){n=!0,i=l}finally{try{r||null==s.return||s.return()}finally{if(n)throw i}}return a}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var u=function(e){var t=e.title,a=e.tag,s=e.headingStyle,u=e.bgImage,d=c((0,i.YD)({threshold:.7}),2),f=d[0],h=d[1],x=(0,o._)();(0,n.useEffect)((function(){h&&x.start("visible")}),[x,h]);var b={tangerine:{bgColor:u.data?"bg-tangerine/70":"bg-tangerine",color:"text-charcoal",spanColor:"text-white"},charcoal:{bgColor:u.data?"bg-charcoal/70":"bg-charcoal",color:"text-white",spanColor:"text-tangerine"},atlantic:{bgColor:u.data?"bg-atlantic/70":"bg-atlantic",color:"text-white",spanColor:"text-charcoal"},lime:{bgColor:u.data?"bg-lime/70":"bg-lime",color:"text-white",spanColor:"text-charcoal"},white:{bgColor:u.data?"bg-white/70":"bg-base-100",color:"text-base-content",spanColor:"text-tangerine"},black:{bgColor:u.data?"bg-black/70":"bg-black",color:"text-tangerine",spanColor:"text-base-content"}};return(0,r.jsx)("div",{className:"bg-no-repeat bg-center bg-cover",style:u.data?{backgroundImage:"url(http://localhost:1337".concat(u.data.attributes.url,")")}:{},children:(0,r.jsx)("div",{ref:f,className:"flex justify-center py-12 lg:py-20 ".concat(b[s].bgColor),children:(0,r.jsx)("div",{className:"container flex justify-center px-6 lg:px-0",children:(0,r.jsx)(l,{title:t,tag:a,textColor:b[s].color,spanColor:b[s].spanColor,controls:x})})})})},d=a(7441),f=a(7856),h=a.n(f),x=function(e){var t=e.text,a=h().sanitize(d.TU.parse(t));return(0,r.jsx)("div",{className:"flex justify-center items-center max-w-7xl px-6 lg:px-6 py-2 first:pt-0 last:pb-0",children:(0,r.jsx)("div",{className:"text-center font-light text-xl leading-snug",dangerouslySetInnerHTML:{__html:a}})})},b=function(e){var t=e.paragraphs;return(0,r.jsx)("div",{className:"flex justify-center py-6 lg:py-10",children:(0,r.jsx)("div",{className:"container flex flex-col items-center px-6 lg:px-0",children:t.map((function(e,t){return(0,r.jsx)(x,{text:e.text},t)}))})})},m=a(1664),v=a(4087),g=a(4002),p=a(578),y=a(1435);function j(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=[],r=!0,n=!1,i=void 0;try{for(var o,s=e[Symbol.iterator]();!(r=(o=s.next()).done)&&(a.push(o.value),!t||a.length!==t);r=!0);}catch(l){n=!0,i=l}finally{try{r||null==s.return||s.return()}finally{if(n)throw i}}return a}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var w=function(e,t){var a=void 0===e?0:e,r=void 0===t?100:t;return Math.floor(Math.random()*(+r-+a))+ +a},N=function(e){var t=e.text,a=e.link,l=e.image,c=e.height,u=void 0===c?100:c,d=j((0,i.YD)({threshold:.5}),2),f=d[0],h=d[1],x=(0,o._)();(0,n.useEffect)((function(){h&&x.start("visible")}),[x,h]);var b=(0,n.useState)(null),N=b[0],k=b[1],C=(0,n.useState)(!1),E=C[0],O=C[1];(0,n.useEffect)((function(){return k(window.innerHeight),function(){k(null)}}),[]);var S=(0,v.M)().scrollY,I={damping:10,stiffness:50,mass:w(1,2)},T=(0,g.q)((0,p.H)(S,[350,N+S.current],[60,100]),I),B=t.replace("[","<span class='font-bold text-primary'>").replace("]","</span>"),H="http://localhost:1337".concat(l.data.attributes.url);return(0,r.jsx)("div",{children:(0,r.jsx)(s.E.div,{ref:f,className:"flex justify-center py-10 lg:py-14 bg-no-repeat bg-center bg-cover",style:{backgroundImage:"url(".concat(H,")")},variants:{hidden:{transition:{staggerChildren:.5,staggerDirection:-1}},visible:{transition:{staggerChildren:.5,staggerDirection:1}}},initial:"hidden",animate:x,children:(0,r.jsx)(s.E.div,{className:"container flex items-center",style:{height:u},variants:{hidden:{opacity:0,x:100,transition:{duration:.5,ease:"easeOut"}},visible:{opacity:1,x:0,transition:{duration:.5,ease:"easeOut"}}},children:(0,r.jsx)(m.default,{href:a,children:(0,r.jsx)("a",{className:"cursor-pointer",children:(0,r.jsxs)(s.E.div,{className:"bg-charcoal w-2/3 p-3 lg:p-10 notch-large",style:{y:T},initial:{y:0},onHoverStart:function(){return O(!0)},onHoverEnd:function(){return O(!1)},children:[(0,r.jsx)("div",{className:"mb-6",children:(0,r.jsx)("h3",{className:"text-secondary-content font-regular text-3xl",dangerouslySetInnerHTML:{__html:B}})}),(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)("span",{className:"text-secondary-content font-regular text-sm ",children:"Find out more"}),(0,r.jsx)(s.E.div,{className:"w-5 h-5 ml-5",variants:{nowOut:{x:0,transition:{duration:.5,ease:"easeOut"}},nowOn:{x:15,transition:{duration:.5,ease:"easeOut"}}},animate:E?"nowOn":"nowOut",children:(0,r.jsx)(y.Z,{})})]})]})})})},"content")})})},k=a(6529),C=(a(8998),a(5675)),E=function(e){var t=e.logo,a=(0,n.useState)(!1),i=a[0],o=a[1],l=t.image;return(0,r.jsx)(s.E.div,{className:"flex flex-col flex-1",onHoverStart:function(){return o(!0)},onHoverEnd:function(){return o(!1)},children:(0,r.jsx)("div",{className:"overflow-hidden",children:(0,r.jsx)(s.E.div,{animate:i?{scale:1.1}:{scale:1},transition:{duration:.5,ease:"easeInOut"},children:(0,r.jsx)(C.default,{className:"transition-grayscale ".concat(i?"grayscale-0":"grayscale"),layout:"responsive",src:"http://localhost:1337".concat(l.data.attributes.url),alt:l.data.attributes.alternativeText,height:l.data.attributes.height,width:l.data.attributes.width})})})})};function O(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=[],r=!0,n=!1,i=void 0;try{for(var o,s=e[Symbol.iterator]();!(r=(o=s.next()).done)&&(a.push(o.value),!t||a.length!==t);r=!0);}catch(l){n=!0,i=l}finally{try{r||null==s.return||s.return()}finally{if(n)throw i}}return a}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var S=function(e){var t=e.clientele,a=e.sliderType,l=O((0,i.YD)({threshold:.5}),2),c=l[0],u=l[1],d=(0,o._)();(0,n.useEffect)((function(){u&&d.start("visible")}),[d,u]);return(0,r.jsx)("div",{ref:c,className:"flex justify-center bg-accent-focus",children:(0,r.jsx)(s.E.div,{className:"container py-10 lg:py-14",variants:{hidden:{opacity:0,y:50,transition:{duration:.5,ease:"easeOut"}},visible:{opacity:1,y:0,transition:{duration:.5,ease:"easeOut"}}},initial:"hidden",animate:d,children:"carousel"===a?(0,r.jsx)(k.default,{containerClass:"flex justify-between w-full flex-wrap",itemClass:"flex overflow-hidden border-8 border-accent-focus",responsive:{superLargeDesktop:{breakpoint:{max:4e3,min:3e3},items:6},desktop:{breakpoint:{max:3e3,min:1024},items:5},tablet:{breakpoint:{max:1024,min:464},items:4},mobile:{breakpoint:{max:464,min:0},items:2}},autoPlaySpeed:2e3,removeArrowOnDeviceType:["tablet","mobile"],arrows:!1,showDots:!1,infinite:!0,autoPlay:!0,children:t.map((function(e,t){return(0,r.jsx)(E,{logo:e},t)}))}):(0,r.jsx)("div",{className:"flex justify-center flex-wrap",children:t.map((function(e,t){return(0,r.jsx)("div",{className:"w-1/6",children:(0,r.jsx)(E,{logo:e},t)},t)}))})})})},I=(a(8752),a(9657)),T=function(e){var t=e.solid,a=e.buttonLink,i=void 0===a?"/":a,o=e.title,l=void 0===o?"Button Text":o,c=e.buttonStyle,u=(0,n.useState)(!1),d=u[0],f=u[1];return(0,r.jsx)(m.default,{href:i,children:(0,r.jsx)("div",{className:"overflow-hidden",children:(0,r.jsxs)(s.E.a,{className:t?"relative cursor-pointer flex justify-between items-center w-full p-2 ".concat(c.bgColor," notch-small"):"relative cursor-pointer flex justify-between items-center w-full p-2 ".concat(c.outline,' border-l-2 border-t-2 border-r-2 before:content-[""] before:block before:absolute before:top-1 before:right-0 before:border-right-2 border-b-2 before:border-bottom-2 after:content-[""] after:block after:absolute after:-right-5 after:-bottom-5 after:h-9 after:w-9 ').concat(c.afterBg," after:border-2 ").concat(c.afterBorder," after:rotate-45"),onHoverStart:function(){return f(!0)},onHoverEnd:function(){return f(!1)},children:[(0,r.jsx)("span",{className:"".concat(c.color," text-xl font-bold leading-snug"),children:l}),(0,r.jsx)(s.E.div,{className:"flex w-5 h-5 mr-3",animate:d?{x:10,transition:{duration:.5,ease:"easeInOut"}}:{x:0,transition:{duration:.5,ease:"easeInOut"}},children:(0,r.jsx)(I.Z,{colorClass:c.color,icon:"next-arrow"})})]})})})};function B(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=[],r=!0,n=!1,i=void 0;try{for(var o,s=e[Symbol.iterator]();!(r=(o=s.next()).done)&&(a.push(o.value),!t||a.length!==t);r=!0);}catch(l){n=!0,i=l}finally{try{r||null==s.return||s.return()}finally{if(n)throw i}}return a}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var H=function(e){var t=e.text,a=e.leftIcon,l=e.rightIcon,c=e.buttonText,u=e.buttonLink,d=e.style,f=(e.isSolid,e.bgImage),h=B((0,i.YD)({threshold:.7}),2),x=h[0],b=h[1],m=(0,o._)();(0,n.useEffect)((function(){b&&m.start("visible")}),[m,b]);var v={hidden:{opacity:0,y:50,transition:{duration:.5,ease:"easeOut"}},visible:{opacity:1,y:0,transition:{duration:.5,ease:"easeOut"}}},g={tangerine:{bgColor:f.data?"bg-tangerine/70":"bg-tangerine",color:"text-charcoal",spanColor:"text-white",button:{color:f.data?"text-tangerine":"text-white",bgColor:f.data?"bg-white":"bg-tangerine",outline:"border-white",afterBg:"after:bg-tangerine",afterBorder:"after:border-white"}},charcoal:{bgColor:f.data?"bg-charcoal/70":"bg-charcoal",color:"text-white",spanColor:"text-tangerine",button:{color:f.data?"text-tangerine":"text-white",bgColor:f.data?"bg-white":"bg-charcoal",outline:"border-white",afterBg:"after:bg-charcoal",afterBorder:"after:border-white"}},atlantic:{bgColor:f.data?"bg-atlantic/70":"bg-atlantic",color:"text-white",spanColor:"text-charcoal",button:{color:f.data?"text-atlantic":"text-white",bgColor:f.data?"bg-white":"bg-atlantic",outline:"border-white",afterBg:"after:bg-atlantic",afterBorder:"after:border-white"}},lime:{bgColor:f.data?"bg-lime/70":"bg-lime",color:"text-white",spanColor:"text-charcoal",button:{color:f.data?"text-lime":"text-white",bgColor:f.data?"bg-white":"bg-lime",outline:"border-white",afterBg:"after:bg-lime",afterBorder:"after:border-white"}},white:{bgColor:f.data?"bg-base-100/70":"bg-base-100",color:"text-tangerine",spanColor:"text-base-content",button:{color:f.data?"text-white":"text-base-content",bgColor:f.data?"bg-charcoal":"bg-white",outline:"border-base-content",afterBg:"after:bg-base-100",afterBorder:"after:border-base-content"}},black:{bgColor:f.data?"bg-black/70":"bg-black",color:"text-tangerine",spanColor:"text-white",button:{color:f.data?"text-black":"text-white",bgColor:f.data?"bg-white":"bg-black",outline:"border-white",afterBg:"after:bg-black",afterBorder:"after:border-white"}}},p=t.replace("[","<span class='font-bold ".concat(g[d].spanColor,"'>")).replace("]","</span>");return(0,r.jsx)("div",{ref:x,children:(0,r.jsx)("div",{className:"bg-no-repeat bg-center bg-cover",style:f.data?{backgroundImage:"url(http://localhost:1337".concat(f.data.attributes.url,")")}:{},children:(0,r.jsx)("div",{className:"flex justify-center ".concat(g[d].bgColor),children:(0,r.jsxs)("div",{className:"container flex justify-around items-center flex-wrap py-10 lg:py-14",children:[(0,r.jsx)("div",{className:"flex justify-center w-full md:w-1/4",children:(0,r.jsx)("div",{className:"w-52 h-52 opacity-50 p-3",children:(0,r.jsx)(I.Z,{colorClass:g[d].spanColor,icon:a})})}),(0,r.jsxs)("div",{className:"flex flex-col items-center justify-between w-full md:w-2/4 py-5",children:[(0,r.jsx)(s.E.div,{className:"mb-10",variants:v,initial:"hidden",animate:m,children:(0,r.jsx)("h2",{className:"text-4xl font-light text-center max-w-2xl ".concat(g[d].color),dangerouslySetInnerHTML:{__html:p}})}),""!==c&&c?(0,r.jsx)(s.E.div,{className:"w-72",variants:v,initial:"hidden",animate:m,children:(0,r.jsx)(T,{title:c,buttonLink:u,buttonStyle:g[d].button,solid:f.data})}):null]}),(0,r.jsx)("div",{className:"flex justify-center w-full md:w-1/4",children:(0,r.jsx)("div",{className:"w-52 h-52 opacity-50 p-3",children:(0,r.jsx)(I.Z,{colorClass:g[d].spanColor,icon:l})})})]})})})})},_=function(e){var t=e.testimonial,a=(0,n.useState)(!1),i=a[0],o=a[1],l=t.attributes,c=l.message,u=l.name,d=l.jobTitle,f=l.company,h=l.avatar;return(0,r.jsxs)(s.E.div,{className:"flex justify-center items-center flex-col max-w-3xl",onHoverStart:function(){return o(!0)},onHoverEnd:function(){return o(!1)},children:[(0,r.jsx)("div",{className:"mb-4",children:(0,r.jsx)("p",{className:"font-light text-xl text-center",children:c})}),(0,r.jsx)(s.E.div,{className:"w-16 h-16 rounded-full",animate:i?{scale:1.1}:{scale:1},transition:{duration:.5,ease:"easeInOut"},children:(0,r.jsx)(C.default,{className:"rounded-full",src:"http://localhost:1337".concat(h.data.attributes.url),alt:h.data.attributes.alternativeText,layout:"responsive",height:h.data.attributes.height,width:h.data.attributes.width})}),(0,r.jsx)("div",{children:(0,r.jsx)("span",{className:"text-lg text-center",children:u})}),(0,r.jsx)("div",{className:"mb-2",children:(0,r.jsx)("span",{className:"text-sm text-center italic",children:d})}),(0,r.jsx)("div",{className:"h-0.5 w-5 bg-primary"}),(0,r.jsx)("div",{className:"mb-3",children:(0,r.jsx)("span",{className:"text-sm text-center",children:f})})]})};function D(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=[],r=!0,n=!1,i=void 0;try{for(var o,s=e[Symbol.iterator]();!(r=(o=s.next()).done)&&(a.push(o.value),!t||a.length!==t);r=!0);}catch(l){n=!0,i=l}finally{try{r||null==s.return||s.return()}finally{if(n)throw i}}return a}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var A=function(e){var t=e.testimonials.data,a=D((0,i.YD)({threshold:.5}),2),l=a[0],c=a[1],u=(0,o._)();return(0,n.useEffect)((function(){c&&u.start("visible")}),[u,c]),(0,r.jsx)("div",{ref:l,className:"flex justify-center",children:(0,r.jsx)(s.E.div,{className:"container py-10 lg:py-14",variants:{hidden:{opacity:0,y:50,transition:{duration:.5,ease:"easeOut"}},visible:{opacity:1,y:0,transition:{duration:.5,ease:"easeOut"}}},initial:"hidden",animate:u,children:(0,r.jsx)(k.default,{containerClass:"flex",itemClass:"flex justify-center items-stretch mb-3",responsive:{superLargeDesktop:{breakpoint:{max:4e3,min:3e3},items:1},desktop:{breakpoint:{max:3e3,min:1024},items:1},tablet:{breakpoint:{max:1024,min:464},items:1},mobile:{breakpoint:{max:464,min:0},items:1}},autoPlaySpeed:4e3,arrows:!1,showDots:!0,infinite:!0,autoPlay:!0,children:t.map((function(e,t){return(0,r.jsx)(_,{testimonial:e},t)}))})})})},Y=function(e){var t=e.service,a=(0,n.useState)(!1),i=a[0],o=a[1],l=t.attributes,c=l.title,u=l.slug,d=l.image;return(0,r.jsx)(m.default,{href:"/".concat(u),children:(0,r.jsxs)(s.E.a,{className:"flex flex-col cursor-pointer bg-secondary hover:bg-primary flex-1 notch-large transition-all duration-300 ease-in-out",onHoverStart:function(){return o(!0)},onHoverEnd:function(){return o(!1)},children:[(0,r.jsx)("div",{className:"overflow-hidden",children:(0,r.jsx)(s.E.div,{animate:i?{scale:1.1}:{scale:1},transition:{duration:.5,ease:"easeInOut"},children:(0,r.jsx)(C.default,{className:"block",src:"http://localhost:1337".concat(d.data.attributes.url),alt:d.data.attributes.alternativeText,layout:"responsive",height:d.data.attributes.height,width:d.data.attributes.width})})}),(0,r.jsxs)("div",{className:"flex items-center justify-between p-4 flex-1",children:[(0,r.jsx)("h3",{className:"text-secondary-content text-lg lg:text-xl",children:c}),(0,r.jsx)(s.E.div,{className:"flex w-5 h-5 mr-3",animate:i?{x:10,transition:{duration:.5,ease:"easeInOut"}}:{x:0,transition:{duration:.5,ease:"easeInOut"}},children:(0,r.jsx)(y.Z,{iconColorClass:i?"primary-content":"primary"})})]})]})})};function P(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=[],r=!0,n=!1,i=void 0;try{for(var o,s=e[Symbol.iterator]();!(r=(o=s.next()).done)&&(a.push(o.value),!t||a.length!==t);r=!0);}catch(l){n=!0,i=l}finally{try{r||null==s.return||s.return()}finally{if(n)throw i}}return a}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var L=function(e){var t=e.services,a=e.spacing,l=P((0,i.YD)({threshold:.5}),2),c=l[0],u=l[1],d=(0,o._)();(0,n.useEffect)((function(){u&&d.start("visible")}),[d,u]);return(0,r.jsx)("div",{ref:c,className:"flex justify-center",children:(0,r.jsx)(s.E.div,{className:"container ".concat("none"===a?"py-0 lg:py-0":"py-10 lg:py-14"),variants:{hidden:{opacity:0,y:50,transition:{duration:.5,ease:"easeOut"}},visible:{opacity:1,y:0,transition:{duration:.5,ease:"easeOut"}}},initial:"hidden",animate:d,children:(0,r.jsx)(k.default,{containerClass:"flex justify-between w-full flex-wrap",itemClass:"flex overflow-hidden border-8 p-1 border-base-100 mb-10",responsive:{superLargeDesktop:{breakpoint:{max:4e3,min:3e3},items:4},desktop:{breakpoint:{max:3e3,min:1024},items:4},tablet:{breakpoint:{max:1024,min:464},items:2},mobile:{breakpoint:{max:464,min:0},items:1}},autoPlaySpeed:4e3,removeArrowOnDeviceType:["tablet","mobile"],arrows:!1,showDots:!0,infinite:!0,autoPlay:!0,children:t.data.map((function(e,t){return(0,r.jsx)(Y,{service:e},t)}))})})})},M=function(e){var t=e.service,a=(0,n.useState)(!1),i=(a[0],a[1]),o=t.attributes,l=o.title,c=o.subServices.split("\n").map((function(e){return e.replace(/- /g,"")}));return(0,r.jsx)("div",{className:"flex overflow-hidden w-full md:w-1/2 lg:w-1/3 border-8 px-2 border-base-100 mb-4",children:(0,r.jsxs)(s.E.div,{className:"flex flex-col flex-1 transition-all duration-300 ease-in-out",onHoverStart:function(){return i(!0)},onHoverEnd:function(){return i(!1)},children:[(0,r.jsxs)("div",{className:"flex flex-col items-start justify-between pr-4",children:[(0,r.jsx)("h3",{className:"text-tangerine text-xl lg:text-2xl mb-4",children:l}),(0,r.jsx)("div",{className:"h-px w-full bg-accent"})]}),(0,r.jsx)("div",{className:"py-4",children:(0,r.jsx)("ul",{className:"list-inside list-disc",children:c.map((function(e,t){return(0,r.jsx)("li",{className:"list-item font-light text-xl leading-relaxed ",children:e},t)}))})})]})})};function Z(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=[],r=!0,n=!1,i=void 0;try{for(var o,s=e[Symbol.iterator]();!(r=(o=s.next()).done)&&(a.push(o.value),!t||a.length!==t);r=!0);}catch(l){n=!0,i=l}finally{try{r||null==s.return||s.return()}finally{if(n)throw i}}return a}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var F=function(e){var t=e.services,a=Z((0,i.YD)({threshold:.5}),2),l=a[0],c=a[1],u=(0,o._)();(0,n.useEffect)((function(){c&&u.start("visible")}),[u,c]);return(0,r.jsx)("div",{ref:l,className:"flex justify-center py-6 lg:py-10",children:(0,r.jsx)(s.E.div,{className:"container flex justify-center flex-wrap px-6 lg:px-0",variants:{hidden:{opacity:0,y:50,transition:{duration:.5,ease:"easeOut"}},visible:{opacity:1,y:0,transition:{duration:.5,ease:"easeOut"}}},initial:"hidden",animate:u,children:t.data.map((function(e,t){return(0,r.jsx)(M,{service:e},t)}))})})},q=function(e){var t=e.image.data.attributes,a=t.url,n=t.width,i=t.height,o=t.alternativeText,s=void 0===o?"image":o;return(0,r.jsx)(C.default,{layout:"responsive",src:"http://localhost:1337".concat(a),alt:s,height:i,width:n})};function z(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=[],r=!0,n=!1,i=void 0;try{for(var o,s=e[Symbol.iterator]();!(r=(o=s.next()).done)&&(a.push(o.value),!t||a.length!==t);r=!0);}catch(l){n=!0,i=l}finally{try{r||null==s.return||s.return()}finally{if(n)throw i}}return a}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var R=function(e){var t=e.image,a=e.animate,n=e.blockHeight,o=(0,v.M)().scrollY,l="left"===a||"right"===a?(0,p.H)(o,[0,1500],[0,"right"===a?250:-250]):0,c="up"===a||"down"===a?(0,p.H)(o,[0,1500],[0,"down"===a?250:-250]):0,u=z((0,i.YD)({threshold:0,triggerOnce:!1}),3),d=u[0];return u[1],u[2],(0,r.jsx)("div",{ref:d,style:{height:n},className:"flex justify-center items-center overflow-hidden my-6 lg:my-10",children:(0,r.jsx)("div",{className:"bg-accent",children:(0,r.jsx)(s.E.div,{className:"w-full block",style:{y:c,x:l,width:2500},children:(0,r.jsx)(q,{image:t})})})})},U=function(e){var t=e.member,a=(0,n.useState)(!1),i=a[0],o=a[1];return(0,r.jsx)("div",{className:"flex overflow-hidden w-full md:w-1/3 border-8 p-1 border-base-100 mb-3",children:(0,r.jsxs)(s.E.div,{className:"flex flex-col cursor-pointer flex-1 transition-all duration-300 ease-in-out",onHoverStart:function(){return o(!0)},onHoverEnd:function(){return o(!1)},children:[(0,r.jsxs)("div",{className:"relative overflow-hidden",children:[(0,r.jsx)(s.E.div,{className:"absolute top-0 left-0 h-full w-full",variants:{hidden:{opacity:0,transform:"rotateY(180deg)",transition:{duration:.3,ease:"easeOut"}},visible:{opacity:1,transform:"rotateY(0deg)",transition:{duration:.3,ease:"easeOut"}}},animate:i?"visible":"hidden",children:(0,r.jsx)(C.default,{layout:"responsive",src:"http://localhost:1337".concat(t.hoverImage.data.attributes.url),alt:t.hoverImage.data.attributes.alternativeText,height:t.hoverImage.data.attributes.height,width:t.hoverImage.data.attributes.width})}),(0,r.jsx)(s.E.div,{className:"",variants:{hidden:{opacity:0,transform:"rotateY(180deg)",transition:{duration:.3,ease:"easeOut"}},visible:{opacity:1,transform:"rotateY(0deg)",transition:{duration:.3,ease:"easeOut"}}},animate:i?"hidden":"visible",children:(0,r.jsx)(C.default,{layout:"responsive",src:"http://localhost:1337".concat(t.image.data.attributes.url),alt:t.image.data.attributes.alternativeText,height:t.image.data.attributes.height,width:t.image.data.attributes.width})})]}),(0,r.jsxs)("div",{className:"flex flex-col items-start justify-between flex-1 py-2",children:[(0,r.jsx)("h3",{className:"text-base-content text-lg lg:text-xl",children:t.name}),(0,r.jsx)("p",{className:"text-accent text-sm font-light",children:t.jobTitle})]})]})})};function W(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=[],r=!0,n=!1,i=void 0;try{for(var o,s=e[Symbol.iterator]();!(r=(o=s.next()).done)&&(a.push(o.value),!t||a.length!==t);r=!0);}catch(l){n=!0,i=l}finally{try{r||null==s.return||s.return()}finally{if(n)throw i}}return a}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var G=function(e){var t=e.members;console.log(t);var a=W((0,i.YD)({threshold:.5}),2),l=a[0],c=a[1],u=(0,o._)();(0,n.useEffect)((function(){c&&u.start("visible")}),[u,c]);return(0,r.jsx)("div",{ref:l,className:"flex justify-center py-10 lg:py-14",children:(0,r.jsx)(s.E.div,{className:"container flex justify-center flex-wrap",variants:{hidden:{opacity:0,y:50,transition:{duration:.5,ease:"easeOut"}},visible:{opacity:1,y:0,transition:{duration:.5,ease:"easeOut"}}},initial:"hidden",animate:u,children:t.map((function(e,t){return(0,r.jsx)(U,{member:e},t)}))})})};function J(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function K(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var Q=function(e,t){var a,n=e.__typename,i=K(e,["__typename"]);switch(n){case"ComponentBlocksHeading":a=u;break;case"ComponentBlocksTextBlock":a=b;break;case"ComponentBlocksFeaturedWork":a=N;break;case"ComponentBlocksClientele":a=S;break;case"ComponentBlocksFeaturedBox":a=H;break;case"ComponentBlocksRecentTestimonials":a=A;break;case"ComponentBlocksServicesSlider":a=L;break;case"ComponentBlocksServicesList":a=F;break;case"ComponentBlocksImage":a=R;break;case"ComponentBlocksMembers":a=G}return a?(0,r.jsx)(a,function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},r=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),r.forEach((function(t){J(e,t,a[t])}))}return e}({},i),"index-".concat(t)):null},V=function(e){var t=e.blocks;return(0,r.jsx)("div",{children:t.map(Q)})};V.defaultProps={blocks:[]};var X=V},1549:function(e,t,a){var r=a(5893),n=a(9008);t.Z=function(e){var t=e.seoMeta,a=t.metaTitle,i=void 0===a?"":a,o=t.metaDescription,s=void 0===o?"":o;return(0,r.jsxs)(n.default,{children:[(0,r.jsx)("title",{children:i}),(0,r.jsx)("meta",{name:"description",content:s}),(0,r.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"})]})}}}]);