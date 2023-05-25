import "./topbar.css";
export default function Topbar() {
    return (
            <div className="topbarContainer">
                <div className="topbarLeft">
                    <span className="logo">SleepLab</span>
                </div>
                <div className="topbarCenter">
                    <div className="searchbar">
                        <div className="searchIcon"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                        </svg></div>
                        <input
                            placeholder="Pretražite pacijenta prema ID broju"
                            className="searchInput"
                        />
                    </div>
                </div>
                <div className="topbarRight">
                    {/* <div className="topbarLinks">
                        <span className="topbarLink">Homepage</span>
                        <span className="topbarLink">Timeline</span>
                    </div> */}
                    {/* <div className="topbarIcons">
                        <div className="topbarIconItem">
                            <Person />
                            <span className="topbarIconBadge">1</span>
                        </div>
                        <div className="topbarIconItem">
                            <Chat />
                            <span className="topbarIconBadge">2</span>
                        </div>
                        <div className="topbarIconItem">
                            <Notifications />
                            <span className="topbarIconBadge">1</span>
                        </div>
                    </div> */}
                    {/* <img src="/assets/person/1.jpeg" alt="" className="topbarImg" /> */}
                </div>
            </div>
    );
}
