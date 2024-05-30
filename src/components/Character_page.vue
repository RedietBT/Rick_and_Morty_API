<script setup>
 import gql from 'graphql-tag'
  import { useQuery } from '@vue/apollo-composable'
  const CHARACTERS_QUERY = gql`
  query Characters {
      characters {
        results {
          id
          name
          image
          status
          gender
          species
          episode{
            id
            name
            episode
            air_date
            created
          }
          location{
            id
            name
          }
        }
      }
    }
  `
  const { result, loading, error } = useQuery(CHARACTERS_QUERY);
   
  console.log(result.value)
</script>

<template>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rick and Morty Movie</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
</head>
  <div class="bg-gray-900 text-gray-400 min-h-screen flex flex-col justify-between">
    <header class="bg-gray-800 p-4 text-center">
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
      <h1 class="text-4xl font-bold mt-[100px]">Rick and Morty: The Movie</h1>
      <h2 class="text-3xl font-bold mt-3">Characters</h2>
    </header>
    <main class="p-4">
      <div class="container mx-auto p-4">
        <p v-if="error" class="text-red-500 text-lg">Something went wrong...</p>
        <p v-if="loading" class="text-blue-500 text-lg">Loading...</p>
        <div v-else class="space-y-6">
          <div v-for="character in result.characters.results" :key="character.id" class="bg-gray-800 shadow-md rounded-lg overflow-hidden transform transition-transform hover:scale-105 w-full flex flex-col md:flex-row mb-6">
            <div class="p-6 md:w-1/3 flex flex-row items-center">
              <RouterLink :to="'/characters/' + character.id">
              <img :src="character.image" alt="Character Image" class="w-45 h-45 object-cover rounded-full mr-6">
            </RouterLink>
              <div>
                <h3 class="font-semibold text-3xl text-blue-500">{{ character.name }}</h3><br>
                <span class="font-semibold text-2xl">{{ character.status }}</span><br>
                <span class="font-semibold text-2xl">{{ character.species }}</span><br>
                <span class="font-semibold text-2xl">{{ character.gender }}</span><br>
              </div>
            </div>
            <div class="p-6 md:w-2/3">
              <div class="mb-6">
                <h4 class="text-lg font-medium mb-2">Location:</h4>
                <RouterLink :to="'/locations/' + character.location.id">
                <div class="bg-gray-700 p-4 rounded-lg text-sm">
                  <span class="font-semibold">{{ character.location.name }}</span>
                </div>
              </RouterLink>
              </div>
              <div>
                <h4 class="text-lg font-medium mb-2">Episodes:</h4>
                <div class="flex space-x-4 overflow-x-auto">
                  <div v-for="ep in character.episode" :key="ep.id" class="min-w-max bg-gray-700 p-4 rounded-lg text-sm">
                    <RouterLink :to="'/episodes/' + ep.id">
                    <div>
                    <span class="font-semibold">{{ ep.name }}</span><br>
                    <span class="font-semibold">{{ ep.episode }}</span><br>
                    <span class="font-semibold">({{ ep.air_date }})</span><br>
                    <span class="font-semibold">({{ ep.created }})</span><br>
                  </div>
                  </RouterLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <footer class="bg-gray-800 p-4 text-center">
    <p>&copy; 2024 Rick and Morty: The Movie. All rights reserved. 
      <a target="_blank" href="https://www.figma.com/design/GVFKwGgsVCxHkK2Ox5Bwj0/Rick-and-Morty?node-id=102-2&t=0jwXQHSZ8DJILdMj-0"><i class="fa-brands fa-figma"></i></a> 
      <a target="_blank" href="https://github.com/RedietBT"><i class="fa-brands fa-github ml-2"></i></a>
    </p>
  </footer>
  </div>
</template>

<style scoped>

</style>