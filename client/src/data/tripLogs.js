const TRIP_LOGS_STORAGE_KEY = 'fleet-trip-logs'

export const getTripLogs = () => {
  if (typeof window === 'undefined') return []

  try {
    return JSON.parse(localStorage.getItem(TRIP_LOGS_STORAGE_KEY) || '[]')
  } catch {
    return []
  }
}

export const saveTripLog = (tripLog) => {
  const tripLogs = getTripLogs()
  const updatedTripLogs = [tripLog, ...tripLogs]

  localStorage.setItem(TRIP_LOGS_STORAGE_KEY, JSON.stringify(updatedTripLogs))
  return updatedTripLogs
}
