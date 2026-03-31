import RightNavBar from "./RightNavBar";
import LeftNavBar from "./LeftNavBar";

export default function NavBar() {
  return (
    <div className="d-flex justify-content-between bg-dark px-4">
      <LeftNavBar></LeftNavBar>
      <RightNavBar></RightNavBar>
    </div>
  );
}
