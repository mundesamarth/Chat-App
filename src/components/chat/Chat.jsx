import { useEffect, useRef, useState } from "react";
import "./chat.css";
import EmojiPicker from "emoji-picker-react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../Lib/Firebase";
import { useChatStore } from "../../Lib/chatStore";

const Chat = () => {
  const [open, setOpen] = useState(false);
  const [chat, setChat] = useState(false);
  const [text, setText] = useState("");

  const { chatId } = useChatStore();

  const endref = useRef(null);

  useEffect(() => { 
    endref.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(()=>{
    const unSub = onSnapshot(doc(db, "chats", chatId),(res)=>{
      setChat(res.data());
  })

  return () => {
    unSub();
  };
  }
  ,[chatId]);

  console.log(chat)

  const handleEmoji = (e) => {
    setText((prev) => prev + e.emoji);
    setOpen(false);
  };
  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>Jane Doe</span>
            <p>Lorem ipsum dolor </p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="./info.png" alt="" />
        </div>
      </div>
      <div className="center">
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa fugit, maiores quo, pariatur illum fugiat doloribus id debitis aliquam tempora non assumenda. Harum doloremque aperiam earum ipsa adipisci laboriosam id.
              </p>
              <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa fugit, maiores quo, pariatur illum fugiat doloribus id debitis aliquam tempora non assumenda. Harum doloremque aperiam earum ipsa adipisci laboriosam id.
              </p>
              <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa fugit, maiores quo, pariatur illum fugiat doloribus id debitis aliquam tempora non assumenda. Harum doloremque aperiam earum ipsa adipisci laboriosam id.
              </p>
              <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa fugit, maiores quo, pariatur illum fugiat doloribus id debitis aliquam tempora non assumenda. Harum doloremque aperiam earum ipsa adipisci laboriosam id.
              </p>
              <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa fugit, maiores quo, pariatur illum fugiat doloribus id debitis aliquam tempora non assumenda. Harum doloremque aperiam earum ipsa adipisci laboriosam id.
              </p>
              <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
              <img src="https://town-n-country-living.com/wp-content/uploads/2015/01/yellow-farmhouse-exterior.jpg" alt="" />
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa fugit, maiores quo, pariatur illum fugiat doloribus id debitis aliquam tempora non assumenda. Harum doloremque aperiam earum ipsa adipisci laboriosam id.
              </p>
              <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa fugit, maiores quo, pariatur illum fugiat doloribus id debitis aliquam tempora non assumenda. Harum doloremque aperiam earum ipsa adipisci laboriosam id.
              </p>
              <span>1 min ago</span>
          </div>
        </div>
        <div ref={endref}></div>
      </div>
      <div className="bottom">
        <div className="icons">
          <img src="./img.png" alt="" />
          <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />
        </div>
        <input
          type="text"
          placeholder="Type a message..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="emoji">
          <img
            src="./emoji.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
          <div className="picker">
            <EmojiPicker open={open} onEmojiClick={handleEmoji} />
          </div>
        </div>
        <button className="sendButton">Send</button>
      </div>
    </div>
  );
};

export default Chat;
