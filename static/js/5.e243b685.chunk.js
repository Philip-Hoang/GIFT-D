(this.webpackJsonpgiftd=this.webpackJsonpgiftd||[]).push([[5],{48:function(e,t,a){e.exports=a.p+"static/media/giftboxes1.e8cfd951.svg"},49:function(e,t,a){e.exports=a.p+"static/media/giftboxes2.4e17ecba.svg"},50:function(e,t,a){e.exports=a.p+"static/media/giftboxes3.a3322fff.svg"},51:function(e,t,a){e.exports=a.p+"static/media/giftboxes4.34eba651.svg"},52:function(e,t,a){e.exports=a.p+"static/media/giftboxes5.2df0fc6f.svg"},53:function(e,t,a){e.exports=a.p+"static/media/giftboxes6.a5d1c4bb.svg"},54:function(e,t,a){e.exports=a.p+"static/media/giftboxes7.5eb40a88.svg"},55:function(e,t,a){e.exports=a.p+"static/media/giftboxes8.b183588d.svg"},56:function(e,t,a){e.exports=a.p+"static/media/giftboxes9.e994acb6.svg"},57:function(e,t,a){},78:function(e,t,a){"use strict";a.r(t);var n=a(76),s=a(7),o=a(8),i=a(10),r=a(9),c=a(0),l=a.n(c),u=a(48),g=a.n(u),f=a(49),m=a.n(f),d=a(50),h=a.n(d),p=a(51),b=a.n(p),v=a(52),k=a.n(v),y=a(53),x=a.n(y),E=a(54),w=a.n(E),C=a(55),N=a.n(C),S=a(56),I=a.n(S);var Q=function(e){var t=function(e){return e.choices.map((function(t){return"Min"===t||"Max"===t?l.a.createElement(l.a.Fragment,{key:Math.random()*e.keyIndex},l.a.createElement("form",{key:Math.random()*e.keyIndex},l.a.createElement("div",{className:"form-group col"},l.a.createElement("label",{className:"gift-button"},t),l.a.createElement("input",{className:"form-control",onChange:e.onHandleChange,type:"number",name:t.toLowerCase()})),"Min"===t?l.a.createElement("h3",null,l.a.createElement("button",{className:"badge badge-pill badge-light border border-dark gift-button",onClick:e.nextQuestion},"Next")):null)):1===e.keyIndex?l.a.createElement("h3",{className:"mb-4",key:Math.random()*e.keyIndex},l.a.createElement("button",{className:"badge badge-pill badge-light border border-dark gift-button-inverse",onClick:e.nextQuestion,name:e.choiceState,value:t},t)):l.a.createElement("h3",{className:"mb-4",key:Math.random()*e.keyIndex},l.a.createElement("button",{className:"badge badge-pill badge-light border border-dark gift-button",onClick:e.nextQuestion,name:e.choiceState,value:t},t))}))}(e);return l.a.createElement("div",{key:Math.random()*e.keyIndex},l.a.createElement("div",{className:"col"},l.a.createElement("h1",{className:"gift-header1"},e.header1),l.a.createElement("h3",{className:"gift-header3"},e.header3),l.a.createElement("p",{className:"gift-paragraph"},e.question),l.a.createElement("div",{className:"form-row"},t),1!==e.keyIndex?l.a.createElement("h3",null,l.a.createElement("button",{className:"badge badge-pill badge-light border border-dark gift-button",onClick:e.previousQuestion},"Back")):null))};a(57);var T=function(e){return l.a.createElement(l.a.Fragment,{key:Math.random()*e.keyIndex},l.a.createElement("div",{className:"card bg-white text-dark product-card ",onClick:e.openLink},l.a.createElement("img",{className:"card-img product-image",src:e.image,alt:"product"}),l.a.createElement("h5",{className:"card-title text-overflow"},e.title),l.a.createElement("p",{className:"card-text"},e.price)))},j=a(58),O=a.n(j);var M=function(e){Object(i.a)(a,e);var t=Object(r.a)(a);function a(e){var o;return Object(s.a)(this,a),(o=t.call(this,e)).setImage=function(){switch(o.state.page){case 1:o.setState((function(e){var t=Object(n.a)({},e);return t.statusImage=g.a,t}));break;case 2:o.setState((function(e){var t=Object(n.a)({},e);return t.statusImage=m.a,t}));break;case 3:o.setState((function(e){var t=Object(n.a)({},e);return t.statusImage=h.a,t}));break;case 4:o.setState((function(e){var t=Object(n.a)({},e);return t.statusImage=b.a,t}));break;case 5:o.setState((function(e){var t=Object(n.a)({},e);return t.statusImage=k.a,t}));break;case 6:o.setState((function(e){var t=Object(n.a)({},e);return t.statusImage=x.a,t}));break;case 7:o.setState((function(e){var t=Object(n.a)({},e);return t.statusImage=w.a,t}));break;case 8:o.setState((function(e){var t=Object(n.a)({},e);return t.statusImage=N.a,t}));break;case 9:o.setState((function(e){var t=Object(n.a)({},e);return t.statusImage=I.a,t}))}},o.generateQuestion=function(e){var t="",a="",n="",s="",i="";switch(e){case 1:t="Lighthearted Gifts for People You Just Don't Know That Well...",a="",n="Secret Santa, White Elephant, work anniversaries? We know how stressful it is to pick gifts for your co-workers and acquaintances. We make it easier by providing curated gift options or customizable gift cards",s=["Let's Get Started!"],o.generateQuestionComponent(t,a,n,s,i);break;case 2:t="What kind of gift would you like to give?",a="",n="",s=["Gift","Gift Card"],o.generateQuestionComponent(t,a,n,s,i);break;case 3:t="Let's find that perfect gift!",a="Tell us a little about what kind of gift you would like to give.",n="Are you looking for:",s=["Something Fun","Something Practical","Both"],i="lookingFor",o.generateQuestionComponent(t,a,n,s,i);break;case 4:t="Let's find that perfect gift!",a="Tell us a little about who your fun gift is for.",n="The gift is for someone who is:",s=["Baby","Toddler","Child","Teenager","20-29","30-39","40-49","50-59","60-69","70-79","80+"],i="age",o.generateQuestionComponent(t,a,n,s,i);break;case 5:t="Let's find that perfect gift!",a="Tell us a little about who your fun gift is for.",n="The gift is for a ".concat(o.state.gift.age," year old:"),s=["Man","Woman","Gender Neutral"],i="gender",o.generateQuestionComponent(t,a,n,s,i);break;case 6:t="Let's find that perfect gift!",a="Tell us a little about who your fun gift is for.",n="The gift is for a ".concat(o.state.gift.age," year old ").concat(o.state.gift.gender," who loves:"),s=["Art","Books","Cooking","Crafts","DIY","Fashion","Gadgets","Outdoors","Sports"],i="interest",o.generateQuestionComponent(t,a,n,s,i);break;case 7:t="Let's find that perfect gift!",a="Tell us who the ".concat(o.state.gift.age," year old ").concat(o.state.gift.gender," that loves ").concat(o.state.gift.interest," is."),n="The gift recipient is my:",s=["Acquaintance","Co-worker","N/A"],i="isMy",o.generateQuestionComponent(t,a,n,s,i);break;case 8:t="Let's find that perfect gift!",a="Tell us what this fun gift for my ".concat(o.state.gift.isMy," who is a ").concat(o.state.gift.age," year old ").concat(o.state.gift.gender," that loves ").concat(o.state.gift.interest," is for."),n="This gift is for:",s=["Anniversary","Birthday","Congraulations","Graduation","Hanukkah","Secret Santa","Just Because"],i="occasion",o.generateQuestionComponent(t,a,n,s,i);break;case 9:t="Let's find that perfect gift!",a="Tell us how much you want to spend on this fun ".concat(o.state.gift.occasion," gift for the ").concat(o.state.gift.age," year old ").concat(o.state.gift.gender," who loves ").concat(o.state.gift.interest),n="I want to spend:",s=["Min","Max"],i=["min","max"],o.generateQuestionComponent(t,a,n,s,i);break;case 10:t="We've searched high and low to find the perfect matches!",a="",n="See the results for ".concat(!!o.state.gift.lookingFor&&"fun"," ").concat(o.state.gift.occasion," gifts for the ").concat(o.state.gift.age," year old ").concat(o.state.gift.gender," who loves ").concat(o.state.gift.interest," that cost between ").concat(o.state.gift.min," - ").concat(o.state.gift.max,"!"),s=["Save Results"],o.generateQuestionComponent(t,a,n,s,i)}},o.nextQuestion=function(e){e.preventDefault();var t=e.target.name,a=e.target.value;o.setState((function(e){var s=Object(n.a)({},e);return s.page=o.state.page+1,t&&(s.gift[t]=a),s}),(function(){o.generateQuestion(o.state.page),o.setImage(),o.getGiftResults()}))},o.previousQuestion=function(){o.setState((function(e){var t=Object(n.a)({},e);return t.page=o.state.page-1,t}),(function(){o.generateQuestion(o.state.page),o.setImage()}))},o.generateQuestionComponent=function(e,t,a,s,i){var r=l.a.createElement(Q,{header1:e,header3:t,question:a,choices:s,choiceState:i,nextQuestion:o.nextQuestion,previousQuestion:o.previousQuestion,keyIndex:o.state.page,onHandleChange:o.onHandleChange});o.setState((function(e){var t=Object(n.a)({},e);return t.questionComponent=r,t}))},o.onHandleChange=function(e){var t=e.target.name,a=e.target.value;console.log(t,a),console.log(e.target.value),o.setState((function(e){var s=Object(n.a)({},e);return s.gift[t]=a,s}))},o.getGiftResults=function(){if(10===o.state.page){return O()({method:"GET",url:"https://cors-anywhere.herokuapp.com/https://openapi.etsy.com/v2/listings/active?api_key=19ho4058q7dgjz56jaqbqpuq&limit=30&includes=Images"}).then(o.getGiftResultsSuccess)}},o.getGiftResultsSuccess=function(e){var t=e.data.results;console.log(t[0].title,t[0].url,t[0].price),o.generateProductCards(t)},o.generateProductCards=function(e){var t=e.map(o.mappedGifts);o.setState((function(e){var a=Object(n.a)({},e);return a.topTrendingResults=t.slice(0,6),a.allResults=t.slice(6,30),a}))},o.mappedGifts=function(e){var t=!(!e||!e.Images[0])&&e.Images[0].url_fullxfull,a=e.title,n=e.url,s=e.price;return l.a.createElement(T,{image:t,title:a,link:n,price:s,openLink:function(){window.open(n,"_blank")},key:Math.random()*o.state.page})},o.state={statusImage:g.a,page:1,questionComponent:null,gift:{lookingFor:" ",age:"",gender:"",interest:"",isMy:"",occasion:"",min:"",max:""},topTrendingResults:[],allResults:[]},o}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.generateQuestion(this.state.page),this.setImage()}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"col"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-4"},this.state.questionComponent?this.state.questionComponent:null),l.a.createElement("div",{className:"col-8"},l.a.createElement("img",{className:"float-right",src:this.state.statusImage,alt:"giftstatus"}))),10===this.state.page?l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"row"},l.a.createElement("h1",null,"Top Trending Results"),l.a.createElement("h1",null,"See More")),l.a.createElement("div",{className:"row"},this.state.topTrendingResults),l.a.createElement("div",{className:"row"},l.a.createElement("h1",null,"All Results")),l.a.createElement("div",{className:"row"},this.state.allResults)):null))}}]),a}(c.Component);t.default=M}}]);
//# sourceMappingURL=5.e243b685.chunk.js.map