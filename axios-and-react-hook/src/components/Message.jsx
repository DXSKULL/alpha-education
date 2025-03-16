import { MdErrorOutline } from "react-icons/md";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

export default function Message({ message, isError = false }) {
  return (
    <div className={`message ${isError && "message-error"}`}>
      {isError ? <MdErrorOutline /> : <IoCheckmarkCircleOutline />}
      {message}
    </div>
  );
}
