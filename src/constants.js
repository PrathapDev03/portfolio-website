// Experience Section Logo's
import AivarientLogo from './assets/company_logo/Aivarient_Logo.jpeg';
import MdeLogo from './assets/company_logo/Mde_logo.jpeg';

// Education Section Logo's
import aitLogo from './assets/education_logo/Ait_logo.png';
import SLogo from './assets/education_logo/Science_logo.jpg';
import gvtLogo from './assets/education_logo/Govt_logo.png';

// Project Section Logo's
import heartLogo from './assets/work_logo/heart.png';
import bookLogo from './assets/work_logo/book.png';
import jobLogo from './assets/work_logo/job.png';
import productLogo from './assets/work_logo/product.png';
import sentiLogo from './assets/work_logo/sentiment.png';
import solarLogo from './assets/work_logo/solor.png';
import zeptoLogo from './assets/work_logo/zepto.png';

export const SkillsInfo = [
  {
    title: 'Data Science & Machine Learning',
    skills: [
      { name: 'Data Cleaning'},
      { name: 'EDA'},
      { name: 'Supervised Learning'},
      { name: 'Model Evaluation'},
      { name: 'React Unsupervised Learning'},
      { name: 'Feature Engineering'},
      { name: 'Data Preprocessing'},
      { name: 'Deep Learning'},
      { name: 'Regression & Classification'},
      { name: 'Clustering'},
      { name: 'Time Series Forecasting'},
      { name: 'Optimization Techniques'},
      { name: 'ANN, CNN, RNN'},
    ],
  },
  {
    title: 'Statistics & NLP',
    skills: [
      { name: 'Descriptive Statistics'},
      { name: 'Text Cleaning' },
      { name: 'Sentiment Analysis'},
      { name: 'Inferential Statistics'},
      { name: 'Hypothesis Testing' },
      { name: 'Sampling Techniques' },
      { name: 'Probability' },
      { name: 'Confusion Matrix'},
      { name: 'Kurtosis'},
      { name: 'Empirical Rule'},
      { name: 'Central Limit Theorem' },
    ],
  },
  {
    title: 'Databases & Tools',
    skills: [
      { name: 'Databases: MySQL, SQL' },
      { name: 'Tools: Power BI, Advanced Excel, AWS' },
      { name: 'SQL Concepts: DDL, DML, DCL, TCL' },
      { name: 'Database Operations: Joins, Subqueries, Functions, Views, Stored Procedures' },
      { name: 'Additional Skills: Operators, Regular Expressions, DAX Formulas' }
    ],
  },
  {
    title: 'Programming & Frameworks',
    skills: [
      { name: 'Python'},
      { name: 'Python Libraries: Pandas, NumPy, Matplotlib, Seaborn, Scikit-learn, TensorFlow'},
      { name: 'R (Basic)'},
      { name: 'HTML & CSS'},
      { name: 'Programming Concepts: Functions, Classes, OOPs, Exception Handling, List/Dict Comprehensions' }
    ],
  },
  {
    title: 'Soft Skills',
    skills: [
      { name: 'Effective Communication'},
      { name: 'Analytical Thinking'},
      { name: 'Decision Making'},
      { name: 'Teamwork & Collaboration'},
      { name: 'Problem-Solving'}
    ],
  }
];

  export const experiences = [
    {
      id: 0,
      img: AivarientLogo,
      role: "Data Science Intern",
      company: "Aivarient Technologies Pvt Ltd",
      date: "Sep 2024 - June 2025",
      desc: "Using Python, Scikit-learn and TensorFlow, end-to-end machine learning models were developed and implemented to enable data-driven business decisions.Carried out thorough feature engineering, data preprocessing, and model validation to guarantee scalable and reliable ML solutions.Designed interactive dashboards using Power BI and Matplotlib, boosting clarity and communication of model insights for stakeholders.",
      skills: [
        "Python",
        "Machine Learning",
        "TensorFlow",
        "Scikit-learn",
        "MySQL",
        "Power BI",
        "EDA",
        "Feature Engineering",
        "Deep Learning",
        "NLP",
      ],
    },
    {
      id: 1,
      img: MdeLogo,
      role: "Data Analytics Trainee",
      company: " MedTour Easy",
      date: "Mar 2025 - Apr 2025",
      desc: "Python, Pandas, Excel and Matplotlib were used to clean, convert, and analyze healthcare datasets in order to produce insights that might be put to use. Produced analytical reports to aid with strategic planning and operational enhancements. Enhanced practical skills in analytics workflows, KPI reporting and dashboard building for business intelligence use cases. ",
      skills: [
        "R Programming",
        "Advanced Excel",
        "Data Visualization",
        "Python",
        "HTML",
        "CSS",
        "SQL",
        "Analytical Reporting",
        "Data Cleaning",
        "Data Analysis"
      ],
    }
  ];
  
  export const education = [
    {
      id: 0,
      img: aitLogo,
      school: "Dr Ambedkar Institute of Technology, Bangalore",
      date: "Dec 2020 - July 2024",
      grade: "7.81 CGPA",
      desc: "I completed my Bachelor of Engineering in Electronics and Communication Engineering from Dr. Ambedkar Institute of Technology, Bengaluru. During my studies, I gained a strong foundation in core engineering concepts such as digital electronics, communication systems, microprocessors, embedded systems, and signal processing. I also worked on multiple technical projects and participated in workshops that helped strengthen my analytical, problem-solving, and practical engineering skills.",
      degree: "Bacelor of Eleectronics and Communication Engineering",
    },
    {
      id: 1,
      img: SLogo,
      school: "Science Academy pu College, Davangere",
      date: "Mar 2019 - Apr 2020",
      grade: "85%",
      desc: "I completed my Pre-University education from Science Academy PU College, Davanagere, where I built a strong foundation in core science subjects. Studying Physics, Chemistry, Mathematics, and Biology helped me develop analytical thinking, problem-solving skills, and logical reasoning. My time at Science Academy also exposed me to various academic activities and assignments that strengthened my interest in technology and shaped my path toward engineering and data-driven fields.",
      degree: "Pre-University education - PCMB",
    },
    {
      id: 2,
      img: gvtLogo,
      school: "Govt high school, Kallihall",
      date: "Mar 2017 - Mar 2018",
      grade: "74.24%",
      desc: "I completed my Class 10 education from Govt High School, Kallihal, where I developed a strong academic foundation across core subjects. My schooling helped build essential skills such as discipline, problem-solving, and logical thinking, which supported my transition into higher secondary studies and shaped my academic growth.",
      degree: "Class 10th Board - SSLC",
    }
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Heart Attack Prediction Using ECG Images (Deep Learning – CNN)",
      description:
        "This project focuses on predicting heart attack risk by analyzing ECG images using a Convolutional Neural Network (CNN). The model classifies ECG signals into four categories: Myocardial Infarction, Abnormal Heartbeat, History, and Normal. I performed image preprocessing (resizing, normalization), applied data augmentation, and optimized the CNN architecture using techniques like dropout and early stopping. The model achieved high accuracy and provides valuable support for early detection of cardiac issues, enabling faster medical decisions.",
      image: heartLogo,
      tags: ["Python", "Deep Learning", "CNN", "TensorFlow", "Keras", "Image Processing"],
      github: "https://github.com/PrathapDev03/Heart_Attack_prediction/blob/main/CNN_HAP.ipynb"
    },
    {
      id: 1,
      title: "Book Recommendation System",
      description:
        "This project involves building a Book Recommendation System that predicts which books users are most likely to enjoy based on their past interactions and the behavior of similar users. I implemented Collaborative Filtering using Python and Scikit-learn, performed data preprocessing, and constructed user–item matrices to compute similarity scores. The system generates personalized book suggestions and showcases how recommendation algorithms are used in real-world platforms like Amazon and Goodreads to enhance user experience.",
      image: bookLogo,
      tags: ["Python", "Machine Learning", "Collaborative Filtering", "Scikit-learn", "Data Analysis"],
      github: "https://github.com/PrathapDev03/Book-Recommendation/blob/main/Book_Rec.ipynb"
    },
    {
      id: 2,
      title: "Naukri-Job-Market-Analysis",
      description:
        "This project entails analyzing job market trends using data from Naukri.com. I performed data cleaning, exploratory data analysis (EDA), and visualizations using Python libraries like Pandas, Matplotlib, and Seaborn. The analysis provided insights into in-demand skills, salary distributions, and job location trends. This project demonstrates how data-driven insights can inform job seekers and recruiters about market dynamics and help in strategic decision-making.",
      image: jobLogo,
      tags: ["Python", "Data Analysis", "Web Scraping", "Pandas", "Matplotlib", "Seaborn"],
      github: "https://github.com/PrathapDev03/-Naukri-Job-Market-Analysis/blob/main/Naukri%20%5BUpdated%5D.ipynb"
    },
    {
      id: 3,
      title: "Product_Recommendation",
      description:
        "This project focuses on building a Product Recommendation System that suggests products to users based on their browsing and purchase history. I utilized techniques like Content-Based Filtering and Collaborative Filtering using Python and Scikit-learn. The system analyzes user preferences and product features to generate personalized recommendations, enhancing the shopping experience. This project illustrates the application of recommendation algorithms in e-commerce platforms to drive user engagement and sales.",
      image: productLogo,
      tags: ["Python", "Machine Learning", "Recommendation Systems", "Scikit-learn", "Data Analysis"],
      github: "https://github.com/codingmastr/cmtk-email-validator",
    },
    {
      id: 4,
      title: "Sentiment-Analysis",
      description:
        "This project involves performing Sentiment Analysis on textual data to classify sentiments as positive, negative, or neutral. I employed Natural Language Processing (NLP) techniques using Python libraries such as NLTK and Scikit-learn. The workflow included data preprocessing (tokenization, stop-word removal), feature extraction (TF-IDF), and model training using algorithms like Logistic Regression and Naive Bayes. The sentiment analysis model can be applied to customer reviews, social media posts, and feedback to derive insights into public opinion and enhance decision-making processes.",
      image: sentiLogo,
      tags: ["Python", "NLP", "Sentiment Analysis", "Scikit-learn", "NLTK"],
      github: "https://github.com/PrathapDev03/Sentiment-Analysis/blob/main/NLP_code.ipynb"
    },
    {
      id: 5,
      title: "Solar-Power-Generation",
      description:
        "This project focuses on predicting solar power generation using machine learning techniques. I collected and preprocessed historical weather and solar radiation data to train regression models that forecast solar energy output. Various algorithms, including Linear Regression and Random Forest, were evaluated for accuracy. The model provides valuable insights for optimizing solar energy systems and improving efficiency in renewable energy management.",
      image: solarLogo,
      tags: ["Python", "Machine Learning", "Regression Analysis", "Scikit-learn", "Data Preprocessing"],
      github: "https://github.com/PrathapDev03/Solar-Power-Generation-Data-Analysis-and-Machine-Learning-Prediction/blob/main/Solar_power_generation%20.ipynb"
    },
    {
      id: 6,
      title: "Coding Master",
      description:
        "An ed-tech platform where users can access tech and coding-related blogs, notes, interview questions, e-books, and premium content with payment integration. Built with full-stack technologies for a seamless learning experience.",
      image: zeptoLogo,
      tags: ["React JS", "Node.js", "MongoDB", "Express", "Payment Integration"],
      github: "https://codingmasterweb.in/",
    },
    {
      id: 7,
      title: "Zepto_BI",
      description:
        "Zepto Grocery Delivery - Power BI Dashboard 🚀 Project Overview This project presents an interactive and advanced Power BI dashboard created for Zepto, a 10-minute grocery delivery company. The dashboard visualizes sales performance, customer behavior, and category-wise trends using a clean, creative layout.",
      image: imagesearchLogo,
      tags: ["Power BI", "Data Visualization", "DAX", "Dashboard Design"],
      github: "https://github.com/PrathapDev03/Zepto_BI/blob/main/Zepto_BI.pbix"
    },
  ];  