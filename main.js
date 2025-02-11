 

 
window.onload = function () {
    const content = document.getElementById('content');  

    
    Swal.fire({
        title: 'Please enter your username and password',
        html: `
            <input type="text" id="username" class="swal2-input" placeholder="Username">
            <input type="password" id="password" class="swal2-input" placeholder="Password">
        `,
        focusConfirm: false,
        allowOutsideClick: false,  
        preConfirm: () => {
            
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

         
            if (username === 'ahmed' && password === 'ahmed2025') {
                content.classList.add('visible');  
                return true;  
            } else {
                
                Swal.fire({
                    icon: 'error',
                    title: 'Incorrect username or password!',
                    text: 'Please try again.',
                }).then(() => {
                    window.location.href = "about:blank"; 
                });
                return false;
            }
        }
    });
};
 
 

document.addEventListener("DOMContentLoaded", () => {
    const text = "Welcome to our site! Explore the groundbreaking Toyota Camry Triadex 2024, reimagined with digital twin technology. This platform empowers users to visualize and discover the innovative design, advanced features, and futuristic style of this iconic car. By leveraging cutting-edge simulations, users can predict costs, assess performance, and explore dynamic functionalities. Additionally, our tools analyze competitive advantages, ensuring you understand the impact of digital transformation in the automotive world. Dive in to unlock a world of possibilities, innovation, and smarter decision-making for your future vehicle!";
    const paragraph = document.querySelector(".intro1");
    let index = 0;

    function typeWriter() {
        if (index < text.length) {
            paragraph.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, 50); 
        }
    }

    paragraph.innerHTML = ""; 
    typeWriter();
});



document.addEventListener("DOMContentLoaded", () => {
    const titleElement = document.getElementById("main-title");

   
    titleElement.addEventListener("click", () => {
        
        Swal.fire({
            title: 'Welcome!',
            text: 'This site is used for simulating the digital twin options for Toyota Camry.',
             
            showConfirmButton: false, 
            timer: 2000, 
            timerProgressBar: false 
        });
    });
});



document.addEventListener("DOMContentLoaded", () => {
    const aboutCarLink = document.getElementById("about-car-link");
    const aboutCarSection = document.getElementById("about_the_car");

    
    aboutCarLink.addEventListener("click", (event) => {
        event.preventDefault(); 

        
        aboutCarSection.scrollIntoView({
            behavior: "smooth",
            block: "start", 
        });
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const aboutCarLink = document.getElementById("specification-car-link");
    const aboutCarSection = document.getElementById("car_specifications");


    aboutCarLink.addEventListener("click", (event) => {
        event.preventDefault(); 

      
        aboutCarSection.scrollIntoView({
            behavior: "smooth",
            block: "start", 
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const aboutCarLink = document.getElementById("the_actual_costs");
    const aboutCarSection = document.getElementById("the_car_actual_costs");

 
    aboutCarLink.addEventListener("click", (event) => {
        event.preventDefault(); 

       
        aboutCarSection.scrollIntoView({
            behavior: "smooth",
            block: "start", 
        });
    });
});
 

 document.addEventListener("DOMContentLoaded", () => {
    const aboutCarLink = document.getElementById("digital-twin-link");
    const aboutCarSection = document.getElementById("digital_twin");

 
    aboutCarLink.addEventListener("click", (event) => {
        event.preventDefault(); 

        
        aboutCarSection.scrollIntoView({
            behavior: "smooth",
            block: "start", 
        });
    });
});
 



document.addEventListener('DOMContentLoaded', () => {
    const scrollUpBtn = document.getElementById('scroll-up');
    const scrollDownBtn = document.getElementById('scroll-down');

    scrollUpBtn.addEventListener('click', () => {
        window.scrollBy({
            top: -window.innerHeight, 
            behavior: 'smooth'
        });
    });

    
    scrollDownBtn.addEventListener('click', () => {
        window.scrollBy({
            top: window.innerHeight, 
            behavior: 'smooth'
        });
    });
});
 

document.addEventListener("DOMContentLoaded", () => {
    
    const viewInAR = document.getElementById("logo1");
  
   
    viewInAR.addEventListener("click", () => {
      
      Swal.fire({
        title: 'Explore the 3D Model',
        html: '<canvas id="renderCanvas" style="width: 100%; height: 400px;"></canvas>',
        showCancelButton: true,
        confirmButtonText: 'Close',
        didOpen: () => {
      
          createBabylonScene();
        },
        willClose: () => {
       
          if (window.babylonEngine) {
            window.babylonEngine.dispose();
          }
        }
      });
    });
  

    const createBabylonScene = () => {
        const canvas = document.getElementById("renderCanvas");
        const engine = new BABYLON.Engine(canvas, true);
        const scene = new BABYLON.Scene(engine);
        
        // Add a camera and light
        const camera = new BABYLON.ArcRotateCamera("camera", Math.PI / 2, Math.PI / 4, 10, BABYLON.Vector3.Zero(), scene);
        camera.attachControl(canvas, true);
        const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(1, 1, 0), scene);
        
        // Load the .obj file
        BABYLON.SceneLoader.Append(
            "./assets/img/",
            "camry.obj",
            scene,
            function () {
                console.log("Model loaded successfully!");
            },
            null,
            function (scene, message) {
                console.error("Failed to load model:", message);
            }
        );
        
        // Render loop
        engine.runRenderLoop(function () {
            scene.render();
        });
        
        // Resize event
        window.addEventListener("resize", function () {
            engine.resize();
        });
    };
  });


function popup1() {
    Swal.fire({
        title: 'Digital Twin Costs Details',
        html: '<p id="dynamic-content" style="color: black; font-size: 16px;"></p>',
        showConfirmButton: true,
        didOpen: () => {
            const content = `
                A) The average of developing costs for programming and digital systems: $750.
                B) The depreciation expense for the average of developing costs: 750 × 20% = $150 per car.
                C) The average cost of integration with sensors and devices: (300 + 700) ÷ 2 = $500.
                D) Storing and Cloud Computing costs: $200 to $500 per car.
                E) Training and Developing Cost: (200 + 400) ÷ 2 = $300. Depreciation expense: 300 × 20% = $60.
                Total: 150 + 500 + 70 + 60 = $780.
            `;
            typeWriterEffect("dynamic-content", content, 50); 
        }
    });
}

function typeWriterEffect(elementId, text, delay) {
    const element = document.getElementById(elementId);
    let index = 0;

    function type() {
        if (index < text.length) {
            element.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, delay);
        }
    }

    type();
}





document.addEventListener("DOMContentLoaded", () => {
    const costEstimationSection = document.getElementById("the_car_estimation_costs");
    const dynamicParagraph = costEstimationSection.querySelector("p");
    const textToWrite = `Dear, note that when you enter your expected cost of car then this site will use the machine learning to make a prediction of the estimation costs 
    based on the actual data that the research collected and also based on the current economic events in the car manufacturing like stock prices of Toyota and 
    more details. So, make sure that the information which you have will be more accurate.`;
    let index = 0;

    const writeText = () => {
        if (index < textToWrite.length) {
            dynamicParagraph.textContent += textToWrite.charAt(index);
            index++;
            setTimeout(writeText, 50); 
        }
    };

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    if (index === 0) {
                        writeText(); 
                    }
                }
            });
        },
        { threshold: 0.5 } 
    );

    observer.observe(costEstimationSection);
});




