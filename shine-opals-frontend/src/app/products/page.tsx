export default async function ProductsPage() {
  // Fetch product data from the Django API
  const res = await fetch('http://127.0.0.1:8000/api/products/');
  const products: any[] = await res.json();  // Define products as an array

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Our Products</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border p-2">
            <a href={`/products/${product.id}`} className="block">
              <img
                src={product.image_url || '/placeholder.png'}
                alt={product.name}
                className="w-full h-auto mb-2"
              />
              <h2 className="font-semibold">{product.name}</h2>
              <p className="text-gray-600">${product.price}</p>
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}
