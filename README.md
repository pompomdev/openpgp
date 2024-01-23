# OpenPGP Demo

This is a demo application that showcases the usage of the OpenPGP.js library for generating key pairs, encrypting and decrypting messages, and verifying message signatures using OpenPGP encryption.

## Usage

The application consists of an HTML file (`index.html`), a CSS file (`styles.css`), and a JavaScript file (`main.js`).

To use the application, simply open the `index.html` file in a web browser. You will see a sidebar with several buttons for different actions:

- Generate Key Pair: Allows you to generate a new key pair by providing your name and email address.
- Encrypt Message: Allows you to encrypt a message using a recipient's public key.
- Decrypt Message: Allows you to decrypt an encrypted message using your private key.
- Verify Message: Allows you to verify the signature of a message using the signer's public key.

Clicking on any of these buttons will open a popup with a form where you can enter the necessary details for each action. Once you submit the form, the corresponding JavaScript function will be called to perform the action using the OpenPGP.js library.

The output of each action will be logged to the developer console of your browser.

## Structure

The HTML file contains the basic structure of the application, including the sidebar, the main content area, and the necessary forms for each action. It also includes the necessary CSS and JavaScript files.

The CSS file (`styles.css`) is used to style the application and make it visually appealing.

The JavaScript file (`main.js`) contains the logic for handling user interactions and performing the OpenPGP actions. It includes functions for opening the popups, generating key pairs, encrypting messages, decrypting messages, and verifying message signatures.

## License

The code in this demo application is licensed under the Apache License, Version 2.0. The license terms can be found in the HTML file itself. The license grants you the freedom to use, modify, and distribute the code, subject to certain conditions and limitations.

Please refer to the Apache License, Version 2.0 for the complete set of terms and conditions.

## Contributions

Contributions to the code are welcome. By submitting a contribution, you agree to license the contribution under the same license terms as the original software.
