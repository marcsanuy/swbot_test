# swbot_test

The purpose of this test is to evaluate your research & development skills. To this end, you will code a simple integration using PHP, HTML and JavaScript (we encourage you to use Vue.js) that can talk to YodaBot, an intelligent Bot who has learned to talk like Yoda. 
This page must be hosted by you and publicly accessible. We recommend using Heroku, but you can choose the site/platform you prefer. You can see a demo of this page in the attached video. 
Note: make sure to check the Annex document to find the YodaBot API credentials, documentation and some auth pseudo-code. 
In order to complete the test successfully, you must:
1.	Display an HTML form with:
a.	An input text that will be used to send messages.
b.	A submit button.
2.	When the form is submitted (form cannot be submitted if the message is empty):
a.	Display a “writing..” text next to the form.
b.	Display the introduced message as a conversation.
c.	Perform an AJAX request sending the message value.
3.	On server-side, process the AJAX request to:
a.	Connect to the Inbenta Chatbot API and:
i.	Open a new conversation if there isn’t one already open (use the /conversation endpoint).
ii.	Send the message introduced to the current conversation (use the /conversation/message endpoint).
b.	Return the Chatbot API response (from /conversation/message) to the client-side of the AJAX request.
4.	Once the AJAX request is completed:
a.	Hide the “writing…” text.
b.	Display the message from the AJAX response on the screen as a part of the conversation. 
5.	Add some “intelligence” to the setup:
a.	Display the full conversation history upon page reload.
b.	When the bot returns 2 consecutive “not found” answers, return a response with a list of some Star Wars characters using https://swapi.co to get them.
c.	When the form message contains the word “force”, print a list of Star Wars films using https://swapi.co to get them.
6.	(optional) If you feel like playing a little bit with it, feel free to create new flows and states that impress us!




