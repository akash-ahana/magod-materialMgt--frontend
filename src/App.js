import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./pages/Sidebar";
import WithNav from "./Layout/WithNav";
import Parentroute from "./Layout/Parentroute";
import Login from "./pages/Auth/Login";
import Home from "./pages/Home";
import Receipt from "./pages/mat-mangmnt/menu/Receipt/Receipt";
import Return from "./pages/mat-mangmnt/menu/Return/Return";
import ShopFloorIssue from "./pages/mat-mangmnt/menu/Shop Floor Issue/ShopFloorIssue";
import ShoopFloorreturns from "./pages/mat-mangmnt/menu/Shop Floor Returns/ShoopFloorreturns";
import Reports from "./pages/mat-mangmnt/menu/Reports/Reports";
import StoreManagement from "./pages/mat-mangmnt/menu/Store management/StoreManagement";
import Setup from "./pages/mat-mangmnt/menu/setup/Setup";
import Purchase from "./pages/mat-mangmnt/menu/Receipt/puchase/Purchase";
import Customer from "./pages/mat-mangmnt/menu/Reports/Customer/Customer";
import IVListServic from "./pages/mat-mangmnt/menu/Shop Floor Issue/IVListServic/IVListServic";
import Service from "./pages/mat-mangmnt/menu/Shop Floor Issue/Service/Service";
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
import IVListProfileCutting from "./pages/mat-mangmnt/menu/Shop Floor Issue/IVListProfileCutting/IVListProfileCutting";
import CustJobWork from "./pages/mat-mangmnt/menu/Receipt/custjobwork/CustJobWork";
import Parts from "./pages/mat-mangmnt/menu/Receipt/custjobwork/parts/Parts";
import Units from "./pages/mat-mangmnt/menu/Receipt/custjobwork/units/Units";
import SheetsAndOthers from "./pages/mat-mangmnt/menu/Receipt/custjobwork/sheets and others/SheetsAndOthers";
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
import ReturnCustomerJobWork from "./pages/mat-mangmnt/menu/Return/custjobwork/ReturnCustomerJobWork";
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
import PurchaseOthers from "./pages/mat-mangmnt/menu/Receipt/puchase/others/PurchaseOthers";
import PurchaseParts from "./pages/mat-mangmnt/menu/Receipt/puchase/parts/PurchaseParts";
import PurchasePartsNew from "./pages/mat-mangmnt/menu/Receipt/puchase/parts/PurchasePartsNew";
import PurchasePartsDraftRVList from "./pages/mat-mangmnt/menu/Receipt/puchase/parts/PurchasePartsDraftRVList";
import PurchasePartsOpenRVList from "./pages/mat-mangmnt/menu/Receipt/puchase/parts/PurchasePartsOpenRVList";
import PurchasePartsClosedRVList from "./pages/mat-mangmnt/menu/Receipt/puchase/parts/PurchasePartsClosedRVList";
import PurchaseUnitsNew from "./pages/mat-mangmnt/menu/Receipt/puchase/units/PurchaseUnitsNew";
import PurchaseUnits from "./pages/mat-mangmnt/menu/Receipt/puchase/units/PurchaseUnits";
import PurchaseUnitsDraftRVList from "./pages/mat-mangmnt/menu/Receipt/puchase/units/PurchaseUnitsDraftRVList";
import PurchaseUnitsOpenRVList from "./pages/mat-mangmnt/menu/Receipt/puchase/units/PurchaseUnitsOpenRVList";
import PurchaseUnitsClosedRVList from "./pages/mat-mangmnt/menu/Receipt/puchase/units/PurchaseUnitsClosedRVList";
import PurchaseGasNew from "./pages/mat-mangmnt/menu/Receipt/puchase/gas/PurchaseGasNew";
import PurchasePlannedforfuture from "./pages/mat-mangmnt/menu/Return/PurchasePlanned for future/PurchasePlannedforfuture";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer position="top-center" />

      <Routes>
        <Route element={<Login />} path="/" />

        <Route path="/home" element={<Home />} />

        <Route element={<WithNav />}>
          <Route path="/materialmanagement" element={<Parentroute />}>
            <Route path="server" element={<Setup />}>
              <Route index={true} element={<Setup />} />
            </Route>

            <Route path="receipt">
              <Route index={true} element={<Receipt />} />
              <Route path="customerjobwork">
                <Route index={true} element={<CustJobWork />} />
                <Route path="parts">
                  <Route index={true} element={<Parts />} />
                  <Route path="new" element={<PNew />} />
                  <Route path="draftrvlist" element={<PDraftRVList />} />
                  <Route path="openrvlist" element={<POpenRVList />} />
                  <Route path="closedrvlist" element={<PClosedRVList />} />
                </Route>
                <Route path="units">
                  <Route index={true} element={<Units />} />

                  <Route path="new" element={<UnitsNew />} />
                  <Route path="draftrvlist" element={<UnitsDraftRVList />} />
                  <Route path="openrvlist" element={<UnitsOpenRVList />} />
                  <Route path="closedrvlist" element={<UnitsClosedRVList />} />
                </Route>
                <Route path="sheetsandothers">
                  <Route index={true} element={<SheetsAndOthers />} />
                  <Route path="new" element={<SheetsNew />} />
                  <Route path="draftrvlist" element={<SheetsDraftRVList />} />
                  <Route path="openrvlist" element={<SheetsOpenRVList />} />
                  <Route path="closedrvlist" element={<SheetsClosedRVList />} />
                </Route>
              </Route>{" "}
              <Route path="purchase">
                <Route index={true} element={<Purchase />} />
                <Route path="others">
                  <Route index={true} element={<PurchaseOthers />} />
                  <Route path="new" element={<PurOtherNew />} />
                  <Route path="draftrvlist" element={<PurOtherDraftRVList />} />
                  <Route path="openrvlist" element={<PurOtherOpenRVList />} />
                  <Route
                    path="closedrvlist"
                    element={<PurOtherClosedRVList />}
                  />
                </Route>
                <Route path="parts">
                  <Route index={true} element={<PurchaseParts />} />
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
                  <Route index={true} element={<PurchaseUnits />} />
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
              <Route index={true} element={<Return />} />
              <Route path="customerjobwork">
                <Route index={true} element={<ReturnCustomerJobWork />} />
                <Route path="new" element={<ReturnNew />} />
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
              </Route>
              <Route path="purchaseplannedforfuture">
                <Route index={true} element={<PurchasePlannedforfuture />} />
              </Route>
            </Route>

            <Route path="shopfloorissue">
              <Route index={true} element={<ShopFloorIssue />} />
              <Route
                path="IVListprofilecutting"
                element={<IVListProfileCutting />}
              />
              <Route path="IVListservice" element={<IVListServic />} />
              <Route path="service" element={<Service />} />
              <Route path="profilecutting" element={<ProfileCutting />} />
            </Route>

            <Route path="shoopfloorreturns">
              <Route index={true} element={<ShoopFloorreturns />} />
              <Route path="pendinglist" element={<PendingList />} />
            </Route>

            <Route path="reports">
              <Route index={true} element={<Reports />} />
              <Route path="customer" element={<Customer />} />
              <Route path="dailyreports" element={<DailyReport />} />/
              <Route path="monthlyreports" element={<MonthlyReport />} />
            </Route>

            <Route path="storemanagement">
              <Route index={true} element={<StoreManagement />} />
              <Route path="movestore" element={<MoveStore />} />
              <Route path="stock" element={<Stock />} />
              <Route path="locationlist" element={<LocationList />} />
              <Route path="locationstock" element={<LocationStock />} />
              <Route path="resizesheets" element={<ResizeSheets />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
