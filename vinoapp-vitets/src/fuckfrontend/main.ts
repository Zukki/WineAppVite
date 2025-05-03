document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('myForm') as HTMLFormElement;
  
    form.addEventListener('submit', (event) => {
      event.preventDefault();
  
      const formData = new FormData(form);
      const data: { [key: string]: string } = {};
  
      formData.forEach((value, key) => {
        data[key] = value.toString();
      });
  
      console.log('Form Data:', data);
    });
  });