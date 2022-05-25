(window.webpackJsonp=window.webpackJsonp||[]).push([[374],{UnFW:function(e,r,c){"use strict";var t={components:{},props:["id"],data:function(){return{vehicleServiceRecordForm:new Form({amount:"",log:"",next_due_date:"",vehicle_id:"",vehicle_service_center_id:"",date_of_service:"",description:"",upload_token:""}),default_currency:helper.getConfig("default_currency"),vehicles:[],vehicle_service_centers:[],selected_vehicle:null,selected_vehicle_service_center:null,clearAttachment:!1}},mounted:function(){var e=this;this.vehicleServiceRecordForm.upload_token=this.$uuid.v4();var r=this.$loading.show();axios.get("/api/vehicle/service/record/pre-requisite").then((function(c){e.vehicles=c.vehicles,e.vehicle_service_centers=c.vehicle_service_centers,r.hide()})).catch((function(e){r.hide(),helper.showErrorMsg(e)})),this.id&&this.getServiceRecord()},methods:{proceed:function(){this.id?this.updateServiceRecord():this.storeServiceRecord()},storeServiceRecord:function(){var e=this,r=this.$loading.show();this.vehicleServiceRecordForm.post("/api/vehicle/service/record").then((function(c){toastr.success(c.message),e.clearAttachment=!e.clearAttachment,e.$emit("completed"),e.vehicleServiceRecordForm.upload_token=e.$uuid.v4(),e.selected_vehicle=null,e.selected_vehicle_service_center=null,r.hide()})).catch((function(e){r.hide(),helper.showErrorMsg(e)}))},getServiceRecord:function(){var e=this,r=this.$loading.show();axios.get("/api/vehicle/service/record/"+this.id).then((function(c){e.vehicleServiceRecordForm.amount=c.vehicle_service_record.amount,e.vehicleServiceRecordForm.log=c.vehicle_service_record.log,e.vehicleServiceRecordForm.vehicle_id=c.vehicle_service_record.vehicle_id,e.vehicleServiceRecordForm.vehicle_service_center_id=c.vehicle_service_record.vehicle_service_center_id,e.vehicleServiceRecordForm.date_of_service=c.vehicle_service_record.date_of_service,e.vehicleServiceRecordForm.next_due_date=c.vehicle_service_record.next_due_date,e.selected_vehicle={id:c.vehicle_service_record.vehicle_id,name:c.vehicle_service_record.vehicle.name},e.selected_vehicle_service_center=c.vehicle_service_record.vehicle_service_center_id?{id:c.vehicle_service_record.vehicle_service_center_id,name:c.vehicle_service_record.vehicle_service_center.name}:null,e.vehicleServiceRecordForm.description=c.vehicle_service_record.description,e.vehicleServiceRecordForm.upload_token=c.vehicle_service_record.upload_token,r.hide()})).catch((function(c){r.hide(),e.$router.push("/transport/vehicle/service/record")}))},updateServiceRecord:function(){var e=this,r=this.$loading.show();this.vehicleServiceRecordForm.patch("/api/vehicle/service/record/"+this.id).then((function(c){toastr.success(c.message),e.$emit("completed"),r.hide(),e.$router.push("/transport/vehicle/service/record")})).catch((function(e){r.hide(),helper.showErrorMsg(e)}))},onVehicleSelect:function(e){this.vehicleServiceRecordForm.vehicle_id=e.id},onVehicleServiceCenterSelect:function(e){this.vehicleServiceRecordForm.vehicle_service_center_id=e.id}}},i=c("KHd+"),o=Object(i.a)(t,(function(){var e=this,r=e.$createElement,c=e._self._c||r;return c("div",[c("form",{on:{submit:function(r){return r.preventDefault(),e.proceed(r)},keydown:function(r){return e.vehicleServiceRecordForm.errors.clear(r.target.name)}}},[c("div",{staticClass:"row"},[c("div",{staticClass:"col-12 col-sm-3"},[c("div",{staticClass:"form-group"},[c("label",{attrs:{for:""}},[e._v(e._s(e.trans("transport.vehicle")))]),e._v(" "),c("v-select",{attrs:{label:"name",name:"vehicle_id",id:"vehicle_id",options:e.vehicles,placeholder:e.trans("general.select_one")},on:{select:e.onVehicleSelect,close:function(r){return e.vehicleServiceRecordForm.errors.clear("vehicle_id")},remove:function(r){e.vehicleServiceRecordForm.vehicle_id=""}},model:{value:e.selected_vehicle,callback:function(r){e.selected_vehicle=r},expression:"selected_vehicle"}},[e.vehicles.length?e._e():c("div",{staticClass:"multiselect__option",attrs:{slot:"afterList"},slot:"afterList"},[e._v("\n                                "+e._s(e.trans("general.no_option_found"))+"\n                            ")])]),e._v(" "),c("show-error",{attrs:{"form-name":e.vehicleServiceRecordForm,"prop-name":"vehicle_id"}})],1)]),e._v(" "),c("div",{staticClass:"col-12 col-sm-3"},[c("div",{staticClass:"form-group"},[c("label",{attrs:{for:""}},[e._v(e._s(e.trans("transport.vehicle_service_center")))]),e._v(" "),c("v-select",{attrs:{label:"name",name:"vehicle_service_center_id",id:"vehicle_service_center_id",options:e.vehicle_service_centers,placeholder:e.trans("general.select_one")},on:{select:e.onVehicleServiceCenterSelect,close:function(r){return e.vehicleServiceRecordForm.errors.clear("vehicle_service_center_id")},remove:function(r){e.vehicleServiceRecordForm.vehicle_service_center_id=""}},model:{value:e.selected_vehicle_service_center,callback:function(r){e.selected_vehicle_service_center=r},expression:"selected_vehicle_service_center"}},[e.vehicles.length?e._e():c("div",{staticClass:"multiselect__option",attrs:{slot:"afterList"},slot:"afterList"},[e._v("\n                                "+e._s(e.trans("general.no_option_found"))+"\n                            ")])]),e._v(" "),c("show-error",{attrs:{"form-name":e.vehicleServiceRecordForm,"prop-name":"vehicle_service_center_id"}})],1)]),e._v(" "),c("div",{staticClass:"col-12 col-sm-3"},[c("div",{staticClass:"form-group"},[c("label",{attrs:{for:""}},[e._v(e._s(e.trans("transport.date_of_service")))]),e._v(" "),c("datepicker",{attrs:{bootstrapStyling:!0,placeholder:e.trans("transport.date_of_service")},on:{selected:function(r){return e.vehicleServiceRecordForm.errors.clear("date_of_service")}},model:{value:e.vehicleServiceRecordForm.date_of_service,callback:function(r){e.$set(e.vehicleServiceRecordForm,"date_of_service",r)},expression:"vehicleServiceRecordForm.date_of_service"}}),e._v(" "),c("show-error",{attrs:{"form-name":e.vehicleServiceRecordForm,"prop-name":"date_of_service"}})],1)]),e._v(" "),c("div",{staticClass:"col-12 col-sm-3"},[c("div",{staticClass:"form-group"},[c("label",{attrs:{for:""}},[e._v(e._s(e.trans("transport.vehicle_service_record_amount")))]),e._v(" "),c("currency-input",{attrs:{position:e.default_currency.position,symbol:e.default_currency.symbol,name:"amount",placeholder:e.trans("transport.vehicle_service_record_amount")},nativeOn:{input:function(r){return e.vehicleServiceRecordForm.errors.clear("amount")}},model:{value:e.vehicleServiceRecordForm.amount,callback:function(r){e.$set(e.vehicleServiceRecordForm,"amount",r)},expression:"vehicleServiceRecordForm.amount"}}),e._v(" "),c("show-error",{attrs:{"form-name":e.vehicleServiceRecordForm,"prop-name":"amount"}})],1)]),e._v(" "),c("div",{staticClass:"col-12 col-sm-3"},[c("div",{staticClass:"form-group"},[c("label",{attrs:{for:""}},[e._v(e._s(e.trans("transport.vehicle_log_log")))]),e._v(" "),c("input",{directives:[{name:"model",rawName:"v-model",value:e.vehicleServiceRecordForm.log,expression:"vehicleServiceRecordForm.log"}],staticClass:"form-control",attrs:{type:"text",name:"log",placeholder:e.trans("transport.vehicle_log_log")},domProps:{value:e.vehicleServiceRecordForm.log},on:{input:function(r){r.target.composing||e.$set(e.vehicleServiceRecordForm,"log",r.target.value)}}}),e._v(" "),c("show-error",{attrs:{"form-name":e.vehicleServiceRecordForm,"prop-name":"log"}})],1)]),e._v(" "),c("div",{staticClass:"col-12 col-sm-3"},[c("div",{staticClass:"form-group"},[c("label",{attrs:{for:""}},[e._v(e._s(e.trans("transport.vehicle_service_record_next_due_date")))]),e._v(" "),c("datepicker",{attrs:{bootstrapStyling:!0,placeholder:e.trans("transport.vehicle_service_record_next_due_date")},on:{selected:function(r){return e.vehicleServiceRecordForm.errors.clear("vehicle_service_record_next_due_date")}},model:{value:e.vehicleServiceRecordForm.next_due_date,callback:function(r){e.$set(e.vehicleServiceRecordForm,"next_due_date",r)},expression:"vehicleServiceRecordForm.next_due_date"}}),e._v(" "),c("show-error",{attrs:{"form-name":e.vehicleServiceRecordForm,"prop-name":"next_due_date"}})],1)]),e._v(" "),c("div",{staticClass:"col-12 col-sm-6"},[c("div",{staticClass:"form-group"},[c("label",{attrs:{for:""}},[e._v(e._s(e.trans("transport.vehicle_service_record_description")))]),e._v(" "),c("autosize-textarea",{attrs:{rows:"2",name:"description",placeholder:e.trans("vehicle.vehicle_service_record_description")},model:{value:e.vehicleServiceRecordForm.description,callback:function(r){e.$set(e.vehicleServiceRecordForm,"description",r)},expression:"vehicleServiceRecordForm.description"}}),e._v(" "),c("show-error",{attrs:{"form-name":e.vehicleServiceRecordForm,"prop-name":"description"}})],1)]),e._v(" "),c("div",{staticClass:"col-12 col-sm-3"},[c("label"),e._v(" "),c("div",{staticClass:"form-group"},[c("file-upload-input",{attrs:{"button-text":e.trans("general.upload_document"),token:e.vehicleServiceRecordForm.upload_token,module:"vehicle_service_record","clear-file":e.clearAttachment,"module-id":e.id}})],1)])]),e._v(" "),c("div",{staticClass:"card-footer text-right"},[c("router-link",{directives:[{name:"show",rawName:"v-show",value:e.id,expression:"id"}],staticClass:"btn btn-danger waves-effect waves-light ",attrs:{to:"/transport/vehicle/service/record"}},[e._v(e._s(e.trans("general.cancel")))]),e._v(" "),e.id?e._e():c("button",{staticClass:"btn btn-danger waves-effect waves-light ",attrs:{type:"button"},on:{click:function(r){return e.$emit("cancel")}}},[e._v(e._s(e.trans("general.cancel")))]),e._v(" "),c("button",{staticClass:"btn btn-info waves-effect waves-light",attrs:{type:"submit"}},[e.id?c("span",[e._v(e._s(e.trans("general.update")))]):c("span",[e._v(e._s(e.trans("general.save")))])])],1)])])}),[],!1,null,null,null);r.a=o.exports},w5tG:function(e,r,c){"use strict";c.r(r);var t={components:{vehicleServiceRecordForm:c("UnFW").a},data:function(){return{id:this.$route.params.id}},mounted:function(){helper.hasPermission("edit-vehicle-service-record")||(helper.notAccessibleMsg(),this.$router.push("/dashboard"))}},i=c("KHd+"),o=Object(i.a)(t,(function(){var e=this,r=e.$createElement,c=e._self._c||r;return c("div",[c("div",{staticClass:"page-titles"},[c("div",{staticClass:"row"},[c("div",{staticClass:"col-12 col-sm-6"},[c("h3",{staticClass:"text-themecolor"},[e._v(e._s(e.trans("transport.edit_vehicle_service_record")))])]),e._v(" "),c("div",{staticClass:"col-12 col-sm-6"},[c("div",{staticClass:"action-buttons pull-right"},[c("button",{staticClass:"btn btn-info btn-sm",on:{click:function(r){return e.$router.push("/transport/vehicle/service/record")}}},[c("i",{staticClass:"fas fa-list"}),e._v(" "),c("span",{staticClass:"d-none d-sm-inline"},[e._v(e._s(e.trans("transport.vehicle_service_record")))])])])])])]),e._v(" "),c("div",{staticClass:"container-fluid"},[c("div",{staticClass:"card card-form"},[c("div",{staticClass:"card-body p-t-20"},[c("vehicle-service-record-form",{attrs:{id:e.id}})],1)])])])}),[],!1,null,null,null);r.default=o.exports}}]);
//# sourceMappingURL=edit.js.map?id=d109fd3be2131d2d0976