document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("cost-input");
    const button = document.getElementById("predict-btn");

    const data = {
        2024: { design: 8000, production: 5000, operation: 780, disposal: 1000, total: 14780 },
        2025: { design: 7500, production: 4800, operation: 760, disposal: 1000, total: 14060 },
        2026: { design: 7000, production: 4600, operation: 740, disposal: 950, total: 13290 },
    };

   
    button.addEventListener("click", () => {
        const userCost = parseFloat(input.value);

        if (isNaN(userCost)) {
            
            Swal.fire({
                icon: 'error',
                title: 'Invalid Input',
                text: 'Please enter a valid number.',
            });
            return;
        }

      
        const predictions = Object.entries(data).map(([year, stageCosts]) => {
            const isSuitable = userCost >= stageCosts.total ? "Yes" : "No";
            return {
                year,
                ...stageCosts,
                suitable: isSuitable,
            };
        });

    
        const tableRows = predictions.map(prediction => `
            <tr>
                <td>${prediction.year}</td>
                <td>${prediction.design}</td>
                <td>${prediction.production}</td>
                <td>${prediction.operation}</td>
                <td>${prediction.disposal}</td>
                <td>${prediction.total}</td>
                <td>${prediction.suitable}</td>
            </tr>
        `).join("");

        const tableHTML = `
            <table border="1" style="width: 100%; border-collapse: collapse; text-align: left;  ">
                <thead>
                    <tr>
                        <th>Year</th>
                        <th>Design Cost</th>
                        <th>Production Cost</th>
                        <th>Operation Cost</th>
                        <th>Disposal Cost</th>
                        <th>Total Cost</th>
                        <th>Suitable Cost</th>
                    </tr>
                </thead>
                <tbody>
                    ${tableRows}
                </tbody>
            </table>
        `;

        
        Swal.fire({
            title: 'Suitable Costs for Designing Toyota Camry Taridex from 2024 to 2026',
            html: tableHTML,
            width: '80%',
        });
    });
});


 
document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("cost-input");
    const predictButton = document.getElementById("predict-btn1"); 

   
    const data = {
        2024: { total: 14780 },
        2025: { total: 14060 },
        2026: { total: 13290 },
    };


    const net = new brain.NeuralNetwork();


    net.train([
        { input: [14780 / 20000], output: [1] }, 
        { input: [14060 / 20000], output: [1] }, 
        { input: [13290 / 20000], output: [1] }, 
        { input: [12000 / 20000], output: [0.5] }, 
        { input: [11000 / 20000], output: [0] }, 
        { input: [10000 / 20000], output: [0] }, 
    ]);

    
    predictButton.addEventListener("click", () => {
        const userCost = parseFloat(input.value);

        if (isNaN(userCost)) {
           
            Swal.fire({
                icon: 'error',
                title: 'Invalid Input',
                text: 'Please enter a valid number.',
            });
            return;
        }

      
        const normalizedInput = userCost / 20000;

        
        const output = net.run([normalizedInput]);

      
        let recommendationMessage = '';
        let additionalAdvice = '';

        if (output[0] > 0.8) {
            recommendationMessage = `Your budget of $${userCost} is sufficient to design the car in any year. Consider investing in 2024 for a more advanced design.`;
            additionalAdvice = "You can explore premium features or invest in higher production quality.";
        } else if (output[0] > 0.6) {
            recommendationMessage = `With a budget of $${userCost}, designing in 2025 is the best option for cost efficiency and quality.`;
            additionalAdvice = "It is advisable to allocate surplus funds for advanced operational strategies.";
        } else if (output[0] > 0.4) {
            recommendationMessage = `Your budget of $${userCost} aligns closely with the 2026 cost. Consider prioritizing cost-effective solutions for 2026.`;
            additionalAdvice = "Reduce complexity in design and focus on core features to optimize cost.";
        } else {
            recommendationMessage = `Your budget of $${userCost} is insufficient for the planned design costs in 2024, 2025, or 2026.`;
            additionalAdvice = "Consider alternative investments, such as upgrading existing models or allocating funds for future projects.";
        }

      
        Swal.fire({
            title: 'Design Recommendation',
            html: `
                <p>${recommendationMessage}</p>
                <p><strong>Additional Recommendations:</strong> ${additionalAdvice}</p>
            `,
            width: '60%',
        });
    });
});



document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("cost-input");
    const chartButton = document.getElementById("predict-btn2"); 

   
    const data = {
        2024: { total: 14780 },
        2025: { total: 14060 },
        2026: { total: 13290 },
    };

   
    chartButton.addEventListener("click", () => {
        const userCost = parseFloat(input.value);

        if (isNaN(userCost)) {
          
            Swal.fire({
                icon: 'error',
                title: 'Invalid Input',
                text: 'Please enter a valid number.',
            });
            return;
        }

      
        const years = Object.keys(data);
        const totalCosts = years.map(year => data[year].total);
        const userCostArray = Array(years.length).fill(userCost);

      
        const chartContainer = document.createElement("canvas");
        chartContainer.id = "costComparisonChart";
        chartContainer.style.width = "100%";
        chartContainer.style.height = "400px";

       
        Swal.fire({
            title: 'Progressive Cost Comparison Chart',
            html: chartContainer.outerHTML, 
            width: '80%',
            didOpen: () => {
                
                const ctx = document.getElementById("costComparisonChart").getContext("2d");

                const chart = new Chart(ctx, {
                    type: "line", 
                    data: {
                        labels: [], 
                        datasets: [
                            {
                                label: "2024 Total Cost",
                                data: [],
                                borderColor: "blue",
                                backgroundColor: "rgba(0, 0, 255, 0.1)",
                                borderWidth: 2,
                                fill: false,
                            },
                            {
                                label: "2025 Total Cost",
                                data: [],
                                borderColor: "green",
                                backgroundColor: "rgba(0, 255, 0, 0.1)",
                                borderWidth: 2,
                                fill: false,
                            },
                            {
                                label: "2026 Total Cost",
                                data: [],
                                borderColor: "orange",
                                backgroundColor: "rgba(255, 165, 0, 0.1)",
                                borderWidth: 2,
                                fill: false,
                            },
                            {
                                label: "User Entered Cost",
                                data: [],
                                borderColor: "red",
                                backgroundColor: "rgba(255, 0, 0, 0.1)",
                                borderWidth: 2,
                                borderDash: [5, 5],
                                fill: false,
                            },
                        ],
                    },
                    options: {
                        responsive: true,
                        plugins: {
                            legend: {
                                position: "top",
                            },
                            title: {
                                display: true,
                                text: "Progressive Cost Comparison Chart (2024 - 2026)",
                            },
                        },
                        scales: {
                            x: {
                                type: "category",
                                title: {
                                    display: true,
                                    text: "Year",
                                },
                            },
                            y: {
                                title: {
                                    display: true,
                                    text: "Cost ($)",
                                },
                                beginAtZero: true,
                            },
                        },
                    },
                });

                let index = 0;
                const interval = setInterval(() => {
                    if (index < years.length) {
                        chart.data.labels.push(years[index]);

                        chart.data.datasets[0].data[index] = totalCosts[0]; 
                        chart.data.datasets[1].data[index] = totalCosts[1]; 
                        chart.data.datasets[2].data[index] = totalCosts[2]; 
                        chart.data.datasets[3].data[index] = userCost; 
                        
                        chart.update(); 
                        index++;
                    } else {
                        clearInterval(interval); 
                    }
                }, 1000); 
            },
        });
    });
});





const newCard = document.createElement("div");
newCard.classList.add("card");
newCard.innerHTML = `
    <img src="assets/img/1.png" alt="Card 5"> <!-- Use an existing image -->
    <div class="card-details">
        <h3>Digital Optimization</h3>
        <p>Optimize processes for better productivity and resource management.</p>
    </div>
`;


 


 

