export default function NetflixHeaderComponent() {
  return (
    <>
      <div className="d-flex justify-content-between p-3">
        <h2 className="text-danger">NETFLIX</h2>

        <div className="input-group w-25">
          <select>
            <option>Language</option>
            <option>English</option>
            <option>Hindi</option>
          </select>
          <button className="btn btn-danger ms-2">Sign In</button>
        </div>
      </div>
    </>
  );
}
