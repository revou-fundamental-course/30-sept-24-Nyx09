// index.js



// Fungsi untuk mengonversi Celsius ke Fahrenheit
function convertToFahrenheit() {
    
    const celsius = parseFloat(document.getElementById('celsius').value);
    if (isNaN(celsius)) {
        alert('Input tidak valid. Harap masukkan angka untuk Celsius.');
        return;
    }

    const fahrenheit = (celsius * 9 / 5) + 32;
    const roundedFahrenheit = Math.round(fahrenheit); // Pembulatan ke angka bulat
    document.getElementById('fahrenheit').value = roundedFahrenheit + ' °F'; // Menampilkan hasil

    // Menampilkan cara perhitungan
    document.getElementById('temperature-how-to-convert').value = 
        `${celsius} * (9/5) + 32 = ${roundedFahrenheit} °F`;
}

// Fungsi untuk mereset semua field input
function resetFields() {
    document.getElementById('celsius').value = '';        // Mengosongkan input Celsius
    document.getElementById('fahrenheit').value = '';     // Mengosongkan input Fahrenheit
    document.getElementById('temperature-how-to-convert').value = ''; // Mengosongkan input hasil
}

// Fungsi untuk mengonversi Fahrenheit ke Celsius
function reverseConversion() {
    const fahrenheit = parseFloat(document.getElementById('fahrenheit').value);
    if (isNaN(fahrenheit)) {
        alert('Input tidak valid. Harap masukkan angka untuk Fahrenheit.');
        return;
    }

    const celsius = (fahrenheit - 32) * 5 / 9;            // Menghitung Celsius dari Fahrenheit
    const roundedCelsius = Math.round(celsius); // Pembulatan ke angka bulat
    document.getElementById('celsius').value = roundedCelsius + ' °C'; // Menampilkan hasil

    // Menampilkan cara perhitungan
    document.getElementById('temperature-how-to-convert').value = 
        `${fahrenheit} - 32) * (5/9) = ${roundedCelsius} °C`;
}
