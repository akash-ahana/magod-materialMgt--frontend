let API = "http://localhost:3002";
//let API = "http://172.16.20.39:3001";
//let API = "http://20.204.144.125:3001";

export const endpoints = {
  getCustomers: `${API}/customers/allcustomers`,
  /*getCustCodeName: `${API}/customers/allcustcodename`,
  getCustomerDets: `${API}/customers/getcustomer`,
  dueListCustomer: `${API}/customers/customerduelist`,
  overdueListCustomer: `${API}/customers/customeroverduelist`,
  dueSummaryCustomer: `${API}/customers/customerduessummary`,
  receiptsinfoCustomer: `${API}/customers/customerreceiptsinfo`,
  dLInvFormCustomer: `${API}/customers/customerdlinvform`,
  dLInvFormTaxDetsCustomer: `${API}/customers/customerdlinvformtaxdets`,
  receiptDetsCustomer: `${API}/customers/customerreceiptdets`,
  printDueReport: `${API}/customers/printduereport`,
  sendAttachmentMails: `${API}/mailer/sendDirectMail`,

  dxfupload: `${API}/file/uploaddxf`,
  getDwgFiles: `${API}/file/getdxfnames`,

  getStates: `${API}/states/allstates`,
  getStateCode: `${API}/states/getstatecode`,
  getStateName:`${API}/states/getstatename`,
  getCreditTerms: `${API}/creditterms/allcreditterms`,
  getMtrlSources: `${API}/mtrlsources/allmtrlsources`,
  getMtrlTypeLists: `${API}/mtrlgrades/allmtrltypelists`,
  getMtrlGrdTypes: `${API}/mtrlgrades/allmtrlgrdtypes`,
  getMtrlShapes: `${API}/mtrlgrades/allmtrlshapes`,
  getMtrlShapeGrds: `${API}/mtrlgrades/allmtrlshapegrades`,
  saveNewMtrlGrades: `${API}/mtrlgrades/savenewmtrlgrades`,
  getPackingLevels: `${API}/packinglevels/allpackinglevels`,
  getTaxDetails: `${API}/taxdetails/alltaxdetails`,

  getCustBOMParts: `${API}/customers/getcustomerbomparts`,
  assyPartCustomer: `${API}/customers/customerassy`,
  assyInsertPartCustomer: `${API}/customers/customerinsassembly`,
  getCustPartDetails: `${API}/customers/getcustpartdetails`,
  bomAssemblyParts: `${API}/customers/bomassemblyparts`,
  custbomAssemblyParts : `${API}/customers/custbomassemblyparts`,
  UpdateBOMAssembly:`${API}/customers/updatebomassembly`,
  DeleteBOMAssemblyPart:`${API}/customers/deletebomassmparts`,
  saveCustBOMParts: `${API}/customers/custbomparts`,
  chkAssyDupl : `${API}/customers/chkassydupl`,

  scheduleTasksCustomer: `${API}/customers/schtasksdets`,
  drawingsCustomer: `${API}/customers/customersdrawings`,
  ordStatusCustomer: `${API}/customers/orderstatus`,
  ordersCustomer: `${API}/customers/customerorders`,
  orderScheduleCustomer: `${API}/customers/orderschedule`,
  orderInvoicesCustomer: `${API}/customers/orderinvoices`,
  orderDetailsCustomer: `${API}/customers/orderdetails`,
  ordSchTasksCustomer: `${API}/customers/orderschtasks`,
  schDetsCustomer: `${API}/customers/schdets`,
  invDwgCustomer: `${API}/customers/orderinvdwg`,
  updateCustomer: `${API}/customers/customerupdate`,
  insertContactTeleNos : `${API}/customers/insertcontacttelenos`,
  getCustomerDetails: `${API}/customers/getcustomerdetails`,
  createCustomer: `${API}/customers/customer`,

 
  getCustomerContactDets: `${API}/customers/getcustomercontactdets`,
  getCustomerContactTeleDets: `${API}/customers/getcustomercontactteledets`,
  outStandingCustomers: `${API}/customers/customeroutstandings`,
  individualCustomer: `${API}/customers/outstandinginvoices`,
  pprDueListCustomer: `${API}/customers/pprcustomerduelist`,
  getCustDuesOverdues: `${API}/customers/customerduesoverdues`,
  
  mtrlStockCustomer: `${API}/customers/customermtrlstock`,
  mtrlReceiptsCustomer: `${API}/customers/customermtrlreceipts`,
  mtrlPartsReturnedCustomer: `${API}/customers/customermtrlpartsreturned`,
  mtrlScrapUnusedReturnedCustomer: `${API}/customers/customermtrlscrapUnusedreturned`,
  mtrlReceiptDetailsCustomer: `${API}/customers/customermtrlrectdetails`,
  getCustPartRects: `${API}/customers/getcustpartrects`,
  getMtrlRVList: `${API}/customers/getmtrlrvlist`,

  getMaterials: `${API}/materials/allmaterials`,
  getProcessLists: `${API}/processlists/allprocesslists`,
  getMtrlGrades: `${API}/mtrlgrades/allmtrlgrades`,
  getToleranceTypes: `${API}/tolerancetypes/alltolerancetypes`,
  getInspectionLevels: `${API}/inspectionlevels/allinspectionlevels`,
  getMtrlGrade: `${API}/mtrlgrades/mtrlgrad`,
  getMaterialSpWt: `${API}/mtrlgrades/getmaterialspwt`,

  createQuotation: `${API}/quotation/quotation`,
  getQuotations:`${API}/quotation/getquotations`,
  getQuotationList: `${API}/quotation/getquotationlist`,
  qtnStatusUpdate: `${API}/quotation/quotationstatusupdate`,
  getQtnRejnReasons: `${API}/quotation/getqtnrejnreasons`,
  saveQtnTaskListDetails: `${API}/quotation/saveqtntasklistdets`,
  saveProfileListdata: `${API}/quotation/saveprofilelistdata`,
  saveTaskDetails: `${API}/quotation/savetaskdetails`,
  getTaskMaterialRates: `${API}/quotation/gettaskmaterialrates`,
  getOperationMtrlRateList: `${API}/quotation/getoperationmtrlratelist`,
  getMtrlHandlingRates: `${API}/quotation/getmtrlhandlingrates`,
  getTaskProgrammingRates: `${API}/quotation/gettaskprogrammingrates`,
  UpdateProfileDetails: `${API}/quotation/updateprofiledetails`,
  //getTaxDetails: `${API}/taxdetails/alltaxdetails`,
  getQtntcDetails: `${API}/quotation/getqtntcdetails`,
  getQtnTaxDetails: `${API}/quotation/getqtntaxdetails`,
  getQuotationItems: `${API}/quotation/getquotationitems`,
  getTermsConditions: `${API}/termsconditions/alltermsconditions`,
  saveQuotationItems: `${API}/quotation/quotationitemslist`,
  updateQuotation: `${API}/quotation/updatequotation`,
  qtnItemsDeleteandSave: `${API}/quotation/qtnitemsdeleteandsave`,
  deleteQtnItemData: `${API}/quotation/deleteqtnitemdata`,
  qtnItemsDeletedSave: `${API}/quotation/qtnitemsdeletedsave`,
  getEstimateList: `${API}/quotation/getestimate`,
  getSelectedQuotation: `${API}/quotation/getselectedquotation`,

  getMtrlDetails: `${API}/materials/getmtrldetails`,
  getMtrlLocation: `${API}/materials/getmtrllocation`,
  getOrderSchedule: `${API}/sigmanc/getorderschedule`,
  getNCTaskList: `${API}/sigmanc/getnctasklist`,
  getNCTaskParts: `${API}/sigmanc/getnctaskparts`,
  getProgramListData: `${API}/sigmanc/getprogramlistdata`,
  getMtrlAvailability: `${API}/sigmanc/getmtrlavailability`,
  updateProgramStatus: `${API}/sigmanc/updateprogramstatus`,
  getMachineDetails: `${API}/machine/allmachines`,

  getProdSchListDetails: `${API}/production/getprodschlistdetails`,
  getNCProgramListData: `${API}/production/getncprogramlistdata`,

  getOrderData: `${API}/order/getorderdata`,
  getOrdDetailsData: `${API}/order/getorddetailsdata`,
  getSalesExecLists: `${API}/salesexecutives/allsalesexeclists`,
  getCombinedTaskSch: `${API}/order/getcombinedschdata`,
  getOrderScheduleData: `${API}/order/getorderscheduledata`,
  getSelectedSchDwgData: `${API}/order/getselectedschdwgdata`,
  getSalesTasksData: `${API}/order/getsalestasksdata`,
  getSelectedSalesTaskList: `${API}/order/getselectedsalestasklist`,
  getPrepareScheduleDetails:  `${API}/order/preparescheduledetails`,

  getPackScheduleDetails: `${API}/packinv/getpackingschedules`,
  getPackSchDetails: `${API}/packinv/getpackschdetails`,
  getExNotifDetails: `${API}/packinv/getexnotifications`,
  getPckScheduleDetails: `${API}/packinv/getpckscheduledetails`,

  getMtrlStocks: `${API}/stocks/getmtrlstocks`,
  getMtrlCodeStocks: `${API}/stocks/getmtrlcodestocks`,
  getMtrlStocksDets: `${API}/stocks/getmtrlstocksdets`,
  getStockArrivalSummary: `${API}/stocks/getstockarrivalsummary`,
  getStockArrivalReceipts: `${API}/stocks/getstockarrivalreceipts`,
  getStockArrivalReceiptList: `${API}/stocks/getstockarrivalreceiptList`,

  getSalesDispatchSummary: `${API}/stocks/getsalesdispatchsummary`,
  getSalesDispatchInvoices: `${API}/stocks/getsalesdispatchinvoices`,
  getSalesDispatchStockList: `${API}/stocks/getsalesdispatchstocklist`,

  getUserRoles: `${API}/user/getuserroles`,
  addUserRoles: `${API}/user/adduserroles`,
  updUserRoles: `${API}/user/upduserroles`,
  delUserRoles: `${API}/user/deluserroles`,
  getUserModules: `${API}/user/getusermodules`,
  addUserModules: `${API}/user/addusermodules`,
  getUserMenus: `${API}/user/getusermenus`,
  getUsers: `${API}/user/getusers`,
  addUserMenus: `${API}/user/addusermenus`,
  delUserMenus:`${API}/user/delusermenus`,
  getUnits: `${API}/units/allunits`,
  saveUsers: `${API}/user/saveusers`,
  delUsers:`${API}/user/delusers`,
  loginAPI: `${API}/user/login`,
  saveMenuRoleMapping: `${API}/user/savemenurolemapping`,
  getRoleMenus: `${API}/user/getrolemenus`,

  getDlyRepSales: `${API}/accounts/salesinvoices`,
  getTaxSummary: `${API}/accounts/taxsummary`,
  getPaymentReceipts: `${API}/accounts/paymentreceipts`,
  getPaymentRectsDetails: `${API}/accounts/paymentrectdetails`,
  getPrdSummary: `${API}/accounts/prdsummary`,*/
};