document.addEventListener("DOMContentLoaded", () => {
    const cardContainer = document.querySelector(".cards-container");

 
    const newCard = document.createElement("div");
    newCard.classList.add("card");
    newCard.innerHTML = `
        <img src="assets/img/card5.jpg" alt="Card 5">
        <div class="card-details">
            <h3>Digital Optimization</h3>
            <p>Optimize processes for better productivity and resource management.</p>
        </div>
    `;
 
     
});






document.addEventListener("DOMContentLoaded", () => {
    
    const iconLink = document.createElement('link');
    iconLink.href = 'https://fonts.googleapis.com/icon?family=Material+Icons';
    iconLink.rel = 'stylesheet';
    document.head.appendChild(iconLink);

    const chatButton = document.getElementById("scroll-up1");

  
    const apiUrl = "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent"; // Gemini API endpoint
    const apiKey = "AIzaSyDO31NU4lYnMXHXj34Jq3d1Zh7oLbR45iM";  

  
    const costData = {
        2024: { total: 14780 },
        2025: { total: 14060 },
        2026: { total: 13290 },
    };

 
    async function sendMessageToAI(message, userCost = null) {
        try {
            console.log("Sending message to AI:", message);

            let prompt = message;

             if (message.toLowerCase().includes("competitive advantage") && userCost !== null) {
                prompt = `
                    Analyze the competitive advantage of Toyota Camry Triadex compared to other companies based on the following data:
                    - User's budget: $${userCost}
                    - Predicted costs for Toyota Camry Triadex:
                        - 2024: $${costData[2024].total}
                        - 2025: $${costData[2025].total}
                        - 2026: $${costData[2026].total}
                    Provide a detailed analysis of how Toyota's cost efficiency, design, and innovation compare to competitors like Honda, Ford, and Tesla. Highlight key advantages and potential areas for improvement.
                `;
            }

            const response = await fetch(`${apiUrl}?key=${apiKey}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    contents: [
                        {
                            parts: [
                                {
                                    text: prompt,  
                                },
                            ],
                        },
                    ],
                }),
            });

            console.log("API Response Status:", response.status);
            if (!response.ok) {
                const errorData = await response.json();
                console.error("Error Response:", errorData);
                throw new Error(`Error: ${errorData.error?.message || response.statusText}`);
            }

            const data = await response.json();
            console.log("API Data:", data);

            if (!data.candidates || !data.candidates[0]?.content?.parts[0]?.text) {
                throw new Error("Unexpected API response format");
            }

            return data.candidates[0].content.parts[0].text.trim();
        } catch (error) {
            console.error("Error communicating with AI:", error.message);
            return "Sorry, I couldn't process your request. Please try again.";
        }
    }

     chatButton.addEventListener("click", () => {
        Swal.fire({
            title: "Chat with AI Model",
            html: `
                <div id="chat-container" style="height: 300px; overflow-y: auto; margin-bottom: 10px; border: 1px solid #ddd; padding: 10px;"></div>
                <div style="display: flex; gap: 5px; align-items: center; width: 100%;">
                    <input type="text" id="chat-input" class="swal2-input" placeholder="Type your message..." style="flex: 1; color:black; padding: 8px; font-size: 14px; width: calc(100% - 140px);">
                    <div style="display: flex; gap: 5px;">
                        <button id="send-button" class="swal2-confirm swal2-styled" style="background-color: #A95BF3; padding: 8px; min-width: 40px;">
                            <i class="material-icons" style="color:#ffffff; font-size: 18px;">send</i>
                        </button>
                        <button id="new-conversation-button" class="swal2-confirm swal2-styled" style="background-color: #A95BF3; padding: 8px; min-width: 40px;">
                            <i class="material-icons" style="color:#ffffff; font-size: 18px;">refresh</i>
                        </button>
                        <button id="copy-conversation-button" class="swal2-confirm swal2-styled" style="background-color: #A95BF3; padding: 8px; min-width: 40px;">
                            <i class="material-icons" style="color:#ffffff; font-size: 18px;">content_copy</i>
                        </button>
                    </div>
                </div>
            `,
            showConfirmButton: false,
            width: "400px",  
            didOpen: () => {
                const chatContainer = document.getElementById("chat-container");
                const chatInput = document.getElementById("chat-input");
                const sendButton = document.getElementById("send-button");
                const newConversationButton = document.getElementById("new-conversation-button");
                const copyConversationButton = document.getElementById("copy-conversation-button");

               
                const addMessage = (message, isUser = false) => {
                    const messageElement = document.createElement("div");
                    messageElement.style.marginBottom = "10px";
                    messageElement.style.padding = "10px";
                    messageElement.style.borderRadius = "10px";
                    messageElement.style.backgroundColor = isUser ? "#A95BF3" : "#f1f1f1";
                    messageElement.style.color = isUser ? "#fff" : "#000";
                    messageElement.style.maxWidth = "80%";
                    messageElement.style.alignSelf = isUser ? "flex-end" : "flex-start";
                    messageElement.textContent = message;
                    chatContainer.appendChild(messageElement);
                    chatContainer.scrollTop = chatContainer.scrollHeight;  
                };

               
                const sendMessage = async () => {
                    const userMessage = chatInput.value.trim();
                    if (!userMessage) return;

                    
                    addMessage(userMessage, true);
                    chatInput.value = "";  

                    let aiResponse;

                     if (userMessage.toLowerCase().includes("competitive advantage")) {
                        const userCost = parseFloat(document.getElementById("cost-input").value);

                        if (isNaN(userCost)) {
                            addMessage("Please enter a valid cost in the cost input field to analyze competitive advantage.", false);
                            return;
                        }

                         aiResponse = await sendMessageToAI(userMessage, userCost);
                    } else {
                         aiResponse = await sendMessageToAI(userMessage);
                    }

                    const aiMessageElement = document.createElement("div");
                    aiMessageElement.style.marginBottom = "10px";
                    aiMessageElement.style.padding = "10px";
                    aiMessageElement.style.borderRadius = "10px";
                    aiMessageElement.style.backgroundColor = "#f1f1f1";
                    aiMessageElement.style.color = "#000";
                    aiMessageElement.style.maxWidth = "80%";
                    aiMessageElement.style.alignSelf = "flex-start";
                    chatContainer.appendChild(aiMessageElement);

                     let index = 0;
                    const typingInterval = setInterval(() => {
                        if (index < aiResponse.length) {
                            aiMessageElement.textContent += aiResponse.charAt(index);
                            index++;
                            chatContainer.scrollTop = chatContainer.scrollHeight;  
                        } else {
                            clearInterval(typingInterval);
                        }
                    }, 50);  
                };

                 newConversationButton.addEventListener("click", () => {
                    chatContainer.innerHTML = ""; 
                    Swal.fire({
                        icon: 'success',
                        title: 'New Conversation Started',
                        timer: 1000,
                        showConfirmButton: false
                    });
                });

                 copyConversationButton.addEventListener("click", () => {
                    const chatText = Array.from(chatContainer.children)
                        .map(element => {
                            const isUser = element.style.backgroundColor === 'rgb(169, 91, 243)';
                            return `${isUser ? 'You: ' : 'AI: '}${element.textContent}`;
                        })
                        .join('\n');

                    navigator.clipboard.writeText(chatText)
                        .then(() => Swal.fire({
                            icon: 'success',
                            title: 'Copied!',
                            text: 'Conversation copied to clipboard',
                            timer: 1000,
                            showConfirmButton: false
                        }))
                        .catch(err => console.error('Failed to copy:', err));
                });

                 sendButton.addEventListener("click", sendMessage);

                 chatInput.addEventListener("keypress", (e) => {
                    if (e.key === "Enter") {
                        sendMessage();
                    }
                });
            },
        });
    });
});



 const menuToggle = document.getElementById('menu-toggle');
const navList = document.getElementById('nav-list');

 menuToggle.addEventListener('click', function() {
     navList.classList.toggle('active');
});


 
document.addEventListener("DOMContentLoaded", () => {
     const iconLink = document.createElement('link');
    iconLink.href = 'https://fonts.googleapis.com/icon?family=Material+Icons';
    iconLink.rel = 'stylesheet';
    document.head.appendChild(iconLink);

    const chatButton = document.getElementById("scroll-up1");

     const apiUrl = "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent"; // Gemini API endpoint
    const apiKey = "AIzaSyDBla4Yg-1CqXrV5rO85NSa6_mG4Sy5ybk";  

     const costData = {
        2024: { total: 14780 },
        2025: { total: 14060 },
        2026: { total: 13290 },
    };

 
    async function sendMessageToAI(message, userCost) {
        try {
            console.log("Sending message to AI:", message);

             const prompt = `
                Analyze the competitive advantage of Toyota Camry Triadex compared to other companies based on the following data:
                - User's budget: $${userCost}
                - Predicted costs for Toyota Camry Triadex:
                    - 2024: $${costData[2024].total}
                    - 2025: $${costData[2025].total}
                    - 2026: $${costData[2026].total}
                Provide a detailed analysis of how Toyota's cost efficiency, design, and innovation compare to competitors like Honda, Ford, and Tesla. Highlight key advantages and potential areas for improvement.
            `;

            const response = await fetch(`${apiUrl}?key=${apiKey}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    contents: [
                        {
                            parts: [
                                {
                                    text: prompt,  
                                },
                            ],
                        },
                    ],
                }),
            });

            console.log("API Response Status:", response.status);
            if (!response.ok) {
                const errorData = await response.json();
                console.error("Error Response:", errorData);
                throw new Error(`Error: ${errorData.error?.message || response.statusText}`);
            }

            const data = await response.json();
            console.log("API Data:", data);

            if (!data.candidates || !data.candidates[0]?.content?.parts[0]?.text) {
                throw new Error("Unexpected API response format");
            }

            return data.candidates[0].content.parts[0].text.trim();
        } catch (error) {
            console.error("Error communicating with AI:", error.message);
            return "Sorry, I couldn't process your request. Please try again.";
        }
    }

   
    chatButton.addEventListener("click", () => {
        Swal.fire({
            title: "Chat with AI Model",
            html: `
                <div id="chat-container" style="height: 300px; overflow-y: auto; margin-bottom: 10px; border: 1px solid #ddd; padding: 10px;"></div>
                <div style="display: flex; gap: 5px; align-items: center; width: 100%;">
                    <input type="text" id="chat-input" class="swal2-input" placeholder="The cost value..." style="flex: 1; color:black; padding: 8px; font-size: 14px; width: calc(100% - 140px);">
                    <div style="display: flex; gap: 5px;">
                        <button id="send-button" class="swal2-confirm swal2-styled" style="background-color: #A95BF3; padding: 8px; min-width: 40px;">
                            <i class="material-icons" style="color:#ffffff; font-size: 18px;">send</i>
                        </button>
                        <button id="new-conversation-button" class="swal2-confirm swal2-styled" style="background-color: #A95BF3; padding: 8px; min-width: 40px;">
                            <i class="material-icons" style="color:#ffffff; font-size: 18px;">refresh</i>
                        </button>
                        <button id="copy-conversation-button" class="swal2-confirm swal2-styled" style="background-color: #A95BF3; padding: 8px; min-width: 40px;">
                            <i class="material-icons" style="color:#ffffff; font-size: 18px;">content_copy</i>
                        </button>
                    </div>
                </div>
            `,
            showConfirmButton: false,
            width: "400px", 
            didOpen: () => {
                const chatContainer = document.getElementById("chat-container");
                const chatInput = document.getElementById("chat-input");
                const sendButton = document.getElementById("send-button");
                const newConversationButton = document.getElementById("new-conversation-button");
                const copyConversationButton = document.getElementById("copy-conversation-button");

                 const addMessage = (message, isUser = false) => {
                    const messageElement = document.createElement("div");
                    messageElement.style.marginBottom = "10px";
                    messageElement.style.padding = "10px";
                    messageElement.style.borderRadius = "10px";
                    messageElement.style.backgroundColor = isUser ? "#A95BF3" : "#f1f1f1";
                    messageElement.style.color = isUser ? "#fff" : "#000";
                    messageElement.style.maxWidth = "80%";
                    messageElement.style.alignSelf = isUser ? "flex-end" : "flex-start";
                    messageElement.textContent = message;
                    chatContainer.appendChild(messageElement);
                    chatContainer.scrollTop = chatContainer.scrollHeight;  
                };

                 
                const sendMessage = async () => {
                    const userMessage = chatInput.value.trim();
                    if (!userMessage) return;

                    
                    addMessage(userMessage, true);
                    chatInput.value = "";  

                     if (userMessage.toLowerCase().includes("competitive advantage")) {
                        const userCost = parseFloat(document.getElementById("cost-input").value);

                        if (isNaN(userCost)) {
                            addMessage("Please enter a valid cost in the cost input field to analyze competitive advantage.", false);
                            return;
                        }

                         const aiResponse = await sendMessageToAI(userMessage, userCost);

                        const aiMessageElement = document.createElement("div");
                        aiMessageElement.style.marginBottom = "10px";
                        aiMessageElement.style.padding = "10px";
                        aiMessageElement.style.borderRadius = "10px";
                        aiMessageElement.style.backgroundColor = "#f1f1f1";
                        aiMessageElement.style.color = "#000";
                        aiMessageElement.style.maxWidth = "80%";
                        aiMessageElement.style.alignSelf = "flex-start";
                        chatContainer.appendChild(aiMessageElement);

                         let index = 0;
                        const typingInterval = setInterval(() => {
                            if (index < aiResponse.length) {
                                aiMessageElement.textContent += aiResponse.charAt(index);
                                index++;
                                chatContainer.scrollTop = chatContainer.scrollHeight;  
                            } else {
                                clearInterval(typingInterval);
                            }
                        }, 50);  
                    } else {
                         const aiResponse = await sendMessageToAI(userMessage);

                         const aiMessageElement = document.createElement("div");
                        aiMessageElement.style.marginBottom = "10px";
                        aiMessageElement.style.padding = "10px";
                        aiMessageElement.style.borderRadius = "10px";
                        aiMessageElement.style.backgroundColor = "#f1f1f1";
                        aiMessageElement.style.color = "#000";
                        aiMessageElement.style.maxWidth = "80%";
                        aiMessageElement.style.alignSelf = "flex-start";
                        chatContainer.appendChild(aiMessageElement);

                        
                        let index = 0;
                        const typingInterval = setInterval(() => {
                            if (index < aiResponse.length) {
                                aiMessageElement.textContent += aiResponse.charAt(index);
                                index++;
                                chatContainer.scrollTop = chatContainer.scrollHeight;  
                            } else {
                                clearInterval(typingInterval);
                            }
                        }, 50);  
                    }
                };

                 
                newConversationButton.addEventListener("click", () => {
                    chatContainer.innerHTML = "";  
                    Swal.fire({
                        icon: 'success',
                        title: 'New Conversation Started',
                        timer: 1000,
                        showConfirmButton: false
                    });
                });

            
                copyConversationButton.addEventListener("click", () => {
                    const chatText = Array.from(chatContainer.children)
                        .map(element => {
                            const isUser = element.style.backgroundColor === 'rgb(169, 91, 243)';
                            return `${isUser ? 'You: ' : 'AI: '}${element.textContent}`;
                        })
                        .join('\n');

                    navigator.clipboard.writeText(chatText)
                        .then(() => Swal.fire({
                            icon: 'success',
                            title: 'Copied!',
                            text: 'Conversation copied to clipboard',
                            timer: 1000,
                            showConfirmButton: false
                        }))
                        .catch(err => console.error('Failed to copy:', err));
                });

            
                sendButton.addEventListener("click", sendMessage);

                 
                chatInput.addEventListener("keypress", (e) => {
                    if (e.key === "Enter") {
                        sendMessage();
                    }
                });
            },
        });
    });
});



 

