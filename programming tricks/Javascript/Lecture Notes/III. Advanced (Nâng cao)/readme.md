1. **Sử dụng Arrow Functions (Hàm mũi tên):**

   ```javascript
   const add = (a, b) => a + b;
   ```

2. **Sử dụng Destructuring (Hủy cấu trúc):**

   ```javascript
   const person = { name: "John", age: 30 };
   const { name, age } = person;
   ```

3. **Sử dụng Spread/Rest Operators (Toán tử trải):**

   ```javascript
   const arr1 = [1, 2, 3];
   const arr2 = [...arr1, 4, 5];
   const { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
   ```

4. **Sử dụng Template Literals (Ký tự mẫu):**

   ```javascript
   const name = "John";
   console.log(`Hello, ${name}!`);
   ```

5. **Sử dụng Promises và Async/Await cho Asynchronous Programming (Lập trình bất đồng bộ):**

   ```javascript
   async function fetchData() {
     try {
       const response = await fetch("https://api.example.com/data");
       const data = await response.json();
       return data;
     } catch (error) {
       console.error("Error fetching data:", error);
     }
   }
   ```

6. **Sử dụng Higher Order Functions (Hàm cao cấp):**

   ```javascript
   const doubleArray = (arr) => arr.map((item) => item * 2);
   ```

7. **Memoization (Ghi nhớ):**

   ```javascript
   function memoize(func) {
     const cache = {};
     return function (...args) {
       const key = JSON.stringify(args);
       if (!cache[key]) {
         cache[key] = func.apply(this, args);
       }
       return cache[key];
     };
   }
   ```

8. **Sử dụng Functional Programming:**

   ```javascript
   const numbers = [1, 2, 3, 4, 5];
   const sum = numbers.reduce((acc, curr) => acc + curr, 0);
   ```

9. **Sử dụng Object.defineProperty hoặc Object.defineProperties để định nghĩa thuộc tính của đối tượng với các thuộc tính có cấp độ:**

   ```javascript
   Object.defineProperty(objectName, "propertyName", {
     value: propertyValue,
     writable: true, // or false for read-only
     enumerable: true, // or false to hide the property in for...in loops
     configurable: true, // or false to prevent the property from being deleted or changed later
   });
   ```

10. **Sử dụng Proxy Objects (Đối tượng Proxy):**

    ```javascript
    const handler = {
      get: function (target, prop) {
        return prop in target ? target[prop] : 0;
      },
    };

    const obj = new Proxy({}, handler);
    obj.a = 10;
    console.log(obj.a); // Output: 10
    console.log(obj.b); // Output: 0 (default value)
    ```

11. **Currying (Chia nhỏ hàm):**

    ```javascript
    const multiply = (a) => (b) => a * b;
    const multiplyBy2 = multiply(2);
    console.log(multiplyBy2(3)); // Output: 6
    ```

12. **Partial Application (Áp dụng một phần):**

    ```javascript
    const greet = (greeting, name) => `${greeting}, ${name}!`;
    const greetHello = greet.bind(null, "Hello");
    console.log(greetHello("John")); // Output: Hello, John!
    ```

13. **Memoization với lưu trữ Cache tái sử dụng:**

    ```javascript
    function memoize(func, resolver) {
      const cache = {};
      return function (...args) {
        const key = resolver ? resolver(...args) : JSON.stringify(args);
        if (!cache[key]) {
          cache[key] = func.apply(this, args);
        }
        return cache[key];
      };
    }
    ```

14. **Functional Composition (Tổ hợp hàm):**

    ```javascript
    const compose =
      (...fns) =>
      (x) =>
        fns.reduceRight((acc, fn) => fn(acc), x);
    const add5 = (x) => x + 5;
    const multiplyBy2 = (x) => x * 2;
    const add5AndMultiplyBy2 = compose(multiplyBy2, add5);
    console.log(add5AndMultiplyBy2(3)); // Output: 16
    ```

15. **Memoization với WeakMap cho quản lý bộ nhớ hiệu quả hơn:**

    ```javascript
    const memoizeWithWeakMap = (fn) => {
      const cache = new WeakMap();
      return (arg) => {
        if (!cache.has(arg)) {
          cache.set(arg, fn(arg));
        }
        return cache.get(arg);
      };
    };
    ```

