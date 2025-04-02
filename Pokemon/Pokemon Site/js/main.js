document.getElementById('Squirtle').onclick = Squirt
document.getElementById('Charmander').onclick = Char
document.getElementById('Bulbasaur').onclick = Bulb


function Squirt() {
    // Create the image element
    const img = document.createElement('img');
    img.src = 'img/Squirt2.png';
    img.classList.add('squirtle-image');
  
    // Create the text element
    const text = document.createElement('p');
    text.textContent = 'I Choose You Squirtle!'; // Set the text content
    text.classList.add('squirtle-text'); // Optional: Add a class for styling
  
    // Create a container for the image and text
    const container = document.createElement('div');
    container.classList.add('squirtle-container'); // Optional: Add a class for styling
  
    // Append the image and text to the container
    container.appendChild(img);
    container.appendChild(text);
  
    // Append the container to the body
    document.body.appendChild(container);
  }

function Char() {
   // Create the image element
   const img = document.createElement('img');
   img.src = 'img/charmander.png';
   img.classList.add('charmander-image');
 
   // Create the text element
   const text = document.createElement('p');
   text.textContent = 'I Choose You Charmander!'; // Set the text content
   text.classList.add('charmander-text'); // Optional: Add a class for styling
 
   // Create a container for the image and text
   const container = document.createElement('div');
   container.classList.add('charmander-container'); // Optional: Add a class for styling
 
   // Append the image and text to the container
   container.appendChild(img);
   container.appendChild(text);
 
   // Append the container to the body
   document.body.appendChild(container);
}

function Bulb() {
    // Create the image element
    const img = document.createElement('img');
    img.src = 'img/Bulbasaur.png';
    img.classList.add('bulbasaur-image');
  
    // Create the text element
    const text = document.createElement('p');
    text.textContent = 'I Choose You Bulbasaur!'; // Set the text content
    text.classList.add('bulbasaur-text'); // Optional: Add a class for styling
  
    // Create a container for the image and text
    const container = document.createElement('div');
    container.classList.add('bulbasaur-container'); // Optional: Add a class for styling
  
    // Append the image and text to the container
    container.appendChild(img);
    container.appendChild(text);
  
    // Append the container to the body
    document.body.appendChild(container);
}