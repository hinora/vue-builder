# Vue component builder QCI-Core
## 1. Cách thêm một component
- B1: Tạo một folder chứa component trong thư mục `` src/components``
- B2: Tạo file main cho component đó trong folder vừa tạo, file vừa tạo phải trùng với tên folder, (quy ước đặt tên folder và file main component là luôn phải viết hoa chữ cái đầu, viết liền không dấu)
- B3: Tạo file ``Dev.vue`` trong folder vừa tạo
## 2. Chạy chế độ developer để dev component vừa tạo
- Chạy ``npm run serve -- --c:TenComponent`` với TenComponent là component muốn chạy developer
## 3. Build component
- Chạy ``npm run build``
- Để bỏ qua các component không muốn build. vô file vue.config.js. Thêm tên component đó vào mảng breakComponent
## 4. File Dev.vue
- import các file build giao diện hoặc test nhằm hỗ trợ cho việc developer component ở đây. Các file import này sẽ không được build ra khi ta build component
- Ví dụ: Component đang build sử dụng bootstrap. Ở chế độ developer chúng ta cần import bootstrap vào để tạo giao diện. nhưng chúng ta lại không cần import bootstrap khi build ra sản phẩm vì trong dự án đã có bootstrap. Để làm được điều này chúng ta sẽ import bootstrap ở trong component Dev. Tất cả những thứ được import và link trong Dev sẽ không được build ra sản phẩm.
## 5. Sử dụng component vừa build
- VD: ta có một component được đặt tên là ``ComponentA``. Sau khi build để sử dụng nó thì chỉ cần viết như sau
```html
<div  id="id">
	<component-a></component-a>
</div>
<script>
new  Vue({
	el: "#id"
});
</script>
```
## 6. Chú ý
- Tên component và tên folder chứa component phải đặt tên theo quy chuẩn của vue. [tham khảo](https://vuejs.org/v2/style-guide/)
- Tất cả các file của component đang build phải nằm trong thư mục của nó
- Khi install thêm các component hoặc thư viện ngoài cần kiểm tra trong packege.json xem đã có chưa để tránh việc xung đột phiên bản.