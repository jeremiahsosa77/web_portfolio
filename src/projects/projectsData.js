import projectone from "../assets/project-1.png";
import projecttwo from "../assets/project-2.png";
import projectthree from "../assets/project-3.png";

const projects = {
    1: {
        title: "AI Chat Application",
        image: projectone,
        discription: (
            <>
                <p>
                An AI chatbot application, made with Next.js, the OpenAI API, and AWS. Designed 
                a smooth chat interface using Next.js and connecting it to the OpenAI API for intelligent responses. 
                With AWS providing robust hosting and backend support, ensuring the chatbot is scalable and responsive.
                </p>
            </>
        ),
        github: "https://github.com",
        demo: "https://netlify.com",
    },
    2: {
        title: "ML Stock Price Predictor",
        image: projecttwo,
        discription: (
            <>
                <p>
                Developed a machine learning model to predict stock prices using historical market 
                data and indicators like MACD, RSI, Stoch, ADX, BBands, and MMO. Executed a responsive web application 
                with React for real-time stock analysis and portfolio management, incorporating Flask Security for secure 
                user account management and notifications based on market sentiment analysis and machine learning predictions.
                </p>
            </>
        ),
        github: "https://github.com",
        demo: "https://netlify.com",
    },
    3: {
        title: "Contact List",
        image: projectthree,
        discription: (
            <>
                <p>
                Developed a dynamic Contact List application using Reactjs, facilitating real-time user interactions 
                and improving usability for over 100 simulated users. Leveraged Flask and Python to create RESTful APIs, handling data operations 
                such as create, read, update, and delete (CRUD), which upgraded the application's responsiveness and scalability. 
                </p>
            </>
        ),
        github: "https://github.com",
        demo: "https://netlify.com",
    },
};

export default projects;