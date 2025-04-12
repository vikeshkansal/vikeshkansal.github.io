        
        
        function handleInput()
        {
            let inputText = document.getElementById("inputText").value;

            let words = inputText.split(" ");
            let newlines = inputText.split("\n");

            let lettersCount = 0;
            let spaceCount = 0;
            let wordsCount = words.length;
            let newlinesCount = newlines.length - 1;
            let specialSymbolsCount = 0;

            for(let i of inputText)
            {
                if(i == ' ') spaceCount++;
                else if (i >= 'a' && i <= 'z') lettersCount++;
                else if (i >= 'A' && i <= 'Z') lettersCount++;
                else if (i >= '0' && i <= '9') continue;
                else specialSymbolsCount++;
            }

            
            const pronouns = ["he", "she", "it", "they", "we", "i", "you", "me", "him", "her", "us", "them"];
            const prepositions = ["in", "on", "at", "for", "with", "about", "against", "between", "by", "of", "to"];
            const indefinite_articles = ["a", "an"];

            let pronounsCount = {};
            let prepositionsCount = {};
            let indefiniteArticlesCount = {};

            for(let i = 0; i < wordsCount; i++)
            {
                let numberFound = 0;
                let temp = words[i].toLowerCase();
                if(temp=="") continue;
                let realWord = '';
                
                for(let j = 0; j < temp.length; j++)
                {
                    if(temp[j] < 'a' || temp[j] > 'z') continue;
                    else if (temp[j] >= '0' && temp[j] <= '9')
                    {
                        numberFound++;
                        break;
                    }
                    realWord += temp[j];
                }

                if(numberFound) continue;
                
                if(pronouns.includes(realWord))
                {
                    if(pronounsCount[realWord]) pronounsCount[realWord]++;
                    else pronounsCount[realWord] = 1;
                }

                if(prepositions.includes(realWord))
                {
                    if(prepositionsCount[realWord]) prepositionsCount[realWord]++;
                    else prepositionsCount[realWord] = 1;
                } 
                if(indefinite_articles.includes(realWord))
                {
                    if(indefiniteArticlesCount[realWord]) indefiniteArticlesCount[realWord]++;
                    else indefiniteArticlesCount[realWord] = 1;
                }
            }

            document.getElementById("letterCount").textContent = lettersCount;
            document.getElementById("wordCount").textContent = wordsCount;
            document.getElementById("spaceCount").textContent = spaceCount;
            document.getElementById("newlineCount").textContent = newlinesCount;
            document.getElementById("symbolCount").textContent = specialSymbolsCount;


            function addIndividualCount(id, count)
            {
                let element = document.getElementById(id);
                let html = "";
                for(let word in count) html += `${word}: ${count[word]}<br>`;
                element.innerHTML = html;
            }

            addIndividualCount("pronounResults", pronounsCount);
            addIndividualCount("prepositionResults", prepositionsCount);
            addIndividualCount("articleResults", indefiniteArticlesCount);

        }