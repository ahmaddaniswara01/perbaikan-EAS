<template>
  <div>
    <h1>Form Registrasi Lomba</h1>
    <form @submit.prevent="submitForm">
      <label for="nama">Nama:</label>
      <input type="text" v-model="nama" required />

      <label for="email">Email:</label>
      <input type="email" v-model="email" required />

      <label for="asalSekolah">Asal Sekolah:</label>
      <input type="text" v-model="asalSekolah" required />

      <button type="submit">Daftar</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nama: "",
      email: "",
      asalSekolah: "",
    };
  },
  methods: {
    submitForm() {
      // Kirim data formulir ke server atau lakukan tindakan lain sesuai kebutuhan
      console.log("Data formulir:", this.nama, this.email, this.asalSekolah);
      // Reset formulir setelah submit
      this.nama = "";
      this.email = "";
      this.asalSekolah = "";
    },
  },
};
</script>

<style scoped>
.registration-form {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  background-color: #f4f4f4;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.form-container {
  display: grid;
  gap: 15px;
}

label {
  font-weight: bold;
}

input {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-top: 4px;
}

button {
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

button:hover {
  background-color: #45a049;
}
</style>
