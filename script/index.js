// Fungsi untuk memvalidasi input form
function validateForm() {
    var formInput = document.getElementById("celsiusInput"); // Ambil elemen input suhu Celsius
    var formValue = formInput.value; // Ambil nilai dari input

    // Cek jika input kosong atau bukan angka
    if (formValue === "" || isNaN(formValue)) {
        alert("Please enter a valid number for Celsius."); // Tampilkan alert jika tidak valid
        formInput.style.border = "2px solid red"; // Ubah border input menjadi merah
        return false; // Cegah pengiriman form
    }

    // Lakukan konversi jika valid
    convertToFahrenheit(formValue);
    
    return true; // Izinkan tindakan lebih lanjut
}

// Fungsi untuk mengonversi Celsius ke Fahrenheit
function convertToFahrenheit(celsius) {
    var fahrenheit = (celsius * 9 / 5) + 32; // Hitung konversi dari Celsius ke Fahrenheit
    document.getElementById("fahrenheit").value = Number(fahrenheit.toFixed(2)); // Tampilkan hasil di input Fahrenheit, format 2 desimal
    document.getElementById("temperature-how-to-convert").value = `S(°F) = ( ${celsius} × 9/5) + 32 = ${fahrenheit.toFixed(2)}`; // Tampilkan rumus konversi
}

// Fungsi untuk mereset semua field input dan output
function resetFields() {
    document.getElementById("celsiusInput").value = ""; // Kosongkan input Celsius
    document.getElementById("fahrenheit").value = ""; // Kosongkan output Fahrenheit
    document.getElementById("temperature-how-to-convert").value = ""; // Kosongkan penjelasan konversi
    document.getElementById("celsiusInput").style.border = ""; // Reset border input
    
    // Aktifkan kembali input untuk entri baru
    document.getElementById("celsiusInput").disabled = false;
}

// Fungsi untuk mengonversi Fahrenheit kembali ke Celsius
function reverseConversion() {
    var fahrenheitValue = document.getElementById("fahrenheit").value; // Ambil nilai Fahrenheit dari input

    // Hitung konversi dari Fahrenheit ke Celsius
    var celsiusValue = (fahrenheitValue - 32) * 5 / 9; 
    document.getElementById("fahrenheit").value = Number(celsiusValue.toFixed(2)); // Tampilkan hasil di input Celsius

    // Perbarui label untuk konversi balik
    document.getElementById("fahrenheit-result").innerText = "Celsius (&deg;C):"; // Ubah label menjadi Celsius
    document.getElementById("lblCelcius").innerText = "fahrenheit (&deg;C):"; // Ubah label lainnya jika diperlukan

    // Tampilkan penjelasan konversi dalam textarea
    document.getElementById("temperature-how-to-convert").value = `S(°C) = ( ${fahrenheitValue} - 32) * 5 / 9 = ${celsiusValue.toFixed(2)}`; 
}
