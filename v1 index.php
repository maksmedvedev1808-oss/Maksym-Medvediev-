<?php

$lang = "uk";

if (isset($_POST['lang'])) {
    $lang = $_POST['lang'];
    setcookie("language", $lang, time() + (7 * 24 * 60 * 60));
} elseif (isset($_COOKIE['language'])) {
    $lang = $_COOKIE['language'];
}

switch ($lang) {
    case "en":
        setlocale(LC_TIME, 'en_US.UTF-8');
        break;

    case "de":
        setlocale(LC_TIME, 'de_DE.UTF-8');
        break;

    case "fr":
        setlocale(LC_TIME, 'fr_FR.UTF-8');
        break;

    default:
        setlocale(LC_TIME, 'uk_UA.UTF-8');
}

$date = strftime("%A, %d %B %Y %H:%M:%S");

$ip = $_SERVER['REMOTE_ADDR'];

?>

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>PHP Практична</title>
</head>
<body>

<h2>Вибір мови</h2>

<form method="POST">
    <select name="lang">
        <option value="uk">Українська</option>
        <option value="en">English</option>
        <option value="de">Deutsch</option>
        <option value="fr">Français</option>
    </select>

    <button type="submit">Змінити</button>
</form>

<h3>Дата і час:</h3>
<p><?php echo $date; ?></p>

<h3>Ваш IP:</h3>
<p><?php echo $ip; ?></p>

</body>
</html>