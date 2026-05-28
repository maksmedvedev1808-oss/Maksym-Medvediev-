<?php

if (isset($_POST['language'])) {
    $language = $_POST['language'];
    setcookie("language", $language, time() + (7 * 24 * 60 * 60), "/");
} elseif (isset($_COOKIE['language'])) {
    $language = $_COOKIE['language'];
} else {
    $language = "uk";
}

$locales = [
    "uk" => "uk_UA.UTF-8",
    "en" => "en_US.UTF-8",
    "de" => "de_DE.UTF-8",
    "fr" => "fr_FR.UTF-8"
];

setlocale(LC_TIME, $locales[$language]);

$date = strftime("%A, %d %B %Y %H:%M:%S");

$ip = $_SERVER['REMOTE_ADDR'];

?>

<!DOCTYPE html>
<html lang="uk">
<head>
    <meta charset="UTF-8">
    <title>Дата і час</title>
</head>
<body>

<h2>Вибір мови</h2>

<form method="POST">

    <select name="language">

        <option value="uk">Українська</option>
        <option value="en">English</option>
        <option value="de">Deutsch</option>
        <option value="fr">Français</option>

    </select>

    <button type="submit">Зберегти</button>

</form>

<h3>Дата і час:</h3>

<p><?php echo $date; ?></p>

<h3>IP користувача:</h3>

<p><?php echo $ip; ?></p>

</body>
</html>