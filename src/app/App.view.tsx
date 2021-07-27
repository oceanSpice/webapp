import React, { ReactElement, Suspense } from "react"
import { Route } from "react-router-dom"
import { AppRoutes } from "./App.routes"
import { AppTransitions } from "./App.transitions"

export default function AppView(): ReactElement {
    let previousLocation = window.location.pathname
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Route
                render={({ location }: any) => {
                const nextPage = parseInt(location.pathname.replace('/', ''))
                const previousPage = parseInt(previousLocation.replace('/', ''))
                previousLocation = location.pathname
                    return (
                        <div className="appWrapper">
                            <AppTransitions pageKey={location.key} reverse={previousPage > nextPage}>
                                <AppRoutes location={location} />
                            </AppTransitions>
                        </div>
                    )
                }}
            />
        </Suspense>
    )
}