<?php
// Mendapatkan nilai bulan dan tahun dari URL, jika tidak ada maka gunakan bulan dan tahun saat ini
$month = $_GET['month'] ?? date('m');
$year = $_GET['year'] ?? date('Y');

// Mendapatkan jumlah hari dalam bulan yang dipilih
$days_in_month = cal_days_in_month(CAL_GREGORIAN, $month, $year);

// Mendapatkan hari pertama dalam bulan (0 = Minggu, 1 = Senin, ..., 6 = Sabtu)
$first_day_of_month = date('w', mktime(0, 0, 0, $month, 1, $year));

// Mendapatkan nama bulan yang dipilih
$month_name = date('F', mktime(0, 0, 0, $month, 1, $year));

// Menghitung bulan dan tahun sebelumnya
$prev_month = $month - 1;
$prev_year = $year;
if ($prev_month == 0) {
    $prev_month = 12;
    $prev_year--;
}

// Menghitung bulan dan tahun sesudahnya
$next_month = $month + 1;
$next_year = $year;
if ($next_month == 13) {
    $next_month = 1;
    $next_year++;
}
?>
<!DOCTYPE html>
<html>
<head>
    <title>Kalender</title>
    <style>
        table {
            border-collapse: collapse;
        }

        td, th {
            border: 1px solid black;
            padding: 5px;
            text-align: center;
        }
    </style>
</head>
<body>
    <h2><?php echo $month_name ?></h2>
    <a href="?month=<?php echo $prev_month ?>&year=<?php echo $prev_year ?>">Prev</a> | <span><?php echo $year ?></span> | <a href="?month=<?php echo $next_month ?>&year=<?php echo $next_year ?>">Next</a>
    <table>
        <tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>
        <tr>
            <?php
            for ($i = 0; $i < $first_day_of_month; $i++) {
                echo "<td></td>";
            }
            for ($i = 1; $i <= $days_in_month; $i++) {
                if (($i + $first_day_of_month - 1) % 7 == 0) {
                    echo "</tr><tr>";
                }
                if ($i == date('j') && $month == date('m') && $year == date('Y')) {
                    echo "<td style='color:red'>$i</td>";
                } else {
                    echo "<td>$i</td>";
                }
            }
            // Menambahkan sel kosong pada akhir kalender jika bulan tersebut tidak berakhir pada hari Sabtu
            while (($i + $first_day_of_month - 1) % 7 != 0) {
                echo "<td></td>";
                $i++;
            }
            ?>
        </tr>
    </table>
</body>
</html>
