(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{76:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var o=n(2),r=n(6),a=(n(0),n(97)),i={id:"docker_install",title:"Docker Installation Guide",sidebar_label:"Docker Install"},l={unversionedId:"deploy/docker_install",id:"deploy/docker_install",isDocsHomePage:!1,title:"Docker Installation Guide",description:"The docker pattern is provided as much simpler and easier to use pattern that allows you to process and send data without having to deal with all",source:"@site/docs/deploy/docker_install.md",slug:"/deploy/docker_install",permalink:"/netsage-pipeline/docs/next/deploy/docker_install",editUrl:"https://github.com/netsage-project/netsage-pipeline/edit/master/website/docs/deploy/docker_install.md",version:"current",sidebar_label:"Docker Install",sidebar:"Pipeline",previous:{title:"NetSage Flow Processing Pipeline Install Guide",permalink:"/netsage-pipeline/docs/next/deploy/bare_metal_install"},next:{title:"Docker Default Installation Guide",permalink:"/netsage-pipeline/docs/next/deploy/docker_simple"}},c=[{value:"Nfdump",id:"nfdump",children:[{value:"External Nfdump",id:"external-nfdump",children:[]},{value:"Dockerized nfdump",id:"dockerized-nfdump",children:[]},{value:"Choose your Docker Adventure",id:"choose-your-docker-adventure",children:[]}]}],d={rightToc:c};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The docker pattern is provided as much simpler and easier to use pattern that allows you to process and send data without having to deal with all\nthe nuances of getting the pipeline setup."),Object(a.b)("p",null,"Before we start, you may have a read over the ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"../devel/docker"}),"developer docker guide")," it contains several notes such as how to select the docker version and likely other bits of information you may find useful."),Object(a.b)("h2",{id:"nfdump"},"Nfdump"),Object(a.b)("p",null,"Note that no matter if you use a localized version or take advantage of the docker container already built. You will need to configure your routers to send nfdump stats to the process collecting data on the host:port that you'll be defining."),Object(a.b)("p",null,"More info of nfdump can be found ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/phaag/nfdump/"}),"here")),Object(a.b)("h3",{id:"external-nfdump"},"External Nfdump"),Object(a.b)("p",null,"In this case you have nfdump running in your network somewhere and would like to keep on using it rather then relying on the container provided."),Object(a.b)("p",null,"You'll need to update your scripts to output to ",Object(a.b)("inlineCode",{parentName:"p"}," ")," ",Object(a.b)("inlineCode",{parentName:"p"},"$PROJECT/data/input_data")," ",Object(a.b)("inlineCode",{parentName:"p"}," ")," . Naturally all the paths are configurable but you'll have a much easier if you stick to the defaults."),Object(a.b)("p",null,"If you do choose to store the data elsewhere, the location may still need to be inside of the \\$PROJECT or a docker volume location in order for docker to be able to reference it."),Object(a.b)("p",null,"You will also need to configure your routers to point to the nfdump hostname and port in order for nfdump to collect data."),Object(a.b)("h3",{id:"dockerized-nfdump"},"Dockerized nfdump"),Object(a.b)("p",null,"We'll explore this in a later chapter. Depending on your use case please follow the simple or advanced docker guide."),Object(a.b)("h3",{id:"choose-your-docker-adventure"},"Choose your Docker Adventure"),Object(a.b)("p",null,"At this point, the instruction are going to diverge. To keep the documentation easier to understand we're going to split the advanced instruction into a different set."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"If you only need 1 collector of each type (netflow/sflow) at most, then the default adventure will work. Please click ",Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"/netsage-pipeline/docs/next/deploy/docker_simple"}),"here")," to continue"),Object(a.b)("li",{parentName:"ul"},"If you are an advanced user. You need more then 1 collector or just want an indepth understanding of the pipeline please click ",Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"/netsage-pipeline/docs/next/deploy/docker_advanced"}),"here")," to continue on your special adventure.")))}u.isMDXComponent=!0},97:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=r.a.createContext({}),u=function(e){var t=r.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},f=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=u(n),f=o,b=p["".concat(i,".").concat(f)]||p[f]||s[f]||a;return n?r.a.createElement(b,l(l({ref:t},d),{},{components:n})):r.a.createElement(b,l({ref:t},d))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var d=2;d<a;d++)i[d]=n[d];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);