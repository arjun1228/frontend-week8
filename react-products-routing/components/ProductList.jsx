import { useEffect, useState } from "react"
import { useNavigate } from "react-router"

function ProductsList(){
  let [products, setProducts] = useState([])
  let [loading, setLoading] = useState(false)
  let [error, setError] = useState(null)
  let [categoryFilter, setCategoryFilter] = useState("")
  let [priceSort, setPriceSort] = useState("")
  let [searchTerm, setSearchTerm] = useState("")

  const navigate = useNavigate()

  //navigate to product component
  const gotoProduct = (productObj)=>{
    //navigation logic
    navigate('/product', {state: {product: productObj}})
  }

  
  useEffect(() =>{
    async function getProducts(){
      setLoading(true)
      try{
      let res = await fetch('https://fakestoreapi.com/products')
      if(res.status === 200){
        //extracting json data
        let productsData = await res.json()
        setProducts(productsData)
      }
      else{
        throw new Error('Failed to fetch')
      }
    }catch(err){ 
      setError(err)
     }
     finally{
      setLoading(false)
     }
    }
    getProducts()
  }, [])

  if(loading == true){
    return <p className="text-center text-3xl text-red-500">Loading...</p>
  }

  if(error != null){
    return <p className="text-center text-3xl text-red-500">{error.message}</p>
  }

  // Filter and sort products based on selected criteria
  const getFilteredAndSortedProducts = () => {
    let filteredProducts = [...products]

    // Apply search filter
    if(searchTerm && searchTerm !== ""){
      filteredProducts = filteredProducts.filter(product => 
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    // Apply category filter
    if(categoryFilter && categoryFilter !== ""){
      filteredProducts = filteredProducts.filter(product => 
        product.category === categoryFilter
      )
    }

    // Apply price sorting
    if(priceSort === "lowToHigh"){
      filteredProducts.sort((a, b) => a.price - b.price)
    } else if(priceSort === "highToLow"){
      filteredProducts.sort((a, b) => b.price - a.price)
    }

    return filteredProducts
  }

  const itemsToDisplay = getFilteredAndSortedProducts()

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-10 text-center'>
      <div className="col-span-full flex flex-col sm:flex-row items-center justify-center gap-3">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search products..."
          className="border-2 px-3 py-2 w-full sm:w-64 bg-white"
        />

        <select 
          value={categoryFilter} 
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="border-2 px-3 py-2 w-full sm:w-64 bg-white"
        >
          <option value="">Filter By Category</option>
          <option value="electronics">Electronics</option>
          <option value="jewelery">Jewelery</option>
          <option value="men's clothing">Men's Clothing</option>
          <option value="women's clothing">Women's Clothing</option>
        </select>

        <select 
          value={priceSort} 
          onChange={(e) => setPriceSort(e.target.value)}
          className="border-2 px-3 py-2 w-full sm:w-64 bg-white"
        >
          <option value="">Sort By Price</option>
          <option value="lowToHigh">Price: Low to High</option>
          <option value="highToLow">Price: High to Low</option>
        </select>
      </div>

      {
        itemsToDisplay.map((productObj, idx) => <div onClick={() => gotoProduct(productObj)} className="shadow-md p-10 rounded-2xl "  key={idx}>
          <img src={productObj.image} alt="" className="h-44 object-contain block mx-auto mb-10" />
          <p>{productObj.title}</p>
          <p>Price: {productObj.price}</p>
          <p>⭐: {productObj.rating?.rate}</p>
          </div>)
      }

    </div>
  )
}

export default ProductsList