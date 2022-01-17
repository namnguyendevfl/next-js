import styles from './sideInfo.module.css'
import avatar from "./myAvatar.jpg";
import Image from 'next/image';
import { Icon } from "./Icons";

export default function SideInfoOffset() {
    return (
        <>
        <div className={styles["container-offset"] + " me-4 p-0"}>
        </div>
        </>
    )
} 