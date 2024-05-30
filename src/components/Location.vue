<script setup>
import gql from 'graphql-tag'
  import { useQuery } from '@vue/apollo-composable'
  const LOCATION_QUERY = gql`
  query Location {
          locations {
            results {
              id
              name
              type
              dimension
              created
              residents{
                id
                name
                status
                species
                gender
                image
      }
    }
  }
 }
  `
  const { result, loading, error } = useQuery(LOCATION_QUERY);
   
  console.log(result.value)
</script>


<template>
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rick and Morty Movie</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
</head>
<body>
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
                <p v-if="error" class="text-red-500 text-lg">Something went wrong...</p>
                <p v-if="loading" class="text-blue-500 text-lg">Loading...</p>
                <div v-else class="space-y-6">
                    <div v-for="loc in result.locations.results" :key="loc.id" class="bg-gray-800 shadow-md rounded-lg overflow-hidden transform transition-transform hover:scale-105 w-full flex flex-col md:flex-row mb-6">
                        <div class="p-6 md:w-1/3 flex-shrink-0">
                          <RouterLink :to="'/locations/' + loc.id">
                            <h3 class="font-semibold text-4xl text-blue-500">{{ loc.name }}</h3><br><br>
                          </RouterLink>
                            <span class="font-semibold text-2xl">{{ loc.type }}</span><br><br>
                            <span class="font-semibold text-2xl">{{ loc.dimension }}</span><br><br>
                            <span class="font-semibold text-2xl">({{ loc.created }})</span><br><br>
                        </div>
                        <div class="p-6 md:w-2/3 flex-shrink-0">
                            <h4 class="text-lg font-medium mb-2">Characters:</h4>
                            <div class="flex space-x-4 overflow-x-auto">
                                <div v-for="res in loc.residents" :key="res.id" class="min-w-max bg-gray-700 p-4 rounded-lg text-sm flex-shrink-0">
                                  <RouterLink :to="'/characters/' + res.id">
                                    <img :src="res.image" alt="Character Image" class="w-20 h-20 object-cover rounded-full border-4 border-blue-500/100">
                                    <div class="p-4">
                                        <h3 class="text-xl font-semibold mb-2 text-blue-500">{{ res.name }}</h3>
                                        <span class="text-base font-semibold mb-2">{{ res.status }}</span><br>
                                        <span class="text-base font-semibold mb-2">{{ res.species }}</span><br>
                                        <span class="text-base font-semibold mb-2">{{ res.gender }}</span><br>
                                    </div>
                                  </RouterLink>
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
</body>
</html>
</template>