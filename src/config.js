// Config starter code
import React from "react";
import { createChatBotMessage } from 'react-chatbot-kit';
import LearningOptions from "./components/LearningOptions/LearningOptions";
import LinkList from "./components/LinkList/LinkList";
import avatar from "./images/avatar.png";
const config = { 
  botName: "KalanguBot",
  initialMessages: [
    createChatBotMessage("Hi, I'm here to help. What do you want to 		learn?", {
      widget: "learningOptions",
    }),
  ],
  widgets: [
    {
        widgetName: "learningOptions",
       widgetFunc: (props) => <LearningOptions {...props} />,
    },
    {
        widgetName: "EnrollmentDetailsLinks",
        widgetFunc: (props) => <LinkList {...props} />,
        props: {
          options: [
            {
              text: "Kalangu Availability",
              url:
                "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/",
              id: 1,
            },
            {
              text: "Module Requirements",
              url:
                "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
              id: 2,
            },
            {
              text: "Other",
              url: "https://frontendmasters.com",
              id: 3,
            },
          ],
        },
      },
],
customComponents: {
    // Replaces the default header
   header: () => <div style={{ backgroundColor: '#AA3C3F', padding: "10px",color:"white",borderRadius:"5px 5px 0 0" }}>Kafui</div>,
   botAvatar:() => <div style={{ color:"white",width:"70px", height:"70px", display:"flex",justifyContent:"center",alignItems: "center" }}><img src={avatar} style={{backgroundColor: '#AA3C3F',borderRadius:"100%",width:"100%", height:"100%",margin:"0 auto"}}></img><div style={{
    width: "10px",
    height: "10px",
    backgroundColor: "green",
    borderRadius: "50%",
    bottom: "50%",
    left: "50%",
    transform: "translate(-50%, 100%)"}}></div></div>
},
  customStyles: {
      
    botMessageBox: {
        backgroundColor: "#ECECEC",
      },
      chatButton: {
        backgroundColor: "#AA3C3F",
        
      },
  },
}






export default config