import React, { useState } from 'react';
import style from './FAQ.module.css';
import image from './FAQ 1.svg';

const FAQ = () => {
  // State to manage which FAQ is open
  const [openIndex, setOpenIndex] = useState(null);

  // Function to toggle FAQ visibility
  const handleToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const faqs = [
    {
      question: 'What is HomeChef?',
      answer: 'HomeChef is a platform that provides recipes for home-cooked meals.',
    },
    {
      question: 'Is HomeChef free to use?',
      answer: 'Yes, HomeChef is completely free to use.',
    },
    {
      question: 'Are the recipes beginner-friendly?',
      answer: 'Absolutely! We focus on easy and simple recipes for beginners.',
    },
    {
      question: 'Can I search by the ingredients I have?',
      answer: 'Yes, you can search for recipes based on ingredients.',
    },
    {
      question: 'Do I need an account to access recipes?',
      answer: 'No account is required to access recipes.',
    },
  ];

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Frequently Asked Questions</h1>
      <div className={style.faq_container}>
        <div className={style.faq_container1}>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`${style.faq_box} ${openIndex === index ? style.open : ''}`}
            >
              <p>
                {faq.question}{' '}
                <span
                  className={style.faq_span}
                  onClick={() => handleToggle(index)}
                >
                  {openIndex === index ? '-' : '+'}
                </span>
              </p>
              {openIndex === index && (
                <p className={style.faq_text}>
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
        <div className="faq_image">
          <img src={image} alt="FAQ illustration" />
        </div>
      </div>
    </div>
  );
};

export default FAQ;
