
export const STATUSES = [
  "All",
  "Completed",
  "Approved",
  "Assigned",
  "Pending",
  "Rejected",
  "Draft",
];

export const STATUS_STYLES = {
  Completed: "bg-emerald-100 text-emerald-700",
  Approved: "bg-sky-100 text-sky-700",
  Assigned: "bg-blue-100 text-blue-800",
  Pending: "bg-amber-100 text-amber-700",
  Rejected: "bg-rose-100 text-rose-700",
  Draft: "bg-slate-200 text-slate-600",
};

export const AVAILABILITY = [
  { label: "Available", count: 14, color: "bg-emerald-500", text: "text-emerald-700", bg: "bg-emerald-50" },
  { label: "In use", count: 6, color: "bg-[#123a63]", text: "text-[#123a63]", bg: "bg-blue-50" },
  { label: "Maintenance", count: 3, color: "bg-amber-500", text: "text-amber-700", bg: "bg-amber-50" },
  { label: "Out of service", count: 1, color: "bg-rose-500", text: "text-rose-700", bg: "bg-rose-50" },
];

export const VEHICLES = [
  { id: "GMC-009", model: "Toyota Corolla", status: "Available", location: "Kanifing Depot", assignedTo: "Amadou Cherno", mileage: "42,300 km", lastService: "3 Aug" },
  { id: "GMC-014", model: "Toyota Hilux", status: "In use", location: "En route to Brikama", assignedTo: "Ebrima Touray", mileage: "68,120 km", lastService: "20 Jul" },
  { id: "GMC-021", model: "Toyota Coaster", status: "Available", location: "Kanifing Depot", assignedTo: 'Modou Ceesay', mileage: "91,050 km", lastService: "15 Aug" },
  { id: "GMC-005", model: "Toyota Corolla", status: "Maintenance", location: "Workshop Bay 2", assignedTo: "Musa Jallow", mileage: "55,400 km", lastService: "In progress" },
  { id: "GMC-018", model: "Nissan Patrol", status: "Available", location: "Bakau Yard", assignedTo: 'Isatou Jallow', mileage: "33,800 km", lastService: "28 Aug" },
];

export const DRIVERS = [
  { name: "Ebrima Touray", status: "On trip" },
  { name: "Sainey Jobe", status: "On trip" },
  { name: "Modou Ceesay", status: "On trip" },
  { name: "Yaya Bojang", status: "Off duty" },
  { name: "Fatoumata Jallow", status: "Available" },
  { name: "Lamin Jarju", status: "Available" },
];

export const VEHICLE_STATUS_STYLES = {
  Available: "bg-emerald-100 text-emerald-700",
  "In use": "bg-blue-100 text-blue-800",
  Maintenance: "bg-amber-100 text-amber-700",
  "Out of service": "bg-rose-100 text-rose-700",
};