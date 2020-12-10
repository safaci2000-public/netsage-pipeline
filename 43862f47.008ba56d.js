(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{119:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),i=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=i.a.createContext({}),c=function(e){var t=i.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=c(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},f=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(r),f=n,m=u["".concat(a,".").concat(f)]||u[f]||d[f]||o;return r?i.a.createElement(m,p(p({ref:t},s),{},{components:r})):i.a.createElement(m,p({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=f;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:n,a[1]=p;for(var s=2;s<o;s++)a[s]=r[s];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},74:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return p})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return c}));var n=r(2),i=r(6),o=(r(0),r(119)),a={id:"importer",title:"Importer",sidebar_label:"Importer"},p={unversionedId:"pipeline/importer",id:"version-1.2.7/pipeline/importer",isDocsHomePage:!1,title:"Importer",description:"RabbitMQ queue.",source:"@site/versioned_docs/version-1.2.7/pipeline/importer.md",slug:"/pipeline/importer",permalink:"/netsage-pipeline/docs/pipeline/importer",editUrl:"https://github.com/netsage-project/netsage-pipeline/edit/master/website/versioned_docs/version-1.2.7/pipeline/importer.md",version:"1.2.7",sidebar_label:"Importer",sidebar:"version-1.2.7/Pipeline",previous:{title:"Nfdump",permalink:"/netsage-pipeline/docs/pipeline/nfdump"},next:{title:"Logstash Pipeline",permalink:"/netsage-pipeline/docs/pipeline/logstash"}},l=[{value:"Configuration",id:"configuration",children:[]}],s={rightToc:l};function c(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,'A netsage-netflow-importer reads any new nfcapd files that have come in after a configurable delay and writes the results to the "netsage_deidentifier_raw" RabbitMQ queue.\nAll flow data waits in the queue until it is read in and processed by the logstash pipeline.'),Object(o.b)("p",null,'To read nfcapd files, the importer uses an nfdump command with the "-a" option to aggregate raw flows within the file by the "5-tuple," i.e., the source and destination IPs, ports, and protocol. The  "-L" option is used to throw out any aggregated flows below a threshold number of bytes. This threshold is specified in the importer config file. '),Object(o.b)("p",null,"NOTE: The importer will be deprecated in the future and replace with a logstash operation."),Object(o.b)("h3",{id:"configuration"},"Configuration"),Object(o.b)("p",null,"Configuration files for the importer are netsage_netflow_importer.xml and netsage_shared.xml in /etc/grnoc/netsage/deidentfier/. Comments in the files briefly describe the options. See also the Deployment pages in these docs."),Object(o.b)("p",null,"To avoid re-reading nfcapd files, the importer stores the names of files that have already been read in /var/cache/netsage/netflow_importer.cache. "))}c.isMDXComponent=!0}}]);