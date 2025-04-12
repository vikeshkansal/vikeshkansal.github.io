
window.addEventListener('load', () => {
    const timestamp = Date();
    console.log(`${timestamp}, view, document`);
  });
  
  document.addEventListener('click', (event) => {
    const timestamp = Date(); 
    let objectType = 'unknown'; 
    if (event.target) objectType = event.target.tagName.toLowerCase();
    console.log(`${timestamp}, click, ${objectType}`);
  });
  