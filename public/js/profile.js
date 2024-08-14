document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('form').addEventListener('submit', async (event) => {
      event.preventDefault();
      
      const title = document.querySelector('#blog-name').value.trim();
      const content = document.querySelector('#blog-content').value.trim();
  
      if (title && content) {
        const response = await fetch('/api/blogs', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ title, content }),
        });
  
        if (response.ok) location.reload();
      }
    });
  
    document.querySelectorAll('button[data-id]').forEach(button => {
      button.addEventListener('click', async () => {
        const id = button.getAttribute('data-id');
  
        const response = await fetch(`/api/blogs/${id}`, { method: 'DELETE' });
  
        if (response.ok) location.reload();
      });
    });
  });
  