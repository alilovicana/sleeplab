

export default function Rightbar({ profile }) {
    const HomeRightbar = () => {
        return (
            <>
                <div className="birthdayContainer">
                    <img className="birthdayImg" src="assets/gift.png" alt="" />
                    <span className="birthdayText">
                        <b>Pola Foster</b> and <b>3 other friends</b> have a birhday today.
                    </span>
                </div>
                <img className="rightbarAd" src="assets/ad.png" alt="" />
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">
                    {Users.map((u) => (
                        <Online key={u.id} user={u} />
                    ))}
                </ul>
            </>
        );
    };

    const ProfileRightbar = () => {
        return (
            <>
                <h4 className="rightbarTitle">User information</h4>
                <div className="rightbarInfo">
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">City:</span>
                        <span className="rightbarInfoValue">New York</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">From:</span>
                        <span className="rightbarInfoValue">Madrid</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">Relationship:</span>
                        <span className="rightbarInfoValue">Single</span>
                    </div>
                </div>
                <h4 className="rightbarTitle">User friends</h4>
                <div className="rightbarFollowings">
                    <div className="rightbarFollowing">
                        <img
                            src="assets/person/1.jpeg"
                            alt=""
                            className="rightbarFollowingImg"
                        />
                        <span className="rightbarFollowingName">John Carter</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img
                            src="assets/person/2.jpeg"
                            alt=""
                            className="rightbarFollowingImg"
                        />
                        <span className="rightbarFollowingName">John Carter</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img
                            src="assets/person/3.jpeg"
                            alt=""
                            className="rightbarFollowingImg"
                        />
                        <span className="rightbarFollowingName">John Carter</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img
                            src="assets/person/4.jpeg"
                            alt=""
                            className="rightbarFollowingImg"
                        />
                        <span className="rightbarFollowingName">John Carter</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img
                            src="assets/person/5.jpeg"
                            alt=""
                            className="rightbarFollowingImg"
                        />
                        <span className="rightbarFollowingName">John Carter</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img
                            src="assets/person/6.jpeg"
                            alt=""
                            className="rightbarFollowingImg"
                        />
                        <span className="rightbarFollowingName">John Carter</span>
                    </div>
                </div>
            </>
        );
    };
    return (
        <>
            <Container>
                <div className="rightbar">
                    <div className="rightbarWrapper">
                        {profile ? <ProfileRightbar /> : <HomeRightbar />}
                    </div>
                </div>
            </Container>
        </>
    );
}
const Container = styled.div`
.rightbar {
    flex: 3.5;
  }
  
  .rightbarWrapper {
    padding: 20px 20px 0 0;
  }
  
  .birthdayContainer {
    display: flex;
    align-items: center;
  }
  
  .birthdayImg {
    width: 40px;
    height: 40px;
    margin-right: 10px;
  }
  
  .birthdayText {
    font-weight: 300;
    font-size: 15px;
  }
  
  .rightbarAd {
    width: 100%;
    border-radius: 10px;
    margin: 30px 0;
  }
  
  .rightbarTitle{
      margin-bottom: 20px;
  }
  
  .rightbarFriendList {
    padding: 0;
    margin: 0;
    list-style: none;
  }
  
  .rightbarTitle{
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 10px;
  }
  
  .rightbarInfo{
    margin-bottom: 30px;
  }
  
  .rightbarInfoItem{
    margin-bottom: 10px;
  }
  
  .rightbarInfoKey{
    font-weight: 500;
    margin-right: 15px;
    color: #555;
  }
  
  .rightbarInfoValue{
    font-weight: 300;
  }
  
  .rightbarFollowings{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  
  .rightbarFollowing{
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    cursor: pointer;
  }
  
  .rightbarFollowingImg{
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 5px;
  }`;