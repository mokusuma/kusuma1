<?php
$month = $_GET['month'] ?? date('m');
$year = $_GET['year'] ?? date('Y');

$days_in_month = cal_days_in_month(CAL_GREGORIAN, $month, $year );

$first_day_of_month = date('w', mktime(0,0,0,$month,1,$year));

$month_name = date('F', mktime(0,0,0,$month,1,$year));

$prev_month = $month-1;
$prev_year = $year;
if($prev_month == 0){
    $prev_month = 12;
    $prev_year--;
}

$next_month = $month+1;
$next_year = $year;
if($next_month == 13){
    $next_month = 1;
    $next_year++;
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>kalender</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <div class="header">
            <a href="?month=<?=$prev_month?>&year=<?=$prev_year?>"><img src="tombol.svg" alt="" width="13px"></a>
            <div>
                <p class="month"><?= $month_name ?></p>
                <p class="year"><?= $year ?></p>
            </div>
            <a href="?month=<?=$next_month?>&year=<?=$next_year?>"><img src="tombol.svg" alt="" width="13px" class="next"></a>
        </div>
        <table>
            <tr><th>minggu</th><th>senin</th><th>selasa</th><th>rabu</th><th>kamis</th><th>jumat</th><th>sabtu</th></tr>
            <hr>
            <tr>
                <?php 
                for($i = 0;$i < $first_day_of_month; $i++ ){
                    echo "<td></td>";
                }
                for($i = 1;$i <= $days_in_month; $i++ ){
                    if(($i + $first_day_of_month -1) % 7==0){
                    echo "</tr><tr>";
                 }
                    if($i == date('j') && $month == date('m') && $year == date('Y')){
                    echo "<td style='background:red;color:white;'>$i</td>";
                 }else{
                    echo "<td>$i</td>";
                 }
                }
                while(($i + $first_day_of_month - 1) % 7 !==0){
                    echo "<td></td>";
                    $i++;
                }
                ?>
            </tr>
        </table>
    </div>
</body>
</html>