import React, { Component } from 'react';
import './App.css';
import "survey-react/survey.css"
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
    Survey
    .StylesManager
    .applyTheme("modern");

    var json = {
      "title": "FirstDash Employee Wellness Survey",
      "description": "Thank you for using our service. We would highly appreciate it if you would take the time to fill our employee wellness survey. The survey will help us better serve our employees.",
      "pages": [
          {
              "name": "page1",
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
                    "name": "Difficulty breathing or shortness of breath",
                    "title": "Difficulty breathing or shortness of breath",
                    "choices": ["Yes", "No"]
                }, 
                {
                  "type": "radiogroup",
                  "name": "cough",
                  "title": "Cough",
                  "choices": ["Yes", "No"]
                }, {
                  "type": "radiogroup",
                  "name": "Sore throat, trouble swallowing",
                  "title": "Sore throat, trouble swallowing",
                  "choices": ["Yes", "No"]
                }, {
                  "type": "radiogroup",
                  "name": "Runny nose/ stuffy nose or nasal congestion",
                  "title": "Runny nose/ stuffy nose or nasal congestion",
                  "choices": ["Yes", "No"]
                }, {
                  "type": "radiogroup",
                  "name": "Decrease or loss of smell or taste",
                  "title": "Decrease or loss of smell or taste",
                  "choices": ["Yes", "No"]
                }, {
                  "type": "radiogroup",
                  "name": "Nausea, vomiting, diarrhea, abdominal pain",
                  "title": "Nausea, vomiting, diarrhea, abdominal pain",
                  "choices": ["Yes", "No"]
                }, {
                        "type": "radiogroup",
                        "name": "using_frequency",
                        "title": "Have you travelled outside of Canada in the past 14 days?",
                        "choices": ["Yes", "No"]
                }, {
                        "type": "radiogroup",
                        "name": "contact_with_confirmed_cases",
                        "title":"Have you had close contact with a confirmed or probable case of COVID-19?",
                        "choices": ["Yes", "No"]
                }, {
                        "type": "html",
                        "name": "results",
                        "html": "<article class='intro'>  <h1 class='intro__heading intro__heading--income title'>Results of Screening Questions: </h1><ul> \t<li> If the individual answers NO to all questions from 1 through 3, they passed and can enter the workplace \t</li> \t<li>\t\t<p>If the individual answers YES to any questions from 1 through 3, they have not PASSED and should be advised that they should not enter the workplace (including any outdoor, or partially outdoor, workplaces). They should go home to self-isolate immediately and contact their health care provider or Telehealth Ontario (1 866-797-0000) to find out if they need a COVID-19 test.</p> \t\t</li></div> </article>"
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
    <div class="thank-you-message"> Thanks for completing the Survey </div>
  ) : null;



  return (
    <div className="App">
        <div>
          <div className="form-container">
          { surveyRender }
          { onSurveyCompletion } 
          </div>
        </div>
    </div>
  );
}
}

export default App;
