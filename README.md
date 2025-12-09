useEffect:
    - chạy 1 lần duy nhất => nếu đối số thứ 2 là arr rỗng
    - chạy lại mỗi lần => nếu đối số thứ 2 là arr khác rỗng
    - destroy => return function

memo: ngăn chặn việc render lại. Cách sử dụng "export default memo(Component)"

useMemo: cache giá trị

useCallback: cache 1 function

useState

custom hooks