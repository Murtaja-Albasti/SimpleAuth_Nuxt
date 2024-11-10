<template>

<div class=" items-center container block w-fit gap-3">
    <h2 class="text-2xl font-semibold mb-4">Register</h2>
    <form @submit.prevent="register">
    <label class="input input-bordered flex items-center gap-2">
        Name
        <input v-model="name" id="name" required type="text" class="grow" placeholder="Name" />
    </label>
    <label class="input input-bordered flex items-center gap-2">
        Email
        <input v-model="email" id="email" type="text" class="grow" placeholder="daisy@site.com" />
    </label>
    <label class="input input-bordered flex items-center gap-2">
        <input v-model="password" id="password" type="password" class="grow" placeholder="password" />
    </label>
    <button type="submit" class="btn btn-primary ">send</button>
</form>
<p v-if="message" :class="{ 'text-green-500': success, 'text-red-500': !success }">{{ message }}</p>
</div>
</template>


<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';

const name = ref('');
const email = ref('');
const password = ref('');
const message = ref('');
const success = ref(false);


const register = async () => {
  try {
    const response = await axios.post('/api/register', { name:name.value, email: email.value, password: password.value });
    if (response.data.success) {
      message.value = response.data.message;
      email.value = '';
      password.value = '';
      success.value = true
    } else {
      message.value = response.data.message;
    }
  } catch (error) {
    message.value = 'Registration failed. Please try again.';
  }
};
</script>