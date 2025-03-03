export default async function ProductDetailPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const res = await fetch(`http://127.0.0.1:8000/api/products/${id}/`);
  const product = await res.json();

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
      <img
        src={product.image_url || '/placeholder.png'}
        alt={product.name}
        className="w-64 h-auto mb-4"
      />
      <p className="text-gray-600 mb-2">Price: ${product.price}</p>
      <p className="mb-2">{product.description}</p>

      <h2 className="font-semibold mt-4">Highlights</h2>
      <p>{product.highlights}</p>

      <h2 className="font-semibold mt-4">Shipping & Returns</h2>
      <p>{product.shipping_and_return_policy}</p>

      <h2 className="font-semibold mt-4">Did you know?</h2>
      <p>{product.did_you_know}</p>
    </main>
  );
}
