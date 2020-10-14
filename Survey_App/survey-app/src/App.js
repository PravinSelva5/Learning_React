import React, { Component } from 'react';
import './App.css';
import "survey-react/survey.css";
import * as Survey from "survey-react";



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
    this.onCompleteComponent = this.onCompleteComponent.bind(this);

  }

  onCompleteComponent = () => {
    this.setState({
      isCompleted: true
    })
  }

  render() {
    var json = {
      "title": "FirstDash Employee Wellness Survey",
      "description": "Thank you for using our service. We would highly appreciate it if you would take the time to fill our employee wellness survey. The survey will help us better serve our employees.",
      "pages": [
          {
              "name": "page1",
              "title": "Are you currently experiencing any of these issues in question 1? Call 911 if you are.",
              "elements": [
                  { 
                      "type": "text",
                      "name": "Employee ID",
                      "title": "Employee ID",
                      "inputType": "number",
                      "hideNumber": false
                  },
                  {
                      "type": "radiogroup",
                      "name": "using_duration",
                      "title": "1. Are you experiencing: severe difficulty breathing, severe chest pain, feeling confused or unsure of where you are, losing consciousness?",
                      "choices": ["Yes", "No"]
                  }, {
                      "type": "radiogroup",
                      "name": "using_frequency",
                      "title": "2. How old are you?",
                      "choices": ["9 years old or younger", "10 to 19 years old", "20 to 29 years old"," 30 to 39 years old", "40 to 49 years old","50 to 59 years old","60 to 69 years old", "70 to 79 years old", "80 years old or older"]
                  }, {
                      "type": "checkbox",
                      "name": "cancel_reason",
                      "title": "Are you currently experiencing any of these symptoms? Choose any/all that are new, worsening, and not related to other known causes or conditions.",
                      "hasOther": true,
                      "choices": [
                          "Fever (Temperature of 37.8 degrees Celsius/100 degrees Fahrenheit or higher)",
                          "Chills",
                          "Cough that's new or worsening (Continuous, more than usual, not related to other known causes or conditions (for example, COPD))",
                          "Barking cough, making a whistling noise when breathing (Croup, not related to other known causes or conditions)",
                          "Shortness of breath (Out of breath, unable to breathe deeply, not related to other known causes or conditions (for example, asthma))",
                          "Sore throat (Not related to other known causes or conditions (for example, seasonal allergies, acid reflux))",
                          "Difficulty swallowing (Painful swallowing, not related to other known causes or conditions)",
                          "Runny nose (Not related to other known causes or conditions (for example, seasonal allergies, being outside in cold weather))",
                          "Stuffy or congested nose (Not related to other known causes or conditions (for example, seasonal allergies))", 
                          "Decrease or loss of taste or smell (Not related to other known causes or conditions (for example, allergies, neurological disorders))",
                          "Pink eye (Conjunctivitis, not related to other known causes or conditions (for example, reoccurring styes))",
                          "Headache that’s unusual or long lasting (Not related to other known causes or conditions (for example, tension-type headaches, chronic migraines))",
                          "Digestive issues like nausea/vomiting, diarrhea, stomach pain (Not related to other known causes or conditions (for example, irritable bowel syndrome, anxiety in children, menstrual cramps))",
                          "Muscle aches that are unusual or long lastingNot related to other known causes or conditions (for example, a sudden injury, fibromyalgia)",
                          "Extreme tiredness that is unusual (Fatigue, lack of energy, not related to other known causes or conditions (for example, depression, insomnia, thyroid disfunction))",
                          "Falling down often (For older people)",
                          "Sluggishness or lack of appetite (For young children and infants)",
                          "None of the above"
                      ]
                  }, {
                      "type": "radiogroup",
                      "name": "satisfaction",
                      "title": "Are you getting treatment that compromises (weakens) your immune system",
                      "choices": ["Yes", "No"]
                  }, {
                    "type": "radiogroup",
                    "name": "satisfaction",
                    "title": "Do you have a condition that compromises your immune system like lupus, rheumatoid arthritis",
                    "choices": ["Yes", "No"]
                  }, {
                    "type": "radiogroup",
                    "name": "satisfaction",
                    "title": "Do you have a chronic (long-lasting) health condition such as diabetes, emphysema, asthema, heart condition.",
                    "choices": ["Yes", "No"]
                  }, {
                    "type": "radiogroup",
                    "name": "satisfaction",
                    "title": "Are you regularly going to a hospital or health care setting for a treatment such as dialysis, surgery, cancer treatment.",
                    "choices": ["Yes", "No"]
                  }, {
                    "type": "radiogroup",
                    "name": "satisfaction",
                    "title": "In the last 14 days, have you been in close physical contact with someone who currently has COVID-19?",
                    "choices": ["Yes", "No"]
                  }, {
                    "type": "radiogroup",
                    "name": "satisfaction",
                    "title": "In the last 14 days, have you been in close physical contact with someone who either: 1) is currently sick with a new cough, fever, difficulty breathing, or other symptoms associated with COVID-19? or 2) returned from outside of Canada int he last 2 weeks?",
                    "choices": ["Yes", "No"]
                  }, {
                    "type": "radiogroup",
                    "name": "satisfaction",
                    "title": "Have you travelled outside of Canada in the last 14 days? (This doesn't include essential workers who cross the Canada-US border regularly",
                    "choices": ["Yes", "No"]
                  }, 
                  
                  {
                      "type": "comment",
                      "name": "service_improvements",
                      "title": "How can we improve our service?"
                  }
              ]
          }
      ],
      "showQuestionNumbers": "off"
  };

  var surveyRender = !this.state.isCompleted ? (
    <Survey.Survey
    json = {json}
    showCompletedPage = {false}
    onComplete = {this.onCompleteComponent}/>
  ) : null;


  var onSurveyCompletion = this.state.isCompleted ? (
    <div> Thanks for completing the Survey </div>
  ) : null;



  return (
    <div className="App">
        <div>
          { surveyRender }
          { onSurveyCompletion } 
        </div>
    </div>
  );
}
}

export default App;
