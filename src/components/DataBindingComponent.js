export default function DataBindingComponent() {
  var product = {
    Name: "Samsung",
    Price: 15000,
    Quantity: 5,
    Stock: true,
  };
  return (
    <div className="container-fluid">
      <h1>Product detials</h1>
      <dl className="p-3">
        <dt>Name</dt>
        <dd>{product.Name}</dd>
        <dt>Price</dt>
        <dd>{product.Price}</dd>
        <dt>Quantity</dt>
        <dd>{product.Quantity}</dd>
        <dt>In Stock</dt>
        <dd>{product.Stock ? "Yes" : "No"}</dd>
      </dl>
    </div>
  );
}