16. **Sử dụng Recursion (Đệ quy):**

    ```javascript
    const factorial = (n) => {
      if (n === 0) return 1;
      return n * factorial(n - 1);
    };
    ```

17. **Sử dụng Optional Chaining (Chaining tùy chọn):**

    ```javascript
    const person = { name: "John", address: { city: "New York" } };
    const city = person.address?.city;
    ```

18. **Sử dụng Nullish Coalescing Operator (Toán tử hợp nullish):**

    ```javascript
    const name = undefined;
    const defaultName = "Guest";
    const finalName = name ?? defaultName;
    ```

19. **Memoization với LRU Cache (Least Recently Used Cache):**

    ```javascript
    class LRUCache {
      constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map();
      }

      get(key) {
        if (!this.cache.has(key)) return -1;
        const value = this.cache.get(key);
        // Refresh the key to the end of the Map
        this.cache.delete(key);
        this.cache.set(key, value);
        return value;
      }

      put(key, value) {
        if (this.cache.has(key)) {
          // Refresh the key to the end of the Map
          this.cache.delete(key);
        } else if (this.cache.size >= this.capacity) {
          // Evict the least recently used item
          const firstKey = this.cache.keys().next().value;
          this.cache.delete(firstKey);
        }
        this.cache.set(key, value);
      }
    }
    ```

20. **Sử dụng Web Workers để thực hiện các tác vụ nặng:**

    ```javascript
    // worker.js
    self.addEventListener("message", (event) => {
      const data = event.data;
      // Perform heavy computation
      const result = performHeavyTask(data);
      self.postMessage(result);
    });

    // main.js
    const worker = new Worker("worker.js");
    worker.addEventListener("message", (event) => {
      const result = event.data;
      // Handle result from the worker
    });
    worker.postMessage(data);
    ```

21. **Sử dụng Throttling và Debouncing để quản lý sự kiện:**

    - Throttling:

    ```javascript
    const throttle = (func, limit) => {
      let inThrottle;
      return function () {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
          func.apply(context, args);
          inThrottle = true;
          setTimeout(() => (inThrottle = false), limit);
        }
      };
    };
    ```

    - Debouncing:

    ```javascript
    const debounce = (func, delay) => {
      let timeout;
      return function () {
        const context = this;
        const args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), delay);
      };
    };
    ```

22. **Sử dụng Generators để tạo ra các chuỗi giá trị lười biếng (Lazy Sequences):**

    ```javascript
    function* generateSequence(start, end) {
      for (let i = start; i <= end; i++) {
        yield i;
      }
    }
    const sequence = generateSequence(1, 5);
    console.log([...sequence]); // Output: [1, 2, 3, 4, 5]
    ```

23. **Sử dụng Intersection Observer API để theo dõi sự xuất hiện của phần tử trong viewport:**

    ```javascript
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Phần tử đã xuất hiện trong viewport
        }
      });
    });
    observer.observe(element);
    ```

24. **Sử dụng Service Workers để tạo ứng dụng web offline:**

    ```javascript
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker
          .register("/sw.js")
          .then((registration) => {
            console.log(
              "Service Worker registered with scope:",
              registration.scope
            );
          })
          .catch((error) => {
            console.error("Service Worker registration failed:", error);
          });
      });
    }
    ```

25. **Sử dụng Map, Set và WeakMap trong JavaScript Collections:**

    - Map:

    ```javascript
    const map = new Map();
    map.set("key", "value");
    console.log(map.get("key")); // Output: value
    ```

    - Set:

    ```javascript
    const set = new Set();
    set.add(1);
    set.add(2);
    set.add(1); // Ignored (sets don't allow duplicates)
    console.log(set.size); // Output: 2
    ```

    - WeakMap:

    ```javascript
    const weakMap = new WeakMap();
    const key = {};
    weakMap.set(key, "value");
    ```

26. **Sử dụng Symbols để tạo ra các thuộc tính riêng tư (private) trong đối tượng:**

    ```javascript
    const privateProperty = Symbol("privateProperty");
    const obj = {
      [privateProperty]: "secret",
      getPrivateProperty: function () {
        return this[privateProperty];
      },
    };
    console.log(obj.getPrivateProperty()); // Output: secret
    ```

