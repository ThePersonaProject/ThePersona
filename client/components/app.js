angular.module('app')
  .controller('AppCtrl', function (toneAnalysis) {
    this.toneAnalysis = toneAnalysis;
    this.submitToWatson = (text) => {
      // service logic
      console.log('triggered:', text);
      toneAnalysis(text, function (err, results) {
        console.log(results);
      });
    };
    this.prompts = {
      mode: [
        { id: 1, name: 'practice' },
        { id: 2, name: 'interview' }
      ],
      selectedMode: { id: 1, name: 'practice' },
      type: [
        { id: 1, name: 'behavorial' },
        { id: 2, name: 'technical' }
      ],
      selectedType: { id: 1, name: 'behavorial' }
    };
  })
  .component('app', {
    controller: 'AppCtrl',
    templateUrl: 'templates/app.html'
  });



    // this.prompts = (data) => {
    //   this.sessionPrompts = {
    //     behavorial: ['Tell me about yourself.', 'What excites you about joining our team?', 'How would co-workers describe the role you play on the team?'],

    //     technical: ['What\'s the difference between dot and bracket notation in a javascript object?', 'What is your favorite data structure and why?', 'What does the keyword \'new\' do?']
    //   };
    //   this.practicePrompt = this.sessionPrompts.technical[0];
    // };
