<?php
// Подключение к базе данных
$db = new mysqli('localhost', 'username', 'password', 'database_name');

// Проверка отправки формы
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Получение данных из формы
    $username = $db->real_escape_string($_POST['username']);
    $password = $db->real_escape_string($_POST['password']);
    $hashed_password = password_hash($password, PASSWORD_DEFAULT);

    // Проверка существования пользователя
    $result = $db->query("SELECT * FROM users WHERE username = '$username'");
    if ($result->num_rows == 0) {
        // Добавление нового пользователя
        $insert = $db->query("INSERT INTO users (username, password) VALUES ('$username', '$hashed_password')");
        if ($insert) {
            echo "Регистрация успешна!";
        } else {
            echo "Ошибка при регистрации.";
        }
    } else {
        echo "Пользователь с таким именем уже существует.";
    }
}
?>

<!-- Форма регистрации -->
<form method="post" action="">
    Имя пользователя: <input type="text" name="username" required>
    Пароль: <input type="password" name="password" required>
    <input type="submit" value="Регистрация">
</form>
