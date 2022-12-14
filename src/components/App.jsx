import { useState } from "react";
import Statistics from "./Statistics/Statistics";
import React from "react";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Section } from "./Section/Section";
import { Notification } from "./Notification/Notification";

export const App = () => {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    
    const handleIncrementGood = () => {
         setGood(prevState => prevState + 1);
    };
    
      const handleIncrementNeutral = () => {
         setNeutral(prevState => prevState + 1);
    };
    
      const handleIncrementBad = () => {
         setBad(prevState => prevState + 1);
    };

    const countTotalFeedback = good + neutral + bad;

    const countPositiveFeedbackPercentage = (good, neutral, bad) => {
        let positivePercentage = 0;
        positivePercentage = Math.round((100 / (good + neutral + bad)) * (good + neutral));
        return positivePercentage;
  };
    
   
        return (
          <Section title="Please leave feedback">

             <FeedbackOptions
                options={{ good: 'Good', neutral: 'Neutral', bad: 'Bad' }}
                onLeaveFeedback={{
                    good: handleIncrementGood,
                    neutral: handleIncrementNeutral,
                    bad: handleIncrementBad,}}/>
               

            <Statistics
                    good={good}
                    neutral={neutral}
                    bad={bad} 
                    total={countTotalFeedback}
                    percentage={countPositiveFeedbackPercentage(
                      good, neutral, bad)} />  
            
            <Notification
              message='There is no feedback'
              good={good}
              neutral={neutral}
              bad={bad}/>
        </Section>
    )
};
