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
import CustomerJobWork from "./pages/mat-mangmnt/menu/Return/custjobwork/CustomerJobWork";
import PurchasePlannedforfuture from "./pages/mat-mangmnt/menu/Return/Purchase – Planned for future/PurchasePlannedforfuture";
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
import New from "./pages/mat-mangmnt/menu/Receipt/custjobwork/parts/New";
import  DraftRVList  from "./pages/mat-mangmnt/menu/Receipt/custjobwork/parts/DraftRVList";
import { ClosedRVList } from "./pages/mat-mangmnt/menu/Receipt/custjobwork/parts/ClosedRVList";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import OpenRVList  from "./pages/mat-mangmnt/menu/Receipt/custjobwork/parts/OpenRVList";

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
                  <Route path="new" element={<New />} />
                  <Route path="draftrvlist" element={<DraftRVList />} />
                  <Route path="openrvlist" element={<OpenRVList />} />
                  <Route path="closedrvlist" element={<ClosedRVList />} />
                  
                </Route>
                <Route path="units" element={<Units />} />
                <Route path="sheetsandothers" element={<SheetsAndOthers />} />
              </Route>{" "}
              <Route path="purchase" element={<Purchase />} />
              <Route path="branchtransfer" element={<BranchTransfer />} />
            </Route>

            <Route path="return">
              <Route index={true} element={<Return />} />
              <Route path="customerjobwork" element={<CustomerJobWork />} />
              <Route
                path="purchaseplannedforfuture"
                element={<PurchasePlannedforfuture />}
              />
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
