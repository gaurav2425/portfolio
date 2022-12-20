import styles from "../../styles/componentstyles/Navbar.module.css";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import { useRouter } from "next/router";
import IconButton from "@mui/material/IconButton";
function Navbar() {
  const router = useRouter();
  return (
    <div className={styles.navbar_container}>
      <div className={styles.navbar_left}>
        <h1>Gaurav Burande</h1>
      </div>

      <div className={styles.navbar_right}>
        <ul>
          <li>HOME</li>
          <li onClick={() => router.push("/UIUx")}>UI/UX Designs</li>
          <li>ABOUT</li>
          <li>CONTACT ME</li>
        </ul>
      </div>

      <div className={styles.navbar_right_icon}>
        <IconButton
          onclick={() => {
            console.log("Hello");
          }}
        >
          <DragHandleIcon
            style={{ width: "40px", height: "40px", color: "#000000" }}
          ></DragHandleIcon>
        </IconButton>
      </div>
    </div>
  );
}

export default Navbar;