27. **Sử dụng Reflect API cho việc tương tác với đối tượng:**

    ```javascript
    const obj = { x: 1 };
    Reflect.deleteProperty(obj, "x");
    ```

28. **Sử dụng Proxy Revocable để thu hồi quyền truy cập vào đối tượng Proxy:**

    ```javascript
    const { proxy, revoke } = Proxy.revocable({ x: 1 }, {});
    console.log(proxy.x); // Output: 1
    revoke();
    console.log(proxy.x); // Error: Proxy has been revoked
    ```

29. **Sử dụng Typed Arrays cho xử lý dữ liệu nhị phân và tính toán nhanh:**

    ```javascript
    const buffer = new ArrayBuffer(16);
    const view = new Int32Array(buffer);
    view[0] = 123;
    console.log(view[0]); // Output: 123
    ```

30. **Sử dụng SIMD (Single Instruction, Multiple Data) cho tính toán song song:**

    ```javascript
    const simd = require("simd");
    const a = new Float32Array([1, 2, 3, 4]);
    const b = new Float32Array([5, 6, 7, 8]);
    const result = simd.add(a, b);
    ```

31. **Sử dụng Đệm (Memoization) cho hiệu suất tăng cao:**

    ```javascript
    function memoize(func) {
      const cache = new Map();
      return function (...args) {
        const key = args.join(",");
        if (cache.has(key)) {
          return cache.get(key);
        }
        const result = func(...args);
        cache.set(key, result);
        return result;
      };
    }
    ```

32. **Sử dụng module bundler như Webpack hoặc Rollup để quản lý dependencies và tối ưu hóa mã:**

    ```javascript
    // webpack.config.js
    module.exports = {
      entry: "./src/index.js",
      output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
      },
    };
    ```

33. **Sử dụng Object.freeze(), Object.seal() và Object.preventExtensions() để quản lý tính không thay đổi, tính đóng kín và không mở rộng của đối tượng:**

    ```javascript
    const obj = { prop: 1 };
    Object.freeze(obj); // Không thể thay đổi giá trị hoặc thêm mới thuộc tính
    Object.seal(obj); // Không thể thêm mới thuộc tính, nhưng có thể thay đổi giá trị
    Object.preventExtensions(obj); // Có thể thay đổi giá trị và xóa thuộc tính, nhưng không thể thêm mới
    ```

34. **Sử dụng setTimeout() và setInterval() cho việc lập lịch các tác vụ trong JavaScript:**

    ```javascript
    setTimeout(() => {
      console.log("This will be logged after 1 second");
    }, 1000);

    const intervalId = setInterval(() => {
      console.log("This will be logged every 2 seconds");
    }, 2000);

    // Để dừng setInterval
    clearInterval(intervalId);
    ```

35. **Sử dụng Intl API để làm việc với định dạng ngôn ngữ và số hóa:**

    ```javascript
    const number = 123456.789;
    console.log(new Intl.NumberFormat("en-US").format(number)); // Output: "123,456.789"
    ```

36. **Sử dụng WebSockets để thiết lập kết nối hai chiều giữa trình duyệt và máy chủ:**

    ```javascript
    const socket = new WebSocket("ws://localhost:8080");
    socket.addEventListener("open", () => {
      console.log("Connected to WebSocket server");
    });
    socket.addEventListener("message", (event) => {
      console.log("Received message:", event.data);
    });
    ```

37. **Sử dụng String Methods như split(), slice(), substr(), replace() cho xử lý chuỗi:**

    ```javascript
    const sentence = "Hello, world!";
    const words = sentence.split(" "); // Tách thành mảng các từ
    const subString = sentence.slice(7, 12); // Cắt chuỗi con từ vị trí 7 đến 11
    const replaced = sentence.replace("world", "JavaScript"); // Thay thế "world" thành "JavaScript"
    ```

