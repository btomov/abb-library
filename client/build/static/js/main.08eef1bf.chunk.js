(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},40:function(e,t,a){e.exports=a(78)},48:function(e,t,a){},78:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(37),c=a.n(o),r=(a(48),a(17)),s=a(18),i=a(21),m=a(19),u=a(22),d=a(4),h=a(1),p=(a(14),a(13)),b=a(24),E=a(10),f=a(5),v=a.n(f);var g=function(e){var t=Object(n.useState)({title:"",author:"",description:"",image:null}),a=Object(E.a)(t,2),o=a[0],c=a[1],r=o.title,s=o.author,i=o.description,m=o.image,u=function(e){"image"===e.target.name?c(Object(b.a)({},o,{image:e.target.files[0]})):c(Object(b.a)({},o,Object(p.a)({},e.target.name,e.target.value)))};return l.a.createElement("div",{className:"CreateBook"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-8 m-auto"},l.a.createElement("br",null),l.a.createElement(d.b,{to:"/",className:"btn btn-outline-warning float-left"},"\u0412\u0441\u0438\u0447\u043a\u0438 \u043a\u043d\u0438\u0433\u0438")),l.a.createElement("div",{className:"col-md-8 m-auto"},l.a.createElement("h1",{className:"display-4 text-center"},"\u0414\u043e\u0431\u0430\u0432\u0438 \u043a\u043d\u0438\u0433\u0430"),l.a.createElement("form",{noValidate:!0,onSubmit:function(t){t.preventDefault();var a=new FormData;a.append("title",r),a.append("author",s),a.append("description",i),a.append("image",m),v.a.post("".concat("http://localhost:5000","/api/books"),a,{headers:{"Content-Type":"multipart/form-data"}}).then(function(t){c({title:"",author:"",description:"",image:null}),e.history.push("/")}).catch(function(e){console.log(e," err"),console.log("Error in CreateBook!")})}},l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"text",placeholder:"\u0417\u0430\u0433\u043b\u0430\u0432\u0438\u0435",name:"title",className:"form-control",value:r,onChange:u})),l.a.createElement("br",null),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"text",placeholder:"\u0410\u0432\u0442\u043e\u0440",name:"author",className:"form-control",value:s,onChange:u})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"text",placeholder:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",name:"description",className:"form-control",value:i,onChange:u})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"file",name:"image",onChange:u})),l.a.createElement("input",{type:"submit",className:"btn btn-outline-warning btn-block mt-4"}))))))},k=a(9),N=a.n(k),O=function(e){var t=e.book,a=N.a.get("access_token"),o=Object(n.useState)(""),c=Object(E.a)(o,2),r=c[0],s=c[1],i=Object(n.useState)(""),m=Object(E.a)(i,2),u=m[0],h=m[1];console.log(t);return l.a.createElement("div",{className:"card-container"},t.cover&&l.a.createElement("img",{src:t.cover,alt:"cover"}),l.a.createElement("div",{className:"desc"},l.a.createElement("h2",null,l.a.createElement(d.b,{to:"/show-book/".concat(t._id)},t.title)),l.a.createElement("h3",null,t.author),l.a.createElement("p",null,t.description),l.a.createElement("p",null,"\u0412\u0437\u0435\u0442\u0430 \u043e\u0442: ",t.takenBy),a&&l.a.createElement("form",null,l.a.createElement("input",{name:"takenBy",value:r,placeholder:"\u0412\u0437\u0435\u0442\u0430 \u043e\u0442 \u0438\u043c\u0435",onChange:function(e){return s(e.target.value)}}),l.a.createElement("button",{onClick:function(e){e.preventDefault(),v.a.post("".concat("http://localhost:5000","/api/books/takeBook"),{bookId:t._id,takerName:r}).then(function(e){console.log(e.data)}).catch(function(e){console.log(e)})}},"\u0418\u0437\u043f\u0440\u0430\u0442\u0438")),l.a.createElement("form",null,l.a.createElement("input",{name:"takenBy",value:u,placeholder:"\u0418\u043c\u0435 \u0437\u0430 \u0440\u0435\u0437\u0435\u0440\u0432\u0430\u0446\u0438\u044f",onChange:function(e){return h(e.target.value)}}),l.a.createElement("button",{onClick:function(e){e.preventDefault(),v.a.post("".concat("http://localhost:5000","/api/books/reserve"),{bookId:t._id,reserveeName:u}).then(function(e){console.log(e.data)}).catch(function(e){console.log(e)})}},"\u0418\u0437\u043f\u0440\u0430\u0442\u0438"))))},w=function(){var e,t=Object(n.useState)([]),a=Object(E.a)(t,2),o=a[0],c=a[1],r=N.a.get("access_token");return Object(n.useEffect)(function(){v.a.get("".concat("http://localhost:5000","/api/books"),{headers:{Authorization:"Bearer ".concat(N.a.get("token"))}}).then(function(e){c(e.data)}).catch(function(e){console.log("Error from ShowBookList")})},[]),console.log("PrintBook: "+o),e=o?o.map(function(e,t){return l.a.createElement(O,{book:e,key:t})}):"there is no book record!",l.a.createElement("div",{className:"ShowBookList"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement("br",null),l.a.createElement("h2",{className:"display-4 text-center"},"\u0411\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0430")),r&&l.a.createElement("div",{className:"col-md-11"},l.a.createElement(d.b,{to:"/create-book",className:"btn btn-outline-warning float-right"},"+ \u0414\u043e\u0431\u0430\u0432\u0438 \u043d\u043e\u0432\u0430 \u043a\u043d\u0438\u0433\u0430"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("hr",null))),l.a.createElement("div",{className:"list"},e)))},C=function(e){var t=Object(n.useState)({}),a=Object(E.a)(t,2),o=a[0],c=a[1],r=N.a.get("access_token");Object(n.useEffect)(function(){v.a.get("".concat("http://localhost:5000","/api/books/").concat(e.match.params.id)).then(function(e){c(e.data)}).catch(function(e){console.log("Error from ShowBookDetails")})},[e.match.params.id]);var s=l.a.createElement("div",null,l.a.createElement("table",{className:"table table-hover table-dark"},l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"1"),l.a.createElement("td",null,"\u0417\u0430\u0433\u043b\u0430\u0432\u0438\u0435"),l.a.createElement("td",null,o.title)),l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"2"),l.a.createElement("td",null,"\u0410\u0432\u0442\u043e\u0440"),l.a.createElement("td",null,o.author)),l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"5"),l.a.createElement("td",null,"Published Date"),l.a.createElement("td",null,o.published_date)),l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"6"),l.a.createElement("td",null,"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"),l.a.createElement("td",null,o.description)),l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"6"),l.a.createElement("td",null,"\u0412\u0437\u0435\u0442\u0430 \u043e\u0442: //TODO"),l.a.createElement("td",null,o.description)),l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"6"),l.a.createElement("td",null,"\u0421\u043b\u0435\u0434\u0432\u0430\u0449\u0430 \u0440\u0435\u0437\u0435\u0440\u0432\u0430\u0446\u0438\u044f \u043e\u0442: //TODO"),l.a.createElement("td",null,o.description)))));return l.a.createElement("div",{className:"ShowBookDetails"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-10 m-auto"},l.a.createElement("br",null)," ",l.a.createElement("br",null),l.a.createElement(d.b,{to:"/",className:"btn btn-outline-warning float-left"},"\u0412\u0441\u0438\u0447\u043a\u0438 \u043a\u043d\u0438\u0433\u0438")),l.a.createElement("br",null),l.a.createElement("div",{className:"col-md-8 m-auto"},l.a.createElement("h1",{className:"display-4 text-center"},o.title),l.a.createElement("hr",null)," ",l.a.createElement("br",null))),l.a.createElement("div",null,s),r&&l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6"},l.a.createElement("button",{type:"button",className:"btn btn-outline-danger btn-lg btn-block",onClick:function(){return t=o._id,void v.a.delete("".concat("http://localhost:5000","/api/books/").concat(t)).then(function(t){e.history.push("/")}).catch(function(e){console.log("Error form ShowBookDetails_deleteClick")});var t}},"\u0418\u0437\u0442\u0440\u0438\u0432\u0430\u043d\u0435"),l.a.createElement("br",null)),l.a.createElement("div",{className:"col-md-6"},l.a.createElement(d.b,{to:"/edit-book/".concat(o._id),className:"btn btn-outline-info btn-lg btn-block"},"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u0430\u043d\u0435"),l.a.createElement("br",null)))))},y=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).onChange=function(e){a.setState(Object(p.a)({},e.target.name,e.target.value))},a.onSubmit=function(e){e.preventDefault();var t={title:a.state.title,isbn:a.state.isbn,author:a.state.author,description:a.state.description,published_date:a.state.published_date,publisher:a.state.publisher};v.a.put("".concat("http://localhost:5000","/api/books/")+a.props.match.params.id,t).then(function(e){a.props.history.push("/show-book/"+a.props.match.params.id)}).catch(function(e){console.log("Error in UpdateBookInfo!")})},a.state={title:"",isbn:"",author:"",description:"",published_date:"",publisher:""},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;v.a.get("".concat("http://localhost:5000","/api/books/")+this.props.match.params.id).then(function(t){e.setState({title:t.data.title,isbn:t.data.isbn,author:t.data.author,description:t.data.description,published_date:t.data.published_date,publisher:t.data.publisher})}).catch(function(e){console.log("Error from UpdateBookInfo")})}},{key:"render",value:function(){return l.a.createElement("div",{className:"UpdateBookInfo"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-8 m-auto"},l.a.createElement("br",null),l.a.createElement(d.b,{to:"/",className:"btn btn-outline-warning float-left"},"\u0412\u0441\u0438\u0447\u043a\u0438 \u043a\u043d\u0438\u0433\u0438")),l.a.createElement("div",{className:"col-md-8 m-auto"},l.a.createElement("h1",{className:"display-4 text-center"},"Edit Book"),l.a.createElement("p",{className:"lead text-center"},"Update Book's Info"))),l.a.createElement("div",{className:"col-md-8 m-auto"},l.a.createElement("form",{noValidate:!0,onSubmit:this.onSubmit},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"title"},"Title"),l.a.createElement("input",{type:"text",placeholder:"Title of the Book",name:"title",className:"form-control",value:this.state.title,onChange:this.onChange})),l.a.createElement("br",null),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"isbn"},"ISBN"),l.a.createElement("input",{type:"text",placeholder:"ISBN",name:"isbn",className:"form-control",value:this.state.isbn,onChange:this.onChange})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"author"},"Author"),l.a.createElement("input",{type:"text",placeholder:"Author",name:"author",className:"form-control",value:this.state.author,onChange:this.onChange})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"description"},"Description"),l.a.createElement("input",{type:"text",placeholder:"Describe this book",name:"description",className:"form-control",value:this.state.description,onChange:this.onChange})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"published_date"},"Published Date"),l.a.createElement("input",{type:"date",placeholder:"published_date",name:"published_date",className:"form-control",value:this.state.published_date,onChange:this.onChange})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"publisher"},"Publisher"),l.a.createElement("input",{type:"text",placeholder:"Publisher of this Book",name:"publisher",className:"form-control",value:this.state.publisher,onChange:this.onChange})),l.a.createElement("button",{type:"submit",className:"btn btn-outline-info btn-lg btn-block"},"Update Book")))))}}]),t}(n.Component);var j=function(){var e=Object(n.useState)(""),t=Object(E.a)(e,2),a=t[0],o=t[1],c=Object(h.f)();return l.a.createElement("div",null,l.a.createElement("form",null,l.a.createElement("input",{type:"password",name:"password",onChange:function(e){return o(e.target.value)}}),l.a.createElement("button",{onClick:function(e){e.preventDefault(),v.a.post("".concat("http://localhost:5000","/api/users/checkAdmin"),{password:a}).then(function(e){console.log(e.data),"Success"===e.data.message&&(N.a.set("access_token","TOP_SECRET"),c.push("/"))}).catch(function(e){console.log(e)})}},"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430")))},B=a(39);var S=function(e){var t=e.component,a=Object(B.a)(e,["component"]),n=N.a.get("access_token");return l.a.createElement(h.b,Object.assign({},a,{render:function(e){return n?l.a.createElement(t,e):l.a.createElement(h.a,{to:"/"})}}))},_=function(e){function t(){return Object(r.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement(d.a,null,l.a.createElement("div",null,l.a.createElement(h.b,{exact:!0,path:"/",component:w}),l.a.createElement(S,{path:"/create-book",component:g}),l.a.createElement(S,{path:"/edit-book/:id",component:y}),l.a.createElement(h.b,{path:"/show-book/:id",component:C}),l.a.createElement(h.b,{path:"/admin",component:j})))}}]),t}(n.Component),D=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,79)).then(function(t){var a=t.getCLS,n=t.getFID,l=t.getFCP,o=t.getLCP,c=t.getTTFB;a(e),n(e),l(e),o(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(_,null))),D()}},[[40,1,2]]]);
//# sourceMappingURL=main.08eef1bf.chunk.js.map