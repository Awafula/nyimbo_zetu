<template>
  <Header />
  <section class="bg-gray-50 dark:bg-gray-900">
    <div
      class="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0 md:h-screen h-full"
    >
      <a
        href="#"
        class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
      >
        <img
          class="w-8 h-8 mr-2"
          src="../../../assets/android-chrome-512x512.png"
          alt="logo"
        />
        Register
      </a>
      <div
        class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-xl md:max-w-2xl xl:p-0 dark:bg-gray-800 dark:border-gray-700"
      >
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1
            class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
          >
            Create an account
          </h1>
          <form class="space-y-6" @submit.prevent="handleSubmit">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Your email</label
                >
                <input
                  v-model="form.email"
                  type="email"
                  id="email"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@gmail.com"
                  required
                />
              </div>

              <div>
                <label
                  for="first_name"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >First Name</label
                >
                <input
                  v-model="form.first_name"
                  type="text"
                  id="first_name"
                  placeholder="Abel"
                  required
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>

              <div>
                <label
                  for="last_name"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Last Name</label
                >
                <input
                  v-model="form.last_name"
                  type="text"
                  id="last_name"
                  placeholder="Wafula"
                  required
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>

              <div>
                <label
                  for="address"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >City</label
                >
                <input
                  v-model="form.address"
                  type="text"
                  id="address"
                  placeholder="Nairobi"
                  required
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>

              <div>
                <label
                  for="phone_number"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Phone Number</label
                >
                <input
                  v-model="form.phone_number"
                  type="text"
                  id="phone_number"
                  placeholder="0799442123"
                  required
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>

              <div style="display: none">
                <input type="text" name="username" autocomplete="username" />
              </div>

              <div>
                <label
                  for="password"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Password</label
                >
                <input
                  v-model="form.password"
                  type="password"
                  id="password"
                  placeholder="••••••••"
                  autocomplete="current-password"
                  required
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>

              <div>
                <label
                  for="confirmPassword"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Confirm password</label
                >
                <input
                  v-model="form.confirmPassword"
                  type="password"
                  id="confirmPassword"
                  placeholder="••••••••"
                  required
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>

              <div class="flex items-start">
                <div class="flex items-center h-5">
                  <input
                    id="terms"
                    type="checkbox"
                    class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    required
                  />
                </div>
                <div class="ml-3 text-sm">
                  <label
                    for="terms"
                    class="font-light text-gray-500 dark:text-gray-300"
                  >
                    I accept the
                    <a
                      href="#"
                      class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                      >Terms and Conditions</a
                    >
                  </label>
                </div>
              </div>

              <button
                type="submit"
                :disabled="loading"
                class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                {{ loading ? "Creating account..." : "Create account" }}
              </button>

              <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account?
                <a
                  href="/login"
                  class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >Login here</a
                >
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  <Footer />
</template>
<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useMutation } from "@vue/apollo-composable";
import { REGISTER_USER } from "@/graphql/Mutations/createUser";
import Header from "@/components/header/index/Main.vue";
import Footer from "@/components/footer/index/Main.vue";

// Initialize router
const router = useRouter();
const loading = ref(false);

const form = ref({
  email: "",
  password: "",
  confirmPassword: "",
  first_name: "",
  last_name: "",
  phone_number: "",
  address: "",
});

// Use mutation without callbacks initially
const { mutate: registerUser } = useMutation(REGISTER_USER);

const handleSubmit = async () => {
  // 1. Validate password match
  if (form.value.password !== form.value.confirmPassword) {
    alert("⚠️ Passwords do not match!");
    return;
  }

  loading.value = true;

  try {
    // 2. Execute mutation and await response
    const result = await registerUser({
      input: {
        email: form.value.email,
        password: form.value.password,
        first_name: form.value.first_name,
        last_name: form.value.last_name,
        phone_number: form.value.phone_number,
        address: form.value.address,
      },
    });

    // 3. Check for errors in GraphQL response
    if (result.errors) {
      throw new Error(result.errors[0].message);
    }

    // 4. Access response data correctly
    const user = result.data?.createUser?.user;

    if (user) {
      alert("🎉 Account created successfully!");
      router.push("/login");
    } else {
      throw new Error("User data not returned from server");
    }
  } catch (error) {
    // 5. Handle all errors in one place
    console.error("Registration error:", error);
    alert(`❌ Registration failed: ${error.message}`);
  } finally {
    loading.value = false;
  }
};
</script>
