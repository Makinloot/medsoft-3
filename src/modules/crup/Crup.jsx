import { IoAddOutline } from "react-icons/io5";
import { BiEdit } from "react-icons/bi";
import { TiDeleteOutline } from "react-icons/ti";
import styles from "./Crup.module.css";
import { useAppContext } from "../../context/ContextProvider";

export default function Crup() {
  const { setIsModalOpen } = useAppContext();

  const showModal = () => {
    setIsModalOpen(true);
  };
  return (
    <div className={styles.container}>
      <div className={styles.button} onClick={showModal}>
        <IoAddOutline size={32} color="green" />
      </div>
      <div className={styles.button}>
        <BiEdit className="ant-table-cell" size={32} color="orange" />
      </div>
      <div className={styles.button}>
        <TiDeleteOutline className="ant-table-cell" size={32} color="red" />
      </div>
    </div>
  );
}
