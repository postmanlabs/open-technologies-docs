/* Use <- and -> keys to navigate between docs on web */
export const handleKeyboard = () => {

  document.addEventListener('keydown', (e) => {
    const togglePrevLink = document.querySelector('.prevDoc');
    const toggleNextLink = document.querySelector('.nextDoc');
    if (togglePrevLink != undefined) {
      if (e.key === 'ArrowLeft') {
        togglePrevLink.click();
      }
    }
    if (toggleNextLink != undefined) {
      if (e.key === 'ArrowRight') {
        toggleNextLink.click();
      }
    }
  })
}
