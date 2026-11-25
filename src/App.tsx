import { BrowserRouter, Route, Routes } from "react-router"

import { Layout } from "@/components/layout"
import About from "@/pages/About"
import Book from "@/pages/Book"
import Home from "@/pages/Home"
import International from "@/pages/International"
import NotFound from "@/pages/NotFound"
import TreatmentDetail from "@/pages/TreatmentDetail"
import Treatments from "@/pages/Treatments"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="treatments" element={<Treatments />} />
          <Route path="treatments/:slug" element={<TreatmentDetail />} />
          <Route path="international" element={<International />} />
          <Route path="book" element={<Book />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
