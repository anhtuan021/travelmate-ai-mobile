"npm install"
"npx expo start"
"a" or "w"
("a" view on android or "w" to test responsive)

## rule
| Loại                        | Quy tắc                            | Ví dụ                             |
| --------------------------- | ---------------------------------- | --------------------------------- |
| Component tên               | PascalCase                         | LoginForm, CustomButton, UserCard |
| Biến / hàm                  | camelCase                          | userData, fetchPosts, handleLogin |
| File Component              | PascalCase (trùng tên component)   | UserCard.tsx, HomeScreen.tsx      |
| File logic/hook             | camelCase (dễ phân biệt)           | useAuth.ts, useDebounce.ts        |
| StyleSheet object           | camelCase                          | container, button, title          |
| Folder shared UI            | Thường dùng ui/, components/ui/    | ui/Button.tsx, ui/Input.tsx       |
| Folder màn (screen)         | screens/ + PascalCase tên màn      | screens/LoginScreen.tsx           |
| Tên screen trong navigation | PascalCase hoặc snake\_case tùy hệ | Home, Settings, profile\_settings |
