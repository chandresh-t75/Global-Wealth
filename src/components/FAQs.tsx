"use client"

import { useRef, useState } from 'react';


interface SectionProps {
    id: string;
    title: string;
  }

const FAQsSection :React.FC<SectionProps> = ({ id, title })=>{

    const sectionRef = useRef<HTMLDivElement>(null);

  const scrollToSection = () => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What payment methods do you accept?',
      answer:
        'We accept various payment methods including credit cards, PayPal, and bank transfers. You can choose the most convenient option for you.',
    },
    {
      question: 'Is there a refund policy?',
      answer:
        'Yes, we have a refund policy in place. If you are not satisfied with our services, you can request a refund within 30 days of your purchase.',
    },
    {
      question: 'How do I contact customer support?',
      answer:
        'You can contact our customer support team via email, phone, or live chat. Our representatives are available 24/7 to assist you with any inquiries or issues.',
    },
    {
      question: 'Are there any additional fees?',
      answer:
        'There are no hidden fees associated with our services. The price you see is the price you pay.',
    },
    {
      question: 'Is my personal information secure?',
      answer:
        'Yes, we take the security of your personal information very seriously. We use encryption and other security measures to protect your data.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section   id={id} ref={sectionRef} className=" py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Frequently Asked Questions</h2>
        <div className="max-w-lg mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg shadow-md">
              <div
                className="p-6 cursor-pointer rounded-md"
                onClick={() => toggleFAQ(index)}
                style={{ backgroundColor: index % 2 === 0 ? '#123352' : '#C4AB7C', color: 'white' ,}}
              >
                <h3 className="text-lg font-semibold">{faq.question}</h3>
              </div>
              <div
                className={`p-6 ${activeIndex === index ? 'block' : 'hidden'}`}
                aria-hidden={activeIndex !== index}
              >
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQsSection;
