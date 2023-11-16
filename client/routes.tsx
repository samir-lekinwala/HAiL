import { Route, createRoutesFromElements } from 'react-router-dom'

export default createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="sort" element={<Sort />} />
    <Route path="recipes" element={<Recipes />} />
    <Route path="recipes/:id" element={<RecipeDetails />} />
  </Route>,
)
