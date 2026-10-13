import React from 'react'
import AppLayout from '../layout/AppLayout'
import { Car, Gauge, MapPin, MoreHorizontal, Plus, Wrench } from 'lucide-react'
import { STATUS_STYLES, VEHICLES } from '../data/dummyData'


const Vehicles = () => {
  return (
    <AppLayout title={"Vehicles"}>
        <header className="flex items-center justify-between border-b border-slate-200 bg-white px-8 py-4">
            <div>
                <h1 className="text-lg font-semibold text-green-800">Vehicles</h1>
                <p className="text-xs text-slate-400"> vehicles registered in the fleet</p>
            </div>
            <button
                type="button"
                className="flex items-center gap-1.5 rounded-md bg-green-700 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-green-900"
            >
                <Plus size={16} /> Add Vehicle
            </button>
        </header>
        <div className="grid grid-cols-1 gap-5 p-5 md:grid-cols-2 xl:grid-cols-3">
          {VEHICLES.map((v) => (
                <div key={v.id} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
                    <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                            <div className="flex h-11 w-11 items-center justify-center rounded-md bg-slate-50 text-slate-400">
                                <Car size={20} />
                            </div>
                            <div>
                                <div className="text-sm font-semibold text-slate-800">{v.id}</div>
                                <div className="text-xs text-slate-400">{v.model}</div>
                            </div>
                        </div>
                        <button type="button" className="text-slate-300 hover:text-slate-500">
                            <MoreHorizontal size={18} />
                        </button>
                    </div>
            
                    <div className="mt-4">
                        <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ${STATUS_STYLES[v.status] ?? "bg-slate-100 text-slate-600"}`}>
                        {v.status}
                        </span>
                    </div>
            
                    <div className="mt-4 space-y-2 text-xs text-slate-500">
                        <div className="flex items-center gap-1.5">
                            <MapPin size={12} className="text-slate-400" /> {v.status}
                        </div>
                        <div className="flex items-center gap-1.5">
                            <Gauge size={12} className="text-slate-400" /> {v.mileage}
                        </div>
                        <div className="flex items-center gap-1.5">
                            <Wrench size={12} className="text-slate-400" /> Last service: {v.lastService}
                        </div>
                    </div>
            
                    {v.assignedTo && (
                        <div className="mt-4 flex items-center gap-2 rounded-md bg-slate-50 px-3 py-2 text-xs text-slate-600">
                            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-600 text-[10px] font-semibold text-white">
                                {v.assignedTo.split(" ").map((n) => n[0]).join("")}
                            </div>
                            Currently driven by {v.assignedTo}
                        </div>
                    )}
            
                    {/* <button
                        type="button"
                        className="mt-4 w-full rounded-md border border-slate-200 py-2 text-xs font-medium text-slate-600 transition-colors hover:bg-slate-50"
                    >
                        View details
                    </button> */}
                </div>
            ))}
        </div>
    </AppLayout>
  )
}

export default Vehicles