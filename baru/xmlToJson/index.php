
<?php
function xmlFileToJsonFile($xmlFilePath, $jsonFilePath) {
    $xmlString = file_get_contents($xmlFilePath);
    $xml = simplexml_load_string($xmlString);
    $json = json_encode($xml,JSON_PRETTY_PRINT);
    file_put_contents($jsonFilePath, $json);
}

if (isset($_FILES['xmlFile'])) {
    $xmlFilePath = $_FILES['xmlFile']['tmp_name'];
    $jsonFilePath = 'xml.json';
    xmlFileToJsonFile($xmlFilePath, $jsonFilePath);
    

}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>xmlToJson</title>
    <link rel="stylesheet" href="style.css">
</head>
<body style="display: grid;">

    <form action="" method="post" enctype="multipart/form-data">
        <input type="file" name="xmlFile" id="" >
        <button type="submit" name="submit" style="display: block;">Submit</button>
        <?php
        if (isset($_POST['submit'])) {
            if (isset($_FILES['xmlFile'])) {
                $xmlFilePath = $_FILES['xmlFile']['tmp_name'];
                $jsonFilePath = 'xml.json';
                xmlFileToJsonFile($xmlFilePath, $jsonFilePath);
                echo "File JSON telah jadi.";
            }
        }
        ?>
    </form>
    <a download="xml.json" href="xml.json">download</a>

</body>
</html>
