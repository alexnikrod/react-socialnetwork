(this["webpackJsonpreact-social"]=this["webpackJsonpreact-social"]||[]).push([[3],{286:function(t,e,a){"use strict";a.d(e,"a",(function(){return m}));var n=a(32),r=a(33),s=a(34),o=a(35),u=a(0),i=a.n(u),l=a(28),c=a(17),p=function(t){return{isAuth:t.auth.isAuth}},m=function(t){var e=function(e){Object(o.a)(u,e);var a=Object(s.a)(u);function u(){return Object(n.a)(this,u),a.apply(this,arguments)}return Object(r.a)(u,[{key:"render",value:function(){return this.props.isAuth?i.a.createElement(t,this.props):i.a.createElement(l.a,{to:"/login"})}}]),u}(i.a.Component);return Object(c.b)(p)(e)}},288:function(t,e,a){t.exports=a.p+"static/media/bill.9bea4bf7.jpg"},289:function(t,e,a){"use strict";var n=a(92);function r(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var a=[],n=!0,r=!1,s=void 0;try{for(var o,u=t[Symbol.iterator]();!(n=(o=u.next()).done)&&(a.push(o.value),!e||a.length!==e);n=!0);}catch(i){r=!0,s=i}finally{try{n||null==u.return||u.return()}finally{if(r)throw s}}return a}}(t,e)||Object(n.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}a.d(e,"a",(function(){return r}))},290:function(t,e,a){t.exports={descriptionBlock:"ProfileInfo_descriptionBlock__gOOQY",userPhoto:"ProfileInfo_userPhoto__4AhkJ"}},291:function(t,e,a){t.exports={postsBlock:"MyPosts_postsBlock__1cAL4",posts:"MyPosts_posts__1P0sL"}},292:function(t,e,a){t.exports={item:"Post_item__1lmk6"}},295:function(t,e,a){"use strict";a.r(e);var n=a(32),r=a(33),s=a(34),o=a(35),u=a(0),i=a.n(u),l=a(17),c=a(28),p=a(290),m=a.n(p),f=a(93),d=a(288),h=a.n(d),b=a(289),v=function(t){var e=Object(u.useState)(!1),a=Object(b.a)(e,2),n=a[0],r=a[1],s=Object(u.useState)(t.status),o=Object(b.a)(s,2),l=o[0],c=o[1];Object(u.useEffect)((function(){c(t.status)}),[t.status]);return i.a.createElement("div",null,!n&&i.a.createElement("div",null,i.a.createElement("span",{onClick:function(){r(!0)}},t.status||"*no status*")),n&&i.a.createElement("div",null,i.a.createElement("input",{onChange:function(t){c(t.currentTarget.value)},onBlur:function(){r(!1),t.updateStatus(l)},value:l,autoFocus:!0})))},E=function(t){var e=t.profile,a=t.status,n=t.updateStatus;return e?i.a.createElement("div",null,i.a.createElement("div",{className:m.a.descriptionBlock},i.a.createElement("img",{className:m.a.userPhoto,src:null!=e.photos.large?e.photos.large:h.a,alt:"large"}),i.a.createElement(v,{status:a,updateStatus:n})),i.a.createElement("div",null,"Ava+description"),i.a.createElement("div",null,e.fullName),i.a.createElement("div",null,e.status)):i.a.createElement(f.a,null)},g=a(84),y=a(125),j=a(291),O=a.n(j),P=a(292),k=a.n(P),S=function(t){return i.a.createElement("div",{className:k.a.item},i.a.createElement("img",{src:"https://i.ya-webdesign.com/images/funny-png-avatar-2.png",alt:"ava"}),t.message,i.a.createElement("div",null,i.a.createElement("span",null,"Like ",t.likesCount)))},_=a(61),A=a(38),w=Object(_.a)(10),x=i.a.memo((function(t){var e=t.posts.map((function(t){return i.a.createElement(S,{message:t.message,likesCount:t.likesCount,key:t.id})}));return i.a.createElement("div",{className:O.a.postsBlock},i.a.createElement("h3",null,"My posts"),i.a.createElement(C,{onSubmit:function(e){t.addPost(e.newPostText)}}),i.a.createElement("div",{className:O.a.posts},e))})),C=Object(y.a)({form:"profileAddPostForm"})((function(t){return i.a.createElement("form",{onSubmit:t.handleSubmit},i.a.createElement("div",null,i.a.createElement(g.a,{name:"newPostText",component:A.b,placeholder:"Enter your post",validate:[_.b,w]})),i.a.createElement("div",null,i.a.createElement("button",null,"Add post")))})),I=x,T=a(91),U=Object(l.b)((function(t){return{posts:t.profilePage.posts,newPostText:t.profilePage.newPostText}}),(function(t){return{addPost:function(e){t(Object(T.a)(e))}}}))(I),B=function(t){return i.a.createElement("div",null,i.a.createElement("div",null,"Main Content"),i.a.createElement(E,{profile:t.profile,status:t.status,updateStatus:t.updateStatus}),i.a.createElement(U,null))},N=a(286),M=a(7),J=function(t){Object(o.a)(a,t);var e=Object(s.a)(a);function a(){return Object(n.a)(this,a),e.apply(this,arguments)}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var t=this.props.match.params.userId;t||(t=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.setUserProfileThunk(t),this.props.getUserStatus(t)}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(B,Object.assign({},this.props,{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateUserStatus})))}}]),a}(i.a.Component);e.default=Object(M.d)(Object(l.b)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,authorizedUserId:t.auth.userId,isAuth:t.auth.isAuth}}),{setUserProfileThunk:T.d,getUserStatus:T.c,updateUserStatus:T.e}),c.f,N.a)(J)}}]);
//# sourceMappingURL=3.f1de9669.chunk.js.map