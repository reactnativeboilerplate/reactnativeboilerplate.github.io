(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{161:function(e,a,t){"use strict";t.r(a);t(211);var r=t(0),n=t.n(r),l=t(201),m=t(203),c=t(198);a.default=function(e){var a=e.metadata,t=e.items,r=a.allTagsPath,o=a.name,i=a.count;return n.a.createElement(l.a,{title:'Posts tagged "'+o+'"',description:'Blog | Tagged "'+o+'"'},n.a.createElement("div",{className:"container margin-vert--lg"},n.a.createElement("div",{className:"row"},n.a.createElement("main",{className:"col col--8 col--offset-2"},n.a.createElement("h1",null,i," ",function(e,a){return e>1?a+"s":a}(i,"post"),' tagged with "',o,'"'),n.a.createElement(c.a,{href:r},"View All Tags"),n.a.createElement("div",{className:"margin-vert--xl"},t.map((function(e){var a=e.content;return n.a.createElement(m.a,{key:a.metadata.permalink,frontMatter:a.frontMatter,metadata:a.metadata,truncated:!0},n.a.createElement(a,null))})))))))}},203:function(e,a,t){"use strict";t(76);var r=t(0),n=t.n(r),l=t(199),m=t(196),c=t(202),o=t(198),i=t(205),s=t(200),u=t(130),g=t.n(u),E=["January","February","March","April","May","June","July","August","September","October","November","December"];a.a=function(e){var a,t,r,u,d,h=e.children,p=e.frontMatter,v=e.metadata,f=e.truncated,b=e.isBlogPostPage,N=void 0!==b&&b,_=v.date,w=v.permalink,k=v.tags,y=v.readingTime,T=p.author,M=p.title,P=p.image,F=p.author_url||p.authorURL,J=p.author_title||p.authorTitle,I=p.author_image_url||p.authorImageURL,R=Object(s.a)(P,{absolute:!0});return n.a.createElement(n.a.Fragment,null,n.a.createElement(c.a,null,P&&n.a.createElement("meta",{property:"og:image",content:R}),P&&n.a.createElement("meta",{property:"twitter:image",content:R}),P&&n.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+M})),n.a.createElement("article",{className:N?void 0:"margin-bottom--xl"},(a=N?"h1":"h2",t=_.substring(0,10).split("-"),r=t[0],u=E[parseInt(t[1],10)-1],d=parseInt(t[2],10),n.a.createElement("header",null,n.a.createElement(a,{className:Object(l.a)("margin-bottom--sm",g.a.blogPostTitle)},N?M:n.a.createElement(o.a,{to:w},M)),n.a.createElement("div",{className:"margin-vert--md"},n.a.createElement("time",{dateTime:_,className:g.a.blogPostDate},u," ",d,", ",r," ",y&&n.a.createElement(n.a.Fragment,null," \xb7 ",Math.ceil(y)," min read"))),n.a.createElement("div",{className:"avatar margin-vert--md"},I&&n.a.createElement("a",{className:"avatar__photo-link avatar__photo",href:F,target:"_blank",rel:"noreferrer noopener"},n.a.createElement("img",{src:I,alt:T})),n.a.createElement("div",{className:"avatar__intro"},T&&n.a.createElement(n.a.Fragment,null,n.a.createElement("h4",{className:"avatar__name"},n.a.createElement("a",{href:F,target:"_blank",rel:"noreferrer noopener"},T)),n.a.createElement("small",{className:"avatar__subtitle"},J)))))),n.a.createElement("section",{className:"markdown"},n.a.createElement(m.a,{components:i.a},h)),(k.length>0||f)&&n.a.createElement("footer",{className:"row margin-vert--lg"},k.length>0&&n.a.createElement("div",{className:"col"},n.a.createElement("strong",null,"Tags:"),k.map((function(e){var a=e.label,t=e.permalink;return n.a.createElement(o.a,{key:t,className:"margin-horiz--sm",to:t},a)}))),f&&n.a.createElement("div",{className:"col text--right"},n.a.createElement(o.a,{to:v.permalink,"aria-label":"Read more about "+M},n.a.createElement("strong",null,"Read More"))))))}},211:function(e,a,t){var r=t(24).f,n=Function.prototype,l=/^\s*function ([^ (]*)/;"name"in n||t(10)&&r(n,"name",{configurable:!0,get:function(){try{return(""+this).match(l)[1]}catch(e){return""}}})}}]);