document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#commentForm');
    const input = document.querySelector('#commentInput');
    const blogId = window.location.pathname.split('/').pop();
  
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
  
      const content = input.value.trim();
      if (!content) return;
  
      const response = await fetch(`/api/comments/${blogId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ comment_content: content }),
      });
  
      if (response.ok) location.reload();
    });
  });
  