document.addEventListener('DOMContentLoaded', function () {
    const toyotaImage = document.querySelector('.Toyota1');

 
    toyotaImage.addEventListener('click', function () {
      
        Swal.fire({
            title: 'Toyota Camry Triadex 2024',
            html: `
                <video 
                    width="70%" 
                    height="295" 
                    autoplay 
                    loop 
                    muted 
                    controls
                    style="border-radius: 10px;">
                    <source src="./assets/img/toyota.mp4" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            `,
            showCloseButton: true,
            showConfirmButton: false,
            width: '800px',
            padding: '20px',
            background: '#333',
            color: '#fff',
            customClass: {
                popup: 'custom-popup',
                closeButton: 'custom-close-button'
            }
        });
    });
});



document.addEventListener("DOMContentLoaded", () => {
    const scrollUp2Button = document.getElementById("scroll-up2");

    if (scrollUp2Button) {
        scrollUp2Button.addEventListener("click", async () => {
            await generateReport();
        });
    }

     
    async function generateReport() {
        try {
            console.log("Starting PDF generation...");

        
            const { jsPDF } = window.jspdf;
            if (!jsPDF) {
                console.error("jsPDF library not loaded!");
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'jsPDF library is not loaded. Please check your script tags.',
                });
                return;
            }
            const doc = new jsPDF();

           
            const costInput = document.getElementById("cost-input");
            if (!costInput) {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Cost input field is missing.',
                });
                return;
            }
            const userCost = parseFloat(costInput.value);


        
 
            doc.setFontSize(18);
            doc.text("Toyota Camry Triadex 2024 Report", 10, 20);

            doc.setFontSize(12);
            doc.text(`User's Budget: $${userCost || "Not provided"}`, 10, 40);

            
           

            
            const recommendation = getRecommendation(userCost);
            doc.setFontSize(12);
            doc.text("Recommendation:", 10, 200);
            doc.setFontSize(10);
            const splitRecommendation = doc.splitTextToSize(recommendation, 180);
            doc.text(splitRecommendation, 10, 210);

            console.log("Saving PDF...");
            doc.save("Toyota_Camry_Triadex_Report.pdf");
            console.log("PDF saved successfully.");
        } catch (error) {
            console.error("Error generating PDF:", error);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'An error occurred while generating the PDF. Please try again.',
            });
        }
    }

     

 
    function getRecommendation(userCost) {
        const totalCosts = { 2024: 14780, 2025: 14060, 2026: 13290 };

        if (userCost >= totalCosts[2024]) {
            return `Your budget of $${userCost} is sufficient for any year. Consider investing in 2024 for the most advanced design.`;
        } else if (userCost >= totalCosts[2025]) {
            return `Your budget of $${userCost} is ideal for 2025, balancing quality and cost.`;
        } else if (userCost >= totalCosts[2026]) {
            return `Your budget of $${userCost} aligns closely with 2026 costs. Consider cost-saving solutions for 2026.`;
        } else {
            return `Your budget of $${userCost} is below the projected costs for all years. Consider increasing your budget or exploring alternative options.`;
        }
    }
});



