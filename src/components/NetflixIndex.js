import "./css/NetflixIndex.css";
import { NeflixRegsisterComponets } from "./NetflexRegister";
import NetflixFooterComponent from "./NetflixFooter";
import NetflixHeaderComponent from "./NetflixHeader";
import NetflixMainComponent from "./NetflixMain";
export default function NetflixIndexComponent() {
  return (
    <div className="container-fluid p-0">
      <div className="box p-0">
        <header>
          <NetflixHeaderComponent />
        </header>
        <section className="d-flex justify-content-center align-items-center">
          <main>
            <NetflixMainComponent />
            <NeflixRegsisterComponets />
          </main>
        </section>
        \{" "}
        <footer className="bg-dark p-3">
          <NetflixFooterComponent />
        </footer>
      </div>
    </div>
  );
}
