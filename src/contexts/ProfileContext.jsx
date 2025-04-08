import { createContext, useContext } from "react";

const ProfileContext= createContext()

export const useProfiles=() => useContext(ProfileContext)

const API = "https://67e8bd1920e3af747c41de76.mockapi.io/api/v1/profiles"

export const ProfileProvider =({ children})=>{


    return(
        <ProfileProvider.Provider value={{}}>
            {children}
        
        </ProfileProvider.Provider>
    ) 
}




