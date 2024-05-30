<script setup>
import { useQuery } from '@vue/apollo-composable';
import { gql } from 'graphql-tag';
import { useRoute } from "vue-router";
const route = useRoute();
const id = route.params.id;

const LOCATION_BY_ID_QUERY = gql`
  query {
    location(id: ${id}) {
      id
      name
      type
      dimension
      created
      residents {
        id
        name
        status
        species
        gender
        image
      }
    }
  }
`;

const { result, loading: locationsLoading, error: locationsError } = useQuery(LOCATION_BY_ID_QUERY);
</script>

<template>
    <div class="bg-gray-900 text-gray-400 min-h-screen flex flex-col justify-between">
      <nav class="fixed top-0 left-0 w-full z-50 flex justify-between items-center bg-black border border-blue-700 p-4 h-25">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1BT3-8XhbPuOQcsWDyzXdKlH-1Jum33eMjA&s" class="w-[150px]">
        <div class="flex space-x-4">
          <a target="_blank" href="https://www.figma.com/design/GVFKwGgsVCxHkK2Ox5Bwj0/Rick-and-Morty?node-id=102-2&t=0jwXQHSZ8DJILdMj-0"><button class="rounded-xl border border-blue-700 text-blue-700 p-2 hover:scale-110 bg-white"><i class="fa-brands fa-figma"></i></button></a>
          <a target="_blank" href="https://github.com/RedietBT"><button class="rounded-xl border border-blue-700 text-blue-700 p-2 hover:scale-110 bg-white"><i class="fa-brands fa-github"></i></button></a>
          <RouterLink to="/">
            <button class="rounded-xl border border-blue-700 text-blue-700 p-2 hover:scale-110">Home</button>
          </RouterLink>
          <RouterLink to="/episode/">
            <button class="rounded-xl border border-blue-700 text-blue-700 p-2 hover:scale-110">Episodes</button>
          </RouterLink>
          <RouterLink to="/character/">
            <button class="rounded-xl border border-blue-700 text-blue-700 p-2 hover:scale-110">Characters</button>
          </RouterLink>
          <RouterLink to="/location/">
            <button class="rounded-xl border border-blue-700 text-blue-700 p-2 hover:scale-110">Locations</button>
          </RouterLink>
        </div>
      </nav>
      <header class="bg-gray-800 p-4 text-center">
        <h1 class="text-4xl font-bold mt-[100px]">Rick and Morty: The Movie</h1>
        <h2 class="text-3xl font-bold mt-3">Location</h2>
      </header>
      <main class="p-4">
        <div class="container mx-auto p-4">
          <p v-if="locationsError" class="text-red-500 text-lg">Something went wrong...</p>
          <p v-if="locationsLoading" class="text-blue-500 text-lg">Loading...</p>
          <div v-else-if="result">
            <div class="flex flex-col md:flex-row mb-6">
              <div class="flex-shrink-0 p-6">
                <h3 class="text-4xl font-semibold text-blue-500">{{ result.location.name }}</h3>
                <p class="text-gray-400 text-2xl mt-2">Type: {{ result.location.type }}</p>
                <p class="text-gray-400 text-2xl">Dimension: {{ result.location.dimension }}</p>
                <p class="text-gray-400 text-2xl">Created: {{ result.location.created }}</p>
              </div>
              <div class="p-6 md:w-2/3 flex-shrink-0">
                <h4 class="text-2xl font-medium mb-4">Residents:</h4>
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-6">
                  <div v-for="res in result.location.residents" :key="res.id" class="bg-gray-800 shadow-md rounded-lg overflow-hidden transform transition-transform hover:scale-110 w-70 p-4">
                    <RouterLink :to="'/characters/' + res.id">
                    <img :src="res.image" alt="Character Image" class="w-20 h-20 object-cover rounded-full border-4 border-blue-500/100">
                    </RouterLink>
                    <div class="p-4">
                      <h3 class="text-xl font-semibold mb-2 text-blue-500">{{ res.name }}</h3>
                      <p class="text-gray-400 text-base">Status: {{ res.status }}</p>
                      <p class="text-gray-400 text-base">Species: {{ res.species }}</p>
                      <p class="text-gray-400 text-base">Gender: {{ res.gender }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer class="bg-gray-800 p-4 text-center">
        <p>&copy; 2024 Rick and Morty: The Movie. All rights reserved.</p>
      </footer>
    </div>
  </template>
  