document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.slider');
    const prevBtn = document.getElementById('btn1');
    const nextBtn = document.getElementById('btn2');
    const cardWidth = document.querySelector('.card').offsetWidth; 
    let currentPosition = 0;

   
    prevBtn.addEventListener('click', function () {
        if (currentPosition < 0) {
            currentPosition += cardWidth;
            slider.style.transform = `translateX(${currentPosition}px)`;
        }
    });

  
    nextBtn.addEventListener('click', function () {
        const maxScroll = -(slider.scrollWidth - slider.clientWidth);
        if (currentPosition > maxScroll) {
            currentPosition -= cardWidth;
            slider.style.transform = `translateX(${currentPosition}px)`;
        }
    });
});




document.addEventListener('DOMContentLoaded', function () {
    const scrollUp3 = document.getElementById('scroll-up3');

    scrollUp3.addEventListener('click', function () {
      
        const savedTableData = JSON.parse(localStorage.getItem('tableData')) || {
            cost: ['Decreasing by 10%', 'Decreasing by 12%', 'Decreasing by 14%'],
            quality: ['Improving by 15%', 'Improving by 16%', 'Improving by 18%'],
            flexibility: ['Improving by 12%', 'Improving by 14%', 'Improving by 16%'],
            delivery: ['Accelerate by 8%', 'Accelerate by 9%', 'Accelerate by 10%'],
            innovation: ['Increasing by 20%', 'Increasing by 22%', 'Increasing by 24%'],
            environmental: ['Decreasing waste by 10%', 'Decreasing waste by 12%', 'Decreasing waste by 14%'],
        };

         const tableContent = `
            <table style="width: 100%; border-collapse: collapse;">
                <thead>
                    <tr>
                        <th style="border: 1px solid #ddd; padding: 8px; background-color: #f2f2f2;">Competitive Advantage Dimensions Sustained by Digital Twin</th>
                        <th style="border: 1px solid #ddd; padding: 8px; background-color: #f2f2f2;">2024</th>
                        <th style="border: 1px solid #ddd; padding: 8px; background-color: #f2f2f2;">2025</th>
                        <th style="border: 1px solid #ddd; padding: 8px; background-color: #f2f2f2;">2026</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="border: 1px solid #ddd; padding: 8px;">Cost Perspective</td>
                        <td style="border: 1px solid #ddd; padding: 8px;" contenteditable="true">${savedTableData.cost[0]}</td>
                        <td style="border: 1px solid #ddd; padding: 8px;" contenteditable="true">${savedTableData.cost[1]}</td>
                        <td style="border: 1px solid #ddd; padding: 8px;" contenteditable="true">${savedTableData.cost[2]}</td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid #ddd; padding: 8px;">Quality Perspective</td>
                        <td style="border: 1px solid #ddd; padding: 8px;" contenteditable="true">${savedTableData.quality[0]}</td>
                        <td style="border: 1px solid #ddd; padding: 8px;" contenteditable="true">${savedTableData.quality[1]}</td>
                        <td style="border: 1px solid #ddd; padding: 8px;" contenteditable="true">${savedTableData.quality[2]}</td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid #ddd; padding: 8px;">Flexibility Perspective</td>
                        <td style="border: 1px solid #ddd; padding: 8px;" contenteditable="true">${savedTableData.flexibility[0]}</td>
                        <td style="border: 1px solid #ddd; padding: 8px;" contenteditable="true">${savedTableData.flexibility[1]}</td>
                        <td style="border: 1px solid #ddd; padding: 8px;" contenteditable="true">${savedTableData.flexibility[2]}</td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid #ddd; padding: 8px;">Delivery Perspective</td>
                        <td style="border: 1px solid #ddd; padding: 8px;" contenteditable="true">${savedTableData.delivery[0]}</td>
                        <td style="border: 1px solid #ddd; padding: 8px;" contenteditable="true">${savedTableData.delivery[1]}</td>
                        <td style="border: 1px solid #ddd; padding: 8px;" contenteditable="true">${savedTableData.delivery[2]}</td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid #ddd; padding: 8px;">Innovation Perspective</td>
                        <td style="border: 1px solid #ddd; padding: 8px;" contenteditable="true">${savedTableData.innovation[0]}</td>
                        <td style="border: 1px solid #ddd; padding: 8px;" contenteditable="true">${savedTableData.innovation[1]}</td>
                        <td style="border: 1px solid #ddd; padding: 8px;" contenteditable="true">${savedTableData.innovation[2]}</td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid #ddd; padding: 8px;">Environmental Perspective</td>
                        <td style="border: 1px solid #ddd; padding: 8px;" contenteditable="true">${savedTableData.environmental[0]}</td>
                        <td style="border: 1px solid #ddd; padding: 8px;" contenteditable="true">${savedTableData.environmental[1]}</td>
                        <td style="border: 1px solid #ddd; padding: 8px;" contenteditable="true">${savedTableData.environmental[2]}</td>
                    </tr>
                </tbody>
            </table>
            <button id="save-changes" style="margin-top: 10px; padding: 8px 16px; background-color: #4CAF50; color: white; border: none; border-radius: 4px; cursor: pointer;">Save Changes</button>
        `;

         Swal.fire({
            title: 'Competitive Advantage Dimensions',
            html: tableContent,
            showConfirmButton: true,
            confirmButtonText: 'Close',
            showCancelButton: true,
            cancelButtonText: 'Copy Table',
            showDenyButton: true,
            denyButtonText: 'Analyzing and Prediction',
            width: '90%', 
            customClass: {
                popup: 'custom-swal-popup',
            },
            didOpen: () => {
             
                const saveChangesButton = document.getElementById('save-changes');
                if (saveChangesButton) {
                    saveChangesButton.addEventListener('click', () => {
                        
                        const updatedTableData = {
                            cost: [
                                document.querySelector('table tbody tr:nth-child(1) td:nth-child(2)').textContent,
                                document.querySelector('table tbody tr:nth-child(1) td:nth-child(3)').textContent,
                                document.querySelector('table tbody tr:nth-child(1) td:nth-child(4)').textContent,
                            ],
                            quality: [
                                document.querySelector('table tbody tr:nth-child(2) td:nth-child(2)').textContent,
                                document.querySelector('table tbody tr:nth-child(2) td:nth-child(3)').textContent,
                                document.querySelector('table tbody tr:nth-child(2) td:nth-child(4)').textContent,
                            ],
                            flexibility: [
                                document.querySelector('table tbody tr:nth-child(3) td:nth-child(2)').textContent,
                                document.querySelector('table tbody tr:nth-child(3) td:nth-child(3)').textContent,
                                document.querySelector('table tbody tr:nth-child(3) td:nth-child(4)').textContent,
                            ],
                            delivery: [
                                document.querySelector('table tbody tr:nth-child(4) td:nth-child(2)').textContent,
                                document.querySelector('table tbody tr:nth-child(4) td:nth-child(3)').textContent,
                                document.querySelector('table tbody tr:nth-child(4) td:nth-child(4)').textContent,
                            ],
                            innovation: [
                                document.querySelector('table tbody tr:nth-child(5) td:nth-child(2)').textContent,
                                document.querySelector('table tbody tr:nth-child(5) td:nth-child(3)').textContent,
                                document.querySelector('table tbody tr:nth-child(5) td:nth-child(4)').textContent,
                            ],
                            environmental: [
                                document.querySelector('table tbody tr:nth-child(6) td:nth-child(2)').textContent,
                                document.querySelector('table tbody tr:nth-child(6) td:nth-child(3)').textContent,
                                document.querySelector('table tbody tr:nth-child(6) td:nth-child(4)').textContent,
                            ],
                        };

                        // Save the updated table data to localStorage
                        localStorage.setItem('tableData', JSON.stringify(updatedTableData));

                        Swal.fire({
                            icon: 'success',
                            title: 'Changes Saved!',
                            text: 'The table has been updated with your changes.',
                            timer: 1500,
                            showConfirmButton: false,
                        });
                    });
                }
            },
        }).then((result) => {
            if (result.isDismissed && result.dismiss === Swal.DismissReason.cancel) {
                
                copyTableToClipboard();
            } else if (result.isDenied) {
                
                handleAnalyzingAndPrediction();
            }
        });
    });

     function copyTableToClipboard() {
       
        const rows = document.querySelectorAll('table tbody tr');
        let tableText = 'Competitive Advantage Dimensions Sustained by Digital Twin\n';
        tableText += '--------------------------------------------------------\n';

        rows.forEach(row => {
            const dimension = row.querySelector('td:first-child').textContent;
            const values = Array.from(row.querySelectorAll('td:not(:first-child)')).map(td => td.textContent).join(', ');
            tableText += `${dimension}: ${values}\n`;
        });

        
        navigator.clipboard.writeText(tableText)
            .then(() => {
                Swal.fire({
                    icon: 'success',
                    title: 'Copied!',
                    text: 'Table content copied to clipboard.',
                    timer: 1500,
                    showConfirmButton: false,
                });
            })
            .catch((error) => {
                console.error('Failed to copy table content:', error);
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Failed to copy table content. Please try again.',
                });
            });
    }

  
    function handleAnalyzingAndPrediction() {
       
        const updatedTableText = getUpdatedTableContent();

        
        navigator.clipboard.writeText(updatedTableText)
            .then(() => {
             
                openAIChatbot(updatedTableText);
            })
            .catch((error) => {
                console.error('Failed to copy table content:', error);
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Failed to copy table content. Please try again.',
                });
            });
    }

  
    function getUpdatedTableContent() {
        const rows = document.querySelectorAll('table tbody tr');
        let tableText = 'justification the impact of digital twin on this data\n';
        tableText += '---------------------------------------------------------\n';

        rows.forEach(row => {
            const dimension = row.querySelector('td:first-child').textContent;
            const values = Array.from(row.querySelectorAll('td:not(:first-child)')).map(td => td.textContent).join(', ');
            tableText += `${dimension}: ${values}\n`;
        });

        return tableText;
    }

  
    function openAIChatbot(tableText) {
         const chatButton = document.getElementById('scroll-up1');
        if (chatButton) {
            chatButton.click();

             setTimeout(() => {
                const chatInput = document.getElementById('chat-input');
                const sendButton = document.getElementById('send-button');

                if (chatInput && sendButton) {
                     chatInput.value = tableText;

                     sendButton.click();
                }
            }, 500);  
        }
    }
});


 

