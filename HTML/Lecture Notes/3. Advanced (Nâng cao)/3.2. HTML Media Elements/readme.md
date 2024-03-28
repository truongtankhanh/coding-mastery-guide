## Sử dụng thẻ `<audio>` và `<video>` với các thuộc tính như autoplay, controls, loop, v.v.

### Khái Niệm:

Trong HTML, thẻ `<audio>` và `<video>` được sử dụng để nhúng phương tiện âm thanh và video vào trang web. Các thuộc tính như `autoplay`, `controls`, `loop`, và nhiều thuộc tính khác được sử dụng để kiểm soát và tùy chỉnh cách phương tiện đó được phát lại và hiển thị trên trình duyệt.

### Ngữ Cảnh:

Khi bạn muốn nhúng audio hoặc video vào trang web của mình, việc sử dụng thẻ `<audio>` và `<video>` cùng với các thuộc tính tùy chỉnh là rất hữu ích. Các thuộc tính này giúp bạn kiểm soát cách phương tiện được phát lại, bao gồm việc tự động phát, hiển thị thanh điều khiển, lặp lại và nhiều tính năng khác.

### Cách Sử Dụng và Ví Dụ:

#### Sử Dụng `<audio>`:

```html
<audio controls autoplay loop>
  <source src="audio_file.mp3" type="audio/mpeg" />
  Your browser does not support the audio element.
</audio>
```

1. **Thuộc tính `controls`**: Hiển thị thanh điều khiển âm thanh để người dùng có thể điều khiển phương tiện.
2. **Thuộc tính `autoplay`**: Tự động bắt đầu phát lại phương tiện khi trang được tải.
3. **Thuộc tính `loop`**: Tự động lặp lại phương tiện sau khi hoàn thành.

#### Sử Dụng `<video>`:

```html
<video width="320" height="240" controls autoplay loop>
  <source src="video_file.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
```

1. **Thuộc tính `controls`**: Hiển thị thanh điều khiển video để người dùng có thể điều khiển phương tiện.
2. **Thuộc tính `autoplay`**: Tự động bắt đầu phát lại video khi trang được tải.
3. **Thuộc tính `loop`**: Tự động lặp lại video sau khi hoàn thành.

### Ví Dụ Toàn Bộ:

```html
<!-- Phát lại audio -->
<audio controls autoplay loop>
  <source src="audio_file.mp3" type="audio/mpeg" />
  Your browser does not support the audio element.
</audio>

<!-- Phát lại video -->
<video width="320" height="240" controls autoplay loop>
  <source src="video_file.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
```

Trong ví dụ trên, thẻ `<audio>` được sử dụng để nhúng audio vào trang web và thẻ `<video>` được sử dụng để nhúng video vào trang web. Các thuộc tính như `controls`, `autoplay`, và `loop` được sử dụng để tùy chỉnh cách phương tiện được phát lại và hiển thị.

---

---

## Sử dụng thẻ `<source>` để cung cấp nhiều định dạng và nguồn media cho cùng một phương tiện.

### Khái Niệm:

Trong HTML, thẻ `<source>` được sử dụng để cung cấp nhiều định dạng và nguồn phương tiện (audio hoặc video) cho cùng một phương tiện. Điều này cho phép trình duyệt chọn định dạng hỗ trợ tốt nhất hoặc chọn nguồn phương tiện phù hợp để phát lại.

### Ngữ Cảnh:

Khi bạn có một phương tiện (audio hoặc video) và muốn cung cấp nhiều định dạng hoặc nguồn media cho nó để đảm bảo tương thích với nhiều trình duyệt và thiết bị, bạn có thể sử dụng thẻ `<source>`. Điều này giúp đảm bảo rằng người dùng có thể xem hoặc nghe được phương tiện trên mọi nền tảng.

### Cách Sử Dụng và Ví Dụ:

#### Sử Dụng `<source>` trong thẻ `<audio>`:

```html
<audio controls>
  <source src="audio_file.mp3" type="audio/mpeg" />
  <source src="audio_file.ogg" type="audio/ogg" />
  Your browser does not support the audio element.
</audio>
```

Trong ví dụ trên:

- `<source src="audio_file.mp3" type="audio/mpeg">`: Cung cấp một nguồn phương tiện audio dưới dạng file MP3.
- `<source src="audio_file.ogg" type="audio/ogg">`: Cung cấp một nguồn phương tiện audio dưới dạng file OGG.
- Nếu trình duyệt không hỗ trợ bất kỳ định dạng nào, văn bản "Your browser does not support the audio element." sẽ được hiển thị.

#### Sử Dụng `<source>` trong thẻ `<video>`:

```html
<video width="320" height="240" controls>
  <source src="video_file.mp4" type="video/mp4" />
  <source src="video_file.webm" type="video/webm" />
  Your browser does not support the video tag.
</video>
```

Trong ví dụ trên:

- `<source src="video_file.mp4" type="video/mp4">`: Cung cấp một nguồn phương tiện video dưới dạng file MP4.
- `<source src="video_file.webm" type="video/webm">`: Cung cấp một nguồn phương tiện video dưới dạng file WebM.
- Nếu trình duyệt không hỗ trợ bất kỳ định dạng nào, văn bản "Your browser does not support the video tag." sẽ được hiển thị.

### Ví Dụ Toàn Bộ:

```html
<!-- Sử dụng <source> cho audio -->
<audio controls>
  <source src="audio_file.mp3" type="audio/mpeg" />
  <source src="audio_file.ogg" type="audio/ogg" />
  Your browser does not support the audio element.
</audio>

<!-- Sử dụng <source> cho video -->
<video width="320" height="240" controls>
  <source src="video_file.mp4" type="video/mp4" />
  <source src="video_file.webm" type="video/webm" />
  Your browser does not support the video tag.
</video>
```

Trong ví dụ trên, thẻ `<source>` được sử dụng để cung cấp nhiều định dạng và nguồn phương tiện cho cùng một phương tiện. Điều này giúp đảm bảo rằng phương tiện có thể phát lại trên nhiều trình duyệt và thiết bị khác nhau.

---

---
