# Internationalisation-Wikipedia-test


**Title: Successful Interface Language Switch for Authorized User in Wikipedia Web Application**

Preconditions:

The user is logged into their Wikipedia account.
Test Steps:

Navigate to the Wikipedia homepage.
Click on the "Preferences" link in the top-right corner of the page.
In the "Preferences" page, go to the "User profile" tab.
Scroll down to the "Internationalisation" section.
Select a different language from the "Interface language" dropdown menu.
Click on the "Save" button to apply the changes.
Expected Result:

The interface of the Wikipedia web application should be displayed in the language selected by the user.
Additional Notes:

Ensure that the available languages in the dropdown menu are listed as expected.
Verify that all elements of the interface (menus, buttons, labels, etc.) are correctly translated into the selected language.


**Instructions for Running the Test:**

1. Start by cloning the project from GitHub using the following git clone command:
<pre>
git clone https://github.com/OlehTereshchuk-AQA/Internationalisation-Wikipedia-test.git
</pre>
2. Navigate to the root folder and run the command npm install.
<pre>
npm install
</pre>
3. In the root directory, create a file named .env and enter valid authentication data using the environment variables WIKIUSERNAME and WIKIPASSWORD. Provide an example:
<pre>
# File: .env
# Environment variables for authentication in Wikipedia test
WIKIUSERNAME=your_username
WIKIPASSWORD=your_password
</pre>
4. Build the Docker image with the following command in the terminal:
<pre>
docker build -t internationalisation-wikipedia-test .
</pre>
5. After creating the container, execute the following command to run the created image:
<pre>
docker run --rm -v ${PWD}/playwright-report:/app/playwright-report internationalisation-wikipedia-test
</pre>

