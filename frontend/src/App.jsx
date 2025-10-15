import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ClientProvider } from "./context/client-context.jsx"
import Layout from "./components/Layout.jsx"
import ProfileLayout from "./components/ProfileLayout.jsx"
import Home from "./pages/Home.jsx"
import Dashboard from './pages/UserProfile/Dashboard.jsx'
import Clients from "./pages/Clients/Clients.jsx"
import ClientDetail from "./pages/Clients/ClientDetail.jsx"
import CreateClient from "./pages/Clients/CreateClient.jsx"
import Gallery from './pages/UserProfile/Gallery.jsx'
import Reviews from './pages/UserProfile/Reviews.jsx'
import Income from './pages/UserProfile/Income.jsx'
import Trending from "./pages/Trending/Trending.jsx"
import TrendingDetail from "./pages/Trending/TrendingDetail.jsx"

export default function App () {

  return (
    <>
      <ClientProvider>
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />}/>
                <Route path="trending" element={<Trending />}/>
                <Route path="trending/:person" element={<TrendingDetail />}/>
                
                <Route path="profile" element={<ProfileLayout />}>
                  <Route index element={<Dashboard />}/>
                  <Route path="gallery" element={<Gallery />}/>
                  <Route path="reviews" element={<Reviews />}/>
                  <Route path="income" element={<Income />}/>
                  <Route path="create-client" element={<CreateClient />}/>
                  <Route path="clients" element={<Clients />}/>
                  <Route path="clients/:client" element={<ClientDetail />}/>
                </Route>
              </Route>
            </Routes>
        </BrowserRouter>
      </ClientProvider>
    </>
  )
}

