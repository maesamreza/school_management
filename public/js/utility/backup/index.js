(window.webpackJsonp=window.webpackJsonp||[]).push([[377],{Cc4s:function(t,e,s){"use strict";s.r(e);var a={components:{},data:function(){return{backupForm:new Form({delete_previous:!1}),backups:[],filter:{page_length:helper.getConfig("page_length"),sort_by:"created_at",order:"desc"},orderByOptions:[{value:"created_at",translation:i18n.general.created_at}]}},mounted:function(){helper.hasPermission("access-configuration")||(helper.notAccessibleMsg(),this.$router.push("/dashboard")),helper.featureAvailable("backup")||(helper.featureNotAvailableMsg(),this.$router.push("/dashboard")),this.getBackups()},methods:{createBackup:function(){var t=this,e=this.$loading.show();this.backupForm.post("/api/backup").then((function(s){toastr.success(s.message),t.getBackups(),e.hide()})).catch((function(t){e.hide(),helper.showErrorMsg(t)}))},getBackups:function(t){var e=this,s=this.$loading.show();"number"!=typeof t&&(t=1);var a=helper.getFilterURL(this.filter);axios.get("/api/backup?page="+t+a).then((function(t){e.backups=t,s.hide()})).catch((function(t){s.hide(),helper.showErrorMsg(t)}))},confirmDelete:function(t){var e=this;return function(s){return e.deleteBackup(t)}},deleteBackup:function(t){var e=this,s=this.$loading.show();axios.delete("/api/backup/"+t.name).then((function(t){toastr.success(t.message),e.getBackups(),s.hide()})).catch((function(t){s.hide(),helper.showErrorMsg(t)}))},getDownloadLink:function(t){return"/backup/"+t.name+"/download/?token="+helper.getAuthToken()}},filters:{momentDateTime:function(t){return helper.formatDateTime(t)}},watch:{filter:{handler:function(t){this.getBackups()},deep:!0}}},i=s("KHd+"),n=Object(i.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"page-titles"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 col-sm-6"},[s("h3",{staticClass:"text-themecolor"},[t._v(t._s(t.trans("utility.backup"))+"\n                    "),t.backups.length?t._e():s("span",{staticClass:"card-subtitle d-none d-sm-inline"},[t._v(t._s(t.trans("general.no_result_found")))])])]),t._v(" "),s("div",{staticClass:"col-12 col-sm-6"})])]),t._v(" "),s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"card border-bottom"},[s("div",{staticClass:"card-body p-4"},[s("h4",{staticClass:"card-title"},[t._v(t._s(t.trans("utility.generate_backup")))]),t._v(" "),s("show-tip",{attrs:{module:"utility",tip:"tip_backup"}}),t._v(" "),s("div",{staticClass:"form-group"},[s("switches",{staticClass:"m-l-20",attrs:{theme:"bootstrap",color:"success"},model:{value:t.backupForm.delete_previous,callback:function(e){t.$set(t.backupForm,"delete_previous",e)},expression:"backupForm.delete_previous"}}),t._v(" "+t._s(t.trans("utility.delete_previous_backup?"))+"\n                ")],1),t._v(" "),s("div",{staticClass:"form-group"},[s("button",{staticClass:"btn btn-info btn-sm",on:{click:function(e){return e.preventDefault(),t.createBackup(e)}}},[t._v(t._s(t.trans("utility.generate_backup")))])])],1)]),t._v(" "),s("div",{staticClass:"card"},[s("div",{staticClass:"card-body"},[t.backups?s("div",{staticClass:"table-responsive"},[s("table",{staticClass:"table table-sm"},[s("thead",[s("tr",[s("th",[t._v(t._s(t.trans("utility.backup_name")))]),t._v(" "),s("th",[t._v(t._s(t.trans("utility.backup_size")))]),t._v(" "),s("th",{staticClass:"table-option"},[t._v(t._s(t.trans("general.action")))])])]),t._v(" "),s("tbody",t._l(t.backups,(function(e){return s("tr",[s("td",{domProps:{textContent:t._s(e.name)}}),t._v(" "),s("td",{domProps:{textContent:t._s(e.size)}}),t._v(" "),s("td",{staticClass:"table-option"},[s("div",{staticClass:"btn-group"},[s("a",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.trans("utility.download_backup"),expression:"trans('utility.download_backup')"}],staticClass:"btn btn-success btn-sm",attrs:{href:t.getDownloadLink(e)}},[s("i",{staticClass:"fas fa-download"})]),t._v(" "),s("button",{directives:[{name:"confirm",rawName:"v-confirm",value:{ok:t.confirmDelete(e)},expression:"{ok: confirmDelete(backup)}"},{name:"tooltip",rawName:"v-tooltip",value:t.trans("utility.delete_backup"),expression:"trans('utility.delete_backup')"}],key:e.name,staticClass:"btn btn-danger btn-sm"},[s("i",{staticClass:"fas fa-trash"})])])])])})),0)])]):t._e(),t._v(" "),t.backups.length?t._e():s("module-info",{attrs:{module:"utility",title:"backup_module_title",description:"backup_module_description",icon:"list"}})],1)])])])}),[],!1,null,null,null);e.default=n.exports}}]);
//# sourceMappingURL=index.js.map?id=c35ea3b08ce4fe9c2d71