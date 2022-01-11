# Bài 1
## Chuyển hàm loadJson sang hàm async:
  ```
  function loadJson(url) {
    return axios.get(url)
      .then(response => {
        if (response.status == 200) {
          return response;
        } else {
          throw new Error(response.status);
        }
      })
  }

  loadJson('https://tutorialzine.com/misc/files/example.json').then(res => console.log(res.data));
  ```
# Bài 2:
  ## Sử dụng async, await viết hàm đọc file:
  ```
  async function readFileContent(path){
    .....
    return contentFile;
  }
  ```
# Bài 3:
  ## Sử dụng async, await để sửa đoạn code trên in ra theo thứ tự từ 1 đến 10;
  ```
  const printAsync = function(stt) {
    return new Promise((resolve, reject) ⇒ {
        setTimeout(() ⇒ {
          resolve(`Đây laà promise thứ ${stt}`)
        })
      }, 2000)
  }

  function count() {
    for(let i = 1; i <= 10; i++) {
      printAync(i)
    }
  }
  ```

 # Output: 
  ```
  Đây là promise thứ 1
  Đây là promise thứ 2
  ....................
  Đây là promise thứ 10
  ```
# Bài 4:
  Sử dụng async, await để đọc nội dung của nhiều file trong 1 directory.

```
  Nhóm 1: Đình Hoàng, A. Hiệp, Xuân Huy
  Nhóm 2: Triệu Huy Hoàng, Đào Vinh, Vũ Tùng, Sinh
  Nhóm 3: A Hữu, Gia Tâm, Đàm Hồng, Nhất Hoàng
```