import Stories from "./Stories"
import Posts from "./Posts"
import SideBar from "./SideBar"

export default function Corpo() {

    return (
        <div className="container-feed-side-bar">
            <div class="container-feed">
                <Stories />
                <Posts />
            </div>
            <SideBar />
        </div>
    )
}