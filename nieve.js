// Crear los copos de nieve
function createSnowflakes() {
    const containers = document.querySelector('.snowfall-cont');
    for (let i = 0; i < 30; i++) {
      const snowflake = document.createElement('div');
      snowflake.className = 'snowflake';
      snowflake.style.left = `${Math.random() * 100}%`;
      snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`;
      containers.appendChild(snowflake);    
    }
  }
  
  createSnowflakes();