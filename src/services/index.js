export default class Service {

  getResource = async (url, data) => {
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'API-Key': data.api_key
      }
    });
    if (!res.ok) throw new Error(`Could non fetch ${url}. Status: ${res.status}`);
    return await res.json();   
  }

  postResource = async (url, data) => {
    const res = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'API-Key': data.api_key
      }
    });
    if (!res.ok) throw new Error(`Could non fetch ${url}. Status: ${res.status}`);
    return await res.json(); 
  }

  updateResource = async (url, data) => {
    const res = await fetch(url, {
      method: 'PATCH',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'API-Key': data.api_key
      }
    });
    if (!res.ok) throw new Error(`Could non fetch ${url}. Status: ${res.status}`);
    return await res.json(); 
  }

  deleteResource = async (url, api_key) => {
    const res = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'API-Key': api_key
      }
    });
    if (!res.ok) throw new Error(`Could non fetch ${url}. Status: ${res.status}`);
    return await res.json(); 
  }


  // const fileInput = document.getElementById('fileInput'); // получаем элемент input для загрузки файла
  // const file = fileInput.files[0]; // получаем выбранный файл
  // uplodeFile = async (url, data) => {
  //   const xhr = new XMLHttpRequest(); // создаем объект XMLHttpRequest
  //   const formData = new FormData(); // создаем объект FormData для передачи файла
  //   formData.append('file', data.file); // добавляем файл в объект FormData
  //   xhr.open('POST', url); // указываем метод и URL сервера, куда будет отправлен файл
  //   xhr.send(formData); // отправляем запрос на сервер с помощью метода send()    
  // }

  uploadFile = async (url, data) => {
    console.log(data);
    const formData = new FormData();
    formData.append('file', data.file);
    const res = await fetch(url, {
      method: 'POST',
      body: formData,
      headers: {
        'API-Key': data.api_key
      }
    })
    if (!res.ok) throw new Error(`Could non fetch ${url}. Status: ${res.status}`);
    return res; 
  }

}
