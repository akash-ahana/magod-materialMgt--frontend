import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./pages/Sidebar";
import WithNav from "./Layout/WithNav";
import Parentroute from "./Layout/Parentroute";
import Login from "./pages/Auth/Login";
import Home from "./pages/Home";
import ShoopFloorreturns from "./pages/mat-mangmnt/menu/Shop Floor Returns/ShoopFloorreturns";
import Reports from "./pages/mat-mangmnt/menu/Reports/Reports";
import StoreManagement from "./pages/mat-mangmnt/menu/Store management/StoreManagement";
import Setup from "./pages/mat-mangmnt/menu/setup/Setup";
// import Customer from "./pages/mat-mangmnt/menu/Reports/Customer/Customer";
import ProfileCutting from "./pages/mat-mangmnt/menu/Shop Floor Issue/ProfileCutting";
import PendingList from "./pages/mat-mangmnt/menu/Shop Floor Returns/PendingList";
import MoveStore from "./pages/mat-mangmnt/menu/Store management/move store/MoveStore";
import Stock from "./pages/mat-mangmnt/menu/Store management/Stock/Stock";
import LocationList from "./pages/mat-mangmnt/menu/Store management/LocationList";
import LocationStock from "./pages/mat-mangmnt/menu/Store management/LocationStock";
import ResizeSheets from "./pages/mat-mangmnt/menu/Store management/ResizeSheets";
import DailyReport from "./pages/mat-mangmnt/menu/Reports/DailyReport";
import MonthlyReport from "./pages/mat-mangmnt/menu/Reports/MonthlyReport";
import BranchTransfer from "./pages/mat-mangmnt/menu/Receipt/BranchTransfer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SheetsNew from "./pages/mat-mangmnt/menu/Receipt/custjobwork/sheets and others/SheetsNew";
import SheetsDraftRVList from "./pages/mat-mangmnt/menu/Receipt/custjobwork/sheets and others/SheetsDraftRVList";
import SheetsOpenRVList from "./pages/mat-mangmnt/menu/Receipt/custjobwork/sheets and others/SheetsOpenRVList";
import SheetsClosedRVList from "./pages/mat-mangmnt/menu/Receipt/custjobwork/sheets and others/SheetsClosedRVList";
import UnitsNew from "./pages/mat-mangmnt/menu/Receipt/custjobwork/units/UnitsNew";
import UnitsDraftRVList from "./pages/mat-mangmnt/menu/Receipt/custjobwork/units/UnitsDraftRVList";
import UnitsOpenRVList from "./pages/mat-mangmnt/menu/Receipt/custjobwork/units/UnitsOpenRVList";
import UnitsClosedRVList from "./pages/mat-mangmnt/menu/Receipt/custjobwork/units/UnitsClosedRVList";
import ReturnNew from "./pages/mat-mangmnt/menu/Return/custjobwork/ReturnNew";
import ReturnCancelled from "./pages/mat-mangmnt/menu/Return/custjobwork/ReturnCancelled";
import ReturnCustomerIVList from "./pages/mat-mangmnt/menu/Return/custjobwork/ReturnCustomerIVList";
import ReturnPendingDispatchList from "./pages/mat-mangmnt/menu/Return/custjobwork/ReturnPendingDispatchList";
import ReturnSalesIVList from "./pages/mat-mangmnt/menu/Return/custjobwork/ReturnSalesIVList";
import OutwordMaterialIssueVocher from "./pages/mat-mangmnt/menu/Return/custjobwork/OutwordMaterialIssueVocher";
import PNew from "./pages/mat-mangmnt/menu/Receipt/custjobwork/parts/PNew";
import PDraftRVList from "./pages/mat-mangmnt/menu/Receipt/custjobwork/parts/PDraftRVList";
import POpenRVList from "./pages/mat-mangmnt/menu/Receipt/custjobwork/parts/POpenRVList";
import PClosedRVList from "./pages/mat-mangmnt/menu/Receipt/custjobwork/parts/PClosedRVList";
import PurOtherNew from "./pages/mat-mangmnt/menu/Receipt/puchase/others/PurOtherNew";
import PurOtherDraftRVList from "./pages/mat-mangmnt/menu/Receipt/puchase/others/PurOtherDraftRVList";
import PurOtherOpenRVList from "./pages/mat-mangmnt/menu/Receipt/puchase/others/PurOtherOpenRVList";
import PurOtherClosedRVList from "./pages/mat-mangmnt/menu/Receipt/puchase/others/PurOtherClosedRVList";
import PurchasePartsNew from "./pages/mat-mangmnt/menu/Receipt/puchase/parts/PurchasePartsNew";
import PurchasePartsDraftRVList from "./pages/mat-mangmnt/menu/Receipt/puchase/parts/PurchasePartsDraftRVList";
import PurchasePartsOpenRVList from "./pages/mat-mangmnt/menu/Receipt/puchase/parts/PurchasePartsOpenRVList";
import PurchasePartsClosedRVList from "./pages/mat-mangmnt/menu/Receipt/puchase/parts/PurchasePartsClosedRVList";
import PurchaseUnitsNew from "./pages/mat-mangmnt/menu/Receipt/puchase/units/PurchaseUnitsNew";
import PurchaseUnitsDraftRVList from "./pages/mat-mangmnt/menu/Receipt/puchase/units/PurchaseUnitsDraftRVList";
import PurchaseUnitsOpenRVList from "./pages/mat-mangmnt/menu/Receipt/puchase/units/PurchaseUnitsOpenRVList";
import PurchaseUnitsClosedRVList from "./pages/mat-mangmnt/menu/Receipt/puchase/units/PurchaseUnitsClosedRVList";
import PurchaseGasNew from "./pages/mat-mangmnt/menu/Receipt/puchase/gas/PurchaseGasNew";
import PurchasePlannedforfuture from "./pages/mat-mangmnt/menu/Return/PurchasePlanned for future/PurchasePlannedforfuture";
import ShopIssueParts from "./pages/mat-mangmnt/menu/Shop Floor Issue/Service/ShopIssueParts";
import ShopIssueUnits from "./pages/mat-mangmnt/menu/Shop Floor Issue/Service/ShopIssueUnits";
import ShopIssueIVListClosed from "./pages/mat-mangmnt/menu/Shop Floor Issue/IVListService/ShopIssueIVListClosed";
import ShopIssueIVListIssued from "./pages/mat-mangmnt/menu/Shop Floor Issue/IVListService/ShopIssueIVListIssued";
import IVListProfileCuttingClosed from "./pages/mat-mangmnt/menu/Shop Floor Issue/IVListProfileCutting/IVListProfileCuttingClosed";
import IVListProfileCuttingCurrent from "./pages/mat-mangmnt/menu/Shop Floor Issue/IVListProfileCutting/IVListProfileCuttingCurrent";
import OpenButtonClosedSheetUnit from "./pages/mat-mangmnt/menu/Receipt/OpenButtonClosedSheetUnit";
import OpenButtonOpenClosedPartList from "./pages/mat-mangmnt/menu/Receipt/OpenButtonOpenClosedPartList";
import OpenButtonOpenSheetUnit from "./pages/mat-mangmnt/menu/Receipt/OpenButtonOpenSheetUnit";
import OpenButtonDraftPartList from "./pages/mat-mangmnt/menu/Receipt/OpenButtonDraftPartList";
import OpenButtonDraftSheetUnit from "./pages/mat-mangmnt/menu/Receipt/OpenButtonDraftSheetUnit";
import ProductionMatIssueParts from "./pages/mat-mangmnt/menu/Shop Floor Issue/IVListService/IssuedComponents/ProductionMatIssueParts";
import ShopMatIssueVocher from "./pages/mat-mangmnt/menu/Shop Floor Issue/IVListProfileCutting/components/ShopMatIssueVocher";
import NavComp from "./pages/mat-mangmnt/menu/Shop Floor Issue/Service/Components/NavComp";
import MaterialAllotmentMain from "./pages/mat-mangmnt/menu/Shop Floor Issue/Service/PartsComponents/MaterialAllotment/MaterialAllotmentMain";
import ProductionMaterialIssueParts from "./pages/mat-mangmnt/menu/Shop Floor Issue/Service/PartsComponents/ProductionMaterialIssueParts";
import UnitsMatAllotmentForm from "./pages/mat-mangmnt/menu/Shop Floor Issue/Service/UnitsComponents/UnitsMatAllotmentForm";
import UnitsIssueToProduction from "./pages/mat-mangmnt/menu/Shop Floor Issue/Service/UnitsComponents/UnitsIssueToProduction";
import ReturnAsScrap from "./pages/mat-mangmnt/menu/Shop Floor Returns/ReturnComponents/ReturnAsScrap";
import ReturnToStock from "./pages/mat-mangmnt/menu/Shop Floor Returns/ReturnComponents/ReturnToStock";
import ResizeAndReturn from "./pages/mat-mangmnt/menu/Shop Floor Returns/ReturnComponents/ResizeAndReturn";
import LocationModel from "./pages/mat-mangmnt/menu/Shop Floor Returns/ReturnComponents/LocationModel";
import ModalComp from "./pages/mat-mangmnt/menu/Shop Floor Returns/ReturnComponents/ModalComp";
import ResizeAndSplittingForm from "./pages/mat-mangmnt/menu/Shop Floor Returns/ReturnComponents/ResizeAndSplittingForm";
import StockReport from "./pages/mat-mangmnt/menu/Reports/Customer/StockReport";
import PartsReport from "./pages/mat-mangmnt/menu/Reports/Customer/PartsReport";
import OutwordPartIssueVocher from "./pages/mat-mangmnt/menu/Return/custjobwork/OutwordPartIssueVocher";
import MaterialResizeAndSplittingForm from "./pages/mat-mangmnt/menu/Store management/MaterialResizeAndSplittingForm";
import ChangeLocation from "./pages/mat-mangmnt/menu/Store management/move store/ChangeLocation";
import All from "./pages/mat-mangmnt/menu/Store management/move store/All";
import Customer from "./pages/mat-mangmnt/menu/Store management/move store/Customer";
import StockList from "./pages/mat-mangmnt/menu/Store management/Stock/StockList";
import StockArrival from "./pages/mat-mangmnt/menu/Store management/Stock/StockArrival";
import StockDispatch from "./pages/mat-mangmnt/menu/Store management/Stock/StockDispatch";
import StockLedger from "./pages/mat-mangmnt/menu/Store management/Stock/StockLedger";
import OpeningStock from "./pages/mat-mangmnt/menu/Store management/Stock/OpeningStock";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer position="top-center" />

      <Routes>
        <Route element={<Login />} path="/" />

        <Route path="/home" element={<Home />} />
        <Route path="/navcomp" element={<NavComp />} />

        <Route element={<WithNav />}>
          <Route path="/MaterialManagement" element={<Parentroute />}>
            <Route path="Server" element={<Setup />}>
              <Route index={true} element={<Setup />} />
            </Route>
            <Route path="Receipt">
              <Route index={true} />
              <Route
                path="openbuttonopenclosedpartlist"
                element={<OpenButtonOpenClosedPartList />}
              />
              <Route
                path="openbuttondraftpartlist"
                element={<OpenButtonDraftPartList />}
              />
              <Route
                path="openbuttondraftsheetunit"
                element={<OpenButtonDraftSheetUnit />}
              />
              <Route
                path="openbuttonclosedsheetunit"
                element={<OpenButtonClosedSheetUnit />}
              />
              <Route
                path="openbuttonopensheetunit"
                element={<OpenButtonOpenSheetUnit />}
              />
              <Route path="customerjobwork">
                <Route index={true} />
                <Route path="parts">
                  <Route index={true} />
                  <Route path="new" element={<PNew />} />
                  <Route path="draftrvlist" element={<PDraftRVList />} />
                  <Route path="openrvlist" element={<POpenRVList />} />
                  <Route path="closedrvlist" element={<PClosedRVList />} />
                </Route>
                <Route path="units">
                  <Route index={true} />

                  <Route path="new" element={<UnitsNew />} />
                  <Route path="draftrvlist" element={<UnitsDraftRVList />} />
                  <Route path="openrvlist" element={<UnitsOpenRVList />} />
                  <Route path="closedrvlist" element={<UnitsClosedRVList />} />
                </Route>
                <Route path="sheetsandothers">
                  <Route index={true} />
                  <Route path="new" element={<SheetsNew />} />
                  <Route path="draftrvlist" element={<SheetsDraftRVList />} />
                  <Route path="openrvlist" element={<SheetsOpenRVList />} />
                  <Route path="closedrvlist" element={<SheetsClosedRVList />} />
                </Route>
              </Route>{" "}
              <Route path="purchase">
                <Route index={true} />
                <Route path="others">
                  <Route index={true} />
                  <Route path="new" element={<PurOtherNew />} />
                  <Route path="draftrvlist" element={<PurOtherDraftRVList />} />
                  <Route path="openrvlist" element={<PurOtherOpenRVList />} />
                  <Route
                    path="closedrvlist"
                    element={<PurOtherClosedRVList />}
                  />
                </Route>
                <Route path="parts">
                  <Route index={true} />
                  <Route path="new" element={<PurchasePartsNew />} />
                  <Route
                    path="draftrvlist"
                    element={<PurchasePartsDraftRVList />}
                  />
                  <Route
                    path="openrvlist"
                    element={<PurchasePartsOpenRVList />}
                  />
                  <Route
                    path="closedrvlist"
                    element={<PurchasePartsClosedRVList />}
                  />
                </Route>
                <Route path="units">
                  <Route index={true} />
                  <Route path="new" element={<PurchaseUnitsNew />} />
                  <Route
                    path="draftrvlist"
                    element={<PurchaseUnitsDraftRVList />}
                  />
                  <Route
                    path="openrvlist"
                    element={<PurchaseUnitsOpenRVList />}
                  />
                  <Route
                    path="closedrvlist"
                    element={<PurchaseUnitsClosedRVList />}
                  />
                </Route>
                <Route path="gas">
                  <Route path="new" element={<PurchaseGasNew />} />
                </Route>
              </Route>
              <Route path="branchtransfer" element={<BranchTransfer />} />
            </Route>
            <Route path="return">
              <Route index={true} />
              <Route path="customerjobwork">
                <Route index={true} />

                <Route path="new">
                  <Route index={true} element={<ReturnNew />} />
                  <Route
                    path="OutwardMaterialIssueVocher"
                    element={<OutwordMaterialIssueVocher />}
                  />
                </Route>

                <Route path="cancelled" element={<ReturnCancelled />} />
                <Route
                  path="customerivlist"
                  element={<ReturnCustomerIVList />}
                />
                <Route
                  path="pendingdispatchlist"
                  element={<ReturnPendingDispatchList />}
                />
                <Route path="salesivlist" element={<ReturnSalesIVList />} />
                <Route
                  path="OutwordMaterialIssueVocher"
                  element={<OutwordMaterialIssueVocher />}
                />
                <Route
                  path="OutwordPartIssueVocher"
                  element={<OutwordPartIssueVocher />}
                />
              </Route>
              <Route path="purchaseplannedforfuture">
                <Route index={true} element={<PurchasePlannedforfuture />} />
              </Route>
            </Route>
            <Route path="ShopfloorIssue">
              <Route index={true} />
              <Route path="Service">
                <Route index={true} />
                <Route path="Parts">
                  <Route index={true} element={<ShopIssueParts />} />
                  <Route
                    path="ShopFloorAllotmentForm"
                    element={<MaterialAllotmentMain />}
                  />
                  <Route
                    path="ProductionMaterialIssueParts"
                    element={<ProductionMaterialIssueParts />}
                  />
                </Route>
                <Route path="Units">
                  <Route index={true} element={<ShopIssueUnits />} />
                  <Route
                    path="MaterialAllotmentForm"
                    element={<UnitsMatAllotmentForm />}
                  />
                  <Route
                    path="ShopFloorMaterialIssueVocher"
                    element={<UnitsIssueToProduction />}
                  />
                </Route>
              </Route>
              <Route path="ProfileCutting">
                <Route index={true} element={<ProfileCutting />} />
              </Route>
              <Route path="IVListService">
                <Route index={true} />
                <Route path="Issued">
                  <Route index={true} element={<ShopIssueIVListIssued />} />
                  <Route
                    path="ShopMatIssueVocher"
                    element={<ProductionMatIssueParts />}
                  />
                </Route>
                <Route path="Closed">
                  <Route index={true} element={<ShopIssueIVListClosed />} />
                  <Route
                    path="ShopMatIssueVocher"
                    element={<ProductionMatIssueParts />}
                  />
                </Route>
              </Route>

              <Route path="IVListProfileCutting">
                <Route index={true} />
                <Route path="Closed">
                  <Route
                    index={true}
                    element={<IVListProfileCuttingClosed />}
                  />
                  <Route
                    path="ShopMatIssueVocher"
                    element={<ShopMatIssueVocher />}
                  />
                </Route>

                <Route path="Current">
                  <Route
                    index={true}
                    element={<IVListProfileCuttingCurrent />}
                  />
                  <Route
                    path="ShopMatIssueVocher"
                    element={<ShopMatIssueVocher />}
                  />
                </Route>
              </Route>
            </Route>
            {/* shoopfloorreturns/pendinglist/returnasscrap/location */}R
            <Route path="ShoopFloorReturns">
              <Route index={true} element={<ShoopFloorreturns />} />
              <Route path="PendingList">
                <Route index={true} element={<PendingList />} />
                <Route path="ReturnAsScrap" element={<ReturnAsScrap />} />
                <Route path="ReturnToStock" element={<ReturnToStock />} />
                <Route path="ResizeAndReturn">
                  <Route index={true} element={<ResizeAndReturn />} />
                  <Route
                    path="MaterialSplitter"
                    element={<ResizeAndSplittingForm />}
                  />
                </Route>
              </Route>
            </Route>
            <Route path="Reports">
              <Route index={true} element={<Reports />} />
              <Route path="Customer">
                <Route index={true} element={<Customer />} />
                <Route path="StockList" element={<StockReport />} />
                <Route path="PartList" element={<PartsReport />} />
              </Route>
              <Route path="DailyReports" element={<DailyReport />} />
              <Route path="MonthlyReports" element={<MonthlyReport />} />
            </Route>
            <Route path="StoreManagement">
              <Route index={true} element={<StoreManagement />} />
              <Route path="ResizeSheets">
                <Route index={true} element={<ResizeSheets />} />
                <Route
                  path="MaterialResizeAndSplittingForm"
                  element={<MaterialResizeAndSplittingForm />}
                />
              </Route>
              <Route path="MoveStore">
                <Route index={true} element={<MoveStore />} />

                <Route path="Customer" element={<Customer />} />
                <Route path="ChangeLocation" element={<ChangeLocation />} />
                <Route path="All" element={<All />} />
              </Route>
              <Route path="Stock">
                <Route index={true} element={<Stock />} />
                <Route path="StockList" element={<StockList />} />
                <Route path="StockArrival" element={<StockArrival />} />
                <Route path="StockDispatch" element={<StockDispatch />} />
                <Route path="StockLedger" element={<StockLedger />} />
                <Route path="OpeningStock" element={<OpeningStock />} />
              </Route>
              <Route path="LocationList" element={<LocationList />} />
              <Route path="LocationStock" element={<LocationStock />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
