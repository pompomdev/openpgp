/*
        Copyright 2024 Carlos Henrique <ch.carlosh.enr.ique2.112@gmail.com>

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

Additional Rules:

1. You must retain the original copyright notice and license information when distributing the software or any modifications created from it.
2. This software is provided "as is," without any warranties or conditions of any kind, either express or implied, including but not limited to the implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement.
3. In no event shall the authors or copyright holders be held liable for any claims, damages, or other liabilities arising out of the use or inability to use the software.
4. You are not allowed to use the name of the copyright holder for any endorsement or promotional purposes without prior written permission.
5. Contributions to the software are welcome, but by submitting a contribution, you agree to license the contribution under the same license terms as the original software.

Please refer to the full Apache License, Version 2.0 for the complete set of terms and conditions.
*/

function openPopup(action) {
            var generateSection = document.getElementById('generateSection');
            var encryptSection = document.getElementById('encryptSection');
            var decryptSection = document.getElementById('decryptSection');
            var verifySection = document.getElementById('verifySection');

            if (action === 'generate') {
                generateSection.style.display = 'block';
                encryptSection.style.display = 'none';
                decryptSection.style.display = 'none';
                verifySection.style.display = 'none';
            } else if (action === 'encrypt') {
                generateSection.style.display = 'none';
                encryptSection.style.display = 'block';
                decryptSection.style.display = 'none';
                verifySection.style.display = 'none';
            } else if (action === 'decrypt') {
                generateSection.style.display = 'none';
                encryptSection.style.display = 'none';
                decryptSection.style.display = 'block';
                verifySection.style.display = 'none';
            } else if (action === 'verify') {
                generateSection.style.display = 'none';
                encryptSection.style.display = 'none';
                decryptSection.style.display = 'none';
                verifySection.style.display = 'block';
            }
        }

        function createKeyPair() {
            var name = document.getElementById('generateName').value;
            var email = document.getElementById('generateEmail').value;

            var options = {
                userIds: [{ name: name, email: email }],
                numBits: 4096,
                passphrase: ''
            };

            openpgp.generateKey(options).then(function(key) {
                console.log('Key Pair Generated');
                console.log('Public Key:', key.publicKeyArmored);
                console.log('Private Key:', key.privateKeyArmored);
            }).catch(function(error) {
                console.error('Error:', error);
            });
        }

        function encryptMessage() {
            var publicKey = document.getElementById('encryptionPublicKey').value;
            var message = document.getElementById('encryptionMessage').value;

            var options = {
                message: openpgp.message.fromText(message),
                publicKeys: openpgp.key.readArmored(publicKey).keys
            };

            openpgp.encrypt(options).then(function(ciphertext) {
                console.log('Message Encrypted');
                console.log('Ciphertext:', ciphertext.data);
            }).catch(function(error) {
                console.error('Error:', error);
            });
        }

        function decryptMessage() {
            var privateKey = document.getElementById('decryptionPrivateKey').value;
            var ciphertext = document.getElementById('decryptionMessage').value;

            var options = {
                message: openpgp.message.readArmored(ciphertext),
                privateKeys: openpgp.key.readArmored(privateKey).keys
            };

            openpgp.decrypt(options).then(function(plaintext) {
                console.log('Message Decrypted');
                console.log('Plaintext:', plaintext.data);
            }).catch(function(error) {
                console.error('Error:', error);
            });
        }

        function verifyMessage() {
            var publicKey = document.getElementById('verificationPublicKey').value;
            var message = document.getElementById('verificationMessage').value;
            var signature = document.getElementById('verificationSignature').value;

            var options = {
                message: openpgp.message.fromText(message),
                signature: openpgp.signature.readArmored(signature),
                publicKeys: openpgp.key.readArmored(publicKey).keys
            };

            openpgp.verify(options).then(function(verified) {
                console.log('Message Verified');
                console.log('Signer:', verified.signer);
                console.log('Verified:', verified.signatures[0].valid);
            }).catch(function(error) {
                console.error('Error:', error);
            });
        }