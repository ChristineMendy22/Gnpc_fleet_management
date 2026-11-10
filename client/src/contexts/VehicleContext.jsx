import { createContext, useContext, useEffect, useState } from "react";
import api from "../api/api";


const VehicleContext = createContext();

export const VehicleProvider = ({children}) => {
    const [vehicles, setVehicles] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchVehicles = async () => {
        setLoading(true)
        try {
            const response = await api.get('vehicles/')
            setVehicles(response.data)
        } catch (error) {
            console.log(error.message);
        }finally{
            setLoading(false)
        }
    }
    useEffect(() => {
        fetchVehicles()
    }, [])

    return (
        <VehicleContext.Provider value={{vehicles, setVehicles, loading, setLoading, fetchVehicles}}>
            {children}
        </VehicleContext.Provider>
    )
}

export const useVehicles = () => {
    const context = useContext(VehicleContext)
    if(!context) {
        throw new Error('useAuth must be used within an AuthProvider')
    }
    return context
}

