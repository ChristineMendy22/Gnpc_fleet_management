import React from 'react'
import Navbar from '../components/Navbar'
import PetroluemHouse from '../assets/Images/petroleum-house.jpg'
import { CarFront } from 'lucide-react'
import { StickyNote } from 'lucide-react'
import { Wrench } from 'lucide-react'
import { ClipboardList } from 'lucide-react'
import { Truck } from 'lucide-react'
import { ChartColumnBig } from 'lucide-react'
const Index = () => {
  return (
    <div>
        <Navbar />
        <div className="flex min-h-screen bg-gray-100 lg:flex-row flex-col ">
            {/* Right side */}
            <div className="flex-1 p-6">
                <p className="font-bold mb-4 text-green-900">Welcome to GNPC (Gambia)</p>
                <h1 className="text-green-900 font-bold text-5xl md:text-6xl">Vehicle Request & Fleet Utilization System </h1>
                <p className="mt-6 max-w-xl text-base md:text-lg text-gray-600 leading-8">
                    Manage vehicle requests, approvals, drivers, and fleet operations in one centralized platform.
                </p>
                <button className="bg-green-900 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-green-700">
                   <CarFront /> Request Vehicle
                </button>
            </div>

            {/* Left Side */}
            <div className="w-1/2 p-6 rounded-lg overflow-hidden">
                <img src={PetroluemHouse} alt="Petroleum House" className="w-full h-auto rounded-lg" />
            </div>
        </div>
        {/* Grid Items */}
        <div className='grid lg:grid-cols-4 md:grid-cols-3  gap-4 p-6'>
            <div className='bg-white p-4 rounded-lg shadow-md flex items-center'>
                <CarFront className='h-12 w-12 text-green-900 p-2 bg-green-100 rounded-full' />
                <div className='ml-4'>
                    <p className='text-2xl font-bold text-green-900'>50</p>
                    <p className='text-xl font-bold text-black-900'>Available Vehicles</p>
                    <p className='text-gray-500'>Ready for development</p>
                </div>
            </div>
            <div className='bg-white p-4 rounded-lg shadow-md flex items-center'>
                <StickyNote className='h-12 w-12 text-gray-500 p-2 bg-yellow-100 rounded-full' />
                <div className='ml-4'>
                    <p className='text-2xl font-bold text-yellow-500'>56</p>
                    <p className='text-xl font-bold text-black-900'>Requests Today</p>
                    <p className='text-gray-500'>Submitted today</p>
                </div>
            </div>
            <div className='bg-white p-4 rounded-lg shadow-md flex items-center'>
                <CarFront className='h-12 w-12 text-blue-900 p-2 bg-blue-100 rounded-full' />
                <div className='ml-4'>
                    <p className='text-2xl font-bold text-blue-900'>12</p>
                    <p className='text-xl font-bold text-black-900'>Vehicles In Use</p>
                    <p className='text-gray-500'>Currently on trip</p>
                </div>

            </div>
            <div className='bg-white p-4 rounded-lg shadow-md flex items-center'>
                <Wrench className='h-12 w-12 text-red-500 p-2 bg-red-100 rounded-full' />
                <div className='ml-4'>
                    <p className='text-2xl font-bold text-red-500'>03</p>
                    <p className='text-xl font-bold text-black-900'>Under Maintenance</p>
                    <p className='text-gray-500'>In maintenance</p>
                </div>
            </div>
        </div>
        <h2 className='px-6 text-2xl font-bold text-green-900 mb-4'>Quick Actions</h2>
        <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 p-6'>
            <div className='border border-gray-200 p-4 rounded-lg flex items-center'>
                <CarFront className='h-12 w-12 text-green-500 p-2 bg-green-100 rounded-full' />
                <div className='ml-4'>
                    <p className='text-xl font-bold text-black-900'>Request Vehicle</p>
                    <p className='text-gray-500'>Submit a new vehicle request</p>
                </div>

            </div>
            <div className='border border-gray-200 p-4 rounded-lg flex items-center'>
                <ClipboardList className='h-12 w-12 text-green-500 p-2 bg-green-100 rounded-full' />
                <div className='ml-4'>
                    <p className='text-xl font-bold text-black-900'>Track Vehicles</p>
                    <p className='text-gray-500'>Check status of your request</p>
                </div>
            </div>
            <div className='border border-gray-200 p-4 rounded-lg flex items-center'>
                <Truck className='h-12 w-12 text-green-500 p-2 bg-green-100 rounded-full' />
                <div className='ml-4'>
                    <p className='text-xl font-bold text-black-900'>View Fleet</p>
                    <p className='text-gray-500'>View vehicles and status</p>
                </div>
            </div>
            <div className='border border-gray-200 p-4 rounded-lg flex items-center'>
                <ChartColumnBig className='h-12 w-12 text-green-500 p-2 bg-green-100 rounded-full' />
                <div className='ml-4'>
                    <p className='text-xl font-bold text-black-900'>Reports</p>
                    <p className='text-gray-500'>View reports and analytics</p>
                </div>
            </div>

        </div>

    </div>
  )
}

export default Index
