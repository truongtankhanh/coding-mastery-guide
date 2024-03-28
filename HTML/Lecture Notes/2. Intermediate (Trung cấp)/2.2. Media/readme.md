### Thẻ `<audio>` trong HTML

#### Khái niệm:

Thẻ `<audio>` trong HTML là một phần tử dùng để chèn và phát các tập tin âm thanh trực tiếp vào trang web. Nó cung cấp một cách thuận tiện để hiển thị và điều khiển phát nhạc, âm thanh, hoặc bất kỳ nội dung âm thanh nào mà bạn muốn chia sẻ với người dùng của bạn.

#### Ngữ cảnh:

Khi bạn muốn thêm âm thanh vào trang web của mình, thẻ `<audio>` là công cụ hữu ích để làm điều này. Bạn có thể sử dụng nó để chèn các bản nhạc, ghi âm, podcast, hoặc bất kỳ loại nội dung âm thanh nào khác mà bạn muốn người dùng có thể phát trực tiếp từ trang web của bạn.

#### Cách sử dụng và ví dụ:

```html
<audio controls>
  <source src="audio_file.mp3" type="audio/mpeg" />
  Your browser does not support the audio element.
</audio>
```

Trong đoạn mã trên:

- Thẻ `<audio>` được sử dụng để chứa và phát lại âm thanh.
- Thuộc tính `controls` được thêm vào để hiển thị các điều khiển phát như nút play, pause, và thanh tua.
- Thẻ `<source>` định nghĩa nguồn dữ liệu âm thanh và loại MIME của tập tin. Trong ví dụ này, nguồn là một tập tin MP3 (`audio_file.mp3`).

Nếu trình duyệt không hỗ trợ định dạng âm thanh được chỉ định, văn bản "Your browser does not support the audio element." sẽ được hiển thị.

Ví dụ:

```html
<audio controls>
  <source src="music.mp3" type="audio/mpeg" />
  Your browser does not support the audio element.
</audio>
```

Trong ví dụ này, chúng ta có một thẻ `<audio>` với các điều khiển phát và một tập tin âm thanh có tên là `music.mp3`. Điều này sẽ cho phép người dùng phát lại tập tin âm thanh này trực tiếp từ trang web của bạn.

----
----

### Thẻ `<video>` trong HTML

#### Khái niệm:

Thẻ `<video>` trong HTML là một phần tử được sử dụng để chèn và phát các tập tin video trực tiếp trên trang web. Nó cung cấp một cách thuận tiện để hiển thị và điều khiển phát video, cho phép bạn chia sẻ nội dung video với người dùng của mình.

#### Ngữ cảnh:

Khi bạn muốn thêm video vào trang web của mình, thẻ `<video>` là công cụ hữu ích để làm điều này. Bạn có thể sử dụng nó để chèn các video giảng dạy, phim ngắn, hướng dẫn, hoặc bất kỳ loại nội dung video nào khác mà bạn muốn người dùng có thể xem trực tiếp từ trang web của bạn.

#### Cách sử dụng và ví dụ:

```html
<video width="320" height="240" controls>
  <source src="video_file.mp4" type="video/mp4" />
  Your browser does not support the video element.
</video>
```

Trong đoạn mã trên:

- Thẻ `<video>` được sử dụng để chứa và phát lại video.
- Thuộc tính `width` và `height` được sử dụng để xác định kích thước của video trong trang.
- Thuộc tính `controls` được thêm vào để hiển thị các điều khiển phát như nút play, pause, và thanh tua.
- Thẻ `<source>` định nghĩa nguồn dữ liệu video và loại MIME của tập tin. Trong ví dụ này, nguồn là một tập tin MP4 (`video_file.mp4`).

Nếu trình duyệt không hỗ trợ định dạng video được chỉ định, văn bản "Your browser does not support the video element." sẽ được hiển thị.

Ví dụ:

```html
<video width="640" height="360" controls>
  <source src="movie.mp4" type="video/mp4" />
  Your browser does not support the video element.
</video>
```

Trong ví dụ này, chúng ta có một thẻ `<video>` với kích thước 640x360 và các điều khiển phát, và một tập tin video có tên là `movie.mp4`. Điều này sẽ cho phép người dùng xem video này trực tiếp từ trang web của bạn.

----
----

### Tóm tắt:

- Thẻ `<audio>` và `<video>` trong HTML cho phép bạn chèn âm thanh và video vào trang web của bạn.
- Sử dụng các thuộc tính như `controls`, `src`, `type`, `width`, và `height` để điều chỉnh và tùy chỉnh hiển thị và phát lại âm thanh hoặc video.

----
----
