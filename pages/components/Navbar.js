import styles from "../../styles/componentstyles/Navbar.module.css";
import DragHandleIcon from "@mui/icons-material/DragHandle";
function Navbar() {
  return (
    <div className={styles.navbar_container}>
      <div className={styles.navbar_left}>
        <h1>Gaurav Burande</h1>
      </div>

      <div className={styles.navbar_right}>
        <ul>
          <li>HOME</li>
          <li>UI/UX Designs</li>
          <li>ABOUT</li>
          <li>CONTACT ME</li>
        </ul>
      </div>

      <div className={styles.navbar_right_icon}>
        <DragHandleIcon
          style={{ width: "40px", height: "40px" }}
        ></DragHandleIcon>
      </div>
    </div>
  );
}

export default Navbar;
