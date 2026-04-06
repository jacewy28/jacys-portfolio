// margin impacts outside your container
// padding impacts inside your container
import Link from "next/link";
import "./styles.css";

export default function Header() {
    return(
        <div id="navBar">
            <Link href="/projects">
                <button>home</button>
            </Link>
        </div>
    )
}