38. **Sử dụng event.preventDefault() và event.stopPropagation() để ngăn chặn hành vi mặc định của trình duyệt và ngăn chặn sự lan truyền của sự kiện trong DOM:**

    ```javascript
    document.querySelector("a").addEventListener("click", (event) => {
      event.preventDefault(); // Ngăn chặn chuyển hướng khi click vào một liên kết
      event.stopPropagation(); // Ngăn chặn sự lan truyền của sự kiện click
    });
    ```

39. **Sử dụng ArrayBuffer và DataView cho xử lý dữ liệu nhị phân:**

    ```javascript
    const buffer = new ArrayBuffer(16);
    const view = new DataView(buffer);
    view.setInt32(0, 123);
    console.log(view.getInt32(0)); // Output: 123
    ```

40. **Sử dụng các thư viện và frameworks như React, Angular, hoặc Vue.js để phát triển ứng dụng web hiện đại:**

    ```javascript
    // Ví dụ sử dụng React
    import React from "react";
    import ReactDOM from "react-dom";

    const element = <h1>Hello, world!</h1>;
    ReactDOM.render(element, document.getElementById("root"));
    ```

41. **Sử dụng WebRTC (Web Real-Time Communication) để thực hiện truyền dữ liệu trực tuyến và thời gian thực giữa các trình duyệt:**

    ```javascript
    // Khởi tạo một kết nối Peer-to-Peer
    const peerConnection = new RTCPeerConnection();

    // Tạo và gửi một offer cho một peer khác
    peerConnection
      .createOffer()
      .then((offer) => peerConnection.setLocalDescription(offer))
      .then(() => {
        // Gửi offer cho peer khác
        const offer = peerConnection.localDescription;
        // Xử lý offer...
      });

    // Nhận và xử lý offer từ peer khác
    const offer = getOfferFromOtherPeer();
    peerConnection
      .setRemoteDescription(offer)
      .then(() => peerConnection.createAnswer())
      .then((answer) => peerConnection.setLocalDescription(answer))
      .then(() => {
        // Gửi answer cho peer khác
        const answer = peerConnection.localDescription;
        // Xử lý answer...
      });
    ```

42. **Sử dụng SIMD.js để tận dụng các tính năng SIMD trên trình duyệt hỗ trợ:**

    ```javascript
    const a = SIMD.Float32x4(1, 2, 3, 4);
    const b = SIMD.Float32x4(5, 6, 7, 8);
    const result = SIMD.Float32x4.add(a, b);
    ```

43. **Sử dụng Generator Functions để tạo ra các chuỗi dữ liệu lười biếng với các vòng lặp vô hạn:**

    ```javascript
    function* infiniteSequence() {
      let i = 0;
      while (true) {
        yield i++;
      }
    }
    const sequence = infiniteSequence();
    console.log(sequence.next().value); // Output: 0
    ```

44. **Sử dụng Proxy.revocable() để tạo ra proxy có thể thu hồi quyền truy cập:**

    ```javascript
    const { proxy, revoke } = Proxy.revocable({ x: 1 }, {});
    console.log(proxy.x); // Output: 1
    revoke();
    console.log(proxy.x); // Error: Proxy has been revoked
    ```

45. **Sử dụng OffscreenCanvas để thực hiện vẽ và xử lý đồ họa nền trong một luồng nền:**

    ```javascript
    const offscreen = canvas.transferControlToOffscreen();
    const worker = new Worker("worker.js");
    worker.postMessage({ canvas: offscreen }, [offscreen]);
    ```

46. **Sử dụng TextEncoder và TextDecoder cho mã hóa và giải mã văn bản:**

    ```javascript
    const encoder = new TextEncoder();
    const decoder = new TextDecoder();
    const encoded = encoder.encode("Hello, world!");
    const decoded = decoder.decode(encoded);
    console.log(decoded); // Output: Hello, world!
    ```

47. **Sử dụng Intersection Observer API để theo dõi sự xuất hiện của phần tử trong viewport và xử lý tải trễ:**

    ```javascript
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Xử lý khi phần tử xuất hiện trong viewport
        }
      });
    });
    observer.observe(element);
    ```

48. **Sử dụng Pointer Lock API để ẩn con trỏ chuột và lấy dữ liệu từ các sự kiện chuột khi trong chế độ khóa con trỏ:**

    ```javascript
    element.requestPointerLock();
    document.addEventListener("pointerlockchange", () => {
      if (document.pointerLockElement === element) {
        // Xử lý khi con trỏ chuột được khóa
      }
    });
    ```

