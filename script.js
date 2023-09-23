
        function convertToCamelCase() {
            const inputTextArea = document.getElementById('inputTextArea');
            const inputText = inputTextArea.value;
            const words = inputText.split(/\s+/);

            const camelCaseWords = words.map((word, index) => {
                if (index === 0) {
                    // Keep the first word as is
                    return word;
                } else {
                    // Capitalize the first character of subsequent words
                    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
                }
            });

            const camelCaseText = camelCaseWords.join('');
            document.getElementById('output').textContent = camelCaseText;
            console.log(camelCaseText);
        }

