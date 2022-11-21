# Redux saga
## what?
Redux-Saga là một thư viện redux middleware, giúp quản lý những side effect trong ứng dụng redux trở nên đơn giản hơn. Bằng việc sử dụng tối đa tính năng Generators (function*) của ES6, nó cho phép ta viết async code nhìn giống như là synchronous
Nằm giữa action và store. Khi thực thi chúng ta sẽ cung cấp một hàm cho saga và hàm này sẽ kiểm soát các action trước khi được vào store, nếu đúng là action được nhắm tới, nó sẽ thực thi đúng hàm cần thiết và dispatch sang reducers.

(Generator function có thể thực thi, tạm dừng trả về kết quả và thực thi bằng tiếp. Từ khóa để làm được việc đấy là “YIELD”.)
## Why?
Redux có một số ràng buộc:
- Các xử lý trong Reducers phải là các hàm đồng bộ và pure, trả về state mới
- Reducers sẽ ko được sử dụng các hàm async vì không được thay đổi global state.
Do đó để có thể giải quyết được các side effect này ta cần thực hiện nó ở middeware.
## How?
- Khi view dispatch 1 action lên cho reducer xử lý thì trước tiên nó phải đi qua middleware Saga
- Khi Saga nhận được action mà view dispatch lên thì nó sẽ bắt lấy action đấy để xử lý
- Sau khi saga xử lý xong thì nó sẽ dùng hàm put để dispatch một action mới lên cho reducer (action này có thể kèm theo cả dữ liệu mà saga đã xử lý trước đó)
- Bây giờ thì reducer mới nhận được action, sau đó reducer sẽ xử các action theo các điều kiện khác nhau(tùy theo action mà saga gửi lên thì reducer xử lý).

Redux saga cung cấp các hàm helper effect, các hàm này sẽ trả về một effect object chứa đựng thông tin đặc biệt chỉ dẫn middeware của Redux có thể thực hiện tiếp các hành động khác. Các hàm helper effect sẽ được thực thi trong các generator function.
- takeEvery() : thực thi và trả lại kết quả của mọi actions được gọi.
- takeLastest() : có nghĩa là nếu chúng ta thực hiện một loạt các actions, nó sẽ chỉ thực thi và trả lại kết quả của của actions cuối cùng.
- take() : tạm dừng cho đến khi nhận được action
- put() : dispatch một action.
- call(): gọi function. Nếu nó return về một promise, tạm dừng saga cho đến khi promise được giải quyết.
- race() : chạy nhiều effect đồng thời, sau đó hủy tất cả nếu một trong số đó kết thúc
# Material UI
## What
Material UI là gì Material UI là một thư viện gồm tập hợp các react component được Google viết cho reactJS theo phong cách của Material design.
Material design là một ngôn ngữ thiết kế được google vào ngày 25 tháng 6 năm 2014, tại hội nghị Google I/O 2014. Nó mang đến phong cách tự do hơn với các cách bố trí dạng lưới, các phản hồi hoạt họa chuyển động, kéo giãn, và các hiệu ứng chiều sâu như ánh sáng và đổ bóng.

## Install
npm install material-ui

## Customization
- Override individual component styles via the style prop
Cách này được dùng khi chúng ta cần override theme mặc định của material ui theo các style guilde của từng dự án khác nhau.

- Use a custom theme to style components
Đối với component thì chúng ta có thể override theo 2 cách
- Dùng props style
- Dùng withStyles
VD: 
const StyledButton = withStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  label: {
    textTransform: 'capitalize',
  },
})(Button);
