import React from 'react'

export function WalletWrapper({ children }) {
    return (
        <div className= "sm:translate-y-20 md:max-w-screen-md  md:translate-y-40	md:mt-0 m-auto  p-4">
            {children}
        </div>
    )
}

