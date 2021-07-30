[![Mailbird](https://www.getmailbird.com/wp-content/themes/MailbirdTheme/assets/images/header-mailbird-normal.svg)](https://www.getmailbird.com)

# :trophy: Full Stack Developer Skill Test
> This test is for a Web based email application, it is part of the hiring process for the Full Stack Developer position at [Mailbird](https://www.getmailbird.com).

## :writing_hand: Overview

Welcome to Mailbird's Full Stack Developer test repo.  If you've been sent here through any other method other than through a Job Application from [Mailbird](https://www.getmailbird.com) the information ofered herein is likely to be useless for you (unless you want to take on the challenge as a practice that will not be reviewed by us).

**On the other hand, if you've received this link following an interview process with [Mailbird](https://www.getmailbird.com), congratulations... we think you would be a great fit and just need to further evaluate your tech stack before moving on.**

At [Mailbird](https://www.getmailbird.com) we are obsessed with **sustainability**, as such, everything we do must conform to standards we can easily understand, replicate and project through growth.  Coding is no exception, and for this reason we highly value test submissions that showcase well structured classes, strong use of inheritance, proper naming standards, consistency throughout your code and most importantly, adhering to your chosen language best practices for performance.

Please **be mindful** of all that is stated below, we are keen on people with **extreme attention to detail** who are **independent** in their daily routine and are **able to deliver** fully working code with little to no supervision.  Please take 10 minutes to fully and carefully read everything we've laid out below and come back to it as a **checklist** once your application is ready to be submitted.

We are not benchmarking how fast you deliver the test, so completing it in one day or taking all 7 days makes very little difference, if any.  We strongly suggest you take advantage of the extra time (if you finish early) and use that time to fully review and be 100% sure your test contains **no bugs**, **security issues**, **code is top notch** and overall showcases what you are capable of doing to perfection.  This is far more important to us than quickly delivering something that doesn't meet requirements.

## :sparkle: Objective

The objective of this test is to create a small web-based email application.  Your submission will be used exclusively to evaluate and rate your skill level and is not linked to groundwork of what you will be doing if hired. Each requirement is there for a very specific reason and will test your skills as a Full Stack developer at [Mailbird](https://www.getmailbird.com). If you have any questions before you start the test please don't hesitate to ask. Better to ask ahead of time and do things right than not to ask and do things wrong.

**Note that the hiring decision will primarily be based on your performance on this test, and if you perform well on it there's a good chance we will offer you the position, as we only send it to candidates we find especially interesting.**

## :seedling: The final result should show:

* :heavy_check_mark: Your ability to **learn and work** with an unfamiliar (presumably) set of functions.
* :heavy_check_mark: Your **attention to detail** when reading instructions and your ability to work alone.
* :heavy_check_mark: Your ability to **create a solid architecture**, to **avoid code duplication** and other code smells.
* :heavy_check_mark: Your ability to improve upon and structure a **responsive website**.
* :heavy_check_mark: Your ability to set up and work with **Docker and/or Containerized applications**.
* :heavy_check_mark: Your ability to **document your work** and allow others to pick it up where you left it off with ease.
* :heavy_check_mark: Your ability to **anticipate trouble down the line** and set things on the right path from the get-go.

## :radioactive: Requirements

* :warning: Improve the existing **HTML** and **CSS** to follow best practices.
* :warning: Enhance the UI for a better user experience (leveraging **React** or **Angular** is recommended).
* :warning: Connect, using the native (or library-based) **IMAP** and **POP3** mail functions in any backend language of your choosing (extra points for **Node.js** but not required), to a mail server of the type specified in the 'Server type' Combobox. The options should be 'IMAP' and 'POP3'. The encryption options should be 'Unencrypted', 'SSL/TLS' and 'STARTTLS'.
* :warning: Clicking 'Start' should connect to the server, and the email envelopes/headers (not the entire email) for all emails in the inbox should be downloaded and displayed in the left box as they download. The columns should at least include 'From', 'Subject' and 'Date'.
* :warning: Clicking on an email in the list should select it, download the body HTML (if available), and then it should be rendered inside the box on the right side.

## :mailbox_with_mail: Mail functions and testing

You are welcome to use any library (internal to the language of your choosing or from any third-party provider) as long as you can justify the reason for choosing said library on your submission and assuming their licensing allows you to use it for commercial purposes. Care should be taken that there are **no reported security vulnerabilities** in your choices.

For testing we will be using a custom domain hosted on a share hosting account (using [cPanel](https://cpanel.net/)).  The account we will be testing with uses the following ports:

### :lock: For SSL Connections

| Protocol     | Port :hash:        |
| -----------: | :----------------- |
| IMAP         | 993                |
| POP          | 995                |
| SMTP         | 465 SSL / 587 TLS  |


### :unlock: For Non-SSL Connections

| Protocol     | Port :hash: |
| -----------: | :---------- |
| IMAP         | 143         |
| POP          | 110         |
| SMTP         | 25 and 26   |

If you opt for using a free ESP (Email Service Provider), please make sure you setup the account accordingly and either provide access to the account alongside your test submission or document the exact configuration you tested for the account to make sure we can replicate your exact test environment on your presumably working application.  If we are unable to successfully test your application with either your provided account or our custom domain as specified above, your test will be dismissed.

For testing we will always use latest stable releases publicly available across all tools.  So we will be testing with the latest docker version that is available publicly and flaged as stable.  If you need to have tighter control of your application requirements you should include validators and documentation that directly and specifically address these requirements.  Also keep in mind we may not always cater to highly customized submissions, so it is strongly recommended you keep things simple and to specifications.

The resources for your specific application are entirely up to you and you are in complete control over those through docker, just be sure to setup your container accordingly.

**Important notes:**

- :negative_squared_cross_mark: You do not need to buy security certificates.
- :negative_squared_cross_mark: You do not need to signup for any special services.
- :negative_squared_cross_mark: You do not need to test anything outside the standard ports and protocols above.
- :negative_squared_cross_mark: Testing against a free ESP is optional (or a fail safe) in case you are not confident or unable to complete testing on a custom domain.


## :eyes: What we look for in particular

* :stars: Embrace the **KISS design principle**. Simple is better than complex.
* :stars: The site as a whole, including the existing HTML and CSS, is **free from code smells and follows best practices**. The interface is intuitive, simple to use, free of typos and errors.
* :stars: The site is **responsive and works well on mobile**.
* :stars: Code duplication is kept to a minimum by using **inheritance** and otherwise unifying code.
* :stars: The solution directories and files are **nicely structured and properly named**.
* :stars: Extra points are given for those who go **beyond requirements**, **showcase creativity** and **good UI / UX concepts**.
* :stars: Your ability to **secure the containerized application** by following best practices, keeping its footprint to a minimum, and properly documenting it so we can successfully deploy it and review it.
* :stars: **Justification for decisions** that may NOT be considered the norm.

## :hourglass_flowing_sand: Time to complete

On average, applicants should be able to complete this test in 3 to 4 days. We are giving you a full week to complete and submit it for review.

If a particular situation affecting you makes it impossible to commit to this deadline, you are welcome to request an extension by replying to the email where this test was sent from.  If approved you will be given a new revised deadline depending on your request.  If your request is found not justifiable you will be disqualified, so consider your options carefully.

## :checkered_flag: Handing in the solution

Your test submission should come through as a **containerized application**.  You are welcome to use any container registry service ([Ducker Hub](https://hub.docker.com/) is free and reliable).  Your submission should be documented through the readme file on your application (similar to how this test is documented) and should offer all non-sensitive information / instructions for a correct deployment of your application and testing scenario.

**Sensitive information** from your test submission, such as account credentials (if provided) should only be shared through email in the application process alongside to the container registry link to your application.

A propper test submission should allow us to:

:one: Pull your image from the container registry. ex: `docker pull *yourimage*`

:two: Run your image as a local deployment. ex: `docker run [] *yourimage*`

:three: Test an Email address successfully based on the criteria previously stated above. :heavy_check_mark:

If your approach is more complex and needs additional setup, extra runtime arguments, additional configuration or environmental variables, **document the source code accordingly** so that we can deploy it successfully following your instructions. If we can’t deploy it for review there is a strong chance your application will be dismissed.  Please make sure you test your application carefully across different environments before submitting.  If in doubt, setting up a VM to install docker on a fresh / virgin install is a fairly simple step that can validate your submission is flawless.

If for whatever reason you're unable to complete all of the requirements, make a note of what you didn't complete, how you would have done it, and make sure that what IS completed is working perfectly and the code is nice and clean.

And of course, also feel free to ask any questions you might have about the test or the position in general.

Good luck!  :crossed_fingers: