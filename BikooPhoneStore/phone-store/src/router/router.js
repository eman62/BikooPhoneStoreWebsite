import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

export default function RouterPages() {
  const HomePage = React.lazy(() => import("../pages/HomePage"));
  const NotFoundPage = React.lazy(() => import("../pages/NotFoundPage"));
  const PowerBank = React.lazy(() => import("../pages/PowerBank"));
  const Covers = React.lazy(() => import("../pages/Covers"));
  const USB = React.lazy(() => import("../pages/USB"));
  const Charger = React.lazy(() => import("../pages/Charger"));
  const Earphone = React.lazy(() => import("../pages/Earphone"));
  const Airpods = React.lazy(() => import("../pages/Airpods"));
  const Speaker = React.lazy(() => import("../pages/Speaker"));
  const SmartWatch = React.lazy(() => import("../pages/SmartWatch"));

  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/باور بانك" element={<PowerBank />} />
        <Route path="/كفرات" element={<Covers />} />
        <Route path="/وصلات" element={<USB />} />
        <Route path="/شواحن" element={<Charger />} />
        <Route path="/سماعه بسلك" element={<Earphone />} />
        <Route path="/أيربودز" element={<Airpods />} />
        <Route path="/سبيكر" element={<Speaker />} />
        <Route path="/ساعه سمارت" element={<SmartWatch />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}
