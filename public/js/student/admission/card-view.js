(window.webpackJsonp=window.webpackJsonp||[]).push([[326],{"3YsV":function(t,e,s){var n=s("4Ahn");"string"==typeof n&&(n=[[t.i,n,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};s("aET+")(n,a);n.locals&&(t.exports=n.locals)},"4Ahn":function(t,e,s){(t.exports=s("I1BE")(!1)).push([t.i,".card.student-card[data-v-795bc960] {\n  opacity: 0.9;\n  transition: all 0.3s ease-in-out;\n  cursor: pointer;\n}\n.card.student-card .student-info .student-thumb[data-v-795bc960] {\n  float: left;\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n  background: #e1e2e3;\n  margin-right: 20px;\n  text-align: center;\n  overflow: hidden;\n}\n.card.student-card .student-info .student-thumb i[data-v-795bc960] {\n  padding-top: 25px;\n  font-size: 50px;\n}\n.card.student-card .student-info .student-thumb img[data-v-795bc960] {\n  width: 100%;\n}\n.card.student-card .student-info p[data-v-795bc960] {\n  padding-top: 10px;\n  margin-bottom: 0;\n  min-height: 100px;\n}\n.card.student-card .student-info p span[data-v-795bc960] {\n  display: block;\n}\n.card.student-card .student-info p span.student-name[data-v-795bc960] {\n  font-size: 120%;\n  font-weight: 500;\n}\n.card.student-card .student-info p span.batch[data-v-795bc960] {\n  font-size: 100%;\n}\n.card.student-card .student-info p span.other[data-v-795bc960] {\n  font-size: 90%;\n}",""])},g2hR:function(t,e,s){"use strict";s.r(e);var n={components:{},data:function(){return{student_records:{total:0,data:[]},selectAll:!1,studentGroupForm:new Form({ids:[],student_group_id:"",action:"attach"}),student_groups:[],selected_group:null,filter:{sort_by:"first_name",order:"asc",batch_id:[],blood_group_id:[],religion_id:[],caste_id:[],gender:[],category_id:[],student_group_id:[],first_name:"",last_name:"",first_guardian_name:"",second_guardian_name:"",date_of_admission_start_date:"",date_of_birth_end_date:"",date_of_admission_end_date:"",date_of_birth_start_date:"",columns:["first_guardian_name","date_of_admission","admission_number","contact_number"],page_length:12},orderByOptions:[{value:"first_name",translation:i18n.student.first_name},{value:"last_name",translation:i18n.student.last_name},{value:"first_guardian_name",translation:i18n.student.first_guardian_name},{value:"second_guardian_name",translation:i18n.student.second_guardian_name},{value:"date_of_birth",translation:i18n.student.date_of_birth}],columns:[{text:i18n.student.admission_number,value:"admission_number"},{text:i18n.student.roll_number,value:"roll_number"},{text:i18n.student.middle_name,value:"middle_name"},{text:i18n.student.first_guardian_name,value:"first_guardian_name"},{text:i18n.student.second_guardian_name,value:"second_guardian_name"},{text:i18n.student.date_of_birth,value:"date_of_birth"},{text:i18n.student.date_of_admission,value:"date_of_admission"},{text:i18n.student.date_of_promotion,value:"date_of_promotion"},{text:i18n.student.contact_number,value:"contact_number"},{text:i18n.student.gender,value:"gender"},{text:i18n.student.nationality,value:"nationality"},{text:i18n.misc.blood_group,value:"blood_group"},{text:i18n.misc.religion,value:"religion"},{text:i18n.misc.caste,value:"caste"},{text:i18n.misc.category,value:"category"},{text:i18n.student.unique_identification_number,value:"unique_identification_number"},{text:i18n.student.first_guardian_contact_number_1,value:"first_guardian_contact_number_1"},{text:i18n.student.second_guardian_contact_number_1,value:"second_guardian_contact_number_1"},{text:i18n.student.emergency_contact_name,value:"emergency_contact_name"},{text:i18n.student.emergency_contact_number,value:"emergency_contact_number"},{text:i18n.student.present_address,value:"present_address"},{text:i18n.student.permanent_address,value:"permanent_address"}],batches:[],selected_batches:null,blood_groups:[],selected_blood_groups:null,castes:[],genders:[],selected_genders:null,selected_castes:null,religions:[],selected_religions:null,categories:[],selected_categories:null,showFilterPanel:!1,showColumnPanel:!1,selected_student_groups:null,help_topic:""}},mounted:function(){helper.hasPermission("list-student")||helper.hasPermission("list-class-teacher-wise-student")||(helper.notAccessibleMsg(),this.$router.push("/dashboard")),this.getStudents(),helper.showDemoNotification(["student_admission"])},methods:{hasPermission:function(t){return helper.hasPermission(t)},hasNotAnyRole:function(t){return helper.hasNotAnyRole(t)},getConfig:function(t){return helper.getConfig(t)},getStudents:function(t){var e=this,s=this.$loading.show();"number"!=typeof t&&(t=1),this.selectAll=!1,this.filter.date_of_admission_start_date=helper.toDate(this.filter.date_of_admission_start_date),this.filter.date_of_admission_end_date=helper.toDate(this.filter.date_of_admission_end_date),this.filter.date_of_birth_start_date=helper.toDate(this.filter.date_of_birth_start_date),this.filter.date_of_birth_end_date=helper.toDate(this.filter.date_of_birth_end_date);var n=helper.getFilterURL(this.filter);axios.get("/api/student?page="+t+n).then((function(t){e.student_records=t.student_records,e.batches=t.filters.batches,e.blood_groups=t.filters.blood_groups,e.religions=t.filters.religions,e.castes=t.filters.castes,e.genders=t.filters.genders,e.categories=t.filters.categories,e.student_groups=t.filters.student_groups;var n=[];e.student_records.data.forEach((function(t){n.push(t.student.id)})),e.selectAll=n.every((function(t){return e.studentGroupForm.ids.indexOf(t)>-1}))?1:0,s.hide()})).catch((function(t){s.hide(),helper.showErrorMsg(t)}))},toggleSelectAll:function(){var t=this;this.selectAll?this.student_records.data.forEach((function(e){t.studentGroupForm.ids.indexOf(e.student.id)<0&&t.studentGroupForm.ids.push(e.student.id)})):this.student_records.data.forEach((function(e){var s=t.studentGroupForm.ids.indexOf(e.student.id);s>=0&&t.studentGroupForm.ids.splice(s,1)}))},getStudentName:function(t){return helper.getStudentName(t)},print:function(){var t=this.$loading.show();if(this.filter.columns.length>6)return toastr.error(i18n.student.print_max_column),void t.hide();axios.post("/api/student/print",{filter:this.filter}).then((function(e){window.open("/print").document.write(e),t.hide()})).catch((function(e){t.hide(),helper.showErrorMsg(e)}))},pdf:function(){var t=this,e=this.$loading.show();if(this.filter.columns.length>6)return toastr.error(i18n.student.print_max_column),void e.hide();axios.post("/api/student/pdf",{filter:this.filter}).then((function(s){e.hide(),window.open("/download/report/"+s+"?token="+t.authToken)})).catch((function(t){e.hide(),helper.showErrorMsg(t)}))},exportExcel:function(){return"/api/student?action=excel"+helper.getFilterURL(this.filter)+"&token="+this.authToken},onBatchSelect:function(t){this.filter.batch_id.push(t.id)},onBatchRemove:function(t){this.filter.batch_id.splice(this.filter.batch_id.indexOf(t.id),1)},onBloodGroupSelect:function(t){this.filter.blood_group_id.push(t.id)},onBloodGroupRemove:function(t){this.filter.blood_group_id.splice(this.filter.blood_group_id.indexOf(t.id),1)},onReligionSelect:function(t){this.filter.religion_id.push(t.id)},onReligionRemove:function(t){this.filter.religion_id.splice(this.filter.religion_id.indexOf(t.id),1)},onCasteSelect:function(t){this.filter.caste_id.push(t.id)},onCasteRemove:function(t){this.filter.caste_id.splice(this.filter.caste_id.indexOf(t.id),1)},onGenderSelect:function(t){this.filter.gender.push(t.id)},onGenderRemove:function(t){this.filter.gender.splice(this.filter.gender.indexOf(t.id),1)},onCategorySelect:function(t){this.filter.category_id.push(t.id)},onCategoryRemove:function(t){this.filter.category_id.splice(this.filter.category_id.indexOf(t.id),1)},isColumnVisible:function(t){return this.filter.columns.indexOf(t)>-1},getRollNumber:function(t){return helper.getRollNumber(t)},getCourse:function(t){return t.batch.course.name},getBatch:function(t){return t.batch.name},onStudentGroupSelect:function(t){this.filter.student_group_id.push(t.id)},onStudentGroupRemove:function(t){this.filter.student_group_id.splice(this.filter.student_group_id.indexOf(t.id),1)},onGroupSelect:function(t){this.studentGroupForm.student_group_id=t.id},confirmGroupAction:function(){var t=this;return function(e){return t.groupAction()}},groupAction:function(){var t=this,e=this.$loading.show();this.studentGroupForm.post("/api/student/action/group").then((function(s){toastr.success(s.message),t.getStudents(),t.studentGroupForm.action="attach",t.selected_group=null,t.studentGroupForm.ids=[],e.hide()})).catch((function(t){e.hide(),helper.showErrorMsg(t)}))},navigateToStudent:function(t){this.$router.push("/student/"+t.student.uuid)},isToday:function(t){return helper.isToday(t)}},computed:{authToken:function(){return helper.getAuthToken()}},filters:{moment:function(t){return helper.formatDate(t)},momentDateTime:function(t){return helper.formatDateTime(t)}},watch:{"filter.sort_by":function(t){this.getStudents()},"filter.order":function(t){this.getStudents()},"filter.page_length":function(t){this.getStudents()}}},a=(s("qecD"),s("KHd+")),i=Object(a.a)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"page-titles"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 col-sm-6"},[s("h3",{staticClass:"text-themecolor"},[t._v(t._s(t.trans("student.student_list"))+" \n                    "),t.student_records.total?s("span",{staticClass:"card-subtitle d-none d-sm-inline"},[t._v(t._s(t.trans("general.total_result_found",{count:t.student_records.total,from:t.student_records.from,to:t.student_records.to})))]):s("span",{staticClass:"card-subtitle d-none d-sm-inline"},[t._v(t._s(t.trans("general.no_result_found")))])])]),t._v(" "),s("div",{staticClass:"col-12 col-sm-6"},[s("div",{staticClass:"action-buttons pull-right"},[t.hasNotAnyRole(["student","parent"])?[s("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.trans("general.list_view"),expression:"trans('general.list_view')"}],staticClass:"btn btn-info btn-sm",on:{click:function(e){return t.$router.push("/student/list")}}},[s("i",{staticClass:"fas fa-list"}),t._v(" "),s("span",{staticClass:"d-none d-sm-inline"},[t._v(t._s(t.trans("general.list_view")))])]),t._v(" "),t.student_records.total&&t.hasPermission("list-registration")?s("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.trans("general.add_new"),expression:"trans('general.add_new')"}],staticClass:"btn btn-info btn-sm",on:{click:function(e){return t.$router.push("/student/registration")}}},[s("i",{staticClass:"fas fa-plus"}),t._v(" "),s("span",{staticClass:"d-none d-sm-inline"},[t._v(t._s(t.trans("student.add_new_student")))])]):t._e(),t._v(" "),t.showFilterPanel?t._e():s("button",{staticClass:"btn btn-info btn-sm",on:{click:function(e){t.showFilterPanel=!t.showFilterPanel}}},[s("i",{staticClass:"fas fa-filter"}),t._v(" "),s("span",{staticClass:"d-none d-sm-inline"},[t._v(t._s(t.trans("general.filter")))])]),t._v(" "),s("sort-by",{attrs:{"order-by-options":t.orderByOptions,"sort-by":t.filter.sort_by,order:t.filter.order},on:{updateSortBy:function(e){t.filter.sort_by=e},updateOrder:function(e){t.filter.order=e}}}),t._v(" "),s("div",{staticClass:"btn-group"},[s("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.trans("general.more_option"),expression:"trans('general.more_option')"}],staticClass:"btn btn-info btn-sm dropdown-toggle no-caret ",attrs:{type:"button",role:"menu",id:"moreOption","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[s("i",{staticClass:"fas fa-ellipsis-h"}),t._v(" "),s("span",{staticClass:"d-none d-sm-inline"})]),t._v(" "),s("div",{class:["dropdown-menu","ltr"==t.getConfig("direction")?"dropdown-menu-right":""],attrs:{"aria-labelledby":"moreOption"}},[s("button",{staticClass:"dropdown-item custom-dropdown",on:{click:t.print}},[s("i",{staticClass:"fas fa-print"}),t._v(" "+t._s(t.trans("general.print")))]),t._v(" "),s("button",{staticClass:"dropdown-item custom-dropdown",on:{click:t.pdf}},[s("i",{staticClass:"fas fa-file-pdf"}),t._v(" "+t._s(t.trans("general.generate_pdf")))]),t._v(" "),s("a",{staticClass:"dropdown-item custom-dropdown",attrs:{href:t.exportExcel()}},[s("i",{staticClass:"fas fa-file-excel"}),t._v(" "+t._s(t.trans("general.generate_excel")))]),t._v(" "),s("button",{staticClass:"dropdown-item custom-dropdown",on:{click:function(e){return t.$router.go(-1)}}},[s("i",{staticClass:"fas fa-undo"}),t._v(" "+t._s(t.trans("general.back")))])])]),t._v(" "),s("help-button",{on:{clicked:function(e){t.help_topic="admission"}}})]:t._e()],2)])])]),t._v(" "),s("div",{staticClass:"container-fluid"},[s("transition",{attrs:{name:"fade"}},[t.showFilterPanel?s("div",{staticClass:"card card-form"},[s("div",{staticClass:"card-body"},[s("h4",{staticClass:"card-title"},[t._v(t._s(t.trans("general.filter"))+"\n                    ")]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 col-sm-2"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[t._v(t._s(t.trans("student.first_name")))]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.filter.first_name,expression:"filter.first_name"}],staticClass:"form-control",attrs:{name:"first_name"},domProps:{value:t.filter.first_name},on:{input:function(e){e.target.composing||t.$set(t.filter,"first_name",e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"col-12 col-sm-2"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[t._v(t._s(t.trans("student.last_name")))]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.filter.last_name,expression:"filter.last_name"}],staticClass:"form-control",attrs:{name:"last_name"},domProps:{value:t.filter.last_name},on:{input:function(e){e.target.composing||t.$set(t.filter,"last_name",e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"col-12 col-sm-2"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[t._v(t._s(t.trans("student.first_guardian_name")))]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.filter.first_guardian_name,expression:"filter.first_guardian_name"}],staticClass:"form-control",attrs:{name:"first_guardian_name"},domProps:{value:t.filter.first_guardian_name},on:{input:function(e){e.target.composing||t.$set(t.filter,"first_guardian_name",e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"col-12 col-sm-2"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[t._v(t._s(t.trans("student.second_guardian_name")))]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.filter.second_guardian_name,expression:"filter.second_guardian_name"}],staticClass:"form-control",attrs:{name:"second_guardian_name"},domProps:{value:t.filter.second_guardian_name},on:{input:function(e){e.target.composing||t.$set(t.filter,"second_guardian_name",e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"col-12 col-sm-4"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[t._v(t._s(t.trans("academic.batch")))]),t._v(" "),s("v-select",{attrs:{label:"name","track-by":"id","group-values":"batches","group-label":"course_group","group-select":!1,name:"batch_id",id:"batch_id",options:t.batches,placeholder:t.trans("academic.select_batch"),multiple:!0,"close-on-select":!1,"clear-on-select":!1,"hide-selected":!0,selected:t.selected_batches},on:{select:t.onBatchSelect,remove:t.onBatchRemove},model:{value:t.selected_batches,callback:function(e){t.selected_batches=e},expression:"selected_batches"}},[t.batches.length?t._e():s("div",{staticClass:"multiselect__option",attrs:{slot:"afterList"},slot:"afterList"},[t._v("\n                                        "+t._s(t.trans("general.no_option_found"))+"\n                                    ")])])],1)]),t._v(" "),s("div",{staticClass:"col-12 col-sm-6"},[s("date-range-picker",{attrs:{"start-date":t.filter.date_of_birth_start_date,"end-date":t.filter.date_of_birth_end_date,label:t.trans("student.date_of_birth_between")},on:{"update:startDate":function(e){return t.$set(t.filter,"date_of_birth_start_date",e)},"update:start-date":function(e){return t.$set(t.filter,"date_of_birth_start_date",e)},"update:endDate":function(e){return t.$set(t.filter,"date_of_birth_end_date",e)},"update:end-date":function(e){return t.$set(t.filter,"date_of_birth_end_date",e)}}})],1),t._v(" "),s("div",{staticClass:"col-12 col-sm-6"},[s("date-range-picker",{attrs:{"start-date":t.filter.date_of_admission_start_date,"end-date":t.filter.date_of_admission_end_date,label:t.trans("student.date_of_admission_between")},on:{"update:startDate":function(e){return t.$set(t.filter,"date_of_admission_start_date",e)},"update:start-date":function(e){return t.$set(t.filter,"date_of_admission_start_date",e)},"update:endDate":function(e){return t.$set(t.filter,"date_of_admission_end_date",e)},"update:end-date":function(e){return t.$set(t.filter,"date_of_admission_end_date",e)}}})],1),t._v(" "),s("div",{staticClass:"col-12 col-sm-2"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[t._v(t._s(t.trans("student.student_group")))]),t._v(" "),s("v-select",{attrs:{label:"name","track-by":"id",name:"student_group_id",id:"student_group_id",options:t.student_groups,placeholder:t.trans("student.select_student_group"),multiple:!0,"close-on-select":!1,"clear-on-select":!1,"hide-selected":!0,selected:t.selected_student_groups},on:{select:t.onStudentGroupSelect,remove:t.onStudentGroupRemove},model:{value:t.selected_student_groups,callback:function(e){t.selected_student_groups=e},expression:"selected_student_groups"}},[t.student_groups.length?t._e():s("div",{staticClass:"multiselect__option",attrs:{slot:"afterList"},slot:"afterList"},[t._v("\n                                        "+t._s(t.trans("general.no_option_found"))+"\n                                    ")])])],1)]),t._v(" "),s("div",{staticClass:"col-12 col-sm-2"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[t._v(t._s(t.trans("student.gender")))]),t._v(" "),s("v-select",{attrs:{label:"name","track-by":"id",name:"gender",id:"gender",options:t.genders,multiple:!0,"close-on-select":!1,"clear-on-select":!1,"hide-selected":!0,selected:t.selected_genders},on:{select:t.onGenderSelect,remove:t.onGenderRemove},model:{value:t.selected_genders,callback:function(e){t.selected_genders=e},expression:"selected_genders"}},[t.genders.length?t._e():s("div",{staticClass:"multiselect__option",attrs:{slot:"afterList"},slot:"afterList"},[t._v("\n                                        "+t._s(t.trans("general.no_option_found"))+"\n                                    ")])])],1)]),t._v(" "),s("div",{staticClass:"col-12 col-sm-2"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[t._v(t._s(t.trans("misc.blood_group")))]),t._v(" "),s("v-select",{attrs:{label:"name","track-by":"id",name:"blood_group_id",id:"blood_group_id",options:t.blood_groups,placeholder:t.trans("misc.select_blood_group"),multiple:!0,"close-on-select":!1,"clear-on-select":!1,"hide-selected":!0,selected:t.selected_blood_groups},on:{select:t.onBloodGroupSelect,remove:t.onBloodGroupRemove},model:{value:t.selected_blood_groups,callback:function(e){t.selected_blood_groups=e},expression:"selected_blood_groups"}},[t.blood_groups.length?t._e():s("div",{staticClass:"multiselect__option",attrs:{slot:"afterList"},slot:"afterList"},[t._v("\n                                        "+t._s(t.trans("general.no_option_found"))+"\n                                    ")])])],1)]),t._v(" "),s("div",{staticClass:"col-12 col-sm-2"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[t._v(t._s(t.trans("misc.religion")))]),t._v(" "),s("v-select",{attrs:{label:"name","track-by":"id",name:"religion_id",id:"religion_id",options:t.religions,placeholder:t.trans("misc.select_religion"),multiple:!0,"close-on-select":!1,"clear-on-select":!1,"hide-selected":!0,selected:t.selected_religions},on:{select:t.onReligionSelect,remove:t.onReligionRemove},model:{value:t.selected_religions,callback:function(e){t.selected_religions=e},expression:"selected_religions"}},[t.religions.length?t._e():s("div",{staticClass:"multiselect__option",attrs:{slot:"afterList"},slot:"afterList"},[t._v("\n                                        "+t._s(t.trans("general.no_option_found"))+"\n                                    ")])])],1)]),t._v(" "),s("div",{staticClass:"col-12 col-sm-2"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[t._v(t._s(t.trans("misc.caste")))]),t._v(" "),s("v-select",{attrs:{label:"name","track-by":"id",name:"caste_id",id:"caste_id",options:t.castes,placeholder:t.trans("misc.select_caste"),multiple:!0,"close-on-select":!1,"clear-on-select":!1,"hide-selected":!0,selected:t.selected_castes},on:{select:t.onCasteSelect,remove:t.onCasteRemove},model:{value:t.selected_castes,callback:function(e){t.selected_castes=e},expression:"selected_castes"}},[t.castes.length?t._e():s("div",{staticClass:"multiselect__option",attrs:{slot:"afterList"},slot:"afterList"},[t._v("\n                                        "+t._s(t.trans("general.no_option_found"))+"\n                                    ")])])],1)]),t._v(" "),s("div",{staticClass:"col-12 col-sm-2"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[t._v(t._s(t.trans("misc.category")))]),t._v(" "),s("v-select",{attrs:{label:"name","track-by":"id",name:"category_id",id:"category_id",options:t.categories,placeholder:t.trans("misc.select_category"),multiple:!0,"close-on-select":!1,"clear-on-select":!1,"hide-selected":!0,selected:t.selected_categories},on:{select:t.onCategorySelect,remove:t.onCategoryRemove},model:{value:t.selected_categories,callback:function(e){t.selected_categories=e},expression:"selected_categories"}},[t.categories.length?t._e():s("div",{staticClass:"multiselect__option",attrs:{slot:"afterList"},slot:"afterList"},[t._v("\n                                        "+t._s(t.trans("general.no_option_found"))+"\n                                    ")])])],1)])]),t._v(" "),s("div",{staticClass:"card-footer text-right"},[s("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(e){t.showFilterPanel=!1}}},[t._v(t._s(t.trans("general.cancel")))]),t._v(" "),s("button",{staticClass:"btn btn-info waves-effect waves-light",attrs:{type:"button"},on:{click:t.getStudents}},[t._v(t._s(t.trans("general.filter")))])])])]):t._e()]),t._v(" "),s("div",{staticClass:"card"},[s("div",{staticClass:"card-body p-4"},[s("div",{staticClass:"row"},t._l(t.student_records.data,(function(e){return s("div",{key:e.id,staticClass:"col-md-3 col-12"},[s("div",{staticClass:"card card-box with-shadow student-card"},[s("div",{staticClass:"card-body"},[t.isToday(e.student.date_of_birth)?s("div",{staticClass:"ribbon ribbon-top-left"},[s("span",{staticClass:"ribbon-red"},[s("i",{staticClass:"fas fa-birthday-cake"}),t._v(" "+t._s(t.trans("calendar.birthday")))])]):t._e(),t._v(" "),s("div",{staticClass:"student-info",on:{click:function(s){return t.navigateToStudent(e)}}},[s("span",{staticClass:"student-thumb pull-left"},[e.student.student_photo?[s("img",{staticStyle:{height:"inherit",width:"auto"},attrs:{src:"/"+e.student.student_photo}})]:["female"==e.student.gender?s("img",{staticClass:"img-circle",attrs:{src:"/images/avatar_female_kid.png"}}):s("img",{staticClass:"img-circle",attrs:{src:"/images/avatar_male_kid.png"}})]],2),t._v(" "),s("p",[s("span",{staticClass:"other small text-muted"},[t._v(t._s(e.admission.admission_number)+" \n                                            "),e.student.age?[t._v("("+t._s(e.student.age.years+" "+t.trans("list.year")+" "+e.student.age.months+" "+t.trans("list.month"))+")")]:t._e()],2),t._v(" "),s("span",{staticClass:"student-name"},[t._v(t._s(e.student.name))]),t._v(" "),s("span",{staticClass:"other small text-muted"},[t._v(t._s(e.batch.course.name+" "+e.batch.name)+" ("+t._s(e.full_roll_number)+")")]),t._v(" "),s("span",{staticClass:"other small text-muted"},[t._v(t._s(e.student.parent.first_guardian_name)+" "),s("i",{staticClass:"fas fa-mobile"}),t._v(" "+t._s(e.student.contact_number)+"\n                                        ")])])])])])])})),0),t._v(" "),t.student_records.total?t._e():s("module-info",{attrs:{module:"student",title:"admission_module_title",description:"admission_module_description",icon:"list"}}),t._v(" "),s("pagination-record",{attrs:{"show-page-length":!1,"page-length":t.filter.page_length,records:t.student_records},on:{"update:pageLength":function(e){return t.$set(t.filter,"page_length",e)},"update:page-length":function(e){return t.$set(t.filter,"page_length",e)},updateRecords:t.getStudents}})],1)])],1),t._v(" "),s("right-panel",{attrs:{topic:t.help_topic}})],1)}),[],!1,null,"795bc960",null);e.default=i.exports},qecD:function(t,e,s){"use strict";var n=s("3YsV");s.n(n).a}}]);
//# sourceMappingURL=card-view.js.map?id=0dbc6cd6420f50a4856f