export default function CollectionDataBindingComponent() {
  var produts = [
    "Samsung",
    " Sony",
    " Apple",
    " Microsoft",
    " Google",
    "faishon",
  ];
  return (
    <div className="container-fluid">
      <h1>Reading the collection data binding</h1>
      <ol>
        {produts.map((produt) => (
          <li key={produt}>{produt}</li>
        ))}
      </ol>
    </div>
  );
}
