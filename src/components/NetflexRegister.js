export function NeflixRegsisterComponets() {
  return (
    <div className="">
      <p>Ready to watch? Enter your Email to create or restart</p>
      <div className="input-group ">
        <input
          type="email"
          placeholder="Enter your email"
          className="form-control"
        />
        <button type="submit" className="btn btn-danger ">
          Get Starts
          <span className="bi bi-chevron-right"></span>
        </button>
      </div>
    </div>
  );
}