document.addEventListener('DOMContentLoaded', function () {
    const scrollUp4 = document.getElementById('scroll-up4');

    scrollUp4.addEventListener('click', function () {
         
        Swal.fire({
            title: 'Choose the Year',
            html: `
                <select id="year-select" class="swal2-select">
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                </select>
            `,
            focusConfirm: false,
            showCancelButton: true,
            confirmButtonText: 'Submit',
            cancelButtonText: 'Cancel',
            preConfirm: () => {
                const selectedYear = document.getElementById('year-select').value;
                return selectedYear;
            },
        }).then((result) => {
            if (result.isConfirmed) {
                const selectedYear = result.value;

                 const savedData = JSON.parse(localStorage.getItem(`tableData_${selectedYear}`)) || {
                    targetCosting: ['Decreasing by 7%', 'Decreasing by 6%', 'Decreasing by 5%', 'Decreasing by 4%'],
                    abc: ['Reduce unnecessary activities by 5%', 'Decrease waste by 5%', 'Improving activities and reduce costs by 4%', 'Decrease Disposal Costs by 3%'],
                    tdAbc: ['Reduce time by 6%', 'Decrease time by 7%', 'Decrease waste time by 6%', 'Decrease Disposal time by 5%'],
                    jit: ['Improving efficiency by 4%', 'Increasing production by 5%', 'Improved operational scheduling by 5%', 'Reduce waste by 3%'],
                    tqm: ['Improving quality by 8%', 'Reduce defects by 7%', 'Improved operational quality by 7%', 'Reduce impurities by 6%'],
                    kaizen: ['Improving designing process by 10%', 'Improving production process by 9%', 'Improved operational performance by 8%', 'Improve disposal cost by 7%'],
                    lifecycle: ['Reducing costs by 12%', 'Reducing costs by 10%', 'Reducing operational costs by 9%', 'Reducing disposal costs by 8%'],
                    crm: ['Improving customer satisfaction by 9%', 'Improving quality process by 8%', 'Improved post-sales process by 8%', 'Improve reputation by 7%'],
                };

                 const generateTableContent = (year, data) => {
                    return `
                        <table style="width: 100%; border-collapse: collapse;">
                            <thead>
                                <tr>
                                    <th style="border: 1px solid #ddd; padding: 8px; background-color: #f2f2f2;">Year</th>
                                    <th style="border: 1px solid #ddd; padding: 8px; background-color: #f2f2f2;">Managerial Accounting Practices</th>
                                    <th style="border: 1px solid #ddd; padding: 8px; background-color: #f2f2f2;">Designing Stage</th>
                                    <th style="border: 1px solid #ddd; padding: 8px; background-color: #f2f2f2;">Production Stage</th>
                                    <th style="border: 1px solid #ddd; padding: 8px; background-color: #f2f2f2;">Operational Stage</th>
                                    <th style="border: 1px solid #ddd; padding: 8px; background-color: #f2f2f2;">Disposal Stage</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style="border: 1px solid #ddd; padding: 8px;">${year}</td>
                                    <td style="border: 1px solid #ddd; padding: 8px;">Target Costing</td>
                                    <td style="border: 1px solid #ddd; padding: 8px;" contenteditable="true">${data.targetCosting[0]}</td>
                                    <td style="border: 1px solid #ddd; padding: 8px;" contenteditable="true">${data.targetCosting[1]}</td>
                                    <td style="border: 1px solid #ddd; padding: 8px;" contenteditable="true">${data.targetCosting[2]}</td>
                                    <td style="border: 1px solid #ddd; padding: 8px;" contenteditable="true">${data.targetCosting[3]}</td>
                                </tr>
                                <tr>
                                    <td style="border: 1px solid #ddd; padding: 8px;"> </td>
                                    <td style="border: 1px solid #ddd; padding: 8px;">ABC</td>
                                    <td style="border: 1px solid #ddd; padding: 8px;" contenteditable="true">${data.abc[0]}</td>
                                    <td style="border: 1px solid #ddd; padding: 8px;" contenteditable="true">${data.abc[1]}</td>
                                    <td style="border: 1px solid #ddd; padding: 8px;" contenteditable="true">${data.abc[2]}</td>
                                    <td style="border: 1px solid #ddd; padding: 8px;" contenteditable="true">${data.abc[3]}</td>
                                </tr>
                                <tr>
                                    <td style="border: 1px solid #ddd; padding: 8px;"> </td>
                                    <td style="border: 1px solid #ddd; padding: 8px;">TD-ABC</td>
                                    <td style="border: 1px solid #ddd; padding: 8px;" contenteditable="true">${data.tdAbc[0]}</td>
                                    <td style="border: 1px solid #ddd; padding: 8px;" contenteditable="true">${data.tdAbc[1]}</td>
                                    <td style="border: 1px solid #ddd; padding: 8px;" contenteditable="true">${data.tdAbc[2]}</td>
                                    <td style="border: 1px solid #ddd; padding: 8px;" contenteditable="true">${data.tdAbc[3]}</td>
                                </tr>
                                <tr>
                                    <td style="border: 1px solid #ddd; padding: 8px;"> </td>
                                    <td style="border: 1px solid #ddd; padding: 8px;">JIT</td>
                                    <td style="border: 1px solid #ddd; padding: 8px;" contenteditable="true">${data.jit[0]}</td>
                                    <td style="border: 1px solid #ddd; padding: 8px;" contenteditable="true">${data.jit[1]}</td>
                                    <td style="border: 1px solid #ddd; padding: 8px;" contenteditable="true">${data.jit[2]}</td>
                                    <td style="border: 1px solid #ddd; padding: 8px;" contenteditable="true">${data.jit[3]}</td>
                                </tr>
                                <tr>
                                    <td style="border: 1px solid #ddd; padding: 8px;"> </td>
                                    <td style="border: 1px solid #ddd; padding: 8px;">TQM</td>
                                    <td style="border: 1px solid #ddd; padding: 8px;" contenteditable="true">${data.tqm[0]}</td>
                                    <td style="border: 1px solid #ddd; padding: 8px;" contenteditable="true">${data.tqm[1]}</td>
                                    <td style="border: 1px solid #ddd; padding: 8px;" contenteditable="true">${data.tqm[2]}</td>
                                    <td style="border: 1px solid #ddd; padding: 8px;" contenteditable="true">${data.tqm[3]}</td>
                                </tr>
                                <tr>
                                    <td style="border: 1px solid #ddd; padding: 8px;"> </td>
                                    <td style="border: 1px solid #ddd; padding: 8px;">Kaizen Costing</td>
                                    <td style="border: 1px solid #ddd; padding: 8px;" contenteditable="true">${data.kaizen[0]}</td>
                                    <td style="border: 1px solid #ddd; padding: 8px;" contenteditable="true">${data.kaizen[1]}</td>
                                    <td style="border: 1px solid #ddd; padding: 8px;" contenteditable="true">${data.kaizen[2]}</td>
                                    <td style="border: 1px solid #ddd; padding: 8px;" contenteditable="true">${data.kaizen[3]}</td>
                                </tr>
                                <tr>
                                    <td style="border: 1px solid #ddd; padding: 8px;"> </td>
                                    <td style="border: 1px solid #ddd; padding: 8px;">Lifecycle Costing Management</td>
                                    <td style="border: 1px solid #ddd; padding: 8px;" contenteditable="true">${data.lifecycle[0]}</td>
                                    <td style="border: 1px solid #ddd; padding: 8px;" contenteditable="true">${data.lifecycle[1]}</td>
                                    <td style="border: 1px solid #ddd; padding: 8px;" contenteditable="true">${data.lifecycle[2]}</td>
                                    <td style="border: 1px solid #ddd; padding: 8px;" contenteditable="true">${data.lifecycle[3]}</td>
                                </tr>
                                <tr>
                                    <td style="border: 1px solid #ddd; padding: 8px;"> </td>
                                    <td style="border: 1px solid #ddd; padding: 8px;">CRM</td>
                                    <td style="border: 1px solid #ddd; padding: 8px;" contenteditable="true">${data.crm[0]}</td>
                                    <td style="border: 1px solid #ddd; padding: 8px;" contenteditable="true">${data.crm[1]}</td>
                                    <td style="border: 1px solid #ddd; padding: 8px;" contenteditable="true">${data.crm[2]}</td>
                                    <td style="border: 1px solid #ddd; padding: 8px;" contenteditable="true">${data.crm[3]}</td>
                                </tr>
                            </tbody>
                        </table>
                        <button id="save-changes" style="margin-top: 10px; padding: 8px 16px; background-color: #4CAF50; color: white; border: none; border-radius: 4px; cursor: pointer;">Save Changes</button>
                        <button id="copy-table" style="margin-top: 10px; padding: 8px 16px; background-color: #2196F3; color: white; border: none; border-radius: 4px; cursor: pointer;">Copy Table Content</button>
                        <button id="predict-analyze" style="margin-top: 10px; padding: 8px 16px; background-color: #FF9800; color: white; border: none; border-radius: 4px; cursor: pointer;">Predict and Analyze</button>
                    `;
                };

                 Swal.fire({
                    title: `DT Impact on Managerial Accounting Practices of Toyota Traidex (${selectedYear})`,
                    html: generateTableContent(selectedYear, savedData),
                    width: '90%',  
                    showConfirmButton: true,
                    confirmButtonText: 'Close',
                    didOpen: () => {
                         const saveChangesButton = document.getElementById('save-changes');
                        if (saveChangesButton) {
                            saveChangesButton.addEventListener('click', () => {
                                 const updatedData = {
                                    targetCosting: [
                                        document.querySelector('table tbody tr:nth-child(1) td:nth-child(3)').textContent,
                                        document.querySelector('table tbody tr:nth-child(1) td:nth-child(4)').textContent,
                                        document.querySelector('table tbody tr:nth-child(1) td:nth-child(5)').textContent,
                                        document.querySelector('table tbody tr:nth-child(1) td:nth-child(6)').textContent,
                                    ],
                                    abc: [
                                        document.querySelector('table tbody tr:nth-child(2) td:nth-child(3)').textContent,
                                        document.querySelector('table tbody tr:nth-child(2) td:nth-child(4)').textContent,
                                        document.querySelector('table tbody tr:nth-child(2) td:nth-child(5)').textContent,
                                        document.querySelector('table tbody tr:nth-child(2) td:nth-child(6)').textContent,
                                    ],
                                    tdAbc: [
                                        document.querySelector('table tbody tr:nth-child(3) td:nth-child(3)').textContent,
                                        document.querySelector('table tbody tr:nth-child(3) td:nth-child(4)').textContent,
                                        document.querySelector('table tbody tr:nth-child(3) td:nth-child(5)').textContent,
                                        document.querySelector('table tbody tr:nth-child(3) td:nth-child(6)').textContent,
                                    ],
                                    jit: [
                                        document.querySelector('table tbody tr:nth-child(4) td:nth-child(3)').textContent,
                                        document.querySelector('table tbody tr:nth-child(4) td:nth-child(4)').textContent,
                                        document.querySelector('table tbody tr:nth-child(4) td:nth-child(5)').textContent,
                                        document.querySelector('table tbody tr:nth-child(4) td:nth-child(6)').textContent,
                                    ],
                                    tqm: [
                                        document.querySelector('table tbody tr:nth-child(5) td:nth-child(3)').textContent,
                                        document.querySelector('table tbody tr:nth-child(5) td:nth-child(4)').textContent,
                                        document.querySelector('table tbody tr:nth-child(5) td:nth-child(5)').textContent,
                                        document.querySelector('table tbody tr:nth-child(5) td:nth-child(6)').textContent,
                                    ],
                                    kaizen: [
                                        document.querySelector('table tbody tr:nth-child(6) td:nth-child(3)').textContent,
                                        document.querySelector('table tbody tr:nth-child(6) td:nth-child(4)').textContent,
                                        document.querySelector('table tbody tr:nth-child(6) td:nth-child(5)').textContent,
                                        document.querySelector('table tbody tr:nth-child(6) td:nth-child(6)').textContent,
                                    ],
                                    lifecycle: [
                                        document.querySelector('table tbody tr:nth-child(7) td:nth-child(3)').textContent,
                                        document.querySelector('table tbody tr:nth-child(7) td:nth-child(4)').textContent,
                                        document.querySelector('table tbody tr:nth-child(7) td:nth-child(5)').textContent,
                                        document.querySelector('table tbody tr:nth-child(7) td:nth-child(6)').textContent,
                                    ],
                                    crm: [
                                        document.querySelector('table tbody tr:nth-child(8) td:nth-child(3)').textContent,
                                        document.querySelector('table tbody tr:nth-child(8) td:nth-child(4)').textContent,
                                        document.querySelector('table tbody tr:nth-child(8) td:nth-child(5)').textContent,
                                        document.querySelector('table tbody tr:nth-child(8) td:nth-child(6)').textContent,
                                    ],
                                };

                                 localStorage.setItem(`tableData_${selectedYear}`, JSON.stringify(updatedData));

                                Swal.fire({
                                    icon: 'success',
                                    title: 'Changes Saved!',
                                    text: 'Your changes have been saved successfully.',
                                    timer: 1500,
                                    showConfirmButton: false,
                                });
                            });
                        }

                         const copyTableButton = document.getElementById('copy-table');
                        if (copyTableButton) {
                            copyTableButton.addEventListener('click', () => {
                                 const tableText = `
                                    Year: ${selectedYear}
                                    Managerial Accounting Practices:
                                    - Target Costing: ${savedData.targetCosting.join(', ')}
                                    - ABC: ${savedData.abc.join(', ')}
                                    - TD-ABC: ${savedData.tdAbc.join(', ')}
                                    - JIT: ${savedData.jit.join(', ')}
                                    - TQM: ${savedData.tqm.join(', ')}
                                    - Kaizen Costing: ${savedData.kaizen.join(', ')}
                                    - Lifecycle Costing Management: ${savedData.lifecycle.join(', ')}
                                    - CRM: ${savedData.crm.join(', ')}
                                `;

                                 navigator.clipboard.writeText(tableText)
                                    .then(() => {
                                        Swal.fire({
                                            icon: 'success',
                                            title: 'Copied!',
                                            text: 'Table content copied to clipboard.',
                                            timer: 1500,
                                            showConfirmButton: false,
                                        });
                                    })
                                    .catch((error) => {
                                        console.error('Failed to copy table content:', error);
                                        Swal.fire({
                                            icon: 'error',
                                            title: 'Error',
                                            text: 'Failed to copy table content. Please try again.',
                                        });
                                    });
                            });
                        }

                         const predictAnalyzeButton = document.getElementById('predict-analyze');
                        if (predictAnalyzeButton) {
                            predictAnalyzeButton.addEventListener('click', () => {
                                 const tableText = `
                                    Year: ${selectedYear}
                                    Managerial Accounting Practices:
                                    - Target Costing: ${savedData.targetCosting.join(', ')}
                                    - ABC: ${savedData.abc.join(', ')}
                                    - TD-ABC: ${savedData.tdAbc.join(', ')}
                                    - JIT: ${savedData.jit.join(', ')}
                                    - TQM: ${savedData.tqm.join(', ')}
                                    - Kaizen Costing: ${savedData.kaizen.join(', ')}
                                    - Lifecycle Costing Management: ${savedData.lifecycle.join(', ')}
                                    - CRM: ${savedData.crm.join(', ')}
                                `;

                                 navigator.clipboard.writeText(tableText)
                                    .then(() => {
                                         const chatButton = document.getElementById('scroll-up1');
                                        if (chatButton) {
                                            chatButton.click();

                                             setTimeout(() => {
                                                const chatInput = document.getElementById('chat-input');
                                                const sendButton = document.getElementById('send-button');

                                                if (chatInput && sendButton) {
                                                     chatInput.value = tableText;

                                                     sendButton.click();
                                                }
                                            }, 500);  
                                        }
                                    })
                                    .catch((error) => {
                                        console.error('Failed to copy table content:', error);
                                        Swal.fire({
                                            icon: 'error',
                                            title: 'Error',
                                            text: 'Failed to copy table content. Please try again.',
                                        });
                                    });
                            });
                        }
                    },
                });
            }
        });
    });
});
