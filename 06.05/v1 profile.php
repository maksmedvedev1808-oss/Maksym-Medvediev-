<?php
session_start();

if (!isset($_SESSION['name']) || !isset($_SESSION['email'])) {
    header("Location: register.php");
    exit();
}

$name = $_SESSION['name'];
$email = $_SESSION['email'];

$cookieEmail = isset($_COOKIE['user_email']) ? $_COOKIE['user_email'] : "Немає даних";
?>

<!DOCTYPE html>
<html lang="uk">
<head>
    <meta charset="UTF-8">
    <title>Профіль</title>
</head>
<body>

<h2>Профіль користувача</h2>

<p>Ім'я: <?php echo $name; ?></p>

<p>Email: <?php echo $email; ?></p>

<p>Ваш email запам'ятали: <?php echo $cookieEmail; ?></p>

<a href="logout.php">
    <button>Вийти</button>
</a>

</body>
</html>