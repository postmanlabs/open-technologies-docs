/* Use <- and -> keys to navigate between docs on web */
export const handleKeyboard = () => {
  // const togglePrevLink = document.querySelector('.prevDoc');
  // const toggleNextLink =  document.getElementById('nextDoc');
  
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
      document.getElementById('prevDoc').click();
    }
    if (e.key === 'ArrowRight') {
      document.getElementById('nextDoc').click();
    }
  })
}
