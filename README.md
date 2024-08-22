# email-newsletter-signup
A simple Node.js application using Express.js for creating a newsletter signup form integrated with Mailchimp. This project demonstrates how to collect user information and add new subscribers to a Mailchimp mailing list.


**Setup Instructions:**

1. **Install Dependencies**: Run `npm install` to install necessary packages.
2. **Configuration**:
   - Create a `.env` file in the root directory with the following content:
     ```
     MAILCHIMP_API_KEY=your_mailchimp_api_key
     MAILCHIMP_LIST_ID=your_mailchimp_list_id
     ```
   - Replace `your_mailchimp_api_key` and `your_mailchimp_list_id` with your actual Mailchimp API key and list ID.
3. **Run the Application**: Use `node app.js` to start the server.
4. **Access the Signup Form**: Navigate to `http://localhost:3000` in your web browser to view the signup form.

**Deployment:**

- To deploy to Heroku, follow these steps:
  1. Run `heroku create` to create a new Heroku app.
  2. Push your code with `git push heroku master`.
  3. Set environment variables in Heroku's settings or via the CLI.
