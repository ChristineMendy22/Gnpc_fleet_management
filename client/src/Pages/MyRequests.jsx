import { useState, useMemo } from "react";
import {
  LayoutDashboard,
  FilePlus2,
  ClipboardList,
  CheckSquare,
  Users2,
  NotebookText,
  Car,
  IdCard,
  BarChart3,
  Settings,
} from "lucide-react";

// Data


const NAV_ITEMS = [
  { label: "Dashboard", icon: LayoutDashboard },
  { label: "New Request", icon: FilePlus2 },
  { label: "My Requests", icon: ClipboardList, active: true },
  { label: "Approvals", icon: CheckSquare },
  { label: "Assignments", icon: Users2 },
  { label: "Trip Logs", icon: NotebookText },
  { label: "Vehicles", icon: Car },
  { label: "Drivers", icon: IdCard },
  { label: "Reports", icon: BarChart3 },
  { label: "Admin", icon: Settings },
];

const STATUSES = [
  "All",
  "Completed",
  "Approved",
  "Assigned",
  "Pending",
  "Rejected",
  "Draft",
];

const STATUS_STYLES = {
  Completed: "bg-emerald-100 text-emerald-700",
  Approved: "bg-sky-100 text-sky-700",
  Assigned: "bg-blue-100 text-blue-800",
  Pending: "bg-amber-100 text-amber-700",
  Rejected: "bg-rose-100 text-rose-700",
  Draft: "bg-slate-200 text-slate-600",
};

const REQUESTS = [
  { date: "02 Jun", From: "Head office", To: "Brikama", purpose: "Cartridge delivery", status: "Completed" },
  { date: "06 Jun", From: "Head office", To: "Banjul Station", purpose: "Printer and cartridge delivery", status: "Completed" },
  { date: "12 Jun", From: "Home", To: "Basse", purpose: "Trip to delivery a cartridge", status: "Approved" },
  { date: "20 Jun", From: "Head office", To: "Senegambia", purpose: "Conference", status: "Rejected" },
  { date: "22 Jun", From: "Home", To: "Sanyang", purpose: "Equipment Delivery", status: "Draft" },
];


const MyRequests = () => {
  return (
    <div>MyRequests</div>
  )
}

export default MyRequests


