 <?php
session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $_SESSION['name'] = $_POST['name'];
    $_SESSION['email'] = $_POST['email'];

    setcookie("user_email", $_POST['email'], time() + (7 * 24 * 60 * 60), "/");

    header("Location: profile.php");
    exit();
}
?>

<!DOCTYPE html>
<html lang="uk">
<head>
    <meta charset="UTF-8">
    <title>Реєстрація</title>
</head>
<body>

<h2>Реєстрація</h2>

<form method="POST">

    <input type="text" name="name" placeholder="Ім'я" required><br><br>

    <input type="email" name="email" placeholder="Email" required><br><br>

    <input type="password" name="password" placeholder="Пароль" required><br><br>

    <button type="submit">Зареєструватися</button>

</form>

</body>
</html>