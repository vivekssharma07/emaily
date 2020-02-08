const sendgrid = require('sendgrid')
const helper = sendgrid.mail;
const keys = require('../config/keys')

class Mailer extends helper.Mail {
    constructor({subject,recipients},content) {
        super()
        
        this.sgAPI = sendgrid(keys.SEND_GRID_KEY)
        this.from_email = new helper.Email('no-reply@emaily.com');
        this.subject = subject;
        this.body = new helper.Content('text/html',content)
        this.recipients = this.formatRecipients(recipients)
        this.addContent(this.body)
        this.addClickTracking()
        this.addRecipients()
    }

    formatRecipients(recipients) {
        return recipients.map(({email}) => {
            return new helper.Email(email);
        }) 
    }

    addClickTracking() {
        const trackingSettings = new helper.TrackingSettings();
        const clickTracking = new helper.ClickTracking(true, true);
    
        trackingSettings.setClickTracking(clickTracking);
        this.addTrackingSettings(trackingSettings);
      }

    addRecipients() {
        const perspnalize = new helper.Personalization();

        this.recipients.forEach((recipient) => {
            perspnalize.addTo(recipient)
        })
        this.addPersonalization(perspnalize)
    }

    async send () {
        const request = this.sgAPI.emptyRequest({
            method :'POST',
            path : '/v3/mail/send',
            body : this.toJSON()
        })

        const response = this.sgAPI.API(request)

        return response;
    }
}


module.exports = Mailer;