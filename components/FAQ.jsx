import React, { useState } from 'react';
import style from './FAQ.module.css';
import image from './FAQ 1.svg';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const faqs = [
    {
      question: 'What is HomeChef?',
      answer: 'HomeChef is a recipe platform where you can discover, explore, and cook delicious meals with step-by-step instructions.',
    },
    {
      question: 'Is HomeChef free to use?',
      answer: 'Yes, HomeChef is completely free. You can access all recipes and features at no cost.',
    },
    {
      question: 'Are the recipes beginner-friendly?',
      answer: 'Yes, our recipes are designed for all skill levels, with clear step-by-step instructions.',
    },
    {
      question: 'Can I search by the ingredients I have?',
      answer: 'Absolutely! Use the "Search by Ingredients" feature to find recipes that match what’s in your kitchen.',
    },
    {
      question: 'Do I need an account to access recipes?',
      answer: 'No, you can view recipes without an account.',
    },
  ];

  return (
    <div>
      <h1 className={style.heading} style={{ textAlign: 'center' }}>
        Frequently Asked Questions
      </h1>
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
              <p
                className={`${style.faq_text} ${openIndex === index ? style.open : ''}`}
              >
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
        <div className={style.faq_image}>
          <img src={image} alt="FAQ illustration" />
        </div>
      </div>
    </div>
  );
};

export default FAQ;
