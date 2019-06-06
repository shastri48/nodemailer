## This APP is based on npm package nodemailer

This is a node application based on `nodemailer`
It is used for : 
1. Sending emails through custom UI
2. Will be sent through the email and password provided
3. Can send to multiple person at a time
4. Can make a logic to schedule the time for sending mail.
5. Can display custom name with original email.
6. Can send with own designed `HTML` email as well as text based email


#### IT consists of three parts
##### Part I
1. It includes email service provider
2. It contains authentication details as `EMAIL` and `PASSWORD`

##### Part II
1. Has `mailOption` which includes details of mail as (to/from/subject/text)

##### Part III
1. It uses `sendMail` function to send mail along with `mailOption` parameter.
2. Takes a callback for producing the status of the email processed. 
