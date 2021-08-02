# Email Exercise

This web app retrieves and displays emails from a specified server.

## Setup

Pull this image to your local machine using the ```docker pull mariojordan/email-exercise``` command in your terminal.

Run the image locally using ```docker run --name email-exercise -d -p 4200:4200 -p 3000:3000 mariojordan/email-exercise```

Access the project at the ```localhost:4200``` url to bring up the landing page. 

![LandingPage](https://user-images.githubusercontent.com/54779892/127822441-386a6f47-f78d-4917-85d8-72647e6a6808.png)

## Configuration

To test I created a dummy gmail account and entered the following configuration into the Angular configuration card for IMAP:

![image](https://user-images.githubusercontent.com/54779892/127822301-cd29a8fd-a3a9-4d6d-ad19-9c1cfccdfaf8.png)

<b>Server Type:</b> IMAP  <br />
<b>Encryption:</b> SSL/TSL<br />
<b>Server:</b> imap.gmail.com <br />
<b>Port:</b> 993 <br />

The same applied for POP but with the server changed to <b>pop.gmail.com</b> and the port changed to <b>995</b> I enabled IMAP/POP access in order to access the inbox.

Unfortunately, I was unable to find an ESP that allowed Non SSL connections. So I wasn't able to properly test the Non SSL ports and they may behave erratically.

## Project Layout

The project is set up in the ```server.js``` file. Two hosts are created on ports 3000 and 4200. The first is the Angular app hosted on port 4200. The angular app  houses the UI and other client-related functionality. The second is the Socket IO app which leverages Socket IO to emit events between the Angular UI components in order to connect to and retrieve emails from the specified email server.