49. **Sử dụng WebGL để vẽ và thao tác đồ họa ba chiều trong trình duyệt:**

    ```javascript
    const canvas = document.createElement("canvas");
    const gl = canvas.getContext("webgl");
    ```

50. **Sử dụng IndexedDB để lưu trữ dữ liệu lớn và thực hiện các thao tác truy vấn offline:**

    ```javascript
    const request = indexedDB.open("myDatabase", 1);
    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      const objectStore = db.createObjectStore("customers", { keyPath: "id" });
      objectStore.createIndex("name", "name", { unique: false });
    };
    ```

51. **Sử dụng WebAssembly để thực hiện tính toán hiệu suất cao với mã máy trực tiếp:**

    ```javascript
    // Khởi tạo một module WebAssembly từ file .wasm
    const response = await fetch("module.wasm");
    const buffer = await response.arrayBuffer();
    const module = await WebAssembly.compile(buffer);
    const instance = await WebAssembly.instantiate(module);
    const result = instance.exports.add(1, 2); // Gọi hàm từ module WebAssembly
    ```

52. **Sử dụng Passive Event Listeners để tối ưu hóa hiệu suất cuộc gọi sự kiện:**

    ```javascript
    // Thêm sự kiện với passive: true
    window.addEventListener("scroll", handleScroll, { passive: true });
    ```

53. **Sử dụng SIMD.js cho tính toán vector hiệu suất cao trên mảng số:**

    ```javascript
    const a = SIMD.Float32x4(1, 2, 3, 4);
    const b = SIMD.Float32x4(5, 6, 7, 8);
    const result = SIMD.Float32x4.add(a, b);
    ```

54. **Sử dụng Content Security Policy (CSP) để bảo vệ trang web khỏi các cuộc tấn công XSS và các rủi ro liên quan đến bảo mật khác:**

    ```html
    <meta http-equiv="Content-Security-Policy" content="default-src 'self'" />
    ```

55. **Sử dụng MutationObserver để theo dõi các thay đổi trong DOM và thực hiện các hành động tương ứng:**

    ```javascript
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        // Xử lý khi có thay đổi trong DOM
      });
    });
    observer.observe(targetNode, {
      attributes: true,
      childList: true,
      subtree: true,
    });
    ```

56. **Sử dụng MediaStream API để thực hiện ghi âm và quay video trong trình duyệt:**

    ```javascript
    navigator.mediaDevices
      .getUserMedia({ audio: true, video: true })
      .then((stream) => {
        // Sử dụng stream ghi âm hoặc quay video
      })
      .catch((error) => {
        console.error("Error accessing media devices:", error);
      });
    ```

57. **Sử dụng sessionStorage và localStorage để lưu trữ dữ liệu tạm thời hoặc vĩnh viễn trên trình duyệt:**

    ```javascript
    // Lưu trữ dữ liệu vĩnh viễn
    localStorage.setItem("key", "value");
    const value = localStorage.getItem("key");

    // Lưu trữ dữ liệu tạm thời (sau khi cửa sổ đóng, dữ liệu sẽ bị xóa)
    sessionStorage.setItem("key", "value");
    const value = sessionStorage.getItem("key");
    ```

58. **Sử dụng Intl.DateTimeFormat để định dạng ngày và giờ theo các quy tắc vùng và ngôn ngữ cụ thể:**

    ```javascript
    const now = new Date();
    const formattedDate = new Intl.DateTimeFormat("en-US").format(now);
    ```

59. **Sử dụng SpeechRecognition API để nhận dạng giọng nói từ microphone:**

    ```javascript
    const recognition = new SpeechRecognition();
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      // Xử lý văn bản được nhận dạng từ giọng nói
    };
    recognition.start();
    ```

60. **Sử dụng ResizeObserver để theo dõi thay đổi kích thước của các phần tử trong DOM:**
    ```javascript
    const observer = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        // Xử lý khi kích thước của phần tử thay đổi
      });
    });
    observer.observe(targetElement);
    ```
