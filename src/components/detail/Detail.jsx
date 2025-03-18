import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { useChatStore } from "../../Lib/chatStore";
import { auth, db } from "../../Lib/Firebase";
import "./detail.css";
import { useUserStore } from "../../Lib/UserStore";

const Detail = () => {

  const {user, isCurrentuserBlocked, isReceiverBlocked, changeBlock,resetChat} = useChatStore();
  const {currentUser} = useUserStore();
  const handleBlock =  async () => {
    if(!user) return;

    const userDocRef = doc(db,"users", currentUser.id)
    try{
      await updateDoc(userDocRef,{
        blocked:isReceiverBlocked ? arrayRemove(user.id) : arrayUnion(user.id),
      });
      changeBlock()

    }catch(err){
      console.log(err)
    }
  };

  const handleLogout = () =>{
    auth.signOut();
    resetChat();
  }
  return (
    <div className="detail">
      <div className="user">
        <img src={user?.avatar || "./avatar.png"} alt="" />
        <h2>{user?.username}</h2>
        <p>Lorem ipsum dolor sit </p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat Settings</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Privacy & help</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared photos</span>
            <img src="./arrowDown.png" alt="" />
          </div>
          <div className="photos">
            <div className="photoItem">
              <div className="photoDetail">
                <img
                  src="https://cdn.prod.website-files.com/637391ec846652083583cb2d/64c3e1adc1b2013d51e7a116_light-photography.webp"
                  alt=""
                />
                <span>Photo_2025_4.png</span>
              </div>
              <img src="./download.png" alt="" className="icons"/>
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                <img
                  src="https://cdn.prod.website-files.com/637391ec846652083583cb2d/64c3e1adc1b2013d51e7a116_light-photography.webp"
                  alt=""
                />
                <span>Photo_2025_4.png</span>
              </div>
              <img src="./download.png" alt="" className="icons" />
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                <img
                  src="https://cdn.prod.website-files.com/637391ec846652083583cb2d/64c3e1adc1b2013d51e7a116_light-photography.webp"
                  alt=""
                />
                <span>Photo_2025_4.png</span>
              </div>
              <img src="./download.png" alt="" className="icons"/>
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                <img
                  src="https://cdn.prod.website-files.com/637391ec846652083583cb2d/64c3e1adc1b2013d51e7a116_light-photography.webp"
                  alt=""
                />
                <span>Photo_2025_4.png</span>
              </div>
              <img src="./download.png" alt="" className="icons"/>
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                <img
                  src="https://cdn.prod.website-files.com/637391ec846652083583cb2d/64c3e1adc1b2013d51e7a116_light-photography.webp"
                  alt=""
                />
                <span>Photo_2025_4.png</span>
              </div>
              <img src="./download.png" alt="" className="icons"/>
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                <img
                  src="https://cdn.prod.website-files.com/637391ec846652083583cb2d/64c3e1adc1b2013d51e7a116_light-photography.webp"
                  alt=""
                />
                <span>Photo_2025_4.png</span>
              </div>
              <img src="./download.png" alt="" className="icons"/>
            </div>
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Files</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <button onClick={handleBlock}>{
          isCurrentuserBlocked ? "You are Blocker!!" : isReceiverBlocked ? "User Blocked!!" : "Block User"
          }</button>
        <button className="logout" onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Detail;
