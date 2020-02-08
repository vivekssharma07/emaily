const requireLogin = require('../middleware/requireLogin')
const requireCredits = require('../middleware/requireCredits')
const Survey = require('../models/Survey')
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');

module.exports = app => {

  app.get('/api/surveys/thanks' ,(req,res) => {
    res.send('Thanks for voting!')
  })

  app.post('/api/surveys',async(req,res) => {
      const {title,body, subject,recipients} = req.body;
      
      const survey = new Survey({
          title,
          body,
          subject,
          recepients : recipients.split(',').map(email => ({email})),
          _user : req.user.id,
          dateSent :Date.now()
      })

       const mailer = new Mailer(survey, surveyTemplate(survey));

    try {
      await mailer.send();
      await survey.save();
      req.user.credits -= 1;
      const user = await req.user.save();

      res.send(user);
    } catch (err) {
      console.log("Error Response",err);
      res.status(422).send(err);
    }
  })

}