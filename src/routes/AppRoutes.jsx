import { Route, Routes } from "react-router-dom"
import Taker from "../pages/Taker"
import KitchenDisplay from "../pages/KitchenDisplay"

const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<Taker />} />
            <Route path="/kitchen" element={<KitchenDisplay />} />

        </Routes>
    )
}

export default AppRoutes